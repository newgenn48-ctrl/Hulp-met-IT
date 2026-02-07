'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Users,
  Award,
  Shield,
  Clock,
  Monitor,
  Wrench
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { ServicesGrid } from '@/components/services/ServicesGrid'

const benefits = [
  {
    icon: Award,
    title: '10+ Jaar Ervaring',
    description: 'Onze specialisten hebben ruim 10 jaar ervaring met computerhulp.'
  },
  {
    icon: Users,
    title: 'Persoonlijke Aanpak',
    description: 'Geduldig en begrijpelijke uitleg, zonder vakjargon.'
  },
  {
    icon: Clock,
    title: 'Snel Ter Plaatse',
    description: 'Vaak nog dezelfde dag, ook voor spoedgevallen.'
  },
  {
    icon: Shield,
    title: 'Betrouwbaar & Veilig',
    description: 'Alle specialisten zijn gescreend. Uw privacy staat voorop.'
  },
  {
    icon: Wrench,
    title: 'Alle Problemen',
    description: 'Van trage computer tot virus, wij lossen het op.'
  },
  {
    icon: Monitor,
    title: 'Alle Merken',
    description: 'HP, Dell, Lenovo, Asus, Apple - wij kennen ze allemaal.'
  }
]

const processSteps = [
  {
    title: 'U belt of plant online',
    description: 'Vertel ons kort wat het probleem is. Wij plannen een afspraak op een moment dat u uitkomt.'
  },
  {
    title: 'Specialist komt langs',
    description: 'Een ervaren IT-specialist komt bij u thuis met alle benodigde tools.'
  },
  {
    title: 'Probleem wordt opgelost',
    description: 'Vakkundige hulp ter plekke. U krijgt uitleg zodat u het begrijpt.'
  },
  {
    title: 'Betaling achteraf',
    description: 'U betaalt pas na afloop. Geen vooruitbetaling, geen verrassingen.'
  }
]

const faqData = [
  {
    question: 'Wat kost computerhulp aan huis?',
    answer: 'Wij rekenen €14,50 per kwartier, met een minimum van 3 kwartier. Voorrijkosten zijn €10 eenmalig. U betaalt achteraf.'
  },
  {
    question: 'Hoe snel kunnen jullie komen?',
    answer: 'Vaak kunnen we nog dezelfde dag langskomen. Voor urgente problemen proberen we binnen enkele uren beschikbaar te zijn.'
  },
  {
    question: 'Kunnen jullie alle merken computers helpen?',
    answer: 'Ja, wij hebben ervaring met alle merken: HP, Dell, Lenovo, Asus, Acer, Apple en anderen. Ook helpen wij met alle Windows-versies.'
  },
  {
    question: 'Wat als het probleem niet opgelost kan worden?',
    answer: 'We zijn eerlijk over wat wel en niet mogelijk is. U betaalt alleen voor de tijd die besteed is aan diagnose en advies.'
  },
  {
    question: "Komen jullie ook 's avonds en in weekenden?",
    answer: "Ja, wij zijn flexibel. We zijn bereikbaar van 08:00 tot 21:00, 7 dagen per week."
  }
]

export default function ComputerhulpAanHuisPage() {
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
    name: 'Computerhulp aan Huis',
    alternateName: ['Computer reparatie aan huis', 'Laptop hulp thuis', 'IT specialist aan huis'],
    description: 'Professionele computerhulp aan huis door ervaren IT-specialisten',
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
            <Link href="/" className="text-secondary-500 hover:text-primary-700">Home</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">Computerhulp aan huis</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
                Computerhulp aan huis
              </h1>

              <p className="text-lg text-secondary-600 leading-relaxed mb-8 max-w-lg">
                Problemen met uw computer? Onze medewerker komt bij u thuis langs en lost het ter plekke op. U hoeft nergens heen, wij komen naar u toe en leggen alles uit in gewone taal.
              </p>

              {/* CTA Buttons */}
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

            {/* Photo */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/hulp-met-it.webp"
                alt="IT-specialist helpt klant thuis met computerproblemen"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesGrid maxItems={6} />

      {/* Why Us */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-10">
            Voordelen van computerhulp aan huis
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-secondary-200">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">{benefit.title}</h3>
                  <p className="text-secondary-500">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
              In 4 stappen geholpen
            </h2>
            <p className="text-secondary-500 max-w-xl mx-auto">
              Van eerste contact tot een opgelost probleem - zo werkt het.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-secondary-900">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-secondary-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-8">
            Veelgestelde vragen
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
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
            Klaar voor professionele computerhulp?
          </h2>
          <p className="text-secondary-500 mb-8 max-w-xl mx-auto">
            Onze ervaren IT-specialisten staan klaar om u te helpen. Snel, vakkundig en betrouwbaar.
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
