# Anatomy Lab – React Template

A reusable React application template for BYU-Idaho interactive anatomy labs. Each lab is driven entirely by a single `lab_data.json` file and a set of media assets. To create a new lab: convert the old XML config with the included tool, copy the media assets, and upload the `build/` folder to OpenEquella.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Development Setup](#development-setup)
3. [Project Structure](#project-structure)
4. [Editing `lab_data.json`](#editing-lab_datajson)
5. [Migrating a New Lab from the Old Format](#migrating-a-new-lab-from-the-old-format)
6. [Building and Deploying](#building-and-deploying)
7. [Running Tests](#running-tests)

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm v8 or higher

---

## Development Setup

```bash
cd SkullLab26-master
npm install
npm start
```

The app opens at `http://localhost:3000`. Changes to source files hot-reload automatically.

---

## Project Structure

```text
SkullLab26-master/
├── public/
│   ├── lab_data.json          # Master content config — edit this for content changes
│   ├── lab_data.schema.json   # JSON Schema for VS Code validation and autocomplete
│   ├── Images/                # Anatomical images (.jpg, .png, .gif)
│   ├── Sounds/                # Pronunciation audio files (.wav)
│   └── Pages/                 # Embedded HTML lecture pages
├── src/
│   ├── App.js                 # Root component — reads lab_data.json, wires layout
│   ├── context/
│   │   └── SelectionContext.js  # Global state for the currently selected menu item
│   └── lib/
│       ├── Header.js          # Title bar (title sourced from lab_data.json)
│       ├── SectionMenu.js     # Responsive sidebar (desktop fixed + mobile slide-in)
│       ├── SectionTreeView.js # MUI RichTreeView wrapper for one section
│       ├── SectionTreeItem.js # Individual styled tree node
│       ├── ContentWindow.js   # Routes to ImgWindow, VideoPlayer, or Lecture
│       ├── ImgWindow.js       # Image viewer with view-angle buttons and audio
│       ├── VideoPlayer.js     # Kaltura video iframe embed
│       └── Lecture.js         # HTML page iframe embed
├── tools/
│   └── xml-to-json.js         # CLI converter: old XML format → lab_data.json
├── docs/
│   ├── json-schema.md         # Full lab_data.json field reference
│   └── migration-guide.md     # Step-by-step guide to migrate a new lab
└── package.json
```

---

## Editing `lab_data.json`

`public/lab_data.json` is the single source of truth for all lab content. You can edit it at any time without touching any code. The converter tool (`tools/xml-to-json.js`) is only used for the **initial migration** — after that, all ongoing edits go directly in the JSON.

### VS Code autocomplete and validation

Add the `$schema` line at the top of `lab_data.json` to enable autocomplete and inline validation in VS Code:

```json
{
  "$schema": "./lab_data.schema.json",
  "title": "Skull Lab",
  "sections": [ ... ]
}
```

See [docs/json-schema.md](docs/json-schema.md) for the complete field reference.

### Common edits

**Change the lab title**
Update the top-level `"title"` field.

**Add a new section** (e.g. Week 3)

Append an object to the `"sections"` array:

```json
{ "id": "week3", "title": "Week 4.3: Review", "data": [ ... ] }
```

**Add a new bone or structure**
Add a child node to the appropriate parent's `"children"` array. Every node needs a unique integer `"id"`.

**Change an image path**
Update the `"img"` string in the relevant button. Paths are relative to `public/` (e.g., `"Images/frontal-ant.jpg"`).

**Add audio pronunciation**
Set `"sound": "Sounds/myterm.wav"` on any item. The `.wav` file must be in `public/Sounds/`.

**Add a Kaltura video**
Set `"type": "video"` and add `"child_items": [{ "video_link": "https://..." }]`.

**Add an HTML lecture page**
Place the `.html` file in `public/Pages/`, then set `"load": "Pages/mypage.html"` on the item (leave `"type"` unset or set to `"html"`).

> **ID uniqueness**: Every node must have a unique `"id"` integer across the entire file. Duplicate IDs cause incorrect tree selection behavior.

---

## Migrating a New Lab from the Old Format

See [docs/migration-guide.md](docs/migration-guide.md) for the full walkthrough. Quick summary:

```bash
# 1. Copy old lab media into public/
cp -r OldLab/Images  public/Images
cp -r OldLab/Sounds  public/Sounds
cp -r OldLab/Pages   public/Pages

# 2. Run the XML-to-JSON converter
node tools/xml-to-json.js ../OldLab/OldLab.xml public/lab_data.json

# 3. Start the dev server and review the result
npm start

# 4. Edit public/lab_data.json as needed to correct any issues

# 5. Build for deployment
npm run build:app
```

---

## Building and Deploying

```bash
npm run build:app
```

This runs `react-scripts build` and produces a `build/` folder with all static assets using relative paths (safe for OpenEquella subdirectory hosting).

**To deploy:** upload the entire contents of the `build/` folder to your OpenEquella microsite. No server-side configuration is required.

> Do **not** use `npm run build` for deployment — that command produces a Rollup library bundle (`dist/`), not a deployable web app.

---

## Running Tests

```bash
npm test                          # Interactive watch mode
npm test -- --watchAll=false      # Single run (for CI)
npm run test:coverage             # With coverage report
```

Tests are located in:

- `src/__tests__/` — React component tests
- `tools/__tests__/` — XML-to-JSON converter tests
