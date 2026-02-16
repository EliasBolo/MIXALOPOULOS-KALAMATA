#!/usr/bin/env node
/**
 * One-time fix: v0 exports put base64 TEXT inside .jpg files.
 * This reads those and writes real binary JPEGs.
 * Run from repo root: node scripts/fix-v0-images.js
 */

const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'images');
const files = ['hero-bg.jpg', 'stats-bg.jpg'];

for (const name of files) {
  const filePath = path.join(dir, name);
  if (!fs.existsSync(filePath)) {
    console.warn('Skip (not found):', filePath);
    continue;
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  const isBase64 = /^[A-Za-z0-9+/=]+$/.test(raw.replace(/\s/g, '')) && raw.length > 1000;
  if (!isBase64) {
    const buf = fs.readFileSync(filePath);
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      console.log('Already binary JPEG:', name);
      continue;
    }
    console.warn('Unknown format:', name);
    continue;
  }
  const clean = raw.replace(/\s/g, '');
  const bin = Buffer.from(clean, 'base64');
  if (bin[0] !== 0xff || bin[1] !== 0xd8) {
    console.warn('Decoded content is not JPEG:', name);
    continue;
  }
  fs.writeFileSync(filePath, bin);
  console.log('Fixed:', name);
}

console.log('Done.');
