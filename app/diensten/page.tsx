import Link from 'next/link'
import {
  Monitor,
  Wifi,
  Smartphone,
  Printer,
  Mail,
  ArrowRight,
  Check,
  Phone,
  Star,
  Shield,
  HardDrive
} from 'lucide-react'
import { Metadata } from 'next'
import services from '@/lib/data/services.json'

export const metadata: Metadata = {
  title: 'IT Diensten aan Huis | Overzicht | Hulp met IT',
  description: 'Overzicht van al onze IT-diensten aan huis: computerhulp, printerhulp, e-mail problemen, internet & WiFi, tablet & smartphone hulp en computerles. Transparante tarieven vanaf €53,50.',
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
      {/* Breadcrumbs */}
      <div className="bg-secondary-50 border-b border-secondary-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-secondary-500 hover:text-primary-500">Home</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">Diensten</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100/50 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Rating */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-500 fill-primary-500" />
                ))}
                <div className="relative w-5 h-5">
                  <Star className="absolute w-5 h-5 text-primary-200 fill-primary-200" />
                  <div className="absolute overflow-hidden" style={{ width: '80%' }}>
                    <Star className="w-5 h-5 text-primary-500 fill-primary-500" />
                  </div>
                </div>
              </div>
              <span className="text-secondary-600">4.8/5 · 2000+ klanten geholpen</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 mb-6">
              Onze <span className="text-primary-500">diensten</span>
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed mb-8">
              Van computerproblemen tot WiFi installatie - onze IT-specialisten komen bij u thuis en helpen u persoonlijk. Duidelijke uitleg, transparante tarieven.
            </p>

            {/* USPs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-primary-100 border border-primary-200 rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-primary-700">Vanaf €53,50</p>
              </div>
              <div className="bg-primary-100 border border-primary-200 rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-primary-700">Snel ter plaatse</p>
              </div>
              <div className="bg-primary-100 border border-primary-200 rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-primary-700">10+ jaar ervaring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Monitor
              const serviceData = service as any

              return (
                <Link
                  key={service.slug}
                  href={`/diensten/${service.slug}`}
                  className="group bg-secondary-50 rounded-2xl p-6 border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h2 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {serviceData.shortDescription || service.description}
                  </p>

                  {/* Features preview */}
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-secondary-600">
                        <Check className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                    Meer informatie
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Niet gevonden wat u zoekt?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Wij helpen graag met alle IT-gerelateerde problemen. Bel ons voor een vrijblijvend adviesgesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel 06-42 82 78 60
            </a>
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-xl transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
