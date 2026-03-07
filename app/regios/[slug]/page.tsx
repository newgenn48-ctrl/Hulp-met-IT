'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, use } from 'react'
import {
  Phone,
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  GraduationCap,
  Shield
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { CompactServicesSection } from '@/components/home/CompactServicesSection'
import { notFound } from 'next/navigation'
import { NearbyCities } from '@/components/city/NearbyCities'
import cities from '@/lib/data/cities.json'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const benefits = [
  'Transparante tarieven, geen verborgen kosten',
  'HBO-opgeleide ICT-studenten',
  'Flexibele tijden, ook \'s avonds en in weekenden',
  'Persoonlijke aanpak met geduld en heldere uitleg',
  'Vaak nog dezelfde dag beschikbaar',
  'Alle studenten zijn gescreend en verzekerd'
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
      title: 'Student komt langs',
      description: `Een HBO-opgeleide ICT-student komt bij u thuis in ${city.name} met alle benodigde kennis.`
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
      answer: `Wij rekenen €15,50 per kwartier, met een minimum van 3 kwartier. Voorrijkosten zijn €10 eenmalig. U betaalt achteraf.`
    },
    {
      question: `Zijn jullie studenten wel gekwalificeerd in ${city.name}?`,
      answer: `Ja, onze ICT-studenten in ${city.name} zijn HBO-opgeleid en zorgvuldig geselecteerd op technische én communicatieve vaardigheden. Alle studenten zijn gescreend en verzekerd.`
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

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hulpmetit.nl'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: "Regio's",
        item: 'https://hulpmetit.nl/regios'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Computerhulp ${city.name}`,
        item: `https://hulpmetit.nl/regios/${city.slug}`
      }
    ]
  }

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Computerhulp ${city.name}`,
    description: `Persoonlijke computerhulp in ${city.name}. Snelle service door HBO-opgeleide ICT-studenten.`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Hulp met IT',
      telephone: '+31858005006',
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
      price: '15.50',
      priceCurrency: 'EUR',
      unitText: 'per kwartier'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
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
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Computerhulp aan huis</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
                Computerhulp in {city.name}
              </h1>
              <p className="text-lg text-secondary-600 leading-relaxed mb-4">
                {city.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
                >
                  Afspraak maken
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+31858005006"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel 085-8005006
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hidden lg:block">
              <Image
                src="/hulp-met-it.webp"
                alt={`Computerhulp aan huis in ${city.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <CompactServicesSection />

      {/* Kies uw hulp */}
      <section className="relative py-20 lg:py-28 bg-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-15" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Uw opties</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-3">
              Kies uw hulp in {city.name}
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Wij bieden twee opties voor IT-hulp aan huis. Kies wat het beste bij u past.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href={`/computerhulp-aan-huis-${city.slug}`}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                Computerhulp aan huis
              </h3>
              <p className="text-secondary-600 mb-4">
                HBO-opgeleide ICT-student lost uw computerprobleem op bij u thuis. Geduldig en in begrijpelijke taal.
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center">
                Bekijk opties <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href={`/student-aan-huis-${city.slug}`}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                IT-student
              </h3>
              <p className="text-secondary-600 mb-4">
                Betaalbare hulp door opgeleide IT-studenten. Perfect voor dagelijkse computerproblemen.
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center">
                Bekijk opties <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Waarom wij</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Waarom kiezen voor computerhulp in {city.name}?
              </h2>
              <p className="text-secondary-600 mb-4">
                Wij bieden betrouwbare en betaalbare IT-hulp aan huis in {city.name} en omgeving.
                Onze studenten helpen u snel en vakkundig met elk computerprobleem.
              </p>
              <p className="text-secondary-600 text-sm leading-relaxed">
                Of het nu gaat om{' '}
                <Link href="/diensten/printerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">printerhulp</Link>,{' '}
                <Link href="/diensten/internet-wifi" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">WiFi-problemen</Link>,{' '}
                <Link href="/diensten/tablet-smartphone" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">hulp met uw tablet</Link>,{' '}
                <Link href="/diensten/email-problemen" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">e-mailproblemen</Link> of{' '}
                <Link href="/diensten/virusverwijdering" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">virusverwijdering</Link>{' '}
                — wij helpen u graag in {city.name}.
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
      <section className="relative py-20 lg:py-28 bg-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-15" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Werkwijze</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
              In 4 stappen geholpen in {city.name}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index}>
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
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
      <section className="relative py-20 lg:py-28 bg-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-15" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
          <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Werkgebied</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-3">
            Werkgebied in {city.name} en omgeving
          </h2>
          <p className="text-secondary-600 mb-8 max-w-2xl">
            Wij komen bij u thuis in de volgende wijken en plaatsen.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {city.serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-card">
                <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span className="text-secondary-700 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <NearbyCities currentCitySlug={city.slug} pageType="regios" />

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Veelgestelde vragen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
              Veelgestelde vragen over computerhulp in {city.name}
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-secondary-50 rounded-2xl shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-50 transition-colors"
                >
                  <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-700 flex-shrink-0 transition-transform ${
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-20 lg:py-28 text-center">
          <div className="text-center mb-10">
            <p className="text-primary-200 font-semibold text-sm tracking-wide uppercase mb-3">Neem actie</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Klaar voor computerhulp in {city.name}?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Onze HBO-opgeleide studenten in {city.name} staan klaar om u te helpen. Snel, vakkundig en betaalbaar.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+31858005006"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Bel 085-8005006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
