#!/usr/bin/env python3
"""
Update all 36 student-aan-huis city pages with background image hero section.
"""

import os
import re
from pathlib import Path

# City mapping
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

# Old hero section pattern to find (with FloatingDevices)
OLD_HERO_PATTERN = re.compile(
    r'<section className="hero-section relative flex items-start justify-center overflow-hidden">\s*'
    r'<FloatingDevices />\s*'
    r'<div className="relative z-10 max-w-6xl mx-auto container-padding text-center">',
    re.DOTALL
)

# Alternative pattern without FloatingDevices
OLD_HERO_PATTERN_ALT = re.compile(
    r'<section className="hero-section relative flex items-start justify-center overflow-hidden">\s*'
    r'<div className="relative z-10 max-w-6xl mx-auto container-padding text-center">',
    re.DOTALL
)

def update_hero_section(city_slug, city_name):
    """Replace old hero section with new background image version"""
    page_path = BASE_PATH / f"student-aan-huis-{city_slug}" / "page.tsx"

    if not page_path.exists():
        print(f"[SKIP] File not found: {page_path}")
        return False

    content = page_path.read_text(encoding='utf-8')

    # Remove FloatingDevices import if exists
    content = re.sub(
        r"import \{ FloatingDevices \} from '@/components/three/FloatingDevices'\n?",
        "",
        content
    )

    # Find the hero section opening tag and replace
    # Match: <section className="hero-section...">
    # Replace with new structure including background

    # Pattern to match the hero section start
    old_section_start = r'<section className="hero-section relative flex items-start justify-center overflow-hidden">'

    new_section_start = f'''<section className="relative flex items-start justify-center overflow-hidden min-h-[600px] lg:min-h-[700px] pt-20">
        {{/* Background Image with Overlay */}}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{{{
              backgroundImage: 'url(/images/student-aan-huis/student-aan-huis.webp)',
              filter: 'brightness(0.7) contrast(1.1)'
            }}}}
          />
          {{/* Gradient Overlay for better text readability */}}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-primary-800/40 to-accent-900/30" />
        </div>'''

    # Replace hero section opening
    content = content.replace(old_section_start, new_section_start)

    # Remove <FloatingDevices /> line if it exists
    content = re.sub(r'\s*<FloatingDevices />\s*\n', '\n', content)

    # Update the inner div classes to match new structure
    # Change: <div className="relative z-10 max-w-6xl mx-auto container-padding text-center">
    # To: <div className="relative z-10 max-w-6xl mx-auto container-padding text-center flex items-center min-h-[600px] lg:min-h-[700px]">

    content = re.sub(
        r'<div className="relative z-10 max-w-6xl mx-auto container-padding text-center">',
        '<div className="relative z-10 max-w-6xl mx-auto container-padding text-center flex items-center min-h-[600px] lg:min-h-[700px]">\n          <div className="w-full">',
        content
    )

    # Update text colors from primary-700 to white with drop-shadow
    # H1 title
    content = re.sub(
        r'<span className="text-gradient">Student aan Huis ' + re.escape(city_name) + r'</span>',
        f'<span className="text-white drop-shadow-lg">Student aan Huis {city_name}</span>',
        content
    )

    # Paragraph text
    content = re.sub(
        r'<p className="text-xl lg:text-2xl text-primary-700',
        '<p className="text-xl lg:text-2xl text-white',
        content
    )

    # City name in paragraph (remove font-semibold styling)
    content = re.sub(
        r'<span className="text-primary-700 font-semibold">',
        '<span className="font-semibold">',
        content
    )

    # Benefits badges - update styling
    content = re.sub(
        r'className="flex items-center space-x-3 text-lg text-primary-700"',
        'className="flex items-center space-x-3 text-lg text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"',
        content
    )

    # Icon colors in benefits
    content = re.sub(
        r'<IconComponent className="w-6 h-6 text-primary-700" />',
        '<IconComponent className="w-6 h-6 text-white" />',
        content
    )

    # Span text in benefits
    content = re.sub(
        r'<span>\{benefit\.text\}</span>',
        '<span className="drop-shadow-sm">{benefit.text}</span>',
        content
    )

    # CTA buttons - add shadow
    content = re.sub(
        r'<Link href="/afspraak" className="btn-cta">',
        '<Link href="/afspraak" className="btn-cta shadow-2xl hover:shadow-3xl transition-shadow">',
        content
    )

    content = re.sub(
        r'<a href="tel:\+31642827860" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center">',
        '<a href="tel:+31642827860" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow bg-white/95 hover:bg-white">',
        content
    )

    # Close the extra wrapper div we added
    # Find the closing of the hero section and add extra </div>
    # Pattern: </div>\s*</section> where this is the hero section close
    # We need to find the hero section specifically

    # Add closing div tag before hero section close
    # Find: </div> followed by </section> that closes hero
    # This is tricky - we need to find the right closing tags

    # Better approach: find where buttons end and add closing div there
    content = re.sub(
        r'(</a>\s*</div>\s*)(</div>\s*</section>)',
        r'\1</div>\n        \2',
        content,
        count=1  # Only replace first occurrence (hero section)
    )

    page_path.write_text(content, encoding='utf-8')
    return True

def main():
    print("Starting hero background image update for 36 city pages...")
    print("=" * 60)

    success_count = 0
    fail_count = 0

    for city_slug, city_name in CITIES.items():
        try:
            if update_hero_section(city_slug, city_name):
                print(f"[OK] Updated: {city_name}")
                success_count += 1
            else:
                print(f"[FAIL] Failed: {city_name}")
                fail_count += 1
        except Exception as e:
            print(f"[ERROR] {city_name}: {str(e)}")
            fail_count += 1

    print("=" * 60)
    print(f"Completed: {success_count} successful, {fail_count} failed")
    print("Hero background image update finished!")

if __name__ == "__main__":
    main()
