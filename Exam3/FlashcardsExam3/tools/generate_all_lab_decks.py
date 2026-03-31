import json
from pathlib import Path
import shutil

ROOT = Path('/Users/surplus/Documents/GitHub/Lab-Conversion')
APP_PUBLIC = ROOT / 'FlashCardApp2' / 'public'

LABS = [
    {
        'name': 'Skull Bones',
        'slug': 'skull_bones',
        'lab_json': ROOT / 'Exam1' / 'SkullLab26-master' / 'public' / 'lab_data.json',
        'images_dir': ROOT / 'Exam1' / 'SkullLab26-master' / 'public' / 'Images',
        'target_images_dir': APP_PUBLIC / 'DeckImages' / 'SkullBones',
    },
    {
        'name': 'Arm and Trunk Bones',
        'slug': 'arm_trunk_bones',
        'lab_json': ROOT / 'Exam1' / 'TrunkArmLab' / 'public' / 'lab_data.json',
        'images_dir': ROOT / 'Exam1' / 'TrunkArmLab' / 'public' / 'Images',
        'target_images_dir': APP_PUBLIC / 'DeckImages' / 'ArmTrunkBones',
    },
    {
        'name': 'Leg Bones and Joints',
        'slug': 'leg_bones_joints',
        'lab_json': ROOT / 'Exam1' / 'LegJointsLab' / 'public' / 'lab_data.json',
        'images_dir': ROOT / 'Exam1' / 'LegJointsLab' / 'public' / 'Images',
        'target_images_dir': APP_PUBLIC / 'DeckImages' / 'LegBonesJoints',
    },
    {
        'name': 'Head Neck Trunk Muscles',
        'slug': 'head_neck_trunk_muscles',
        'lab_json': ROOT / 'Exam2' / 'HeadNeckTrunkLab' / 'public' / 'lab_data.json',
        'images_dir': ROOT / 'Exam2' / 'HeadNeckTrunkLab' / 'public' / 'Images',
        'target_images_dir': APP_PUBLIC / 'DeckImages' / 'HeadNeckTrunkMuscles',
    },
    {
        'name': 'Arm Muscles',
        'slug': 'arm_muscles',
        'lab_json': ROOT / 'Exam2' / 'ArmMusclesLab' / 'public' / 'lab_data.json',
        'images_dir': ROOT / 'Exam2' / 'ArmMusclesLab' / 'public' / 'Images',
        'target_images_dir': APP_PUBLIC / 'DeckImages' / 'ArmMuscles',
    },
    {
        'name': 'Leg Muscles',
        'slug': 'leg_muscles',
        'lab_json': ROOT / 'Exam2' / 'LegMusclesLab' / 'public' / 'lab_data.json',
        'images_dir': ROOT / 'Exam2' / 'LegMusclesLab' / 'public' / 'Images',
        'target_images_dir': APP_PUBLIC / 'DeckImages' / 'LegMuscles',
    },
]


def collect_cards(node_list, cards):
    for item in node_list or []:
        answer = (item.get('label') or '').strip()
        for btn in item.get('buttons') or []:
            if not isinstance(btn, dict):
                continue
            img = btn.get('img')
            if not isinstance(img, str) or not img.strip():
                continue
            cards.append((answer, img.strip()))
        collect_cards(item.get('children') or [], cards)


def normalize_img_path(img_rel: str, target_folder: str) -> str:
    p = img_rel.replace('\\', '/').strip()
    if p.lower().startswith('images/'):
        p = p.split('/', 1)[1]
    return f'./DeckImages/{target_folder}/{p}'


def build_deck(lab_config):
    data = json.loads(lab_config['lab_json'].read_text())
    raw_cards = []
    for section in data.get('sections', []):
        collect_cards(section.get('data') or [], raw_cards)

    seen = set()
    deck = {}
    idx = 1

    for answer, img_rel in raw_cards:
        if not answer:
            continue
        key = (answer.lower(), img_rel.lower())
        if key in seen:
            continue
        seen.add(key)

        deck[str(idx)] = {
            'id': idx,
            'question': 'What is this?',
            'answer': answer,
            'img_src': normalize_img_path(img_rel, lab_config['target_images_dir'].name),
        }
        idx += 1

    return deck


def copy_images(src: Path, dst: Path):
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst)


def main():
    (APP_PUBLIC / 'DeckImages').mkdir(parents=True, exist_ok=True)

    for lab in LABS:
        copy_images(lab['images_dir'], lab['target_images_dir'])
        deck = build_deck(lab)
        out = APP_PUBLIC / f"{lab['slug']}_questions.json"
        out.write_text(json.dumps(deck, indent=2))
        print(f"{lab['name']}: {len(deck)} cards -> {out.name}")


if __name__ == '__main__':
    main()
