import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-primary-50 border-t border-primary-200">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">H</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gradient">Hulp met IT</span>
                <div className="text-sm text-primary-600">Computer Specialist aan huis</div>
              </div>
            </Link>
            
            <p className="text-primary-700 leading-relaxed mb-6 max-w-md">
              Snelle, betrouwbare IT-ondersteuning aan huis door ervaren specialisten 
              met meer dan 10 jaar ervaring in het vakgebied.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary-700" />
                <a href="tel:+31642827860" className="text-primary-700 hover:text-primary-700 transition-colors">
                  +31 (0)6 42827860
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary-700" />
                <a href="mailto:info@hulpmetit.nl" className="text-primary-700 hover:text-primary-700 transition-colors">
                  info@hulpmetit.nl
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-primary-700" />
                <span className="text-primary-700">Landelijk werkzaam</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-primary-700" />
                <span className="text-primary-700">Ma-Zo: 8:00 - 21:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-800 mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/computerhulp-aan-huis" className="text-primary-600 hover:text-secondary-800 transition-colors text-sm">
                  Computerhulp aan huis
                </Link>
              </li>
              <li>
                <Link href="/student-aan-huis" className="text-primary-600 hover:text-secondary-800 transition-colors text-sm">
                  Student aan huis
                </Link>
              </li>
              <li>
                <Link href="/diensten/printerhulp" className="text-primary-600 hover:text-secondary-800 transition-colors text-sm">
                  Printer hulp
                </Link>
              </li>
              <li>
                <Link href="/diensten/internet-wifi" className="text-primary-600 hover:text-secondary-800 transition-colors text-sm">
                  Internet & WiFi
                </Link>
              </li>
              <li>
                <Link href="/diensten/tablet-smartphone" className="text-primary-600 hover:text-secondary-800 transition-colors text-sm">
                  Tablet & Smartphone
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-800 mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/over-ons" className="text-primary-600 hover:text-secondary-800 transition-colors text-sm">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-600 hover:text-secondary-800 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-600 hover:text-secondary-800 transition-colors text-sm">
                  Privacy beleid
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-primary-600 hover:text-secondary-800 transition-colors text-sm">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/regios" className="text-primary-600 hover:text-secondary-800 transition-colors text-sm">
                  Alle regio's
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-600 gap-4">
          <p>
            © {currentYear} Hulp met IT. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-col md:flex-row gap-4 text-xs">
            <span>KvK: 91310318</span>
            <span>BTW: NL865613461B01</span>
          </div>
        </div>
      </div>
    </footer>
  )
}