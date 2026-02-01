import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-primary-50 border-t border-primary-200">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">H</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gradient">Hulp met IT</span>
                <div className="text-sm text-primary-800">Computerhulp aan huis</div>
              </div>
            </Link>

            <p className="text-secondary-600 leading-relaxed mb-6 max-w-md text-sm">
              Snelle, betrouwbare IT-ondersteuning aan huis door ervaren specialisten
              met meer dan 10 jaar ervaring in het vakgebied.
            </p>

            <div className="space-y-3 text-sm">
              <a href="tel:+31642827860" className="flex items-center text-secondary-600 hover:text-primary-700 transition-colors">
                <Phone className="w-4 h-4 mr-3 text-primary-700" />
                06-42 82 78 60
              </a>
              <a href="mailto:info@hulpmetit.nl" className="flex items-center text-secondary-600 hover:text-primary-700 transition-colors">
                <Mail className="w-4 h-4 mr-3 text-primary-700" />
                info@hulpmetit.nl
              </a>
              <div className="flex items-center text-secondary-600">
                <MapPin className="w-4 h-4 mr-3 text-primary-700" />
                Landelijk werkzaam
              </div>
              <div className="flex items-center text-secondary-600">
                <Clock className="w-4 h-4 mr-3 text-primary-700" />
                Ma-Zo: 09:00 - 21:00
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-primary-200 text-sm text-secondary-700 space-y-1">
              <p>KvK: 91310318</p>
              <p>BTW: NL865613461B01</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-800 mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/diensten/computerhulp" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Computerhulp
                </Link>
              </li>
              <li>
                <Link href="/diensten/printerhulp" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Printer hulp
                </Link>
              </li>
              <li>
                <Link href="/diensten/email-problemen" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  E-mail problemen
                </Link>
              </li>
              <li>
                <Link href="/diensten/internet-wifi" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Internet & WiFi
                </Link>
              </li>
              <li>
                <Link href="/diensten/tablet-smartphone" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Tablet & Smartphone
                </Link>
              </li>
              <li>
                <Link href="/diensten/uitleg-les" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Uitleg & Les
                </Link>
              </li>
              <li>
                <Link href="/student-aan-huis" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Student aan huis
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Regions */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-800 mb-4">Populaire Regio&apos;s</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/computerhulp-aan-huis-amsterdam" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Amsterdam
                </Link>
              </li>
              <li>
                <Link href="/computerhulp-aan-huis-rotterdam" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Rotterdam
                </Link>
              </li>
              <li>
                <Link href="/computerhulp-aan-huis-utrecht" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Utrecht
                </Link>
              </li>
              <li>
                <Link href="/computerhulp-aan-huis-den-haag" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Den Haag
                </Link>
              </li>
              <li>
                <Link href="/computerhulp-aan-huis-eindhoven" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Eindhoven
                </Link>
              </li>
              <li>
                <Link href="/computerhulp-aan-huis-almere" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Almere
                </Link>
              </li>
              <li>
                <Link href="/regios" className="text-primary-800 hover:text-primary-900 transition-colors text-sm font-medium">
                  Alle regio&apos;s →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-800 mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/over-ons" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/afspraak" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Afspraak maken
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Privacy beleid
                </Link>
              </li>
              <li>
                <Link href="/algemene-voorwaarden" className="text-secondary-600 hover:text-primary-700 transition-colors text-sm">
                  Algemene voorwaarden
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-6 p-4 bg-white rounded-lg border border-primary-200">
              <p className="text-sm font-medium text-secondary-800 mb-2">Hulp nodig?</p>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-800"
              >
                <Phone className="w-4 h-4 mr-2" />
                Bel direct
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider my-12" />

        <div className="text-center text-sm text-secondary-700">
          <p>© {currentYear} Hulp met IT. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}