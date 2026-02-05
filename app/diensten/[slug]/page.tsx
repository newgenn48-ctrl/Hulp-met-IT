'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, use } from 'react'
import {
  ArrowRight,
  Check,
  Phone,
  ChevronDown,
  Users,
  Shield,
  Award
} from 'lucide-react'
import { notFound } from 'next/navigation'
import services from '@/lib/data/services.json'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = use(params)
  const service = services.find((s) => s.slug === slug)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  if (!service) {
    notFound()
  }

  const faqs = (service as any).faqs || []

  // Structured data for FAQ
  const faqStructuredData = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null

  // Structured data for Service
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Hulp met IT',
      telephone: '+31642827860',
      url: 'https://hulpmetit.nl'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nederland'
    },
    offers: {
      '@type': 'Offer',
      price: '53.50',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '14.50',
        priceCurrency: 'EUR',
        unitText: 'per kwartier'
      }
    }
  }

  return (
    <>
      {/* Structured Data */}
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-secondary-50 border-b border-secondary-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-secondary-500 hover:text-primary-700">Home</Link>
            <span className="text-secondary-400">/</span>
            <Link href="/diensten" className="text-secondary-500 hover:text-primary-700">Diensten</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100/50 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Linker kolom - Content */}
            <div>
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight mb-6">
                {service.name}
                <span className="text-primary-700"> aan huis</span>
              </h1>

              {/* Subtitel */}
              <p className="text-xl text-secondary-600 leading-relaxed mb-4 max-w-lg">
                {(service as any).heroText || service.description}
              </p>
              <p className="text-lg text-secondary-500 mb-8 max-w-lg">
                Ook senioren begeleiden wij met geduld en heldere uitleg.
              </p>

              {/* USPs */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="bg-primary-100 border border-primary-200 rounded-lg px-4 py-2">
                  <p className="text-sm font-medium text-primary-700">Transparante tarieven</p>
                </div>
                <div className="bg-primary-100 border border-primary-200 rounded-lg px-4 py-2">
                  <p className="text-sm font-medium text-primary-700">Snel ter plaatse</p>
                </div>
                <div className="bg-primary-100 border border-primary-200 rounded-lg px-4 py-2">
                  <p className="text-sm font-medium text-primary-700">10+ jaar ervaring</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors shadow-lg shadow-primary-500/30"
                >
                  Afspraak maken
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+31642827860"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 border-2 border-primary-300 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel ons
                </a>
              </div>
            </div>

            {/* Rechter kolom - Gestylede foto */}
            <div className="relative">
              {/* Decoratieve achtergrond */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl transform rotate-3" />

              {/* Foto container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/student-aan-huis.webp"
                  alt={`IT-specialist helpt klant thuis met ${service.name.toLowerCase()}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* USP Bar */}
      <section className="bg-primary-500 py-6 md:py-6">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Mobile: Grid layout */}
          <div className="grid grid-cols-3 gap-4 md:hidden text-white text-center mb-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Award className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">10+ jaar</p>
              <p className="text-primary-100 text-xs">ervaring</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">2000+</p>
              <p className="text-primary-100 text-xs">klanten</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">Geen</p>
              <p className="text-primary-100 text-xs">risico</p>
            </div>
          </div>
          <Link
            href="/afspraak"
            className="md:hidden w-full inline-flex items-center justify-center px-6 py-3 font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-xl transition-colors"
          >
            Afspraak maken
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          {/* Desktop: Horizontal layout */}
          <div className="hidden md:flex items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">10+ jaar ervaring</p>
                  <p className="text-primary-100 text-sm">Vakkundige specialisten</p>
                </div>
              </div>
              <div className="w-px h-10 bg-primary-400" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">2000+ klanten</p>
                  <p className="text-primary-100 text-sm">Tevreden geholpen</p>
                </div>
              </div>
              <div className="w-px h-10 bg-primary-400" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Geen risico</p>
                  <p className="text-primary-100 text-sm">Betaling achteraf</p>
                </div>
              </div>
            </div>
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-xl transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-700 font-semibold mb-3">Wat wij doen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Onze {service.name.toLowerCase()} diensten
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 bg-secondary-50 rounded-xl p-5 border border-secondary-200">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-secondary-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-700 font-semibold mb-3">Hoe het werkt</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              In 4 stappen geholpen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 bg-white border-2 border-primary-200 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-700">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      {service.commonIssues && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-12">
              <p className="text-primary-700 font-semibold mb-3">Veelvoorkomende problemen</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Hier helpen wij u mee
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Herkent u een van deze problemen? Wij lossen het snel voor u op.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.commonIssues.map((issue, index) => (
                <div key={index} className="flex items-center gap-3 bg-secondary-50 rounded-xl p-4 border border-secondary-200">
                  <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                  <span className="text-secondary-700">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us - with photo */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Photo */}
            <div className="relative order-last lg:order-first">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl transform -rotate-3" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/hulp-met-it.webp"
                  alt="Hulp met IT specialist aan het werk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-primary-700 font-semibold mb-3">Waarom Hulp met IT</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Persoonlijke service waar u op kunt rekenen
              </h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Bij Hulp met IT krijgt u geen anonieme helpdesk, maar een echte specialist die bij u thuis komt. Wij nemen de tijd om uw probleem goed te begrijpen en uit te leggen wat we doen.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 border border-secondary-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-secondary-900">10+</p>
                      <p className="text-secondary-500 text-sm">Jaar ervaring</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-secondary-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-secondary-900">100%</p>
                      <p className="text-secondary-500 text-sm">Verzekerd</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors shadow-lg shadow-primary-500/30"
              >
                Maak een afspraak
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-12">
              <p className="text-primary-700 font-semibold mb-3">Veelgestelde vragen</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Vragen over {service.name.toLowerCase()}
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq: any, index: number) => (
                <div
                  key={index}
                  className="bg-secondary-50 rounded-xl border border-secondary-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-100 transition-colors"
                  >
                    <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary-700 flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Hulp nodig? Wij staan voor u klaar.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Bel ons voor een vrijblijvend adviesgesprek. Wij vertellen u direct wat wij voor u kunnen doen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-xl transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
