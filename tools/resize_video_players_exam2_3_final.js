const fs = require('fs');
const path = require('path');

const files = [
  'Exam2/LegJointsLab/src/lib/VideoPlayer.js',
  'Exam2/TrunkArmLab/src/lib/VideoPlayer.js',
  'Exam2/SkullLab/src/lib/VideoPlayer.js',
  'Exam3/HeadNeckTrunkLab/src/lib/VideoPlayer.js',
  'Exam3/ArmMusclesLab/src/lib/VideoPlayer.js',
  'Exam3/LegMusclesLab/src/lib/VideoPlayer.js',
  'ExamFinal/NervousSystemLab/src/lib/VideoPlayer.js',
  'ExamFinal/SpecialSensesLab/src/lib/VideoPlayer.js'
];

for (const rel of files) {
  const filePath = path.join(process.cwd(), rel);
  if (!fs.existsSync(filePath)) {
    console.log(`${rel}: skipped (missing)`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const before = content;

  content = content.replace(
    /className="flex justify-center items-center fit-content\s*\n\s*bg-black\s*\n\s*h-screen pb-24"/g,
    'className="flex justify-center items-center bg-black h-screen px-6 pb-16"'
  );

  content = content.replace(
    /src=\{videoSource\}\s+width="608" height="402"/g,
    'src={videoSource}'
  );

  content = content.replace(
    /style=\{\{ border: 'none' \}\}/g,
    "style={{ border: 'none', width: 'min(90vw, 1200px)', height: 'min(68vw, 760px)', maxHeight: '78vh' }}"
  );

  content = content.replace(/title="Muscles 11 - Lower Leg"/g, 'title="Lab Video Player"');

  if (content !== before) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`${rel}: updated`);
  } else {
    console.log(`${rel}: no change needed`);
  }
}
