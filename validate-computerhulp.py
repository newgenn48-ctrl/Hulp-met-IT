#!/usr/bin/env python3
"""
Valideer ALLE 38 computerhulp-aan-huis pagina's op SEO optimalisaties
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

def validate_page(city_slug, city_name):
    """Valideer alle SEO optimalisaties voor een stad pagina"""
    page_path = BASE_PATH / f"computerhulp-aan-huis-{city_slug}" / "page.tsx"
    layout_path = BASE_PATH / f"computerhulp-aan-huis-{city_slug}" / "layout.tsx"

    if not page_path.exists() or not layout_path.exists():
        return {"status": "FAIL", "reason": "Files not found"}

    page_content = page_path.read_text(encoding='utf-8')
    layout_content = layout_path.read_text(encoding='utf-8')

    issues = []
    score = 100

    # CHECK 1: Meta title correct
    expected_title = f"'Computerhulp aan huis {city_name} | Hulp Met IT'"
    if expected_title not in layout_content:
        issues.append("Incorrect meta title")
        score -= 10

    # CHECK 2: Meta description starts with keyword
    expected_desc_start = f"'Computerhulp aan huis in {city_name}"
    if expected_desc_start not in layout_content:
        issues.append("Meta description doesn't start with keyword")
        score -= 10

    # CHECK 3: Breadcrumb Schema
    if '"@type": "BreadcrumbList"' not in page_content:
        issues.append("Missing Breadcrumb Schema")
        score -= 10

    # CHECK 4: Breadcrumbs Navigation
    if 'aria-label="Breadcrumb"' not in page_content:
        issues.append("Missing Breadcrumbs navigation")
        score -= 5

    # CHECK 5: Background image
    if 'computerhulp-aan-huis.webp' not in page_content:
        issues.append("Missing background image")
        score -= 10

    # CHECK 6: FAQ Schema
    if '"@type": "FAQPage"' not in page_content:
        issues.append("Missing FAQ Schema")
        score -= 15

    # CHECK 7: No FloatingDevices
    if 'FloatingDevices' in page_content:
        issues.append("FloatingDevices still present")
        score -= 10

    # CHECK 8: No TrustSignals
    if 'TrustSignals' in page_content:
        issues.append("TrustSignals still present")
        score -= 5

    # CHECK 9: No Windows11UrgentSection
    if 'Windows11UrgentSection' in page_content:
        issues.append("Windows11UrgentSection still present")
        score -= 3

    # CHECK 10: AlternateName in schema
    if '"alternateName"' not in page_content:
        issues.append("Missing alternateName in schema")
        score -= 5

    # CHECK 11: ServiceType correct
    if f'"serviceType": "Computerhulp aan huis {city_name}"' not in page_content:
        issues.append("Incorrect serviceType")
        score -= 8

    # CHECK 12: AreaServed single city
    if '"areaServed": { "@type": "City"' not in page_content:
        issues.append("AreaServed not single city format")
        score -= 5

    # CHECK 13: White text in hero
    if 'text-white drop-shadow-lg' not in page_content:
        issues.append("Hero text not white")
        score -= 5

    # CHECK 14: 10+ jaar ervaring
    if '10+ jaar ervaring' not in page_content:
        issues.append("Missing 10+ jaar ervaring")
        score -= 3

    # CHECK 15: pt-20 padding
    if 'pt-20' not in page_content:
        issues.append("Missing pt-20 mobile padding")
        score -= 2

    if issues:
        return {"status": "ISSUES", "issues": issues, "score": score}
    else:
        return {"status": "PERFECT", "score": 100}

def validate_template():
    """Valideer template pagina"""
    page_path = BASE_PATH / "computerhulp-aan-huis" / "page.tsx"
    layout_path = BASE_PATH / "computerhulp-aan-huis" / "layout.tsx"

    if not page_path.exists() or not layout_path.exists():
        return {"status": "FAIL", "reason": "Template files not found"}

    page_content = page_path.read_text(encoding='utf-8')
    layout_content = layout_path.read_text(encoding='utf-8')

    issues = []
    score = 100

    # Basis checks
    if '"@type": "BreadcrumbList"' not in page_content:
        issues.append("Missing Breadcrumb Schema")
        score -= 10

    if 'computerhulp-aan-huis.webp' not in page_content:
        issues.append("Missing background image")
        score -= 10

    if '"@type": "FAQPage"' not in page_content:
        issues.append("Missing FAQ Schema")
        score -= 15

    if 'FloatingDevices' in page_content:
        issues.append("FloatingDevices still present")
        score -= 10

    if '10+ jaar ervaring' not in page_content:
        issues.append("Missing 10+ jaar ervaring")
        score -= 5

    if issues:
        return {"status": "ISSUES", "issues": issues, "score": score}
    else:
        return {"status": "PERFECT", "score": 100}

def main():
    print("=" * 90)
    print("SEO VALIDATIE - COMPUTERHULP AAN HUIS - 38 PAGINA'S")
    print("=" * 90)
    print()

    # Validate template first
    print("TEMPLATE PAGINA:")
    print("-" * 90)
    template_result = validate_template()
    if template_result["status"] == "PERFECT":
        print(f"[PERFECT] Template                     - Score: 100/100")
    elif template_result["status"] == "ISSUES":
        print(f"[ISSUES]  Template                     - Score: {template_result['score']}/100")
        for issue in template_result["issues"]:
            print(f"           - {issue}")
    else:
        print(f"[FAIL]    Template                     - {template_result['reason']}")

    print()
    print("STAD PAGINA'S:")
    print("-" * 90)

    total_score = 0
    perfect_count = 0
    issues_count = 0
    fail_count = 0

    for city_slug, city_name in CITIES.items():
        result = validate_page(city_slug, city_name)

        if result["status"] == "PERFECT":
            print(f"[PERFECT] {city_name:30} - Score: 100/100")
            perfect_count += 1
            total_score += 100
        elif result["status"] == "ISSUES":
            print(f"[ISSUES]  {city_name:30} - Score: {result['score']}/100")
            for issue in result["issues"]:
                print(f"           - {issue}")
            issues_count += 1
            total_score += result["score"]
        else:
            print(f"[FAIL]    {city_name:30} - {result['reason']}")
            fail_count += 1

    print()
    print("=" * 90)
    print(f"TOTAAL RESULTAAT:")
    print(f"  Perfect: {perfect_count}/37")
    print(f"  Issues:  {issues_count}/37")
    print(f"  Failed:  {fail_count}/37")

    if perfect_count + issues_count > 0:
        avg_score = total_score / (perfect_count + issues_count)
        print(f"  Gemiddelde score: {avg_score:.1f}/100")

    print("=" * 90)

    if perfect_count == 37:
        print("\n           ALLE 37 STAD PAGINA'S ZIJN PERFECT GEOPTIMALISEERD!")
    elif issues_count + perfect_count == 37:
        print("\nAlle pagina's succesvol verwerkt, maar sommige hebben kleine issues")
    else:
        print(f"\n{fail_count} pagina's hebben ernstige problemen - review nodig")

if __name__ == "__main__":
    main()
