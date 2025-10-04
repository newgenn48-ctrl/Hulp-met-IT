from pathlib import Path
import re

# Base directory
base_dir = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

# Get all computerhulp pages including template
computerhulp_pages = list(base_dir.glob("computerhulp-aan-huis*/page.tsx"))

def fix_city_color(page_path):
    """Change city name color to bright yellow/gold for better visibility"""
    content = page_path.read_text(encoding='utf-8')

    # Replace text-secondary-400 with text-yellow-400 (bright and visible on dark background)
    pattern = r'(<span className=")text-secondary-400(">.*?</span>)'
    replacement = r'\1text-yellow-400\2'

    new_content = re.sub(pattern, replacement, content)

    if new_content != content:
        page_path.write_text(new_content, encoding='utf-8')
        return True
    return False

# Process all pages
fixed = 0
for page_path in computerhulp_pages:
    city_slug = page_path.parent.name
    if fix_city_color(page_path):
        print(f"Fixed: {city_slug}")
        fixed += 1

print(f"\nFixed {fixed} city name colors to bright yellow")
