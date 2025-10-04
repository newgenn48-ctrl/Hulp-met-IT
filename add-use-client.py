#!/usr/bin/env python3
"""
Voeg 'use client' directive toe aan alle computerhulp stad pagina's
"""

from pathlib import Path

CITIES = {
    'almere': 'Almere',
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

def add_use_client(city_slug):
    """Voeg 'use client' toe aan begin van file"""
    page_path = BASE_PATH / f"computerhulp-aan-huis-{city_slug}" / "page.tsx"

    if not page_path.exists():
        return False

    content = page_path.read_text(encoding='utf-8')

    # Check if already has 'use client'
    if "'use client'" in content or '"use client"' in content:
        return True  # Already has it

    # Add at the very beginning
    content = "'use client'\n\n" + content

    page_path.write_text(content, encoding='utf-8')
    return True

def main():
    print("Adding 'use client' to all 37 computerhulp stad pagina's...")

    success = 0
    for city_slug in CITIES.keys():
        if add_use_client(city_slug):
            print(f"[OK] {city_slug}")
            success += 1
        else:
            print(f"[FAIL] {city_slug}")

    print(f"\nDone: {success}/37")

if __name__ == "__main__":
    main()
