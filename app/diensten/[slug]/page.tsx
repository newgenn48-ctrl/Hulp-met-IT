'use client'

import Link from 'next/link'
import { useState, use } from 'react'
import {
  ArrowRight,
  Check,
  Phone,
  ChevronDown,
  MapPin,
} from 'lucide-react'
import { notFound } from 'next/navigation'
import services from '@/lib/data/services.json'

const popularCities = [
  { name: 'Amsterdam', slug: 'amsterdam' },
  { name: 'Rotterdam', slug: 'rotterdam' },
  { name: 'Den Haag', slug: 'den-haag' },
  { name: 'Utrecht', slug: 'utrecht' },
  { name: 'Haarlem', slug: 'haarlem' },
  { name: 'Almere', slug: 'almere' },
]

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
  const heroText = (service as any).heroText || service.description
  const longDescription = (service as any).longDescription || ''

  // Split heroText into H1 (first question) and subtitle (rest)
  const questionIndex = heroText.indexOf('?')
  const h1Text = questionIndex !== -1 ? heroText.slice(0, questionIndex + 1) : service.name
  const subtitleText = questionIndex !== -1 ? heroText.slice(questionIndex + 1).trim() : heroText

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
      price: '14.50',
      priceCurrency: 'EUR',
      unitText: 'per kwartier'
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
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
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">{service.name}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
              {h1Text}
            </h1>
            {subtitleText && (
              <p className="text-lg text-secondary-600 leading-relaxed mb-4">
                {subtitleText}
              </p>
            )}
            {longDescription && (
              <p className="text-secondary-500 leading-relaxed mb-8">
                {longDescription}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
              >
                Afspraak maken
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Bel ons<span className="hidden sm:inline"> - 06-42827860</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues — recognition first */}
      {service.commonIssues && (
        <section className="relative bg-secondary-50 py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-15" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Herkent u dit?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-2">
                Veelvoorkomende problemen
              </h2>
              <p className="text-secondary-500 max-w-xl text-lg">
                Herkent u een van deze situaties? Wij helpen u er graag mee.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
              {service.commonIssues.map((issue, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-600">{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* What we do — features */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Onze hulp</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-2">
              Waar wij u mee helpen
            </h2>
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-secondary-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Zo werkt het</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Hoe het werkt
            </h2>
          </div>

          <ol className="space-y-8 max-w-2xl mx-auto">
            {service.process.map((step, index) => (
              <li key={index} className="flex gap-5">
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-secondary-500">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Veelgestelde vragen over {service.name.toLowerCase()}
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq: any, index: number) => (
                <div
                  key={index}
                  className="bg-secondary-50 rounded-2xl shadow-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-100 transition-colors"
                  >
                    <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary-700 flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div id={`faq-answer-${index}`} role="region" className={`px-5 pb-5 ${openFaq === index ? '' : 'hidden'}`}>
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Available in your city */}
      <section className="relative bg-secondary-50 py-12 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">
            Beschikbaar in uw stad
          </h2>
          <div className="flex flex-wrap gap-3">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/computerhulp-aan-huis-${city.slug}`}
                className="inline-flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-card hover:shadow-card-hover transition-all text-sm hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4 text-primary-600" />
                <span className="text-secondary-700 font-medium">{city.name}</span>
              </Link>
            ))}
            <Link
              href="/regios"
              className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium px-4 py-2.5"
            >
              Alle steden <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Hulp nodig met {service.name.toLowerCase()}?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Bel gerust, wij denken graag met u mee. Of plan direct een afspraak.
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
