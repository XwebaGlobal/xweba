#!/usr/bin/env bash
# ==============================================================================
# Git Post-Receive / Deployment Script for Hostinger VPS & cPanel SSH
# ==============================================================================
set -e

echo "🚀 Starting XwebA Deployment via Git..."

# 1. Ensure node and npm are available
export PATH=$PATH:/usr/local/bin:~/.nvm/versions/node/$(ls ~/.nvm/versions/node 2>/dev/null | tail -n 1)/bin

# 2. Install dependencies
echo "📦 Installing production dependencies..."
npm install --silent

# 3. Build production bundle (generates dist/ with index.html, .htaccess, assets/)
echo "🏗️ Building Vite production assets..."
npm run build

# 4. Target public_html path
TARGET_DIR="${1:-$HOME/public_html}"

echo "📂 Deploying built files to $TARGET_DIR..."
mkdir -p "$TARGET_DIR"

# Copy all files from dist into public_html
cp -rf dist/* "$TARGET_DIR/"
cp -f public/.htaccess "$TARGET_DIR/.htaccess"
cp -f public/robots.txt "$TARGET_DIR/robots.txt"
cp -f public/sitemap.xml "$TARGET_DIR/sitemap.xml"

# Set permissions
chmod -R 755 "$TARGET_DIR"
chmod 644 "$TARGET_DIR"/.htaccess "$TARGET_DIR"/index.html

echo "✅ Deployment completed successfully! XwebA is live at $TARGET_DIR"
