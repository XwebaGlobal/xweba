# Hostinger & cPanel Deployment Guide for XwebA

This guide covers everything you need to deploy XwebA to **Hostinger** (hPanel) or **cPanel** shared/cloud hosting.

---

## Why Was It Not Loading Before? (Identified & Fixed)

1. **Missing `.htaccess` on Apache/LiteSpeed**:
   - Hostinger and cPanel run Apache / LiteSpeed web servers.
   - Without an `.htaccess` file, the server returns a 404 error when refreshing or accessing any routes.
   - Also, without explicit MIME types, LiteSpeed/Apache can serve modern JavaScript ES modules (`.js`) as `text/plain`, which browsers block with:
     > *"Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of text/plain."*
   - **Fix Applied**: A production-ready `.htaccess` has been configured in `public/.htaccess`. When you build the project (`npm run build`), it is automatically output to `dist/.htaccess`.

2. **Hardcoded `/src/` Paths for Assets**:
   - In dev mode, Vite serves images from `/src/assets/images/...`. In production builds, `/src/` does not exist on the server.
   - **Fix Applied**: All images across `src/data/content.ts` are now imported directly as bundled ES modules with hashed URLs (`dist/assets/`).

3. **Asset Base URL**:
   - In `vite.config.ts`, `base: './'` is now enabled so all asset URLs in `index.html` are relative. This ensures the site loads whether deployed to root `public_html`, a subfolder (e.g., `public_html/staging`), or a preview URL.

4. **Favicon & Apple Touch Icons**:
   - Added direct references in `index.html` to eliminate 404 console errors.

---

## Method 1: Deploying to Hostinger (hPanel) — Recommended

### Step 1: Build the Project
Run the build command:
```bash
npm run build
```
This generates the optimized production bundle in the `dist/` directory, including:
- `index.html`
- `.htaccess` (LiteSpeed SPA routing, Gzip, and MIME types)
- `assets/` (bundled JS, CSS, and optimized images)
- `robots.txt` & `sitemap.xml`
- Logos and static media

### Step 2: Upload to Hostinger File Manager
1. Log in to your **Hostinger Account** -> go to **Websites** -> select your website -> click **Manage**.
2. Under **Files**, open **File Manager**.
3. Navigate to:
   ```
   public_html/
   ```
   *(If deploying to a subdomain or addon domain, navigate to that domain's designated folder).*
4. Delete any default `default.php` or placeholder files inside `public_html/`.
5. Upload the **contents** of the `dist/` folder directly into `public_html/`:
   - `assets/` (folder)
   - `index.html`
   - `.htaccess` *(Important: Make sure hidden files are visible in Hostinger File Manager settings)*
   - `robots.txt`
   - `sitemap.xml`
   - All image/logo files

> **Tip**: You can compress the contents of `dist/` into a `.zip` file on your computer, upload the `.zip` to `public_html/` in Hostinger File Manager, and click **Extract**.

### Step 3: Verify
Visit your domain (e.g. `https://xweba.com/`). The site will load with instant sub-second performance!

---

## Method 2: Deploying to cPanel (Shared Hosting)

### Step 1: Build the Production Bundle
```bash
npm run build
```

### Step 2: Upload via cPanel File Manager
1. Log into your **cPanel** dashboard.
2. Click **File Manager** (under *Files*).
3. In the top-right corner of File Manager, click **Settings** -> check **"Show Hidden Files (dotfiles)"** -> click **Save**. *(This ensures `.htaccess` is visible).*
4. Navigate into:
   ```
   public_html
   ```
5. Remove any default `index.html` or placeholder files.
6. Upload the files **inside** `dist/` directly into `public_html`:
   - `index.html`
   - `.htaccess`
   - `robots.txt`
   - `sitemap.xml`
   - `assets/` (folder)
   - images and logos

---

## Method 3: Running with Node.js on Hostinger VPS or cPanel Node.js Selector

If you prefer to run the Node.js server (`server.js`) rather than static hosting:

1. In cPanel, open **Setup Node.js App** (or Hostinger VPS).
2. Set:
   - **Node.js version**: 20.x or 22.x
   - **Application mode**: `Production`
   - **Application root**: `/home/username/xweba`
   - **Application startup file**: `server.js`
3. Upload the project files (`server.js`, `package.json`, `dist/`, `public/`).
4. Click **Run NPM Install**.
5. Click **Restart App**.

`server.js` automatically listens to `process.env.PORT` assigned by cPanel Phusion Passenger / Hostinger and serves the production `dist/` directory with health checks and SPA routing.
