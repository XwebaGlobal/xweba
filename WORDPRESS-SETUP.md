# 🚀 WordPress Conversion & Deployment Guide

The **Xweba Global Studio** platform has been converted into a production-ready **WordPress Theme** and **WordPress Plugin**.

You have two simple ways to run this website on WordPress:
1. **Option A (Recommended): Full WordPress Theme (`xweba-theme.zip`)** — Replaces your active theme with the ultra-fast, edge-optimized Xweba platform.
2. **Option B: WordPress Plugin (`xweba-plugin.zip`)** — Keeps your current theme (Astra, Elementor, Divi, etc.) and embeds the complete Xweba platform into any page using the shortcode `[xweba_studio]`.

---

## 📁 Ready-to-Install Packages

Both ZIP packages are built and ready for 1-click upload in your WordPress admin:

| Package | Location | Use Case |
| :--- | :--- | :--- |
| **Full Theme** | `dist/xweba-theme.zip` or `wordpress/xweba-theme.zip` | Standalone high-performance portfolio website |
| **Plugin / Shortcode** | `dist/xweba-plugin.zip` or `wordpress/xweba-plugin.zip` | Embed on any existing WordPress page |

---

## 🛠️ Method 1: Install as a WordPress Theme (Recommended)

### Step 1: Upload the Theme in WordPress
1. Log into your WordPress Dashboard (`yourdomain.com/wp-admin`).
2. Navigate to **Appearance** → **Themes**.
3. Click **Add New Theme** at the top.
4. Click **Upload Theme**.
5. Click **Choose File** and select **`xweba-theme.zip`** (from `dist/` or `wordpress/`).
6. Click **Install Now**.
7. Once installed, click **Activate**.

### Step 2: Set Permalinks
1. In your WordPress admin, go to **Settings** → **Permalinks**.
2. Select **Post name** (`https://yourdomain.com/%postname%/`).
3. Click **Save Changes**.

---

## 🔌 Method 2: Install as a Plugin (Embed on Any Page)

If you already have a WordPress theme installed and want to embed Xweba on a specific page:

1. In WordPress admin, go to **Plugins** → **Add New Plugin**.
2. Click **Upload Plugin** at the top.
3. Choose **`xweba-plugin.zip`** and click **Install Now**.
4. Click **Activate Plugin**.
5. Create or edit any WordPress page (e.g. "Home" or "Studio").
6. Add a **Shortcode** block and enter:
   ```text
   [xweba_studio]
   ```
7. Publish the page.

---

## 📬 Lead Capture & Consultation Management

The WordPress conversion includes a built-in lead management system:

1. **WordPress REST API Integration**:
   - Submissions from the interactive **GEO Audit**, **Scope Calculator**, and **Discovery Brief** automatically submit to `/wp-json/xweba/v1/consultation`.
2. **Automatic Email Notifications**:
   - Dispatches a formatted notification email to your WordPress Administrator email (`get_option('admin_email')`).
3. **Built-in WP-Admin Dashboard ("Xweba Leads")**:
   - In your WordPress admin sidebar, click on **Xweba Leads** (`wp-admin/admin.php?page=xweba-inquiries`).
   - View all client consultation requests with name, work email, company, current website, service focus, budget tier, timeline, and brief notes.

---

## 📂 Manual FTP / File Manager Upload (Hostinger / cPanel)

If you prefer uploading directly via FTP or Hostinger File Manager:

### For Theme:
- Copy the folder `wordpress/themes/xweba-theme/` directly into:
  ```text
  public_html/wp-content/themes/xweba-theme/
  ```
- Then go to **WP-Admin → Appearance → Themes** and activate **Xweba Global Studio**.

### For Plugin:
- Copy the folder `wordpress/plugins/xweba-embed/` directly into:
  ```text
  public_html/wp-content/plugins/xweba-embed/
  ```
- Then go to **WP-Admin → Plugins** and activate **Xweba Studio Interactive Embed**.

---

## 🔄 Recompiling / Updating in the Future

Whenever you make changes to React components or styles, run:
```bash
npm run build:wordpress
```
This single command will:
1. Rebuild the production Vite assets.
2. Synchronize all CSS, JS, and image assets into the WordPress theme and plugin.
3. Repackage fresh `xweba-theme.zip` and `xweba-plugin.zip` files.
