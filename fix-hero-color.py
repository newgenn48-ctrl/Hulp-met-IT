from pathlib import Path

# Base directory
base_dir = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

# Get all computerhulp pages
computerhulp_pages = list(base_dir.glob("computerhulp-aan-huis-*/page.tsx"))

def fix_hero_color(page_path):
    """Fix hero city name color from dark to light"""
    content = page_path.read_text(encoding='utf-8')

    # Replace text-secondary-800 with text-secondary-400 in hero section
    # The pattern is: <span className="text-secondary-800">{CityName}</span>
    # This appears after <span className="text-white drop-shadow-lg">Computerhulp aan Huis</span>

    # Find and replace the specific pattern in hero
    import re

    # Pattern: text-white drop-shadow-lg">Computerhulp aan Huis</span> followed by city name with text-secondary-800
    pattern = r'(<span className="text-white drop-shadow-lg">Computerhulp aan Huis</span>\s*<br />\s*<span className=")text-secondary-800(">[^<]+</span>)'
    replacement = r'\1text-secondary-400\2'

    new_content = re.sub(pattern, replacement, content)

    if new_content != content:
        page_path.write_text(new_content, encoding='utf-8')
        return True
    return False

# Process all pages
fixed = 0
for page_path in computerhulp_pages:
    city_name = page_path.parent.name.replace('computerhulp-aan-huis-', '')
    if fix_hero_color(page_path):
        print(f"Fixed: {city_name}")
        fixed += 1

print(f"\nFixed {fixed}/{len(computerhulp_pages)} hero colors")
