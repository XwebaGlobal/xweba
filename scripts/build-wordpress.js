#!/usr/bin/env node

/**
 * Xweba Global Studio -> WordPress Packaging Pipeline
 * 
 * 1. Synchronizes compiled production React/Vite assets into:
 *    - wordpress/themes/xweba-theme/assets/
 *    - wordpress/plugins/xweba-embed/assets/
 * 2. Archives both theme and plugin into clean .zip packages:
 *    - dist/xweba-theme.zip & wordpress/xweba-theme.zip
 *    - dist/xweba-plugin.zip & wordpress/xweba-plugin.zip
 * Ready for 1-click upload in WordPress Admin!
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const distDir = path.join(rootDir, 'dist');
const distAssetsDir = path.join(distDir, 'assets');

const themeDir = path.join(rootDir, 'wordpress', 'themes', 'xweba-theme');
const themeAssetsDir = path.join(themeDir, 'assets');

const pluginDir = path.join(rootDir, 'wordpress', 'plugins', 'xweba-embed');
const pluginAssetsDir = path.join(pluginDir, 'assets');

console.log('🚀 Starting WordPress conversion & packaging...');

// 1. Ensure dist/ exists
if (!fs.existsSync(distAssetsDir)) {
  console.log('⚡ Running production Vite build first...');
  execSync('npm run build', { stdio: 'inherit', cwd: rootDir });
}

// 2. Helper to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Helper to remove directory contents
function cleanDirSync(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

// 3. Sync assets to Theme
console.log('📦 Syncing assets into wordpress/themes/xweba-theme/assets...');
cleanDirSync(themeAssetsDir);
copyDirSync(distAssetsDir, themeAssetsDir);

// Also copy root static assets (images, logos) into theme assets so relative URLs resolve
const distFiles = fs.readdirSync(distDir);
for (const file of distFiles) {
  if (/\.(png|jpg|jpeg|webp|svg|ico)$/i.test(file)) {
    fs.copyFileSync(path.join(distDir, file), path.join(themeAssetsDir, file));
    // also place in theme root
    fs.copyFileSync(path.join(distDir, file), path.join(themeDir, file));
  }
}

// 4. Sync assets to Plugin
console.log('📦 Syncing assets into wordpress/plugins/xweba-embed/assets...');
cleanDirSync(pluginAssetsDir);
copyDirSync(distAssetsDir, pluginAssetsDir);
for (const file of distFiles) {
  if (/\.(png|jpg|jpeg|webp|svg|ico)$/i.test(file)) {
    fs.copyFileSync(path.join(distDir, file), path.join(pluginAssetsDir, file));
  }
}

// 5. Package Theme and Plugin ZIPs using Python
console.log('🗜️ Packaging xweba-theme.zip and xweba-plugin.zip...');
execSync('python3 scripts/package-wordpress.py', { stdio: 'inherit', cwd: rootDir });

console.log('✅ WordPress packages created successfully!');
console.log('📁 Theme ZIP : dist/xweba-theme.zip (and wordpress/xweba-theme.zip)');
console.log('📁 Plugin ZIP: dist/xweba-plugin.zip (and wordpress/xweba-plugin.zip)');
