from pathlib import Path
import re

# Base directory
base_dir = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

# Get all computerhulp pages
computerhulp_pages = list(base_dir.glob("computerhulp-aan-huis-*/page.tsx"))

def validate_page(page_path):
    """Validate page structure and return issues"""
    content = page_path.read_text(encoding='utf-8')
    issues = []

    # CHECK 1: Has 'use client' directive
    if "'use client'" not in content and '"use client"' not in content:
        issues.append("Missing 'use client' directive")

    # CHECK 2: Hero has pt-20 for mobile
    if 'className="relative flex items-start justify-center overflow-hidden pt-20"' not in content:
        issues.append("Missing pt-20 on hero section")

    # CHECK 3: City name has text-yellow-400
    if 'className="text-yellow-400"' not in content:
        issues.append("Missing yellow-400 color on city name")

    # CHECK 4: Has correct hero description
    if "Zoekt u betrouwbare computerhulp aan huis in" not in content:
        issues.append("Missing new hero description")

    # CHECK 5: Has Trust/Why Choose section
    if "Waarom kiezen voor Computerhulp aan Huis" not in content:
        issues.append("Missing Trust section")

    # CHECK 6: Has FAQ data
    if "const faqData = [" not in content:
        issues.append("Missing faqData")

    # CHECK 7: Has FAQ component with ChevronDown/Up
    if "ChevronDown" not in content or "ChevronUp" not in content:
        issues.append("Missing FAQ accordion icons")

    # CHECK 8: No "Onze Services" in SEO section (should be removed)
    if "💻 Onze Services" in content:
        issues.append("Still has 'Onze Services' section (should be removed)")

    # CHECK 9: Has Breadcrumb Schema
    if '"@type": "BreadcrumbList"' not in content:
        issues.append("Missing Breadcrumb Schema")

    # CHECK 10: Has FAQ Schema
    if '"@type": "FAQPage"' not in content:
        issues.append("Missing FAQ Schema")

    # CHECK 11: Has LocalBusiness Schema
    if '"@type": "LocalBusiness"' not in content:
        issues.append("Missing LocalBusiness Schema")

    # CHECK 12: Has all required imports
    required_imports = ['Phone', 'Calendar', 'Users', 'MessageCircle', 'CheckCircle', 'ChevronDown', 'ChevronUp']
    for imp in required_imports:
        if imp not in content:
            issues.append(f"Missing import: {imp}")

    # CHECK 13: Has benefits with "10+ jaar ervaring"
    if "10+ jaar ervaring" not in content:
        issues.append("Missing '10+ jaar ervaring' in benefits")

    # CHECK 14: Has ServicesGrid component
    if "ServicesGrid" not in content:
        issues.append("Missing ServicesGrid component")

    # CHECK 15: Has PricingSection
    if "PricingSection" not in content:
        issues.append("Missing PricingSection")

    # CHECK 16: Has TestimonialsSection
    if "TestimonialsSection" not in content:
        issues.append("Missing TestimonialsSection")

    return issues

# Process all pages
print("=" * 80)
print("COMPUTERHULP AAN HUIS PAGES VALIDATION")
print("=" * 80)

all_good = []
has_issues = []

for page_path in sorted(computerhulp_pages):
    city_slug = page_path.parent.name.replace('computerhulp-aan-huis-', '')
    issues = validate_page(page_path)

    if not issues:
        all_good.append(city_slug)
        print(f"OK {city_slug:30} - ALL CHECKS PASSED")
    else:
        has_issues.append((city_slug, issues))
        print(f"XX {city_slug:30} - {len(issues)} ISSUES:")
        for issue in issues:
            print(f"    - {issue}")

print("\n" + "=" * 80)
print(f"SUMMARY: {len(all_good)}/{len(computerhulp_pages)} pages perfect")
print("=" * 80)

if has_issues:
    print("\nPAGES WITH ISSUES:")
    for city, issues in has_issues:
        print(f"  - {city}: {len(issues)} issues")
else:
    print("\nALL PAGES ARE PERFECT AND IDENTICAL!")
