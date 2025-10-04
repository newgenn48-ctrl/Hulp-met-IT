import os
from pathlib import Path

# Base directory
base_dir = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

# City data
cities = {
    'almere': {'name': 'Almere', 'region': 'Flevoland'},
    'alphen-aan-den-rijn': {'name': 'Alphen aan den Rijn', 'region': 'Zuid-Holland'},
    'amersfoort': {'name': 'Amersfoort', 'region': 'Utrecht'},
    'amsterdam': {'name': 'Amsterdam', 'region': 'Noord-Holland'},
    'apeldoorn': {'name': 'Apeldoorn', 'region': 'Gelderland'},
    'arnhem': {'name': 'Arnhem', 'region': 'Gelderland'},
    'breda': {'name': 'Breda', 'region': 'Noord-Brabant'},
    'delft': {'name': 'Delft', 'region': 'Zuid-Holland'},
    'den-bosch': {'name': 'Den Bosch', 'region': 'Noord-Brabant'},
    'den-haag': {'name': 'Den Haag', 'region': 'Zuid-Holland'},
    'deventer': {'name': 'Deventer', 'region': 'Overijssel'},
    'dordrecht': {'name': 'Dordrecht', 'region': 'Zuid-Holland'},
    'ede': {'name': 'Ede', 'region': 'Gelderland'},
    'eindhoven': {'name': 'Eindhoven', 'region': 'Noord-Brabant'},
    'emmen': {'name': 'Emmen', 'region': 'Drenthe'},
    'enschede': {'name': 'Enschede', 'region': 'Overijssel'},
    'gouda': {'name': 'Gouda', 'region': 'Zuid-Holland'},
    'groningen': {'name': 'Groningen', 'region': 'Groningen'},
    'haarlem': {'name': 'Haarlem', 'region': 'Noord-Holland'},
    'heerlen': {'name': 'Heerlen', 'region': 'Limburg'},
    'helmond': {'name': 'Helmond', 'region': 'Noord-Brabant'},
    'hilversum': {'name': 'Hilversum', 'region': 'Noord-Holland'},
    'leeuwarden': {'name': 'Leeuwarden', 'region': 'Friesland'},
    'leiden': {'name': 'Leiden', 'region': 'Zuid-Holland'},
    'lelystad': {'name': 'Lelystad', 'region': 'Flevoland'},
    'maastricht': {'name': 'Maastricht', 'region': 'Limburg'},
    'nijmegen': {'name': 'Nijmegen', 'region': 'Gelderland'},
    'rotterdam': {'name': 'Rotterdam', 'region': 'Zuid-Holland'},
    'tilburg': {'name': 'Tilburg', 'region': 'Noord-Brabant'},
    'utrecht': {'name': 'Utrecht', 'region': 'Utrecht'},
    'venlo': {'name': 'Venlo', 'region': 'Limburg'},
    'zaanstad': {'name': 'Zaanstad', 'region': 'Noord-Holland'},
    'zoetermeer': {'name': 'Zoetermeer', 'region': 'Zuid-Holland'},
    'zwolle': {'name': 'Zwolle', 'region': 'Overijssel'},
    'hengelo': {'name': 'Hengelo', 'region': 'Overijssel'},
    'almelo': {'name': 'Almelo', 'region': 'Overijssel'},
    'roosendaal': {'name': 'Roosendaal', 'region': 'Noord-Brabant'}
}

def add_faq_to_page(city_slug, city_name):
    """Add FAQ data and component to computerhulp page"""
    page_path = base_dir / f"computerhulp-aan-huis-{city_slug}" / "page.tsx"

    if not page_path.exists():
        print(f"XX Page not found: {page_path}")
        return False

    content = page_path.read_text(encoding='utf-8')

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

    # Insert faqData after processSteps
    content = content.replace(
        'export default function',
        faq_data + '\nexport default function'
    )

    # Add FAQ component before closing </section> of SEO section
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

    # Insert FAQ component before closing </div></section> of SEO section
    content = content.replace(
        '          </div>\n        </section>\n\n      </div>\n    </>\n  )\n}',
        faq_component + '\n          </div>\n        </section>\n\n      </div>\n    </>\n  )\n}'
    )

    page_path.write_text(content, encoding='utf-8')
    print(f"OK {city_name}: FAQ toegevoegd")
    return True

# Process all cities
success_count = 0
for city_slug, city_data in cities.items():
    if add_faq_to_page(city_slug, city_data['name']):
        success_count += 1

print(f"\nOK FAQ toegevoegd aan {success_count}/{len(cities)} city pages")
