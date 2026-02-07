'use client'

import Link from 'next/link'
import { useState, use } from 'react'
import {
  ArrowRight,
  Check,
  Phone,
  ChevronDown,
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
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-secondary-500 hover:text-primary-700">Home</Link>
            <span className="text-secondary-400">/</span>
            <Link href="/diensten" className="text-secondary-500 hover:text-primary-700">Diensten</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Clean white, left-aligned, editorial */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
              {service.name} aan huis
            </h1>
            <p className="text-lg text-secondary-600 leading-relaxed mb-4">
              {(service as any).heroText || service.description}
            </p>
            <p className="text-secondary-500 mb-8">
              Wij komen bij u thuis en lossen het snel voor u op. Tarief: <strong className="text-secondary-700">&euro;14,50 per kwartier</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                Afspraak maken
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Bel ons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we do - Simple checklist, left-aligned */}
      <section className="bg-secondary-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-2">
            Wat wij voor u doen
          </h2>
          <p className="text-secondary-500 mb-10 max-w-xl">
            Een overzicht van onze {service.name.toLowerCase()} diensten.
          </p>

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

      {/* How it works - Simple numbered list */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-10">
            Hoe het werkt
          </h2>

          <ol className="space-y-8 max-w-2xl">
            {service.process.map((step, index) => (
              <li key={index} className="flex gap-5">
                <span className="text-2xl font-bold text-primary-600 leading-none mt-1 flex-shrink-0 w-8">
                  {index + 1}.
                </span>
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

      {/* Common Issues - Simple checklist */}
      {service.commonIssues && (
        <section className="bg-secondary-50 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-2">
              Veelvoorkomende problemen
            </h2>
            <p className="text-secondary-500 mb-10 max-w-xl">
              Herkent u een van deze situaties? Wij lossen het snel voor u op.
            </p>

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

      {/* Why choose us - Text-based, no image decorations */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
              Waarom Hulp met IT
            </h2>
            <p className="text-secondary-600 leading-relaxed mb-8">
              Bij Hulp met IT krijgt u geen anonieme helpdesk, maar een echte specialist die bij u thuis komt. Wij nemen de tijd om uw probleem goed te begrijpen en uit te leggen wat we doen.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-700">Persoonlijke hulp bij u thuis, geen gedoe met wegbrengen</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-700">Transparant tarief van &euro;14,50 per kwartier, betaling achteraf</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-700">Meer dan 10 jaar ervaring met alle merken en systemen</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-700">Duidelijke uitleg, ook voor wie minder handig is met techniek</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="bg-secondary-50 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-10">
              Veelgestelde vragen over {service.name.toLowerCase()}
            </h2>

            <div className="space-y-2">
              {faqs.map((faq: any, index: number) => (
                <div
                  key={index}
                  className="border border-secondary-200 rounded-lg bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-50 transition-colors"
                  >
                    <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-secondary-400 flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`px-5 pb-5 ${openFaq === index ? '' : 'hidden'}`}>
                      <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA - Clean, no gradient background */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
              Hulp nodig met {service.name.toLowerCase()}?
            </h2>
            <p className="text-secondary-500 mb-8">
              Bel ons voor een vrijblijvend adviesgesprek of plan direct een afspraak. Wij vertellen u direct wat wij voor u kunnen doen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                Afspraak maken
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Bel ons
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
