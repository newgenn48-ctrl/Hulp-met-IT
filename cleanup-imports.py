#!/usr/bin/env python3
"""
Clean up imports - only import icons that are actually used
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

# Minimal imports - alleen wat echt gebruikt wordt in benefits
MINIMAL_IMPORTS = """'use client'

import { ServicesGrid } from '@/components/services/ServicesGrid'
import { PricingSection } from '@/components/home/PricingSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { useState } from 'react'
import Link from 'next/link'
import {
  Phone,
  Calendar,
  Users,
  MessageCircle,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
"""

def cleanup_imports(city_slug):
    """Replace imports with minimal set"""
    page_path = BASE_PATH / f"computerhulp-aan-huis-{city_slug}" / "page.tsx"

    if not page_path.exists():
        return False

    content = page_path.read_text(encoding='utf-8')

    # Find where benefits start
    import re
    pattern = r"^.*?(?=const benefits)"

    content = re.sub(pattern, MINIMAL_IMPORTS + '\n', content, flags=re.DOTALL)

    page_path.write_text(content, encoding='utf-8')
    return True

def main():
    print("Cleaning up imports in 37 stad pagina's...")

    success = 0
    for city_slug in CITIES.keys():
        if cleanup_imports(city_slug):
            print(f"[OK] {city_slug}")
            success += 1
        else:
            print(f"[FAIL] {city_slug}")

    print(f"\nDone: {success}/37")

if __name__ == "__main__":
    main()
