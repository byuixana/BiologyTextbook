const fs = require('fs');
const path = require('path');

const labs = [
  'Exam3/ArmMusclesLab',
  'Exam3/HeadNeckTrunkLab',
  'Exam3/LegMusclesLab'
];

function extractIframeSrc(html) {
  const match = html.match(/<iframe[^>]*\ssrc\s*=\s*"([^"]+)"/i);
  return match ? match[1] : null;
}

function walk(items, fn) {
  if (!Array.isArray(items)) return;
  for (const item of items) {
    fn(item);
    if (Array.isArray(item.children)) walk(item.children, fn);
  }
}

for (const lab of labs) {
  const publicDir = path.join(process.cwd(), lab, 'public');
  const buildDir = path.join(process.cwd(), lab, 'build');
  const publicLabDataPath = path.join(publicDir, 'lab_data.json');

  const data = JSON.parse(fs.readFileSync(publicLabDataPath, 'utf8'));
  let convertedCount = 0;

  for (const section of data.sections || []) {
    walk(section.data, (item) => {
      if (!item || typeof item !== 'object') return;
      if (typeof item.load !== 'string') return;
      if (!item.load.startsWith('Pages/')) return;
      if (!/video/i.test(item.load)) return;

      const pagePath = path.join(publicDir, item.load);
      if (!fs.existsSync(pagePath)) return;

      const html = fs.readFileSync(pagePath, 'utf8');
      const videoSrc = extractIframeSrc(html);
      if (!videoSrc) return;

      item.type = 'video';
      item.child_items = [{ video_link: videoSrc }];
      convertedCount += 1;
    });
  }

  fs.writeFileSync(publicLabDataPath, JSON.stringify(data, null, 2) + '\n', 'utf8');

  const buildLabDataPath = path.join(buildDir, 'lab_data.json');
  if (fs.existsSync(buildLabDataPath)) {
    fs.copyFileSync(publicLabDataPath, buildLabDataPath);
  }

  console.log(`${lab}: converted ${convertedCount} item(s)`);
}
