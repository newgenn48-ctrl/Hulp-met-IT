'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  Phone,
  ArrowRight,
  Check,
  ChevronDown,
  Users,
  Shield,
  Clock,
  GraduationCap,
  Calendar,
  MapPin
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { ServicesGrid } from '@/components/services/ServicesGrid'

const CITY = 'Schiedam'

const schiedamAreas = [
  'Schiedam Centrum',
  'Schiedam Noord',
  'Schiedam Oost',
  'Schiedam West',
  'Vlaardingen',
  'Rotterdam',
  'Delft',
  'Maassluis',
  'Hoek van Holland',
  'Overschie',
  'Delfshaven',
  'Spijkenisse'
]

const benefits = [
  {
    icon: Check,
    title: 'Transparante Tarieven',
    description: 'Duidelijke prijzen vooraf, geen verborgen kosten of verrassingen.'
  },
  {
    icon: GraduationCap,
    title: 'IT-Studenten',
    description: 'Opgeleid in de nieuwste technologieën, vertrouwd met moderne systemen.'
  },
  {
    icon: Clock,
    title: 'Flexibele Tijden',
    description: "Ook 's avonds en in weekenden beschikbaar in " + CITY + "."
  },
  {
    icon: Users,
    title: 'Persoonlijke Aanpak',
    description: 'Geduldig en begrijpelijke uitleg, zonder vakjargon.'
  },
  {
    icon: Calendar,
    title: 'Snel Beschikbaar',
    description: `Vaak nog dezelfde dag in ${CITY}, ook voor spoedgevallen.`
  },
  {
    icon: Shield,
    title: 'Betrouwbaar',
    description: 'Alle studenten zijn gescreend en getraind.'
  }
]

const processSteps = [
  {
    title: 'U belt of plant online',
    description: `Vertel ons kort wat het probleem is. Wij plannen een afspraak op een moment dat u uitkomt in ${CITY}.`
  },
  {
    title: 'Student komt langs',
    description: `Een ervaren IT-student komt bij u thuis in ${CITY} met alle benodigde tools en kennis.`
  },
  {
    title: 'Probleem wordt opgelost',
    description: 'Vakkundige hulp tegen studententarief. U krijgt uitleg zodat u het begrijpt.'
  },
  {
    title: 'Betaling achteraf',
    description: 'U betaalt pas na afloop. Geen vooruitbetaling, geen verrassingen.'
  }
]

const faqData = [
  {
    question: `Wat kost ICT student aan huis hulp in ${CITY}?`,
    answer: `Wij rekenen €14,50 per kwartier met een minimum van 45 minuten (3 kwartier) plus €10 voorrijkosten. Een standaard bezoek van 45 minuten kost dus €14,50 per kwartier in ${CITY}. U betaalt achteraf.`
  },
  {
    question: `Zijn de studenten wel gekwalificeerd in ${CITY}?`,
    answer: `Ja, onze studenten in ${CITY} volgen IT-opleidingen aan instellingen zoals Hogeschool Rotterdam en TU Delft en hebben praktijkervaring. Ze worden geselecteerd op technische én communicatieve vaardigheden. Alle studenten zijn gescreend.`
  },
  {
    question: `Kunnen jullie ook 's avonds en in weekenden in ${CITY}?`,
    answer: `Ja, dat is een van onze voordelen! Studenten in ${CITY} hebben flexibele schema's. We zijn bereikbaar van 08:00 tot 21:00, 7 dagen per week.`
  },
  {
    question: `Hoe snel kunnen jullie komen in ${CITY}?`,
    answer: `Vaak kunnen we nog dezelfde dag langskomen in ${CITY} en omgeving. Voor urgente problemen proberen we binnen enkele uren beschikbaar te zijn.`
  },
  {
    question: `Welke wijken in ${CITY} bedienen jullie?`,
    answer: `We bedienen alle wijken van ${CITY}: Centrum, Noord, Oost, West, plus omliggende gemeenten zoals Vlaardingen, Rotterdam, Delft, Maassluis, Hoek van Holland, Overschie, Delfshaven en Spijkenisse.`
  },
  {
    question: 'Wat als het probleem niet opgelost kan worden?',
    answer: 'We zijn eerlijk over wat wel en niet mogelijk is. U betaalt alleen voor de tijd die besteed is aan diagnose en advies.'
  }
]

export default function StudentAanHuisSchiedamPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Structured data
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
    name: `ICT Student aan Huis ${CITY}`,
    description: `Betaalbare computerhulp door ervaren IT-studenten aan huis in ${CITY}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Hulp met IT',
      telephone: '+31642827860',
      url: 'https://hulpmetit.nl',
      address: {
        '@type': 'PostalAddress',
        addressLocality: CITY,
        addressRegion: 'Zuid-Holland',
        addressCountry: 'NL'
      }
    },
    areaServed: {
      '@type': 'City',
      name: CITY
    },
    offers: {
      '@type': 'Offer',
      price: '14.50',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '14.50',
        priceCurrency: 'EUR',
        unitText: 'per kwartier'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1'
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
            <Link href="/student-aan-huis" className="text-secondary-500 hover:text-primary-700">ICT Student aan huis</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">{CITY}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <div>
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight mb-6">
                ICT Student aan huis
                <span className="text-primary-700"> {CITY}</span>
              </h1>

              {/* Subtitel */}
              <p className="text-xl text-secondary-600 leading-relaxed mb-4 max-w-lg">
                Hulp nodig met uw computer of telefoon? Onze IT-student komt bij u thuis en lost het samen met u op.
              </p>
              <p className="text-lg text-secondary-500 mb-8 max-w-lg">
                Ook senioren in {CITY} begeleiden wij met geduld en heldere uitleg.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors "
                >
                  Afspraak maken
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+31642827860"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel ons
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-secondary-200">
                <Image
                  src="/student-aan-huis.webp"
                  alt={`IT-student helpt klant thuis met computer in ${CITY}`}
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
{/* Services */}
      <ServicesGrid maxItems={6} />

      {/* Why Student */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-700 font-semibold mb-3">Waarom een student?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
              Voordelen van ICT student aan huis in {CITY}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-secondary-200">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 text-primary-600" />
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
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
              In 4 stappen geholpen in {CITY}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 bg-white border-2 border-primary-200 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-700">{index + 1}</span>
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
      {/* Pricing */}
      <PricingSection />

      {/* Areas Section */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
              Wij komen bij u thuis in {CITY} en omgeving
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Onze IT-studenten zijn actief in alle wijken van {CITY} en omliggende gemeenten.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {schiedamAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 border border-secondary-200 flex items-center gap-3"
              >
                <MapPin className="w-5 h-5 text-primary-700 flex-shrink-0" />
                <span className="text-secondary-700 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-600">
              Staat uw wijk er niet bij? <strong>Bel ons</strong> - wij komen waarschijnlijk ook bij u!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
              Vragen over ICT student aan huis {CITY}
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
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
                <div className={`px-5 pb-5 ${openFaq === index ? '' : 'hidden'}`}>
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Klaar voor betaalbare computerhulp in {CITY}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Onze ervaren IT-studenten in {CITY} staan klaar om u te helpen. Snel, vakkundig en betaalbaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-primary-600 bg-white hover:bg-secondary-50 rounded-lg transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white border border-white/30 hover:bg-white/10 rounded-lg transition-colors"
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
