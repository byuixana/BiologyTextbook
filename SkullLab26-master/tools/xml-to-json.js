#!/usr/bin/env node
/**
 * xml-to-json.js — CLI entry point for the lab migration converter.
 *
 * Usage:
 *   node tools/xml-to-json.js <input.xml> <output.json>
 *
 * Example:
 *   node tools/xml-to-json.js ../OldLab/OldLab.xml public/lab_data.json
 *
 * Conversion logic lives in tools/converter.js. This file only handles
 * CLI argument parsing, file I/O, and reporting.
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const { convertXmlToLabData } = require('./converter');

// ---------------------------------------------------------------------------
// CLI argument handling
// ---------------------------------------------------------------------------

const [,, inputArg, outputArg] = process.argv;

if (!inputArg || !outputArg) {
  console.error('Usage: node tools/xml-to-json.js <input.xml> <output.json>');
  process.exit(1);
}

const inputPath  = path.resolve(inputArg);
const outputPath = path.resolve(outputArg);

if (!fs.existsSync(inputPath)) {
  console.error(`Error: input file not found: ${inputPath}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Convert
// ---------------------------------------------------------------------------

let result;
try {
  const xmlString = fs.readFileSync(inputPath, 'utf8');
  result = convertXmlToLabData(xmlString);
} catch (err) {
  console.error(`Error during conversion: ${err.message}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Write output
// ---------------------------------------------------------------------------

const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');

const totalNodes = result.sections.reduce((sum, s) => sum + s.data.length, 0);
console.log(`Converted ${result.sections.reduce((sum, s) => sum + s.data.length, 0)} top-level nodes into ${result.sections.length} section(s)`);
console.log(`Output written to: ${outputPath}`);
