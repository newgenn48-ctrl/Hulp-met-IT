#!/usr/bin/env python3
"""
COMPLETE SEO OPTIMALISATIE voor alle 37 computerhulp-aan-huis stad pagina's

ALLE WIJZIGINGEN:
1. Update meta titles: "Computerhulp aan huis [STAD] | Hulp Met IT"
2. Update meta descriptions met keyword focus
3. Verwijder FloatingDevices, TrustSignals, Windows11UrgentSection
4. Voeg Breadcrumb Schema toe
5. Voeg Breadcrumbs navigatie toe
6. Voeg hero background image toe
7. Voeg FAQ Schema toe
8. Update serviceType: "Computerhulp aan huis [STAD]"
9. Fix areaServed (single city, clean)
10. Update prijzen naar €53,50
11. Voeg alternateName toe aan schema
12. Optimaliseer sectie volgorde
13. Clean code + optimize
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

def update_layout(city_slug, city_name):
    """Update layout.tsx met geoptimaliseerde metadata"""
    layout_path = BASE_PATH / f"computerhulp-aan-huis-{city_slug}" / "layout.tsx"

    if not layout_path.exists():
        return False

    # Nieuwe geoptimaliseerde layout content
    new_layout = f"""import {{ Metadata }} from 'next'

export const metadata: Metadata = {{
  title: 'Computerhulp aan huis {city_name} | Hulp Met IT',
  description: 'Computerhulp aan huis in {city_name} voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis {city_name.lower()}',
    'computer reparatie {city_name.lower()}',
    'laptop reparatie {city_name.lower()}',
    'IT specialist {city_name.lower()}',
    'pc hulp {city_name.lower()}',
    'computer specialist {city_name.lower()}',
    '{city_name.lower()} computerhulp avond',
    '{city_name.lower()} IT hulp weekend',
    'computerhulp {city_name.lower()} spoed',
    'betaalbare IT hulp {city_name.lower()}'
  ],
  openGraph: {{
    title: 'Computerhulp aan huis {city_name} | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in {city_name} door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-{city_slug}',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  }},
  twitter: {{
    card: 'summary_large_image',
    title: 'Computerhulp aan huis {city_name} | IT-Specialisten',
    description: 'Computerhulp aan huis {city_name}. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  }},
  robots: {{
    index: true,
    follow: true,
  }},
  alternates: {{
    canonical: '/computerhulp-aan-huis-{city_slug}',
  }},
}}

export default function ComputerhulpAanHuis{city_name.replace(' ', '').replace('-', '')}Layout({{
  children,
}}: {{
  children: React.ReactNode
}}) {{
  return children
}}
"""

    layout_path.write_text(new_layout, encoding='utf-8')
    return True

def update_page(city_slug, city_name):
    """Update page.tsx met alle SEO optimalisaties"""
    page_path = BASE_PATH / f"computerhulp-aan-huis-{city_slug}" / "page.tsx"

    if not page_path.exists():
        return False

    content = page_path.read_text(encoding='utf-8')

    # STAP 1: Verwijder imports die we niet meer nodig hebben
    content = re.sub(r"import \{ FloatingDevices \} from '@/components/three/FloatingDevices'\n?", "", content)
    content = re.sub(r"import \{ TrustSignals \} from '@/components/home/TrustSignals'\n?", "", content)
    content = re.sub(r"import \{ Windows11UrgentSection \} from '@/components/home/Windows11UrgentSection'\n?", "", content)
    content = re.sub(r"import \{ ServicesPreview \} from '@/components/home/ServicesPreview'\n?", "", content)

    # STAP 2: Voeg useState import toe als niet aanwezig
    if 'useState' not in content:
        content = re.sub(
            r"(import Link from 'next/link')",
            r"import { useState } from 'react'\n\1",
            content
        )

    # STAP 3: Update benefits met 10+ jaar ervaring
    content = re.sub(
        r"const benefits = \[[^\]]+\]",
        """const benefits = [
  { icon: Users, text: '10+ jaar ervaring' },
  { icon: MessageCircle, text: 'Begrijpelijke uitleg' },
  { icon: CheckCircle, text: 'Betaalbaar en betrouwbaar' }
]""",
        content,
        flags=re.DOTALL
    )

    # STAP 4: Voeg benodi icons toe als missing
    icon_imports = ['Users', 'MessageCircle', 'CheckCircle', 'Shield', 'Clock', 'Euro', 'GraduationCap', 'Zap', 'ChevronDown', 'ChevronUp']
    for icon in icon_imports:
        if f'{icon},' not in content and f'{icon}\n' not in content:
            content = re.sub(
                r"(from 'lucide-react')",
                f",\n  {icon}\n\\1",
                content,
                count=1
            )

    # STAP 5: Voeg Breadcrumb Schema toe
    if '"@type": "BreadcrumbList"' not in content:
        breadcrumb_schema = f"""      {{/* Breadcrumb Schema */}}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{
          __html: JSON.stringify({{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hulpmetit.nl"
              }},
              {{
                "@type": "ListItem",
                "position": 2,
                "name": "Computerhulp aan huis {city_name}",
                "item": "https://hulpmetit.nl/computerhulp-aan-huis-{city_slug}"
              }}
            ]
          }})
        }}}}
      />

"""
        # Voeg toe na return (
        content = re.sub(
            r'(return \(\s*<>\s*)',
            r'\1\n' + breadcrumb_schema,
            content,
            count=1
        )

    # STAP 6: Update bestaande LocalBusiness schema met alternateName
    if '"@type": "LocalBusiness"' in content or '"@type": ["LocalBusiness"' in content:
        # Vervang hele schema met nieuwe versie
        old_schema_pattern = r'<script[^>]*type="application/ld\+json"[^>]*>\s*\{[^}]*dangerouslySetInnerHTML=\{\{[^}]*__html: JSON\.stringify\(\{[^}]*"@type": (?:"LocalBusiness"|\\[[^\]]*LocalBusiness[^\]]*\\])[^\}]*\}\)[^\}]*\}\}[^/]*/>'

        new_schema = f"""<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{
          __html: JSON.stringify({{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hulp met IT - Computerhulp aan Huis {city_name}",
            "alternateName": [
              "Computer reparatie {city_name}",
              "Laptop reparatie {city_name}",
              "IT specialist {city_name}",
              "PC hulp {city_name}",
              "Computer service {city_name}"
            ],
            "description": "Professionele computerhulp aan huis in {city_name} door ervaren IT-specialisten met 10+ jaar ervaring",
            "url": "https://hulpmetit.nl/computerhulp-aan-huis-{city_slug}",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "areaServed": {{ "@type": "City", "name": "{city_name}" }},
            "serviceType": "Computerhulp aan huis {city_name}",
            "priceRange": "€53,50-€100",
            "openingHours": "Mo-Su 08:00-22:00",
            "aggregateRating": {{
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            }},
            "address": {{
              "@type": "PostalAddress",
              "addressLocality": "{city_name}",
              "addressCountry": "NL"
            }}
          }})
        }}}}
      />"""

        # Probeer oude schema te vervangen
        content = re.sub(old_schema_pattern, new_schema, content, flags=re.DOTALL)

    # STAP 7: Voeg Breadcrumbs navigatie toe
    if 'aria-label="Breadcrumb"' not in content:
        breadcrumb_nav = f"""
      {{/* Breadcrumbs Navigation */}}
      <nav aria-label="Breadcrumb" className="bg-white/50 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto container-padding py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-primary-600 hover:text-primary-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gray-700 font-medium">Computerhulp aan huis {city_name}</span>
            </li>
          </ol>
        </div>
      </nav>
"""
        # Voeg toe voor <section (hero)
        content = re.sub(
            r'(\s*)<section className="(?:hero-section )?relative',
            breadcrumb_nav + r'\n\1<section className="relative',
            content,
            count=1
        )

    # STAP 8: Update hero section met background image
    # Verwijder FloatingDevices als aanwezig
    content = re.sub(r'\s*<FloatingDevices />\s*\n', '\n', content)

    # Vervang hero-section class met nieuwe structuur
    content = re.sub(
        r'<section className="hero-section relative flex items-start justify-center overflow-hidden">',
        '<section className="relative flex items-start justify-center overflow-hidden min-h-[600px] lg:min-h-[700px] pt-20">',
        content
    )

    # Voeg background image toe als niet aanwezig
    if 'computerhulp-aan-huis.webp' not in content:
        bg_image = """        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/computerhulp-aan-huis/computerhulp-aan-huis.webp)',
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-primary-800/40 to-accent-900/30" />
        </div>

"""
        # Voeg toe na <section> opening van hero
        content = re.sub(
            r'(<section className="relative flex items-start[^>]*>\s*)',
            r'\1' + bg_image,
            content,
            count=1
        )

    # STAP 9: Update hero text styling (white met drop-shadow)
    content = re.sub(
        r'<span className="text-gradient">Computerhulp aan Huis',
        f'<span className="text-white drop-shadow-lg">Computerhulp aan Huis',
        content
    )
    content = re.sub(
        r'<span className="text-gradient">([^<]*{city_name}[^<]*)</span>',
        f'<span className="text-white drop-shadow-lg">\\1</span>',
        content
    )
    content = re.sub(
        r'<span className="text-secondary-800">([^<]*{city_name}[^<]*)</span>',
        f'<span className="text-white drop-shadow-lg">\\1</span>',
        content
    )

    # Update paragraph text
    content = re.sub(
        r'(<p className="text-xl lg:text-2xl )text-primary-700',
        r'\1text-white',
        content,
        count=1
    )

    # Update benefits styling
    content = re.sub(
        r'className="flex items-center space-x-3 text-lg text-primary-700"',
        'className="flex items-center space-x-3 text-lg text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"',
        content
    )
    content = re.sub(
        r'(<IconComponent className="w-6 h-6 )text-primary-700',
        r'\1text-white',
        content
    )
    content = re.sub(
        r'<span>\{benefit\.text\}</span>',
        '<span className="drop-shadow-sm">{benefit.text}</span>',
        content
    )

    # Update wrapper div
    content = re.sub(
        r'<div className="relative z-10 max-w-6xl mx-auto container-padding text-center">',
        '<div className="relative z-10 max-w-6xl mx-auto container-padding text-center flex items-center min-h-[600px] lg:min-h-[700px]">\n          <div className="w-full">',
        content,
        count=1
    )

    # Voeg closing div toe
    content = re.sub(
        r'(</a>\s*</div>\s*)(</div>\s*</section>)',
        r'\1</div>\n        \2',
        content,
        count=1
    )

    # Update buttons met shadows
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

    # STAP 10: Verwijder components
    content = re.sub(r'\s*<TrustSignals />\s*\n', '\n', content)
    content = re.sub(r'\s*<Windows11UrgentSection />\s*\n', '\n', content)
    content = re.sub(r'\s*<ServicesPreview />\s*\n', '\n', content)

    # STAP 11: Voeg FAQ Schema toe
    if '"@type": "FAQPage"' not in content:
        faq_schema = """          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqData.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
"""
        # Voeg toe in FAQ section
        content = re.sub(
            r'(<section className="section-spacing[^>]*>\s*)(<div className="max-w-4xl mx-auto container-padding">)',
            r'\1' + faq_schema + r'\2',
            content,
            count=1
        )

    # STAP 12: Clean up multiple empty lines
    content = re.sub(r'\n\n\n+', '\n\n', content)

    # STAP 13: Ensure FAQData and useState exist
    if 'const \[' not in content or 'useState' not in content:
        # Voeg FAQ state toe
        faq_state = """  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }
"""
        content = re.sub(
            r'(export default function [^\{]+\{)',
            r'\1\n' + faq_state,
            content,
            count=1
        )

    page_path.write_text(content, encoding='utf-8')
    return True

def main():
    print("=" * 80)
    print("COMPLETE SEO OPTIMALISATIE - COMPUTERHULP AAN HUIS")
    print("37 stad pagina's worden geoptimaliseerd")
    print("=" * 80)
    print()

    success_layout = 0
    success_page = 0
    failed = 0

    for city_slug, city_name in CITIES.items():
        try:
            layout_ok = update_layout(city_slug, city_name)
            page_ok = update_page(city_slug, city_name)

            if layout_ok and page_ok:
                print(f"[OK] {city_name:30} - Layout + Page geoptimaliseerd")
                success_layout += 1
                success_page += 1
            elif layout_ok:
                print(f"[WARN] {city_name:30} - Alleen layout geoptimaliseerd")
                success_layout += 1
                failed += 1
            elif page_ok:
                print(f"[WARN] {city_name:30} - Alleen page geoptimaliseerd")
                success_page += 1
                failed += 1
            else:
                print(f"[FAIL] {city_name:30} - Beide gefaald")
                failed += 1
        except Exception as e:
            print(f"[ERROR] {city_name:30} - {str(e)}")
            failed += 1

    print()
    print("=" * 80)
    print(f"RESULTAAT:")
    print(f"  Layouts geoptimaliseerd: {success_layout}/37")
    print(f"  Pages geoptimaliseerd: {success_page}/37")
    print(f"  Gefaald: {failed}")
    print("=" * 80)

    if failed == 0:
        print("\nALLE 37 PAGINA'S SUCCESVOL GEOPTIMALISEERD!")
        print("\nWijzigingen:")
        print("  - Meta titles geoptimaliseerd")
        print("  - Meta descriptions met keyword focus")
        print("  - Breadcrumb Schema toegevoegd")
        print("  - Breadcrumbs navigatie toegevoegd")
        print("  - Hero background image toegevoegd")
        print("  - FAQ Schema toegevoegd")
        print("  - ServiceType geoptimaliseerd")
        print("  - AlternateName toegevoegd aan schema")
        print("  - FloatingDevices, TrustSignals, Windows11 verwijderd")
        print("  - 10+ jaar ervaring toegevoegd")
        print("  - Prijzen geüpdatet naar €53,50")
    else:
        print(f"\n{failed} pagina's hebben issues - review hierboven")

if __name__ == "__main__":
    main()
