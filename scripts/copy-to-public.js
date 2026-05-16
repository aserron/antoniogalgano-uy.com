#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const siteDir = path.join(projectRoot, '_site');
const publicDir = path.join(projectRoot, 'public_html');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Source directory not found: ${src}`);
    process.exit(1);
  }

  // Create public_html if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read all items in source
  const files = fs.readdirSync(src);

  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      // Recursively copy directories
      if (fs.existsSync(destPath)) {
        fs.rmSync(destPath, { recursive: true });
      }
      fs.mkdirSync(destPath, { recursive: true });
      copyDir(srcPath, destPath);
    } else {
      // Copy files
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Execute copy
try {
  console.log(`📦 Copying _site/ → public_html/...`);
  copyDir(siteDir, publicDir);
  console.log(`✅ Done. ${publicDir} ready for deployment.`);
} catch (err) {
  console.error('❌ Copy failed:', err.message);
  process.exit(1);
}
