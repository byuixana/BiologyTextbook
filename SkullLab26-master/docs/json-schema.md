# `lab_data.json` Field Reference

This document describes every field in `public/lab_data.json`. For VS Code autocomplete, ensure `"$schema": "./lab_data.schema.json"` is the first line of your JSON file.

---

## Top-Level Structure

```json
{
  "$schema": "./lab_data.schema.json",
  "title": "Skull Lab",
  "sections": [ <Section>, ... ]
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `$schema` | string | No | Path to JSON Schema file. Enables VS Code autocomplete. |
| `title` | string | Yes | Displayed in the app header bar. |
| `sections` | array | Yes | One or more Section objects defining the sidebar navigation. |

---

## Section Object

```json
{
  "id": "week1",
  "title": "Week 4.1: Skull Bone Anatomy",
  "data": [ <TreeNode>, ... ]
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Unique key for this section. Used internally — not shown in the UI. |
| `title` | string | Yes | Heading displayed above this section's tree in the sidebar. |
| `data` | array | Yes | Top-level tree nodes for this section. |

---

## TreeNode Object

Every item in a `data` array or `children` array is a TreeNode. The `type` field controls what the content area displays when the item is clicked.

```json
{
  "id": 42,
  "label": "Frontal Bone",
  "type": "img",
  "sound": "Sounds/frontalbone.wav",
  "buttons": [ <Button>, ... ],
  "children": [ <TreeNode>, ... ]
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | **Must be unique across the entire file.** Used by the tree view component for selection tracking. |
| `label` | string | Yes | Text displayed in the sidebar menu. |
| `type` | string | No | Content type. See [Content Types](#content-types) below. |
| `sound` | string | No | Path to a `.wav` file relative to `public/` (e.g., `"Sounds/frontalbone.wav"`). Plays when the speaker button is clicked. Only used when `type` is `"img"`. |
| `buttons` | array | No | View-angle buttons for the image viewer. Required when `type` is `"img"`. |
| `load` | string | No | Path to an HTML file relative to `public/` (e.g., `"Pages/intro.html"`). Used when `type` is absent or `"html"` (iframe load). |
| `child_items` | array | No | Used for `"video"` and external `"html"` types. See below. |
| `children` | array | No | Nested child TreeNodes displayed as sub-items in the sidebar tree. |

---

## Content Types

The `type` field determines which component renders in the content area.

| `type` value | Component | Required fields |
|---|---|---|
| `"img"` | `ImgWindow` — image viewer with buttons and audio | `buttons` |
| `"video"` | `VideoPlayer` — Kaltura iframe embed | `child_items[0].video_link` |
| `"html"` | Opens in a new browser tab | `child_items[0].page` |
| *(absent)* | `Lecture` — iframe loading an HTML page | `load` |
| `"none"` | Item is not clickable - no component for it | 

---

## Button Object

Used in `buttons` arrays on `"img"` type nodes.

```json
{
  "label": "Anterior",
  "img": "Images/frontal-ant.jpg"
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | string | Yes | Text shown on the button. |
| `img` | string | Yes | Path to the image file relative to `public/` (e.g., `"Images/frontal-ant.jpg"`). |

---

## `child_items` Object

Used for `"video"` and external `"html"` type nodes.

**For video:**

```json
{
  "video_link": "https://cdnapisec.kaltura.com/..."
}
```

**For external HTML (opens in new tab):**

```json
{
  "page": "https://example.com/resource"
}
```

| Field | Type | Description |
|---|---|---|
| `video_link` | string | Full Kaltura embed URL. |
| `page` | string | Full URL to open in a new browser tab. |

---

## Complete Example

```json
{
  "$schema": "./lab_data.schema.json",
  "title": "Skull Lab",
  "sections": [
    {
      "id": "week1",
      "title": "Week 4.1: Skull Bone Anatomy",
      "data": [
        {
          "id": 0,
          "label": "WEEK 4.1 - SKULL BONES",
          "type": "none",
          "children": []
        },
        {
          "id": 1,
          "label": "4.1.1 - Introduction",
          "load": "Pages/4_1_1_intro_bone_anat.html",
          "children": []
        },
        {
          "id": 2,
          "label": "Frontal Bone",
          "type": "img",
          "sound": "Sounds/frontalbone.wav",
          "buttons": [
            { "label": "Anterior", "img": "Images/frontal-ant.jpg" },
            { "label": "Lateral",  "img": "Images/frontal-lat.jpg" }
          ],
          "children": [
            {
              "id": 3,
              "label": "Supraorbital Foramen",
              "type": "img",
              "sound": "Sounds/supraorbitalforamen.wav",
              "buttons": [
                { "label": "Anterior", "img": "Images/supraorbital-ant.jpg" }
              ],
              "children": []
            }
          ]
        },
        {
          "id": 10,
          "label": "Anterior View Video",
          "type": "video",
          "child_items": [
            { "video_link": "https://cdnapisec.kaltura.com/p/1157612/..." }
          ],
          "children": []
        }
      ]
    },
    {
      "id": "week2",
      "title": "Week 4.2: Practice",
      "data": [
        {
          "id": 200,
          "label": "Flashcards",
          "type": "html",
          "child_items": [
            { "page": "https://ankiweb.net/..." }
          ],
          "children": []
        }
      ]
    }
  ]
}
```

---

## Important Rules

1. **`id` must be unique** across every node in the entire file (all sections, all nesting levels). Duplicate IDs cause silent selection bugs in the tree view.
2. **Paths are relative to `public/`** — never use leading slashes or `./public/` prefixes.
3. **Audio files must be `.wav`** — the browser `Audio` API is used directly; MP3 is not currently wired up.
4. The converter (`tools/xml-to-json.js`) auto-assigns IDs sequentially starting at 0. When adding nodes manually, use integers higher than the current maximum to avoid conflicts.
