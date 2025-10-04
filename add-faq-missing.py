import re
from pathlib import Path

# Base directory
base_dir = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

# Get all computerhulp pages
computerhulp_pages = list(base_dir.glob("computerhulp-aan-huis-*/page.tsx"))

def get_city_name(slug):
    """Convert slug to proper city name"""
    name_map = {
        'baarn': 'Baarn',
        'blaricum': 'Blaricum',
        'bussum': 'Bussum',
        'capelle-aan-den-ijssel': 'Capelle aan den IJssel',
        'huizen': 'Huizen',
        'katwijk': 'Katwijk',
        'laren': 'Laren',
        'leidschendam-voorburg': 'Leidschendam-Voorburg',
        'middelburg': 'Middelburg',
        'naarden': 'Naarden',
        'schiedam': 'Schiedam',
        'soest': 'Soest',
        'vlaardingen': 'Vlaardingen',
        'weesp': 'Weesp'
    }
    return name_map.get(slug, slug.title())

def has_faqdata(content):
    """Check if page has faqData"""
    return 'const faqData = [' in content

def add_faq_to_page(page_path, city_name):
    """Add FAQ data and component to page"""
    content = page_path.read_text(encoding='utf-8')

    if has_faqdata(content):
        return False

    # FAQ data to insert after processSteps
    faq_data = f'''

const faqData = [
  {{
    question: "Wat kost computerhulp aan huis in {city_name}?",
    answer: "Onze computerhulp aan huis in {city_name} begint vanaf €53,50 voor 3 kwartier. Voor 1 uur betaalt u €69,50. Wij werken met transparante prijzen zonder verborgen kosten."
  }},
  {{
    question: "Hoe snel kan een specialist bij mij thuis komen in {city_name}?",
    answer: "In de meeste gevallen kunnen wij binnen 24-48 uur bij u langskomen in {city_name}. Voor spoedgevallen bieden wij vaak nog dezelfde dag service aan."
  }},
  {{
    question: "Welke computerproblemen lossen jullie op in {city_name}?",
    answer: "Wij helpen met alle computerproblemen: trage computer, virusverwijdering, Windows updates, software installatie, internet problemen, e-mail instellen, printer setup en meer."
  }},
  {{
    question: "Hebben jullie ervaring met computerhulp aan huis?",
    answer: "Ja, wij hebben ruim 10+ jaar ervaring met computerhulp aan huis in {city_name} en omgeving. Onze specialisten zijn vakkundig opgeleid en kunnen vrijwel elk computerprobleem oplossen."
  }},
  {{
    question: "Werken jullie ook in het weekend in {city_name}?",
    answer: "Ja, wij zijn 7 dagen per week beschikbaar van 08:00 tot 21:00 uur. Ook in het weekend kunt u dus rekenen op onze computerhulp aan huis in {city_name}."
  }}
]
'''

    # Insert faqData before export default
    content = content.replace(
        '\nexport default function',
        faq_data + '\nexport default function'
    )

    # FAQ component
    faq_component = f'''
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-secondary-800 text-center mb-6">
                Veelgestelde Vragen over Computerhulp aan Huis {city_name}
              </h3>
              <div className="space-y-4">
                {{faqData.map((faq, index) => (
                  <div key={{index}} className="glass-effect rounded-lg overflow-hidden">
                    <button
                      onClick={{() => toggleFAQ(index)}}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
                    >
                      <span className="font-semibold text-secondary-800">{{faq.question}}</span>
                      {{openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      )}}
                    </button>
                    {{openFAQ === index && (
                      <div className="px-6 pb-4 text-secondary-700">
                        {{faq.answer}}
                      </div>
                    )}}
                  </div>
                ))}}
              </div>
            </div>
'''

    # Insert FAQ before closing of SEO section
    content = content.replace(
        '          </div>\n        </section>\n\n      </div>\n    </>\n  )\n}',
        faq_component + '\n          </div>\n        </section>\n\n      </div>\n    </>\n  )\n}'
    )

    page_path.write_text(content, encoding='utf-8')
    return True

# Process all pages
added = 0
skipped = 0
for page_path in computerhulp_pages:
    city_slug = page_path.parent.name.replace('computerhulp-aan-huis-', '')
    city_name = get_city_name(city_slug)

    if add_faq_to_page(page_path, city_name):
        print(f"Added FAQ: {city_name}")
        added += 1
    else:
        skipped += 1

print(f"\nAdded {added} FAQs, skipped {skipped} (already had FAQ)")
