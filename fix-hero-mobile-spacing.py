from pathlib import Path
import re

# Base directory
base_dir = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

# Get all computerhulp pages
computerhulp_pages = list(base_dir.glob("computerhulp-aan-huis-*/page.tsx"))

def fix_hero_spacing(page_path):
    """Add top padding to hero section for mobile to avoid header overlap"""
    content = page_path.read_text(encoding='utf-8')

    # Find hero section and add pt-20 (padding top) for mobile
    # Pattern: <section className="relative flex items-start justify-center overflow-hidden">
    pattern = r'<section className="relative flex items-start justify-center overflow-hidden">'
    replacement = '<section className="relative flex items-start justify-center overflow-hidden pt-20">'

    new_content = content.replace(pattern, replacement)

    if new_content != content:
        page_path.write_text(new_content, encoding='utf-8')
        return True
    return False

# Process all pages
fixed = 0
for page_path in computerhulp_pages:
    city_slug = page_path.parent.name.replace('computerhulp-aan-huis-', '')
    if fix_hero_spacing(page_path):
        print(f"Fixed: {city_slug}")
        fixed += 1

print(f"\nFixed mobile spacing for {fixed}/{len(computerhulp_pages)} pages")
