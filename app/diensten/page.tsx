import Link from 'next/link'
import {
  Monitor,
  Wifi,
  Smartphone,
  Printer,
  Mail,
  ArrowRight,
  Phone,
  Shield,
  HardDrive,
  ChevronRight
} from 'lucide-react'
import { Metadata } from 'next'
import services from '@/lib/data/services.json'

export const metadata: Metadata = {
  title: 'IT Diensten aan Huis | Overzicht | Hulp met IT',
  description: 'Overzicht van al onze IT-diensten aan huis: computerhulp, printerhulp, e-mail problemen, internet & WiFi, tablet & smartphone hulp en computerles. Transparante tarieven €14,50 per kwartier.',
  keywords: [
    'IT diensten aan huis',
    'computerhulp',
    'printerhulp',
    'e-mail problemen',
    'WiFi hulp',
    'tablet hulp',
    'smartphone hulp',
    'computerles'
  ],
  alternates: {
    canonical: '/diensten',
  },
  openGraph: {
    title: 'IT Diensten aan Huis | Hulp met IT',
    description: 'Overzicht van al onze IT-diensten aan huis. Transparante tarieven, persoonlijke service.',
    url: 'https://hulpmetit.nl/diensten',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Monitor,
  Wifi,
  Smartphone,
  Printer,
  Mail,
  Shield,
  HardDrive,
}

export default function DienstenPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'IT Diensten aan Huis',
            description: 'Overzicht van al onze IT-diensten aan huis.',
            numberOfItems: services.length,
            itemListElement: services.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                name: service.name,
                description: service.description,
                url: `https://hulpmetit.nl/diensten/${service.slug}`,
                provider: {
                  '@type': 'Organization',
                  name: 'Hulp met IT',
                },
              },
            })),
          }),
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-secondary-50 border-b border-secondary-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-secondary-500 hover:text-primary-700">Home</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">Diensten</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
              Onze diensten
            </h1>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Wij helpen met alles rondom uw computer, internet en apparaten. Onze medewerker komt bij u thuis en legt alles uit in gewone taal.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900">
              Waar kunnen wij u mee helpen?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Monitor

              return (
                <Link
                  key={service.slug}
                  href={`/diensten/${service.slug}`}
                  className="group flex items-center gap-4 bg-white rounded-lg px-5 py-4 hover:shadow-md transition-shadow border border-secondary-100"
                >
                  <div className="w-9 h-9 rounded-md bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-[18px] h-[18px] text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-secondary-900 text-[15px]">
                      {service.name}
                    </h3>
                    <p className="text-secondary-500 text-sm truncate">
                      {service.shortDescription}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-secondary-300 group-hover:text-primary-500 transition-colors flex-shrink-0" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
            Niet gevonden wat u zoekt?
          </h2>
          <p className="text-secondary-600 mb-8">
            Wij helpen graag met alle IT-gerelateerde problemen. Bel ons voor een vrijblijvend adviesgesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-600 border border-primary-200 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Bel ons
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
