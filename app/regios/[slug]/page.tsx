'use client'

import Link from 'next/link'
import { useState, use } from 'react'
import {
  Phone,
  ArrowRight,
  Check,
  ChevronDown,
  MapPin
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { notFound } from 'next/navigation'
import cities from '@/lib/data/cities.json'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const benefits = [
  'Transparante tarieven, geen verborgen kosten',
  'Ervaren IT-specialisten met jarenlange kennis',
  'Flexibele tijden, ook \'s avonds en in weekenden',
  'Persoonlijke aanpak met geduld en heldere uitleg',
  'Vaak nog dezelfde dag beschikbaar',
  'Alle medewerkers zijn gescreend en verzekerd'
]

export default function RegioPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Handle both formats: direct city slug and computerhulp-city
  const citySlug = resolvedParams.slug.startsWith('computerhulp-')
    ? resolvedParams.slug.replace('computerhulp-', '')
    : resolvedParams.slug

  const city = cities.find(c => c.slug === citySlug)

  if (!city) {
    notFound()
  }

  const processSteps = [
    {
      step: '1',
      title: 'U belt of plant online',
      description: `Vertel ons kort wat het probleem is. Wij plannen een afspraak op een moment dat u uitkomt in ${city.name}.`
    },
    {
      step: '2',
      title: 'Expert komt langs',
      description: `Een ervaren IT-specialist komt bij u thuis in ${city.name} met alle benodigde tools en kennis.`
    },
    {
      step: '3',
      title: 'Probleem wordt opgelost',
      description: 'Vakkundige hulp met duidelijke uitleg. U krijgt tips zodat u het zelf ook begrijpt.'
    },
    {
      step: '4',
      title: 'Betaling achteraf',
      description: 'U betaalt pas na afloop. Geen vooruitbetaling, geen verrassingen.'
    }
  ]

  const faqData = [
    {
      question: `Wat kost computerhulp in ${city.name}?`,
      answer: `Wij rekenen €14,50 per kwartier, met een minimum van 3 kwartier. Voorrijkosten zijn €10 eenmalig. U betaalt achteraf.`
    },
    {
      question: `Zijn jullie IT-specialisten wel gekwalificeerd in ${city.name}?`,
      answer: `Ja, onze IT-experts in ${city.name} zijn ervaren vakmensen met bewezen expertise. Ze worden geselecteerd op technische én communicatieve vaardigheden. Alle medewerkers zijn gescreend en verzekerd.`
    },
    {
      question: `Kunnen jullie ook 's avonds en in weekenden in ${city.name}?`,
      answer: `Ja, dat is een van onze voordelen! We zijn flexibel beschikbaar van 08:00 tot 21:00, 7 dagen per week in ${city.name}.`
    },
    {
      question: `Hoe snel kunnen jullie komen in ${city.name}?`,
      answer: `Vaak kunnen we nog dezelfde dag langskomen in ${city.name}. Voor urgente problemen proberen we binnen enkele uren beschikbaar te zijn.`
    },
    {
      question: `Welke gebieden in ${city.name} bedienen jullie?`,
      answer: `We bedienen heel ${city.name} en omgeving, inclusief ${city.serviceAreas.slice(0, 6).join(', ')} en meer.`
    }
  ]

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Computerhulp ${city.name}`,
    description: `Professionele computerhulp in ${city.name}. Snelle service, ervaren IT-specialisten.`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Hulp met IT',
      telephone: '+31642827860',
      url: 'https://hulpmetit.nl',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressCountry: 'NL'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng
      }
    },
    areaServed: city.serviceAreas.map(area => ({
      '@type': 'City',
      name: area
    })),
    offers: {
      '@type': 'Offer',
      price: '14.50',
      priceCurrency: 'EUR',
      unitText: 'per kwartier'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
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
            <Link href="/regios" className="text-secondary-500 hover:text-primary-700">Regio&apos;s</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">Computerhulp {city.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
              Computerhulp in {city.name}
            </h1>
            <p className="text-lg text-secondary-600 leading-relaxed mb-4">
              {city.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                Afspraak maken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel ons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesGrid maxItems={6} />

      {/* Why Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
                Waarom kiezen voor computerhulp in {city.name}?
              </h2>
              <p className="text-secondary-600">
                Wij bieden betrouwbare en betaalbare IT-hulp aan huis in {city.name} en omgeving.
                Onze specialisten helpen u snel en vakkundig met elk computerprobleem.
              </p>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-10">
            In 4 stappen geholpen in {city.name}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index}>
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
            Werkgebied in {city.name} en omgeving
          </h2>
          <p className="text-secondary-600 mb-8 max-w-2xl">
            Wij komen bij u thuis in de volgende wijken en plaatsen.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {city.serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-secondary-200">
                <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span className="text-secondary-700 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-8">
            Veelgestelde vragen over computerhulp in {city.name}
          </h2>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-secondary-50 rounded-lg border border-secondary-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-100 transition-colors"
                >
                  <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary-500 flex-shrink-0 transition-transform ${
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

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
            Klaar voor computerhulp in {city.name}?
          </h2>
          <p className="text-secondary-600 mb-8 max-w-xl mx-auto">
            Onze ervaren IT-specialisten in {city.name} staan klaar om u te helpen. Snel, vakkundig en betaalbaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel ons
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
