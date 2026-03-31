import json
import shutil
from pathlib import Path

BASE = Path('/Users/surplus/Documents/GitHub/Lab-Conversion/Exam3')

LABS = [
    {
        'folder': 'NervousSystemLab',
        'title': 'Nervous System',
        'package': 'nervoussystemlab',
        'deck_slug': 'nervous_system',
        'deck_name': 'Nervous System',
        'images_subdir': 'NervousSystem',
    },
    {
        'folder': 'SpecialSensesLab',
        'title': 'Special Senses',
        'package': 'specialsenseslab',
        'deck_slug': 'special_senses',
        'deck_name': 'Special Senses',
        'images_subdir': 'SpecialSenses',
    },
]

FLASH_DIR = BASE / 'FlashcardsExam3'
FLASH_PUBLIC = FLASH_DIR / 'public'


def normalize_lab_json(lab_json_path: Path, title: str):
    data = json.loads(lab_json_path.read_text())
    data['title'] = title

    def walk(items):
        for it in items or []:
            has_action = bool(it.get('buttons')) or bool(it.get('load')) or bool(it.get('child_items'))
            has_page = any(
                isinstance(ch, dict) and isinstance(ch.get('page'), str) and ch.get('page').strip()
                for ch in (it.get('child_items') or [])
            )
            if has_page or not has_action:
                it['type'] = 'none'
            if it.get('children'):
                walk(it['children'])

    for section in data.get('sections', []):
        walk(section.get('data', []))

    lab_json_path.write_text(json.dumps(data, indent=2))


def set_package_name(package_json_path: Path, name: str):
    pkg = json.loads(package_json_path.read_text())
    pkg['name'] = name
    package_json_path.write_text(json.dumps(pkg, indent=2) + '\n')


def collect_cards(items, cards):
    for it in items or []:
        answer = (it.get('label') or '').strip()
        for btn in it.get('buttons') or []:
            if not isinstance(btn, dict):
                continue
            img = btn.get('img')
            if isinstance(img, str) and img.strip() and answer:
                cards.append((answer, img.strip()))
        collect_cards(it.get('children') or [], cards)


def normalize_img_path(raw_img: str, target_subdir: str):
    p = raw_img.replace('\\', '/').strip()
    if p.lower().startswith('images/'):
        p = p.split('/', 1)[1]
    return f'./DeckImages/{target_subdir}/{p}'


def generate_deck(lab_json_path: Path, target_subdir: str):
    data = json.loads(lab_json_path.read_text())
    raw_cards = []
    for section in data.get('sections', []):
        collect_cards(section.get('data', []), raw_cards)

    seen = set()
    deck = {}
    idx = 1
    for answer, img in raw_cards:
        key = (answer.lower(), img.lower())
        if key in seen:
            continue
        seen.add(key)
        deck[str(idx)] = {
            'id': idx,
            'question': 'What is this?',
            'answer': answer,
            'img_src': normalize_img_path(img, target_subdir),
        }
        idx += 1
    return deck


def copy_images(src: Path, dst: Path):
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst)


def main():
    # Normalize labs and set package names
    for lab in LABS:
        lab_dir = BASE / lab['folder']
        normalize_lab_json(lab_dir / 'public' / 'lab_data.json', lab['title'])
        set_package_name(lab_dir / 'package.json', lab['package'])

    set_package_name(FLASH_DIR / 'package.json', 'flashcardsexam3')

    # Generate decks + copy images
    deck_images_dir = FLASH_PUBLIC / 'DeckImages'
    deck_images_dir.mkdir(parents=True, exist_ok=True)

    for lab in LABS:
        lab_dir = BASE / lab['folder']
        image_src = lab_dir / 'public' / 'Images'
        image_dst = deck_images_dir / lab['images_subdir']
        copy_images(image_src, image_dst)

        deck = generate_deck(lab_dir / 'public' / 'lab_data.json', lab['images_subdir'])
        out = FLASH_PUBLIC / f"{lab['deck_slug']}_questions.json"
        out.write_text(json.dumps(deck, indent=2))
        print(f"{lab['deck_name']}: {len(deck)} cards")

    # Remove old Exam2 deck files and image folders if present
    for old_file in [
        FLASH_PUBLIC / 'head_neck_trunk_muscles_questions.json',
        FLASH_PUBLIC / 'arm_muscles_questions.json',
        FLASH_PUBLIC / 'leg_muscles_questions.json',
    ]:
        if old_file.exists():
            old_file.unlink()

    for old_dir in [
        deck_images_dir / 'HeadNeckTrunkMuscles',
        deck_images_dir / 'ArmMuscles',
        deck_images_dir / 'LegMuscles',
    ]:
        if old_dir.exists():
            shutil.rmtree(old_dir)


if __name__ == '__main__':
    main()
