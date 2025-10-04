#!/usr/bin/env python3
"""
Fix import syntax errors in alle computerhulp-aan-huis stad pagina's
"""

import re
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

CORRECT_IMPORTS = """import { ServicesGrid } from '@/components/services/ServicesGrid'
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
  GraduationCap,
  Zap,
  Euro,
  Shield,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
"""

def fix_imports(city_slug, city_name):
    """Fix import statements in een stad pagina"""
    page_path = BASE_PATH / f"computerhulp-aan-huis-{city_slug}" / "page.tsx"

    if not page_path.exists():
        return False

    content = page_path.read_text(encoding='utf-8')

    # Vind waar de imports stoppen (tot en met from 'lucide-react')
    # en vervang alles tot daar met correcte imports

    # Match tot eerste const declaration
    pattern = r'^.*?(?=const benefits)'

    replacement = CORRECT_IMPORTS + '\n'

    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    page_path.write_text(content, encoding='utf-8')
    return True

def main():
    print("=" * 70)
    print("FIXING IMPORT SYNTAX ERRORS - 37 COMPUTERHULP STAD PAGINA'S")
    print("=" * 70)
    print()

    success = 0
    failed = 0

    for city_slug, city_name in CITIES.items():
        try:
            if fix_imports(city_slug, city_name):
                print(f"[OK] {city_name}")
                success += 1
            else:
                print(f"[FAIL] {city_name} - File not found")
                failed += 1
        except Exception as e:
            print(f"[ERROR] {city_name} - {str(e)}")
            failed += 1

    print()
    print("=" * 70)
    print(f"Resultaat: {success} fixed, {failed} failed")
    print("=" * 70)

    if failed == 0:
        print("\nAlle imports succesvol gefixed!")

if __name__ == "__main__":
    main()
