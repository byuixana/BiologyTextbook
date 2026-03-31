/**
 * Unit tests for the XML-to-JSON converter (tools/converter.js).
 */

'use strict';

const {
  classifyLoad,
  convertButton,
  buildButtons,
  extractLoad,
  convertSubsubitem,
  convertSubitem,
  convertItem,
  buildSections,
  getLabTitle,
  convertXmlToLabData,
  _resetId,
} = require('../../tools/converter');

const { XMLParser } = require('fast-xml-parser');

const PARSER_OPTIONS = {
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  isArray: (name) => ['item', 'subitem', 'subsubitem', 'button'].includes(name),
  allowBooleanAttributes: true,
};

function parseXml(xmlString) {
  const parser = new XMLParser(PARSER_OPTIONS);
  return parser.parse(xmlString);
}

beforeEach(() => { _resetId(); });

// ---------------------------------------------------------------------------
// classifyLoad
// ---------------------------------------------------------------------------

describe('classifyLoad', () => {
  test('identifies jpg, gif, png image paths', () => {
    expect(classifyLoad('Images/frontal.jpg')).toBe('img');
    expect(classifyLoad('Images/anim.gif')).toBe('img');
    expect(classifyLoad('Images/bone.png')).toBe('img');
  });

  test('identifies HTML page paths', () => {
    expect(classifyLoad('Pages/intro.html')).toBe('page');
    expect(classifyLoad('Pages/another.htm')).toBe('page');
  });

  test('identifies http and https external URLs', () => {
    expect(classifyLoad('https://example.com')).toBe('external');
    expect(classifyLoad('http://byui.edu/file/abc')).toBe('external');
  });

  test('returns none for empty string', () => {
    expect(classifyLoad('')).toBe('none');
  });

  test('returns none for undefined/null', () => {
    expect(classifyLoad(undefined)).toBe('none');
    expect(classifyLoad(null)).toBe('none');
  });

  test('returns other for unrecognized extensions', () => {
    expect(classifyLoad('archive.zip')).toBe('other');
  });
});

// ---------------------------------------------------------------------------
// convertButton
// ---------------------------------------------------------------------------

describe('convertButton', () => {
  test('converts a standard button', () => {
    const btn = { '@_load': 'Images/frontal.jpg', '@_name': 'Anterior' };
    expect(convertButton(btn)).toEqual({ label: 'Anterior', load: 'Images/frontal.jpg' });
  });

  test('returns null for cadaver-type buttons', () => {
    const btn = { '@_load': 'Images/cadaver.jpg', '@_name': 'Cadaver', '@_type': 'cad' };
    expect(convertButton(btn)).toBeNull();
  });

  test('handles missing name attribute (empty label)', () => {
    const btn = { '@_load': 'Images/frontal.jpg' };
    expect(convertButton(btn)).toEqual({ label: '', load: 'Images/frontal.jpg' });
  });

  test('handles missing load attribute', () => {
    const btn = { '@_name': 'Anterior' };
    expect(convertButton(btn)).toEqual({ label: 'Anterior', load: '' });
  });
});

// ---------------------------------------------------------------------------
// buildButtons
// ---------------------------------------------------------------------------

describe('buildButtons', () => {
  test('extracts only image buttons from a mixed list', () => {
    const raw = [
      { '@_name': 'Anterior', '@_load': 'Images/frontal-ant.jpg' },
      { '@_name': 'Page',     '@_load': 'Pages/intro.html' },
    ];
    expect(buildButtons(raw)).toEqual([{ label: 'Anterior', img: 'Images/frontal-ant.jpg' }]);
  });

  test('filters out cadaver buttons', () => {
    const raw = [
      { '@_name': 'Normal', '@_load': 'Images/bone.jpg' },
      { '@_name': 'Cad',    '@_load': 'Images/cad.jpg', '@_type': 'cad' },
    ];
    expect(buildButtons(raw)).toEqual([{ label: 'Normal', img: 'Images/bone.jpg' }]);
  });

  test('returns empty array for null or empty input', () => {
    expect(buildButtons(null)).toEqual([]);
    expect(buildButtons([])).toEqual([]);
  });

  test('extracts multiple image buttons', () => {
    const raw = [
      { '@_name': 'Anterior', '@_load': 'Images/bone-ant.jpg' },
      { '@_name': 'Lateral',  '@_load': 'Images/bone-lat.jpg' },
      { '@_name': 'Superior', '@_load': 'Images/bone-sup.jpg' },
    ];
    expect(buildButtons(raw)).toHaveLength(3);
  });
});

// ---------------------------------------------------------------------------
// extractLoad
// ---------------------------------------------------------------------------

describe('extractLoad', () => {
  test('returns the first matching page load', () => {
    const raw = [
      { '@_name': '',      '@_load': 'Pages/intro.html' },
      { '@_name': 'Image', '@_load': 'Images/bone.jpg'  },
    ];
    expect(extractLoad(raw, ['page'])).toBe('Pages/intro.html');
  });

  test('returns the first matching external load', () => {
    const raw = [{ '@_load': 'https://byui.edu/resource' }];
    expect(extractLoad(raw, ['external'])).toBe('https://byui.edu/resource');
  });

  test('returns null when no match', () => {
    const raw = [{ '@_name': 'Anterior', '@_load': 'Images/bone.jpg' }];
    expect(extractLoad(raw, ['page'])).toBeNull();
  });

  test('returns null for null input', () => {
    expect(extractLoad(null, ['page'])).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// convertSubsubitem
// ---------------------------------------------------------------------------

describe('convertSubsubitem', () => {
  test('converts a link subsubitem with image buttons', () => {
    const xml = `<root><subsubitem type="link" name="Cribriform Plate" sound="Sounds/cribriform.wav">
      <button name="Superior" load="Images/crib.jpg"/>
      <button name="Zoom"     load="Images/crib-zoom.jpg"/>
    </subsubitem></root>`;
    const el = parseXml(xml).root.subsubitem[0];
    const node = convertSubsubitem(el);

    expect(node.label).toBe('Cribriform Plate');
    expect(node.type).toBe('img');
    expect(node.sound).toBe('Sounds/cribriform.wav');
    expect(node.buttons).toHaveLength(2);
    expect(node.buttons[0]).toEqual({ label: 'Superior', img: 'Images/crib.jpg' });
    expect(node.children).toEqual([]);
  });

  test('converts an xlink subsubitem to html type', () => {
    const xml = `<root><subsubitem type="xlink" name="External">
      <button load="https://example.com/resource"/>
    </subsubitem></root>`;
    const el = parseXml(xml).root.subsubitem[0];
    const node = convertSubsubitem(el);

    expect(node.type).toBe('html');
    expect(node.child_items).toEqual([{ page: 'https://example.com/resource' }]);
  });

  test('converts a subsubitem with a page load (no img buttons)', () => {
    const xml = `<root><subsubitem type="link" name="Lecture">
      <button load="Pages/lecture.html"/>
    </subsubitem></root>`;
    const el = parseXml(xml).root.subsubitem[0];
    const node = convertSubsubitem(el);

    expect(node.load).toBe('Pages/lecture.html');
    expect(node.type).toBeUndefined();
  });

  test('assigns a unique integer id', () => {
    const xml = `<root><subsubitem type="link" name="A"><button name="X" load="Images/x.jpg"/></subsubitem></root>`;
    const el = parseXml(xml).root.subsubitem[0];
    const node = convertSubsubitem(el);
    expect(typeof node.id).toBe('number');
  });

  test('omits sound when not present', () => {
    const xml = `<root><subsubitem type="link" name="A"><button name="X" load="Images/x.jpg"/></subsubitem></root>`;
    const el = parseXml(xml).root.subsubitem[0];
    const node = convertSubsubitem(el);
    expect(node.sound).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// convertSubitem
// ---------------------------------------------------------------------------

describe('convertSubitem', () => {
  test('converts an expand subitem with img buttons and children', () => {
    const xml = `<root><subitem type="expand" name="Frontal Bone" sound="Sounds/frontal.wav">
      <button name="Anterior" load="Images/frontal.jpg"/>
      <subsubitem type="link" name="Glabella" sound="Sounds/glabella.wav">
        <button name="Anterior" load="Images/glabella.jpg"/>
      </subsubitem>
    </subitem></root>`;
    const el = parseXml(xml).root.subitem[0];
    const node = convertSubitem(el);

    expect(node.label).toBe('Frontal Bone');
    expect(node.type).toBe('img');
    expect(node.buttons).toHaveLength(1);
    expect(node.children).toHaveLength(1);
    expect(node.children[0].label).toBe('Glabella');
  });

  test('converts a link subitem with page load and no img buttons', () => {
    const xml = `<root><subitem type="link" name="Instructions">
      <button load="Pages/instructions.html"/>
    </subitem></root>`;
    const el = parseXml(xml).root.subitem[0];
    const node = convertSubitem(el);

    expect(node.load).toBe('Pages/instructions.html');
    expect(node.type).toBeUndefined();
    expect(node.buttons).toBeUndefined();
  });

  test('converts an xlink subitem to html type', () => {
    const xml = `<root><subitem type="xlink" name="3D Skull">
      <button load="https://content.byui.edu/skull/index.html"/>
    </subitem></root>`;
    const el = parseXml(xml).root.subitem[0];
    const node = convertSubitem(el);

    expect(node.type).toBe('html');
    expect(node.child_items[0].page).toMatch(/https:\/\//);
  });
});

// ---------------------------------------------------------------------------
// convertItem
// ---------------------------------------------------------------------------

describe('convertItem', () => {
  test('converts a nolink item to a header node (no type, no load, no buttons)', () => {
    const xml = `<root><item type="nolink" name="WEEK 4.1 - SKULL BONES"></item></root>`;
    const el = parseXml(xml).root.item[0];
    const node = convertItem(el);

    expect(node.label).toBe('WEEK 4.1 - SKULL BONES');
    expect(node.type).toBeUndefined();
    expect(node.load).toBeUndefined();
    expect(node.buttons).toBeUndefined();
    expect(node.children).toEqual([]);
  });

  test('converts a link item with an HTML page button', () => {
    const xml = `<root><item type="link" name="4.1.1 Introduction">
      <button load="Pages/intro.html"/>
    </item></root>`;
    const el = parseXml(xml).root.item[0];
    const node = convertItem(el);

    expect(node.load).toBe('Pages/intro.html');
    expect(node.type).toBeUndefined();
  });

  test('converts an expand item with subitems and a page button', () => {
    const xml = `<root><item type="expand" name="4.1.2 - 2D Skull Anatomy">
      <button load="Pages/4_1_2_2D_intro.html"/>
      <subitem type="link" name="Frontal Bone" sound="Sounds/frontal.wav">
        <button name="Anterior" load="Images/frontal.jpg"/>
      </subitem>
    </item></root>`;
    const el = parseXml(xml).root.item[0];
    const node = convertItem(el);

    expect(node.label).toBe('4.1.2 - 2D Skull Anatomy');
    expect(node.load).toBe('Pages/4_1_2_2D_intro.html');
    expect(node.children).toHaveLength(1);
    expect(node.children[0].type).toBe('img');
  });

  test('converts an xlink item to html type', () => {
    const xml = `<root><item type="xlink" name="Clickable Skull">
      <button load="https://content.byui.edu/skull/index.html"/>
    </item></root>`;
    const el = parseXml(xml).root.item[0];
    const node = convertItem(el);

    expect(node.type).toBe('html');
    expect(node.child_items).toHaveLength(1);
  });
});

// ---------------------------------------------------------------------------
// buildSections
// ---------------------------------------------------------------------------

describe('buildSections', () => {
  test('splits on nolink items as section boundaries', () => {
    const xml = `<root>
      <item type="nolink" name="WEEK 4.1 - SKULL BONES"></item>
      <item type="link" name="Introduction"><button load="Pages/intro.html"/></item>
      <item type="nolink" name="WEEK 4.2 - PRACTICE"></item>
      <item type="link" name="Descriptions"><button load="Pages/desc.html"/></item>
    </root>`;
    const items = parseXml(xml).root.item;
    const sections = buildSections(items, 'Test Lab');

    expect(sections).toHaveLength(2);
    expect(sections[0].title).toBe('WEEK 4.1 - SKULL BONES');
    expect(sections[0].data).toHaveLength(2); // header node + link item
    expect(sections[1].title).toBe('WEEK 4.2 - PRACTICE');
    expect(sections[1].data).toHaveLength(2);
  });

  test('puts all items in one section when no nolink items present', () => {
    const xml = `<root>
      <item type="link" name="Item A"><button load="Pages/a.html"/></item>
      <item type="link" name="Item B"><button load="Pages/b.html"/></item>
    </root>`;
    const items = parseXml(xml).root.item;
    const sections = buildSections(items, 'My Lab');

    expect(sections).toHaveLength(1);
    expect(sections[0].id).toBe('section1');
    expect(sections[0].title).toBe('My Lab');
    expect(sections[0].data).toHaveLength(2);
  });

  test('slugifies nolink names into section ids', () => {
    const xml = `<root><item type="nolink" name="Week 4.1 - Skull Bones"></item></root>`;
    const items = parseXml(xml).root.item;
    const sections = buildSections(items, 'Lab');
    expect(sections[0].id).toBe('week-4-1-skull-bones');
  });

  test('all node ids are unique across sections', () => {
    const xml = `<root>
      <item type="nolink" name="Section A"></item>
      <item type="link" name="Item 1"><button load="Pages/a.html"/></item>
      <item type="nolink" name="Section B"></item>
      <item type="link" name="Item 2"><button load="Pages/b.html"/></item>
    </root>`;
    const items = parseXml(xml).root.item;
    const sections = buildSections(items, 'Lab');
    const allIds = sections.flatMap(s => s.data.map(n => n.id));
    expect(new Set(allIds).size).toBe(allIds.length);
  });
});

// ---------------------------------------------------------------------------
// getLabTitle
// ---------------------------------------------------------------------------

describe('getLabTitle', () => {
  test('extracts title from string value', () => {
    expect(getLabTitle({ title: 'Skull Lab' })).toBe('Skull Lab');
  });

  test('extracts title from object with #text', () => {
    expect(getLabTitle({ title: { '#text': 'My Lab', '@_intro': 'Pages/intro.html' } })).toBe('My Lab');
  });

  test('returns "Lab" when title element is missing', () => {
    expect(getLabTitle({})).toBe('Lab');
  });
});

// ---------------------------------------------------------------------------
// convertXmlToLabData — end-to-end
// ---------------------------------------------------------------------------

describe('convertXmlToLabData', () => {
  const minimalXml = `<?xml version="1.0" encoding="utf-8"?>
<player>
  <title intro="Pages/intro.html">[RETURN] To Main Menu</title>
  <item type="nolink" name="WEEK 4.1 - SKULL BONES"></item>
  <item type="link" name="Introduction">
    <button load="Pages/4_1_1_intro.html"/>
  </item>
  <item type="expand" name="4.1.2 - 2D Skull Anatomy">
    <button load="Pages/4_1_2_2D_intro.html"/>
    <subitem type="expand" name="Frontal Bone" sound="Sounds/frontal.wav">
      <button name="Anterior" load="Images/frontal.jpg"/>
      <subsubitem type="link" name="Glabella" sound="Sounds/glabella.wav">
        <button name="Anterior" load="Images/glabella.jpg"/>
      </subsubitem>
    </subitem>
  </item>
  <item type="nolink" name="WEEK 4.2 - PRACTICE"></item>
  <item type="xlink" name="Clickable Skull">
    <button load="https://content.byui.edu/skull/index.html"/>
  </item>
</player>`;

  let result;
  beforeEach(() => { result = convertXmlToLabData(minimalXml); });

  test('produces a $schema field', () => {
    expect(result.$schema).toBe('./lab_data.schema.json');
  });

  test('extracts the lab title', () => {
    // The title element here contains "[RETURN] To Main Menu" as text
    expect(typeof result.title).toBe('string');
    expect(result.title.length).toBeGreaterThan(0);
  });

  test('produces two sections from two nolink items', () => {
    expect(result.sections).toHaveLength(2);
  });

  test('first section contains the correct items', () => {
    const s = result.sections[0];
    expect(s.title).toBe('WEEK 4.1 - SKULL BONES');
    expect(s.data.length).toBeGreaterThanOrEqual(3);
  });

  test('expand item has children', () => {
    const s = result.sections[0];
    const expandItem = s.data.find(n => n.label === '4.1.2 - 2D Skull Anatomy');
    expect(expandItem).toBeDefined();
    expect(expandItem.children.length).toBeGreaterThan(0);
  });

  test('deep nesting: subsubitem appears in children of children', () => {
    const s = result.sections[0];
    const expand = s.data.find(n => n.label === '4.1.2 - 2D Skull Anatomy');
    const frontal = expand.children.find(n => n.label === 'Frontal Bone');
    expect(frontal).toBeDefined();
    const glabella = frontal.children.find(n => n.label === 'Glabella');
    expect(glabella).toBeDefined();
    expect(glabella.type).toBe('img');
  });

  test('xlink item in section 2 has html type and child_items', () => {
    const s = result.sections[1];
    const xlink = s.data.find(n => n.label === 'Clickable Skull');
    expect(xlink).toBeDefined();
    expect(xlink.type).toBe('html');
    expect(xlink.child_items[0].page).toMatch(/https:\/\//);
  });

  test('all node ids are unique', () => {
    function collectIds(nodes) {
      const ids = [];
      for (const n of nodes) {
        ids.push(n.id);
        if (n.children) ids.push(...collectIds(n.children));
      }
      return ids;
    }
    const allIds = result.sections.flatMap(s => collectIds(s.data));
    expect(new Set(allIds).size).toBe(allIds.length);
  });

  test('throws on invalid XML (missing <player> root)', () => {
    expect(() => convertXmlToLabData('<notplayer><item/></notplayer>')).toThrow();
  });
});
