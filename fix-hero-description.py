from pathlib import Path
import re

# Base directory
base_dir = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

# Get all computerhulp pages
computerhulp_pages = list(base_dir.glob("computerhulp-aan-huis-*/page.tsx"))

def get_city_name_from_content(content):
    """Extract city name from the h1 tag"""
    match = re.search(r'<span className="text-secondary-400">([^<]+)</span>', content)
    if match:
        return match.group(1)
    return None

def update_hero_description(page_path):
    """Update hero description to new text"""
    content = page_path.read_text(encoding='utf-8')

    city_name = get_city_name_from_content(content)
    if not city_name:
        return False

    new_description = f'Zoekt u betrouwbare computerhulp aan huis in {city_name}? Onze ervaren en vriendelijke specialisten komen bij u thuis en helpen u rustig en duidelijk, zodat alles weer werkt zoals het hoort.'

    # Pattern: <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-6 leading-relaxed">
    #          Current text with spans
    #          </p>

    pattern = r'(<p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-6 leading-relaxed">)[^<]*(?:<span[^>]*>[^<]*</span>)*[^<]*?(</p>)'

    replacement = rf'\1{new_description}\2'

    new_content = re.sub(pattern, replacement, content)

    if new_content != content:
        page_path.write_text(new_content, encoding='utf-8')
        return True
    return False

# Process all pages
fixed = 0
for page_path in computerhulp_pages:
    city_slug = page_path.parent.name.replace('computerhulp-aan-huis-', '')
    if update_hero_description(page_path):
        print(f"Fixed: {city_slug}")
        fixed += 1
    else:
        print(f"Skipped: {city_slug}")

print(f"\nFixed {fixed}/{len(computerhulp_pages)} hero descriptions")
