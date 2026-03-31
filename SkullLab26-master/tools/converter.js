'use strict';
/**
 * converter.js
 *
 * Pure conversion logic for the XML-to-JSON lab migration tool.
 * This module is imported by xml-to-json.js (CLI) and by unit tests.
 *
 * Exported functions:
 *   classifyLoad(load)            → 'img' | 'page' | 'external' | 'other' | 'none'
 *   convertButton(btn)            → { label, load } | null
 *   buildButtons(rawButtons)      → Button[]
 *   extractLoad(rawButtons, kinds)→ string | null
 *   convertSubsubitem(el)         → TreeNode
 *   convertSubitem(el)            → TreeNode
 *   convertItem(el)               → TreeNode
 *   buildSections(items, title)   → Section[]
 *   getLabTitle(player)           → string
 *   convertXmlToLabData(xmlString)→ LabData
 */

const { XMLParser } = require('fast-xml-parser');

// ---------------------------------------------------------------------------
// XML Parser configuration
// ---------------------------------------------------------------------------

const PARSER_OPTIONS = {
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  isArray: (name) => ['item', 'subitem', 'subsubitem', 'button'].includes(name),
  allowBooleanAttributes: true,
};

// ---------------------------------------------------------------------------
// ID counter — reset per conversion so output is deterministic
// ---------------------------------------------------------------------------

let _nextId = 0;
function resetId() { _nextId = 0; }
function getId() { return _nextId++; }

// ---------------------------------------------------------------------------
// classifyLoad
// ---------------------------------------------------------------------------

/**
 * Determine what kind of resource a button's load path refers to.
 * @param {string} load
 * @returns {'img'|'page'|'external'|'other'|'none'}
 */
function classifyLoad(load) {
  if (!load) return 'none';
  if (/^https?:\/\//i.test(load)) return 'external';
  if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(load)) return 'img';
  if (/\.html?$/i.test(load)) return 'page';
  return 'other';
}

// ---------------------------------------------------------------------------
// convertButton
// ---------------------------------------------------------------------------

/**
 * Convert a raw <button> element to { label, load }.
 * Returns null for cadaver-mode buttons (type="cad"), which are not supported.
 * @param {object} btn
 * @returns {{ label: string, load: string }|null}
 */
function convertButton(btn) {
  const load  = btn['@_load']  || '';
  const label = btn['@_name']  || '';
  const type  = btn['@_type']  || '';
  if (type === 'cad') return null;
  return { label, load };
}

// ---------------------------------------------------------------------------
// buildButtons
// ---------------------------------------------------------------------------

/**
 * Filter raw buttons to only image-type loads and return them as Button objects.
 * @param {object[]} rawButtons
 * @returns {{ label: string, img: string }[]}
 */
function buildButtons(rawButtons) {
  if (!rawButtons) return [];
  const buttons = [];
  for (const btn of rawButtons) {
    const converted = convertButton(btn);
    if (!converted) continue;
    if (classifyLoad(converted.load) === 'img') {
      buttons.push({ label: converted.label, img: converted.load });
    }
  }
  return buttons;
}

// ---------------------------------------------------------------------------
// extractLoad
// ---------------------------------------------------------------------------

/**
 * Return the first button load value that matches one of the given kinds.
 * @param {object[]} rawButtons
 * @param {string[]} kinds
 * @returns {string|null}
 */
function extractLoad(rawButtons, kinds) {
  if (!rawButtons) return null;
  for (const btn of rawButtons) {
    const converted = convertButton(btn);
    if (!converted) continue;
    if (kinds.includes(classifyLoad(converted.load))) return converted.load;
  }
  return null;
}

// ---------------------------------------------------------------------------
// convertSubsubitem
// ---------------------------------------------------------------------------

/**
 * Convert a <subsubitem> element to a TreeNode (leaf, depth 2).
 * @param {object} el
 * @returns {object} TreeNode
 */
function convertSubsubitem(el) {
  const type  = el['@_type']  || 'link';
  const label = el['@_name']  || '';
  const sound = el['@_sound'] || undefined;
  const rawButtons = el.button || [];
  const id = getId();

  if (type === 'xlink') {
    const url = extractLoad(rawButtons, ['external']);
    return {
      id, label, type: 'html',
      ...(sound ? { sound } : {}),
      child_items: url ? [{ page: url }] : [],
      children: []
    };
  }

  const buttons  = buildButtons(rawButtons);
  const pageLoad = extractLoad(rawButtons, ['page']);

  if (buttons.length > 0) {
    return { id, label, type: 'img', ...(sound ? { sound } : {}), buttons, children: [] };
  }
  if (pageLoad) {
    return { id, label, ...(sound ? { sound } : {}), load: pageLoad, children: [] };
  }
  return { id, label, children: [] };
}

// ---------------------------------------------------------------------------
// convertSubitem
// ---------------------------------------------------------------------------

/**
 * Convert a <subitem> element to a TreeNode (depth 1).
 * @param {object} el
 * @returns {object} TreeNode
 */
function convertSubitem(el) {
  const type  = el['@_type']  || 'link';
  const label = el['@_name']  || '';
  const sound = el['@_sound'] || undefined;
  const rawButtons  = el.button     || [];
  const subsubitems = el.subsubitem || [];
  const id = getId();

  if (type === 'xlink') {
    const url = extractLoad(rawButtons, ['external']);
    return {
      id, label, type: 'html',
      ...(sound ? { sound } : {}),
      child_items: url ? [{ page: url }] : [],
      children: []
    };
  }

  const children = subsubitems.map(convertSubsubitem);
  const buttons  = buildButtons(rawButtons);
  const pageLoad = extractLoad(rawButtons, ['page']);

  if (type === 'expand' || (buttons.length > 0 && children.length > 0)) {
    return {
      id, label,
      type: buttons.length > 0 ? 'img' : undefined,
      ...(sound ? { sound } : {}),
      ...(buttons.length > 0 ? { buttons } : {}),
      ...(pageLoad && buttons.length === 0 ? { load: pageLoad } : {}),
      children
    };
  }
  if (buttons.length > 0) {
    return { id, label, type: 'img', ...(sound ? { sound } : {}), buttons, children };
  }
  if (pageLoad) {
    return { id, label, ...(sound ? { sound } : {}), load: pageLoad, children };
  }
  return { id, label, ...(sound ? { sound } : {}), children };
}

// ---------------------------------------------------------------------------
// convertItem
// ---------------------------------------------------------------------------

/**
 * Convert a top-level <item> element to a TreeNode.
 * @param {object} el
 * @returns {object} TreeNode
 */
function convertItem(el) {
  const type  = el['@_type']  || 'link';
  const label = el['@_name']  || '';
  const sound = el['@_sound'] || undefined;
  const rawButtons = el.button  || [];
  const subitems   = el.subitem || [];
  const id = getId();

  if (type === 'nolink') {
    return { id, label, children: [] };
  }

  if (type === 'xlink') {
    const url = extractLoad(rawButtons, ['external']);
    return {
      id, label, type: 'html',
      ...(sound ? { sound } : {}),
      child_items: url ? [{ page: url }] : [],
      children: []
    };
  }

  const children = subitems.map(convertSubitem);
  const buttons  = buildButtons(rawButtons);
  const pageLoad = extractLoad(rawButtons, ['page', 'other']);

  if (type === 'expand') {
    return {
      id, label,
      ...(buttons.length > 0 ? { type: 'img', buttons } : {}),
      ...(pageLoad && buttons.length === 0 ? { load: pageLoad } : {}),
      ...(sound ? { sound } : {}),
      children
    };
  }

  if (buttons.length > 0) {
    return { id, label, type: 'img', ...(sound ? { sound } : {}), buttons, children };
  }
  if (pageLoad) {
    return { id, label, ...(sound ? { sound } : {}), load: pageLoad, children };
  }
  return { id, label, children };
}

// ---------------------------------------------------------------------------
// buildSections
// ---------------------------------------------------------------------------

/**
 * Split top-level items into sections using nolink items as delimiters.
 * @param {object[]} items
 * @param {string} labTitle
 * @returns {object[]} sections
 */
function buildSections(items, labTitle) {
  const sections = [];
  let current = null;

  for (const item of items) {
    const type  = item['@_type'] || 'link';
    const label = item['@_name'] || '';

    if (type === 'nolink') {
      const id = label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      current = { id, title: label, data: [] };
      sections.push(current);
      current.data.push(convertItem(item));
    } else {
      if (!current) {
        current = { id: 'section1', title: labTitle, data: [] };
        sections.push(current);
      }
      current.data.push(convertItem(item));
    }
  }

  return sections;
}

// ---------------------------------------------------------------------------
// getLabTitle
// ---------------------------------------------------------------------------

/**
 * Extract the lab title from the <title> element.
 * @param {object} player - parsed <player> root element
 * @returns {string}
 */
function getLabTitle(player) {
  const titleEl = player.title;
  if (!titleEl) return 'Lab';
  if (typeof titleEl === 'string') return titleEl;
  return titleEl['#text'] || String(titleEl) || 'Lab';
}

// ---------------------------------------------------------------------------
// convertXmlToLabData — top-level entry point
// ---------------------------------------------------------------------------

/**
 * Convert a full lab XML string to a lab_data.json object.
 * @param {string} xmlString
 * @returns {object} lab data object ready to JSON.stringify
 */
function convertXmlToLabData(xmlString) {
  const parser = new XMLParser(PARSER_OPTIONS);
  const parsed = parser.parse(xmlString);
  const player = parsed.player;

  if (!player) {
    throw new Error('XML root element must be <player>');
  }

  resetId();
  const rawItems = player.item || [];
  const labTitle = getLabTitle(player);
  const sections = buildSections(rawItems, labTitle);

  return {
    $schema: './lab_data.schema.json',
    title: labTitle,
    sections
  };
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

module.exports = {
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
  // Exposed for testing
  _resetId: resetId,
  _getId: getId,
};
