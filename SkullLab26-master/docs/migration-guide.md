# Lab Migration Guide

Step-by-step instructions for converting a lab from the old jQuery/XML format into this React template.

---

## Overview

The old format uses:

- A single XML file (e.g., `Skull.xml`) describing the navigation tree and content links
- A `player.html` entry point with a jQuery-driven 3-column layout
- `Images/`, `Sounds/`, and `Pages/` folders for media

The new format uses:

- `public/lab_data.json` — the converted, human-editable content config
- `public/Images/`, `public/Sounds/`, `public/Pages/` — same media, different location
- This React app as the UI shell

The converter script (`tools/xml-to-json.js`) handles the XML → JSON transformation. After the initial conversion you edit `lab_data.json` directly — you never need to run the converter again unless starting a brand-new lab from scratch.

---

## Prerequisites

- Node.js v16+
- npm v8+
- Dependencies installed: `npm install` (from `SkullLab26-master/`)

---

## Step 1 — Copy Media Assets

Copy the old lab's media folders into `public/`. If files with the same names already exist, overwrite them.

```bash
cp -r path/to/OldLab/Images  public/Images
cp -r path/to/OldLab/Sounds  public/Sounds
cp -r path/to/OldLab/Pages   public/Pages
```

If the old lab has a `powerpoint/` or other embedded content folder, copy those too:

```bash
cp -r path/to/OldLab/powerpoint  public/powerpoint
```

---

## Step 2 — Run the XML-to-JSON Converter

```bash
node tools/xml-to-json.js path/to/OldLab/OldLab.xml public/lab_data.json
```

The script reads the XML file, transforms it into the `lab_data.json` schema, and writes the output. It prints a summary of how many items were converted.

**The converter handles:**

- Hierarchical `<item>` / `<subitem>` / `<subsubitem>` nesting → `children` arrays
- `<button load="..." name="...">` → `buttons[{ label, img }]`
- `@sound` attributes → `"sound"` field
- `@type="link"` → `"type": "img"` leaf node
- `@type="expand"` → parent node with children
- `@type="xlink"` → `"type": "html"` external link node
- `@type="nolink"` → display-only heading node (no type, no load)
- `<title intro="...">` → top-level `"title"` and first section intro item
- Sequential integer ID assignment

**The converter does NOT handle:**

- `layer=` attributes (overlay system — not supported in the new app)
- `type="cad"` buttons (cadaver mode — not supported in the new app)

---

## Step 3 — Review and Edit `lab_data.json`

Start the dev server and check every section of the converted lab:

```bash
npm start
```

Open `http://localhost:3000` and click through the menu systematically. Common things to fix after conversion:

| Issue | Fix |
|---|---|
| Wrong image path | Update `"img"` in the relevant button |
| Audio not playing | Verify the `.wav` file is in `public/Sounds/` and the path matches |
| Lecture page blank | Verify the `.html` file is in `public/Pages/` and `"load"` path is correct |
| Video not loading | Confirm the Kaltura URL in `"video_link"` is the full embed URL |
| Item missing from menu | Add it manually to the appropriate `children` array in the JSON |
| Wrong section grouping | Move the node to the correct section's `data` array |

See [json-schema.md](json-schema.md) for the full field reference.

---

## Step 4 — Update the Lab Title

The converter sets `"title"` from the XML `<title>` element. Verify it looks correct at the top of `lab_data.json`:

```json
{
  "title": "My Lab Name",
  ...
}
```

---

## Step 5 — Build for Deployment

```bash
npm run build:app
```

This produces a `build/` folder. All asset paths are relative (required for OpenEquella subdirectory hosting).

---

## Step 6 — Deploy to OpenEquella

Upload the **entire contents** of the `build/` folder to your OpenEquella microsite. The entry point is `index.html` at the root of the upload.

---

## Making Changes After Deployment

1. Edit `public/lab_data.json` directly (add/remove/rename items, fix paths, etc.)
2. Run `npm run build:app`
3. Upload the new `build/` folder to OpenEquella (overwrite the previous upload)

You do **not** need to re-run the converter or touch any React source code for content-only changes.

---

## Troubleshooting

**Images not loading after build**

Ensure image paths in `lab_data.json` do not start with `/`. Use `"Images/filename.jpg"` not `"/Images/filename.jpg"`.

**Audio button does nothing**

Check the browser console for a 404. The `.wav` filename is case-sensitive on Linux/macOS servers — verify the case matches exactly.

**Tree items missing or duplicated**

Check for duplicate `id` values in `lab_data.json`. Every node across all sections must have a unique integer ID.

**White screen after upload to OpenEquella**

Confirm `"homepage": "./"` is set in `package.json` (it should be). If the app is nested deeper than one directory level in OpenEquella, you may need to adjust this value.

**Converter exits with an error**

- Verify the XML file path is correct
- Check that the XML file is well-formed (no unclosed tags)
- Look at the error message — the converter reports which element caused the problem
