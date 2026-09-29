#!/usr/bin/env python3
import os
import zipfile
import shutil

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

def zip_directory(source_dir, relative_to_parent, output_zips):
    for output_zip in output_zips:
        os.makedirs(os.path.dirname(output_zip), exist_ok=True)
        with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(source_dir):
                for file in files:
                    filepath = os.path.join(root, file)
                    relpath = os.path.relpath(filepath, relative_to_parent)
                    zipf.write(filepath, relpath)
        print(f"Created: {output_zip} ({os.path.getsize(output_zip):,} bytes)")

theme_dir = os.path.join(ROOT_DIR, 'wordpress', 'themes', 'xweba-theme')
theme_parent = os.path.join(ROOT_DIR, 'wordpress', 'themes')
theme_outputs = [
    os.path.join(ROOT_DIR, 'dist', 'xweba-theme.zip'),
    os.path.join(ROOT_DIR, 'wordpress', 'xweba-theme.zip')
]

print("Packaging Theme...")
zip_directory(theme_dir, theme_parent, theme_outputs)

plugin_dir = os.path.join(ROOT_DIR, 'wordpress', 'plugins', 'xweba-embed')
plugin_parent = os.path.join(ROOT_DIR, 'wordpress', 'plugins')
plugin_outputs = [
    os.path.join(ROOT_DIR, 'dist', 'xweba-plugin.zip'),
    os.path.join(ROOT_DIR, 'wordpress', 'xweba-plugin.zip')
]

print("Packaging Plugin...")
zip_directory(plugin_dir, plugin_parent, plugin_outputs)
