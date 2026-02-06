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
  Calendar
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { ServicesGrid } from '@/components/services/ServicesGrid'

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
    description: 'Alle studenten zijn gescreend en getraind.'
  }
]

const processSteps = [
  {
    title: 'U belt of plant online',
    description: 'Vertel ons kort wat het probleem is. Wij plannen een afspraak op een moment dat u uitkomt.'
  },
  {
    title: 'Student komt langs',
    description: 'Een ervaren IT-student komt bij u thuis met alle benodigde tools en kennis.'
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
    question: 'Wat kost ICT student aan huis hulp?',
    answer: 'Wij rekenen €14,50 per kwartier, met een minimum van 3 kwartier. Voorrijkosten zijn €10 eenmalig. U betaalt achteraf.'
  },
  {
    question: 'Zijn de studenten wel gekwalificeerd?',
    answer: 'Ja, onze studenten volgen IT-opleidingen en hebben praktijkervaring. Ze worden geselecteerd op technische én communicatieve vaardigheden. Alle studenten zijn gescreend.'
  },
  {
    question: "Kunnen jullie ook 's avonds en in weekenden?",
    answer: "Ja, dat is een van onze voordelen! Studenten hebben flexibele schema's. We zijn bereikbaar van 08:00 tot 22:00, 7 dagen per week."
  },
  {
    question: 'Hoe snel kunnen jullie komen?',
    answer: 'Vaak kunnen we nog dezelfde dag langskomen. Voor urgente problemen proberen we binnen enkele uren beschikbaar te zijn.'
  },
  {
    question: 'Wat als het probleem niet opgelost kan worden?',
    answer: 'We zijn eerlijk over wat wel en niet mogelijk is. U betaalt alleen voor de tijd die besteed is aan diagnose en advies.'
  }
]

export default function StudentAanHuisPage() {
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
    name: 'ICT Student aan Huis',
    description: 'Betaalbare computerhulp door ervaren IT-studenten aan huis',
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
            <span className="text-secondary-700 font-medium">ICT Student aan huis</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - white bg, text left, image right */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
                ICT Student aan huis
              </h1>

              <p className="text-lg text-secondary-600 leading-relaxed mb-8 max-w-lg">
                Onze IT-studenten komen bij u thuis voor hulp met uw computer, tablet of telefoon. Jonge mensen met verstand van zaken, die rustig de tijd nemen om alles uit te leggen.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                >
                  Afspraak maken
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+31642827860"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Bel ons
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/student-aan-huis.webp"
                alt="IT-student helpt klant thuis met computer"
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

      {/* Why Student - white bg with left-aligned heading, 2-column list */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
              Waarom een ICT student aan huis?
            </h2>
            <p className="text-secondary-500 max-w-2xl">
              Onze studenten combineren actuele kennis met een persoonlijke aanpak, tegen een betaalbaar tarief.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-secondary-500">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works - light gray bg, numbered steps in a horizontal row */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
              Hoe het werkt
            </h2>
            <p className="text-secondary-500">
              In vier eenvoudige stappen bent u geholpen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold mb-4">
                  {index + 1}
                </span>
                <h3 className="font-semibold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-sm text-secondary-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* FAQ - white bg */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
              Veelgestelde vragen
            </h2>
            <p className="text-secondary-500">
              Alles wat u wilt weten over onze ICT student aan huis service.
            </p>
          </div>

          <div className="space-y-2">
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
                    className={`w-5 h-5 text-secondary-400 flex-shrink-0 transition-transform ${
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

      {/* Final CTA - simple light section */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
            Klaar voor betaalbare computerhulp?
          </h2>
          <p className="text-secondary-500 mb-8">
            Onze ervaren IT-studenten staan klaar om u te helpen. Snel, vakkundig en betaalbaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-secondary-700 bg-white border border-secondary-200 hover:border-secondary-300 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Bel ons
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
