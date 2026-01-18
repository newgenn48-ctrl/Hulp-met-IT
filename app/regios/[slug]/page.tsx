'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, use } from 'react'
import {
  Phone,
  ArrowRight,
  Star,
  Check,
  ChevronDown,
  Users,
  Shield,
  Clock,
  Wrench,
  Calendar,
  MapPin,
  Award
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { notFound } from 'next/navigation'
import cities from '@/lib/data/cities.json'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const benefits = [
  {
    icon: Check,
    title: 'Transparante Tarieven',
    description: 'Duidelijke prijzen vooraf, geen verborgen kosten of verrassingen.'
  },
  {
    icon: Award,
    title: 'Ervaren Specialisten',
    description: 'Vakkundige IT-experts met jarenlange ervaring en kennis.'
  },
  {
    icon: Clock,
    title: 'Flexibele Tijden',
    description: "Ook 's avonds en in weekenden beschikbaar."
  },
  {
    icon: Users,
    title: 'Persoonlijke Aanpak',
    description: 'Geduldig en begrijpelijke uitleg, zonder vakjargon.'
  },
  {
    icon: Calendar,
    title: 'Snel Beschikbaar',
    description: 'Vaak nog dezelfde dag, ook voor spoedgevallen.'
  },
  {
    icon: Shield,
    title: 'Betrouwbaar',
    description: 'Alle medewerkers zijn gescreend en verzekerd.'
  }
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
      title: 'U belt of plant online',
      description: `Vertel ons kort wat het probleem is. Wij plannen een afspraak op een moment dat u uitkomt in ${city.name}.`
    },
    {
      title: 'Expert komt langs',
      description: `Een ervaren IT-specialist komt bij u thuis in ${city.name} met alle benodigde tools en kennis.`
    },
    {
      title: 'Probleem wordt opgelost',
      description: 'Vakkundige hulp met duidelijke uitleg. U krijgt tips zodat u het zelf ook begrijpt.'
    },
    {
      title: 'Betaling achteraf',
      description: 'U betaalt pas na afloop. Geen vooruitbetaling, geen verrassingen.'
    }
  ]

  const faqData = [
    {
      question: `Wat kost computerhulp in ${city.name}?`,
      answer: `Wij rekenen €14,50 per kwartier met een minimum van 45 minuten (€43,50) plus €10 voorrijkosten. Een standaard bezoek van 45 minuten kost dus €53,50. U betaalt achteraf.`
    },
    {
      question: `Zijn jullie IT-specialisten wel gekwalificeerd in ${city.name}?`,
      answer: `Ja, onze IT-experts in ${city.name} zijn ervaren vakmensen met bewezen expertise. Ze worden geselecteerd op technische én communicatieve vaardigheden. Alle medewerkers zijn gescreend en verzekerd.`
    },
    {
      question: `Kunnen jullie ook 's avonds en in weekenden in ${city.name}?`,
      answer: `Ja, dat is een van onze voordelen! We zijn flexibel beschikbaar van 08:00 tot 22:00, 7 dagen per week in ${city.name}.`
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
      price: '53.50',
      priceCurrency: 'EUR'
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
            <Link href="/" className="text-secondary-500 hover:text-primary-500">Home</Link>
            <span className="text-secondary-400">/</span>
            <Link href="/regios" className="text-secondary-500 hover:text-primary-500">Regio&apos;s</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">Computerhulp {city.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100/50 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <div>
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
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
                <span className="text-secondary-600">4.8/5 · 2000+ klanten</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight mb-6">
                Computerhulp
                <span className="text-primary-500"> {city.name}</span>
              </h1>

              {/* Subtitel */}
              <p className="text-xl text-secondary-600 leading-relaxed mb-4 max-w-lg">
                {city.description}
              </p>
              <p className="text-lg text-secondary-500 mb-8 max-w-lg">
                Ook senioren begeleiden wij met geduld en heldere uitleg.
              </p>

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

            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl transform rotate-3" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/hulp-met-it.webp"
                  alt={`Computerhulp in ${city.name}`}
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
      <section className="bg-primary-500 py-6">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Mobile */}
          <div className="grid grid-cols-3 gap-4 md:hidden text-white text-center mb-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">IT-expert</p>
              <p className="text-primary-100 text-xs">ervaren</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">Flexibel</p>
              <p className="text-primary-100 text-xs">ook &apos;s avonds</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">Betrouwbaar</p>
              <p className="text-primary-100 text-xs">verzekerd</p>
            </div>
          </div>
          <Link
            href="/afspraak"
            className="md:hidden w-full inline-flex items-center justify-center px-6 py-3 font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-xl transition-colors"
          >
            Afspraak maken
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Ervaren IT-specialisten</p>
                  <p className="text-primary-100 text-sm">Vakkundige experts</p>
                </div>
              </div>
              <div className="w-px h-10 bg-primary-400" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Flexibele tijden</p>
                  <p className="text-primary-100 text-sm">Ook &apos;s avonds & weekenden</p>
                </div>
              </div>
              <div className="w-px h-10 bg-primary-400" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Betrouwbaar</p>
                  <p className="text-primary-100 text-sm">Gescreend en verzekerd</p>
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

      {/* Services */}
      <ServicesGrid maxItems={6} />

      {/* Why Us */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-semibold mb-3">Waarom wij?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Voordelen van computerhulp in {city.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-secondary-50 rounded-xl p-6 border border-secondary-200">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">{benefit.title}</h3>
                  <p className="text-secondary-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-semibold mb-3">Hoe het werkt</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              In 4 stappen geholpen in {city.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 bg-white border-2 border-primary-200 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-500">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-secondary-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* Areas */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-semibold mb-3">Werkgebied</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Computerhulp in {city.name} en omgeving
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {city.serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 bg-secondary-50 rounded-lg p-3 border border-secondary-200">
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span className="text-secondary-700 font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-semibold mb-3">Veelgestelde vragen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Vragen over computerhulp in {city.name}
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-secondary-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-50 transition-colors"
                >
                  <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform ${
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

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Klaar voor computerhulp in {city.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Onze ervaren IT-specialisten in {city.name} staan klaar om u te helpen. Snel, vakkundig en betaalbaar.
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
              Bel ons
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
