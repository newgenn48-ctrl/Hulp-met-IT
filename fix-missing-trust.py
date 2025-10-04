from pathlib import Path
import re

# Base directory
base_dir = Path(r"C:\Users\konia\OneDrive - Stichting Hogeschool Utrecht\hulpmetit-nextgen\app")

# Cities that need trust section
missing_cities = ['den-haag', 'eindhoven', 'groningen', 'leiden', 'rotterdam', 'tilburg', 'utrecht']

# City name mapping
city_names = {
    'den-haag': 'Den Haag',
    'eindhoven': 'Eindhoven',
    'groningen': 'Groningen',
    'leiden': 'Leiden',
    'rotterdam': 'Rotterdam',
    'tilburg': 'Tilburg',
    'utrecht': 'Utrecht'
}

def add_trust_section(page_path, city_name):
    """Add trust section to page"""
    content = page_path.read_text(encoding='utf-8')

    # Check if already has trust section
    if "Waarom kiezen voor Computerhulp aan Huis" in content:
        return False

    trust_section = f'''
        {{/* Why Choose Section */}}
        <section className="section-spacing bg-neural-900/30">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Waarom kiezen voor Computerhulp aan Huis {city_name}?
              </h2>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
                Ontdek de voordelen van professionele computerhulp door ervaren specialisten
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">10+ Jaar Ervaring</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Onze specialisten hebben ruim 10 jaar ervaring met computerhulp in {city_name}. Vakkundige oplossingen voor elk probleem.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Betrouwbaar & Professioneel</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Gediplomeerde IT-specialisten die discreet en zorgvuldig te werk gaan. U kunt met een gerust hart hulp aan huis krijgen.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Snelle Service</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Meestal binnen 24-48 uur bij u thuis in {city_name}. Voor spoedgevallen vaak nog dezelfde dag beschikbaar.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Duidelijke Uitleg</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Wij nemen rustig de tijd om alles uit te leggen in begrijpelijke taal. Na onze hulp begrijpt u precies wat er gebeurd is.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">7 Dagen per Week</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Ook 's avonds en in het weekend bereikbaar in {city_name}. Wij passen ons aan uw schema aan.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Eerlijke Prijzen</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Transparante tarieven vanaf €53,50 voor 3 kwartier. Geen verrassingen, u weet vooraf wat u betaalt.
                </p>
              </div>
            </div>
          </div>
        </section>

'''

    # Insert trust section after Process Section
    # Look for the closing </section> of process section followed by SEO section
    pattern = r'(        </section>\n\n        \{/\* Services Section \*/\}\n        \{/\* SEO Content Section \*/\})'
    replacement = trust_section + r'\1'

    new_content = re.sub(pattern, replacement, content)

    if new_content != content:
        page_path.write_text(new_content, encoding='utf-8')
        return True
    return False

# Process missing cities
fixed = 0
for city_slug in missing_cities:
    city_name = city_names[city_slug]
    page_path = base_dir / f"computerhulp-aan-huis-{city_slug}" / "page.tsx"

    if page_path.exists():
        if add_trust_section(page_path, city_name):
            print(f"Added trust to: {city_slug}")
            fixed += 1
        else:
            print(f"Already has trust: {city_slug}")
    else:
        print(f"Not found: {city_slug}")

print(f"\nAdded trust section to {fixed}/{len(missing_cities)} pages")
