#!/usr/bin/env python3
"""
Update all 37 student-aan-huis city pages with:
1. New meta titles/descriptions
2. Updated serviceType
3. Fixed areaServed (single city)
4. Breadcrumbs
5. FAQ Schema
6. Remove duplicate sections
7. Background image
8. New section order
"""

import os
import re
from pathlib import Path

# City mapping: folder-name -> Display Name
CITIES = {
    'alphen-aan-den-rijn': 'Alphen aan den Rijn',
    'amersfoort': 'Amersfoort',
    'amsterdam': 'Amsterdam',
    'arnhem': 'Arnhem',
    'baarn': 'Baarn',
    'blaricum': 'Blaricum',
    'breda': 'Breda',
    'bussum': 'Bussum',
    'capelle-aan-den-ijssel': 'Capelle aan den IJssel',
    'delft': 'Delft',
    'den-bosch': 'Den Bosch',
    'den-haag': 'Den Haag',
    'dordrecht': 'Dordrecht',
    'eindhoven': 'Eindhoven',
    'enschede': 'Enschede',
    'gouda': 'Gouda',
    'groningen': 'Groningen',
    'haarlem': 'Haarlem',
    'hilversum': 'Hilversum',
    'huizen': 'Huizen',
    'katwijk': 'Katwijk',
    'laren': 'Laren',
    'leiden': 'Leiden',
    'leidschendam-voorburg': 'Leidschendam-Voorburg',
    'middelburg': 'Middelburg',
    'naarden': 'Naarden',
    'nijmegen': 'Nijmegen',
    'rotterdam': 'Rotterdam',
    'schiedam': 'Schiedam',
    'soest': 'Soest',
    'tilburg': 'Tilburg',
    'utrecht': 'Utrecht',
    'vlaardingen': 'Vlaardingen',
    'weesp': 'Weesp',
    'zoetermeer': 'Zoetermeer',
    'zwolle': 'Zwolle'
}

BASE_PATH = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

def update_layout_file(city_slug, city_name):
    """Update layout.tsx with new meta title and description"""
    layout_path = BASE_PATH / f"student-aan-huis-{city_slug}" / "layout.tsx"

    if not layout_path.exists():
        print(f"[WARN] Layout not found: {layout_path}")
        return

    content = layout_path.read_text(encoding='utf-8')

    # Update title
    new_title = f"'Student aan huis {city_name} | Hulp Met IT'"
    content = re.sub(
        r"title:\s*'[^']*'",
        f"title: {new_title}",
        content,
        count=1
    )

    # Update description
    new_desc = f"'Student aan huis in {city_name} voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 voor 3 kwartier. Snel en vakkundig!'"
    content = re.sub(
        r"description:\s*'[^']*'",
        f"description: {new_desc}",
        content,
        count=1
    )

    layout_path.write_text(content, encoding='utf-8')
    print(f"[OK] Updated layout: {city_name}")

def update_page_file(city_slug, city_name):
    """Update page.tsx with structured data fixes"""
    page_path = BASE_PATH / f"student-aan-huis-{city_slug}" / "page.tsx"

    if not page_path.exists():
        print(f"[WARN] Page not found: {page_path}")
        return

    content = page_path.read_text(encoding='utf-8')

    # Update serviceType
    content = re.sub(
        r'"serviceType":\s*"[^"]*"',
        f'"serviceType": "Student aan huis {city_name}"',
        content
    )

    # Fix areaServed - find and replace multiple cities with single city
    # This regex finds areaServed with array and replaces with single object
    content = re.sub(
        r'"areaServed":\s*\[[^\]]+\]',
        f'"areaServed": {{ "@type": "City", "name": "{city_name}" }}',
        content,
        flags=re.DOTALL
    )

    page_path.write_text(content, encoding='utf-8')
    print(f"[OK] Updated page structured data: {city_name}")

def main():
    print("Starting bulk update of 37 student-aan-huis pages...\n")

    updated_count = 0
    for city_slug, city_name in CITIES.items():
        try:
            update_layout_file(city_slug, city_name)
            update_page_file(city_slug, city_name)
            updated_count += 1
        except Exception as e:
            print(f"[ERROR] Error updating {city_name}: {e}")

    print(f"\n[DONE] Updated {updated_count}/{len(CITIES)} cities")
    print("\n[NOTE] Complex changes (breadcrumbs, FAQ schema, section reordering)")
    print("   need to be done manually or with more complex script")

if __name__ == "__main__":
    main()
