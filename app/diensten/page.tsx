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
import { TestimonialsSection } from '@/components/home/TestimonialsSection'

export const metadata: Metadata = {
  title: 'IT Diensten aan Huis | Overzicht | Hulp met IT',
  description: 'Overzicht van onze IT-diensten aan huis: computerhulp, printerhulp, e-mailproblemen, WiFi, tablet & smartphone hulp en computerles. Vanaf €14,50 per kwartier.',
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
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Onze diensten</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              Waar kunnen wij u mee helpen?
            </h1>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Wij helpen met alles rondom uw computer, internet en apparaten. Onze student komt bij u thuis en legt alles uit in gewone taal.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 lg:py-28 bg-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-15" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Diensten</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Ons complete aanbod
            </h2>
            <p className="text-secondary-500 max-w-2xl mx-auto text-lg">
              Klik op een dienst voor meer informatie.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Monitor

              return (
                <Link
                  key={service.slug}
                  href={`/diensten/${service.slug}`}
                  className="group flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-secondary-900 text-[15px] group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-secondary-500 text-sm">
                      {service.shortDescription}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-secondary-300 group-hover:text-primary-500 transition-colors flex-shrink-0 mt-1" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Niet gevonden wat u zoekt?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Wij helpen graag met alle problemen rondom uw computer en apparaten. Bel gerust, wij denken met u mee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Bel ons<span className="hidden sm:inline"> - 06-42827860</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
