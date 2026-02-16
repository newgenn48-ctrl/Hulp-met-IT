import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Monitor } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-secondary-900 text-secondary-300">
      <div className="max-w-7xl mx-auto container-padding py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-primary">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Hulp met IT</span>
                <div className="text-sm text-primary-400">Computerhulp aan huis</div>
              </div>
            </Link>

            <p className="text-secondary-400 leading-relaxed mb-6 max-w-md text-sm">
              Computerhulp aan huis door vriendelijke studenten.
              Rustig, geduldig en op uw tempo.
            </p>

            <div className="space-y-3 text-sm">
              <a href="tel:+31642827860" className="flex items-center text-secondary-300 hover:text-accent-400 transition-colors py-1.5">
                <Phone className="w-4 h-4 mr-3 text-primary-400" />
                06-42827860
              </a>
              <a href="mailto:info@hulpmetit.nl" className="flex items-center text-secondary-300 hover:text-accent-400 transition-colors py-1.5">
                <Mail className="w-4 h-4 mr-3 text-primary-400" />
                info@hulpmetit.nl
              </a>
              <div className="flex items-center text-secondary-400 py-1.5">
                <MapPin className="w-4 h-4 mr-3 text-primary-400" />
                Landelijk werkzaam
              </div>
              <div className="flex items-center text-secondary-400 py-1.5">
                <Clock className="w-4 h-4 mr-3 text-primary-400" />
                Ma-Zo: 08:00 - 21:00
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-secondary-700 text-sm text-secondary-500 space-y-1">
              <p>KvK: 91310318</p>
              <p>BTW: NL865613461B01</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Diensten</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-4" />
            <ul className="space-y-2">
              <li>
                <Link href="/diensten/computerhulp" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Computerhulp
                </Link>
              </li>
              <li>
                <Link href="/diensten/printerhulp" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Printerhulp
                </Link>
              </li>
              <li>
                <Link href="/diensten/email-problemen" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  E-mailproblemen
                </Link>
              </li>
              <li>
                <Link href="/diensten/internet-wifi" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Internet & WiFi
                </Link>
              </li>
              <li>
                <Link href="/diensten/tablet-smartphone" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Tablet & Smartphone
                </Link>
              </li>
              <li>
                <Link href="/diensten/smart-home" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Smart Home
                </Link>
              </li>
              <li>
                <Link href="/diensten/smart-tv" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Smart TV
                </Link>
              </li>
              <li>
                <Link href="/diensten/virusverwijdering" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Virusverwijdering
                </Link>
              </li>
              <li>
                <Link href="/diensten/data-backup" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Data & Backup
                </Link>
              </li>
              <li>
                <Link href="/diensten/uitleg-les" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Uitleg & Les
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-accent-400 hover:text-accent-300 transition-colors text-sm font-medium py-1.5 inline-block">
                  Alle diensten &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Regions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Computerhulp aan Huis</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-4" />
            <ul className="space-y-2">
              <li>
                <Link href="/computerhulp-aan-huis-amsterdam" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Amsterdam
                </Link>
              </li>
              <li>
                <Link href="/computerhulp-aan-huis-rotterdam" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Rotterdam
                </Link>
              </li>
              <li>
                <Link href="/computerhulp-aan-huis-den-haag" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Den Haag
                </Link>
              </li>
              <li>
                <Link href="/computerhulp-aan-huis-utrecht" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Utrecht
                </Link>
              </li>
              <li>
                <Link href="/computerhulp-aan-huis-eindhoven" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Eindhoven
                </Link>
              </li>
              <li>
                <Link href="/student-aan-huis" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Student aan huis
                </Link>
              </li>
              <li>
                <Link href="/regios" className="text-accent-400 hover:text-accent-300 transition-colors text-sm font-medium py-1.5 inline-block">
                  Alle regio&apos;s &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Bedrijf</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-4" />
            <ul className="space-y-2">
              <li>
                <Link href="/over-ons" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/afspraak" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Afspraak maken
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link href="/algemene-voorwaarden" className="text-secondary-400 hover:text-accent-400 transition-colors text-sm py-1.5 inline-block">
                  Algemene voorwaarden
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-6 p-4 bg-secondary-800 rounded-xl border border-secondary-700">
              <p className="text-sm font-medium text-white mb-2">Hulp nodig?</p>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center text-sm font-semibold text-accent-400 hover:text-accent-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Bel direct
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 my-12" />

        <div className="text-center text-sm text-secondary-500">
          <p>&copy; {currentYear} Hulp met IT. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
