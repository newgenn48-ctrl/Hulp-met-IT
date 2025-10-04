#!/usr/bin/env python3
"""
Validate ALL changes applied to 36 student-aan-huis city pages
"""

import re
from pathlib import Path

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

def validate_page(city_slug, city_name):
    """Validate all required changes for a city page"""
    page_path = BASE_PATH / f"student-aan-huis-{city_slug}" / "page.tsx"
    layout_path = BASE_PATH / f"student-aan-huis-{city_slug}" / "layout.tsx"

    if not page_path.exists():
        return {"status": "FAIL", "reason": "Page not found"}

    if not layout_path.exists():
        return {"status": "FAIL", "reason": "Layout not found"}

    page_content = page_path.read_text(encoding='utf-8')
    layout_content = layout_path.read_text(encoding='utf-8')

    issues = []

    # CHECK 1: No FloatingDevices import
    if 'FloatingDevices' in page_content:
        issues.append("FloatingDevices still present")

    # CHECK 2: No TrustSignals import/usage
    if 'TrustSignals' in page_content:
        issues.append("TrustSignals still present")

    # CHECK 3: Has Breadcrumb Schema
    if '"@type": "BreadcrumbList"' not in page_content:
        issues.append("Missing Breadcrumb Schema")

    # CHECK 4: Has Breadcrumbs navigation
    if 'aria-label="Breadcrumb"' not in page_content:
        issues.append("Missing Breadcrumbs navigation")

    # CHECK 5: Has background image hero
    if 'student-aan-huis.webp' not in page_content:
        issues.append("Missing background image")

    # CHECK 6: Has FAQ Schema
    if '"@type": "FAQPage"' not in page_content:
        issues.append("Missing FAQ Schema")

    # CHECK 7: Meta title format correct
    expected_title = f"'Student aan huis {city_name} | Hulp Met IT'"
    if expected_title not in layout_content:
        issues.append(f"Incorrect meta title (expected: {expected_title})")

    # CHECK 8: Meta description starts correctly
    expected_desc_start = f"'Student aan huis in {city_name}"
    if expected_desc_start not in layout_content:
        issues.append(f"Meta description doesn't start with keyword")

    # CHECK 9: serviceType correct
    expected_service = f'"serviceType": "Student aan huis {city_name}"'
    if expected_service not in page_content:
        issues.append("Incorrect serviceType")

    # CHECK 10: areaServed is single city
    if '"areaServed": { "@type": "City", "name": "' + city_name + '" }' not in page_content:
        # Some might have different formatting
        if f'"name": "{city_name}"' not in page_content or '"areaServed": [' in page_content:
            issues.append("areaServed not single city")

    # CHECK 11: White text in hero
    if 'text-white drop-shadow-lg' not in page_content:
        issues.append("Hero text not white")

    # CHECK 12: Hero has pt-20 padding
    if 'pt-20' not in page_content:
        issues.append("Missing pt-20 padding for mobile header")

    if issues:
        return {"status": "ISSUES", "issues": issues}
    else:
        return {"status": "OK"}

def main():
    print("=" * 80)
    print("VALIDATING ALL 36 STUDENT-AAN-HUIS CITY PAGES")
    print("=" * 80)
    print()

    all_ok = True
    issues_count = 0
    ok_count = 0

    for city_slug, city_name in CITIES.items():
        result = validate_page(city_slug, city_name)

        if result["status"] == "OK":
            print(f"[OK] {city_name:30} - All checks passed")
            ok_count += 1
        elif result["status"] == "ISSUES":
            print(f"[WARN] {city_name:30} - Issues found:")
            for issue in result["issues"]:
                print(f"       - {issue}")
            issues_count += 1
            all_ok = False
        else:
            print(f"[FAIL] {city_name:30} - {result['reason']}")
            all_ok = False

    print()
    print("=" * 80)
    print(f"VALIDATION COMPLETE")
    print(f"  OK: {ok_count}/36")
    print(f"  Issues: {issues_count}/36")
    print("=" * 80)

    if all_ok:
        print("\nALL PAGES VALIDATED SUCCESSFULLY!")
    else:
        print("\nSome pages have issues - review above")

if __name__ == "__main__":
    main()
