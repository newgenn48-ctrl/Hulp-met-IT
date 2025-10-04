from pathlib import Path
import re

# Base directory
base_dir = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

# Get all computerhulp pages
computerhulp_pages = list(base_dir.glob("computerhulp-aan-huis-*/page.tsx"))

def remove_services_section(page_path):
    """Remove the Onze Services section from SEO content"""
    content = page_path.read_text(encoding='utf-8')

    # Pattern to match the services grid section
    # Remove the second <div className="glass-effect..."> containing "Onze Services"
    pattern = r'\n\s*<div className="glass-effect rounded-lg p-6">\s*<h3 className="text-xl font-semibold text-secondary-800 mb-4">💻 Onze Services [^<]+</h3>\s*<ul className="text-secondary-700 space-y-2">\s*(?:<li>[^<]*</li>\s*)+</ul>\s*</div>'

    new_content = re.sub(pattern, '', content)

    # Also need to remove the grid layout if only one item remains
    # Change grid md:grid-cols-2 to just single column when services removed
    if new_content != content:
        new_content = new_content.replace(
            '<div className="grid md:grid-cols-2 gap-8 mb-8">',
            '<div className="max-w-2xl mx-auto mb-8">'
        )

    if new_content != content:
        page_path.write_text(new_content, encoding='utf-8')
        return True
    return False

# Process all pages
removed = 0
for page_path in computerhulp_pages:
    city_slug = page_path.parent.name.replace('computerhulp-aan-huis-', '')
    if remove_services_section(page_path):
        print(f"Removed: {city_slug}")
        removed += 1

print(f"\nRemoved services section from {removed}/{len(computerhulp_pages)} pages")
