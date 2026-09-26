# Hostinger & cPanel Complete Deployment Guide

This guide covers deployment for **Hostinger** (hPanel) and **cPanel**, including **File Manager upload** and **automated Git deployment**.

---

## 🛠️ Why Was It Not Loading Before? (Identified & Resolved)

1. **Missing `.htaccess` for Apache / LiteSpeed**:
   - Hostinger and cPanel run LiteSpeed / Apache.
   - Without an `.htaccess` file, requesting routes or refreshing pages yields `404 Not Found`.
   - Without explicit MIME types, LiteSpeed/Apache can serve modern JavaScript ES modules (`.js`) as `text/plain`, prompting browsers to block execution:
     > *"Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of text/plain."*
   - **Fixed**: We configured `public/.htaccess`, which automatically bundles into `dist/.htaccess` on `npm run build`.

2. **Broken `/src/assets/...` Paths**:
   - Case study and studio images previously referenced raw `/src/...` string literals. While Vite resolves this locally, `/src` does not exist on production servers.
   - **Fixed**: All images are now bundled ES module imports with hashed filenames in `dist/assets/`.

3. **Relative Base URL**:
   - Configured `base: './'` in `vite.config.ts` so the build functions seamlessly at root domains (`public_html/`) or subdirectories/preview URLs.

---

## 🚀 Option 1: Static Hosting via File Manager (`public_html`) — Fastest & Recommended

### Step 1: Build the production bundle
In your local project terminal, run:
```bash
npm run build
```
This builds the complete, production-ready website inside the `dist/` directory.

### Step 2: Open File Manager
- **Hostinger**: Log in to **hPanel** → **Websites** → **Manage** → **File Manager**.
- **cPanel**: Log in to **cPanel** → **File Manager** (make sure **"Show Hidden Files (dotfiles)"** is checked in Settings so `.htaccess` is uploaded).

### Step 3: Navigate to `public_html`
- Open the root `public_html/` folder.
- Delete any default placeholder files (e.g. `default.php` or `index.html` placeholders).

### Step 4: Upload the files inside `dist/` directly into `public_html`
Upload all contents of `dist/`:
- `index.html`
- `.htaccess` *(essential for routing and MIME types)*
- `robots.txt` & `sitemap.xml`
- `assets/` (folder containing JS, CSS, and hashed images)
- Image and logo files

> 💡 **Quick Tip**: You can select all files inside `dist/`, compress them into a `.zip` file on your computer, upload that single `.zip` to `public_html`, and click **Extract**.

---

## 🔄 Option 2: Automated Deployment Through Git (GitHub Actions)

We have created an automated CI/CD pipeline in `.github/workflows/deploy-hostinger-cpanel.yml`. Whenever you push to your GitHub `main` branch, GitHub Actions automatically builds the project and uploads `dist/` directly into `public_html/`.

---

## ⚡ Option 2B: Direct Git Clone / Hostinger Git Integration (No Build Step Required on Server)

**The `dist/` production build is now directly committed and tracked in the repository.**

When Hostinger Git pulls the repository into `public_html/`:
1. The pre-compiled JavaScript, CSS, and optimized assets in `dist/` are downloaded directly.
2. The root `.htaccess` and `index.php` automatically detect the `dist/` folder and forward all traffic to `dist/index.html` and `dist/assets/`.
3. You do not need to install Node.js or run `npm run build` on the Hostinger shared server — it works immediately after `git pull`!

### Step 1: Push your code to GitHub
```bash
git add .
git commit -m "Configure Hostinger and cPanel deployment"
git push origin main
```

### Step 2: Retrieve your FTP credentials
- **Hostinger**: In hPanel, go to **Files** → **FTP Accounts**. Note your **FTP Host/IP**, **Username**, and **Password**.
- **cPanel**: In cPanel, go to **FTP Accounts** or use your primary cPanel login credentials.

### Step 3: Add Repository Secrets in GitHub
In your GitHub repository:
1. Go to **Settings** → **Secrets and variables** → **Actions**.
2. Click **New repository secret** and add:
   - `FTP_SERVER`: Your Hostinger/cPanel FTP host (e.g. `ftp.xweba.com` or your server IP).
   - `FTP_USERNAME`: Your FTP username.
   - `FTP_PASSWORD`: Your FTP password.
   - `FTP_PORT`: `21` (optional, defaults to 21).

### Step 4: Done!
Every time you run `git push origin main`, GitHub Actions will:
1. Install dependencies (`npm ci`).
2. Run `npm run build` (creating the `dist/` bundle with `.htaccess`, `robots.txt`, and assets).
3. Transfer all files in `dist/` straight into `public_html/` via secure FTPS.

---

## 📦 Option 3: cPanel Native Git™ Version Control (`.cpanel.yml`)

If you manage your site using cPanel's built-in **Git™ Version Control**:

1. In cPanel, open **Git™ Version Control**.
2. Click **Create** and enter your repository clone URL (or create a new repository).
3. Specify the repository path (e.g. `/home/username/repositories/xweba`).
4. We have already created `/.cpanel.yml` in the project root:
   ```yaml
   ---
   deployment:
     tasks:
       - export DEPLOYPATH=/home/$USER/public_html/
       - /bin/mkdir -p $DEPLOYPATH
       - /bin/cp -rf dist/* $DEPLOYPATH
       - /bin/cp -f public/.htaccess $DEPLOYPATH/.htaccess
       - /bin/cp -f public/robots.txt $DEPLOYPATH/robots.txt
       - /bin/cp -f public/sitemap.xml $DEPLOYPATH/sitemap.xml
   ```
5. Click **Manage** → **Pull or Deploy** → **Deploy HEAD Commit**.
   cPanel will automatically execute the tasks and copy the built files into `public_html/`.

---

## ⚡ Option 4: Hostinger Git Auto-Deployment (hPanel Git)

1. In Hostinger hPanel, go to **Advanced** → **Git**.
2. Under **Create a New Repository**:
   - **Repository**: Enter your Git repository URL.
   - **Branch**: `main`
   - **Install path**: `public_html` (or a dedicated directory).
3. Copy the generated **Webhook URL** from Hostinger.
4. In GitHub, go to **Settings** → **Webhooks** → **Add Webhook**, paste the URL, and select `Just the push event`.
5. For builds, either let GitHub Actions deploy to `public_html` via FTP (Option 2), or run `bash deploy-hostinger.sh` via Hostinger SSH.
