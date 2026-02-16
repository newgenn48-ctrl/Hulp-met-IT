'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Banknote,
  GraduationCap,
  CalendarDays,
  MapPin,
  ChevronRight
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { TrustAndPricing } from '@/components/home/TrustAndPricing'
import { CTASection } from '@/components/home/CTASection'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CompactServicesSection } from '@/components/home/CompactServicesSection'
import cities from '@/lib/data/cities.json'

const displayCities = cities.slice(0, 12)

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
    answer: "Ja, dat is een van onze voordelen! Studenten hebben flexibele schema's. We zijn bereikbaar van 08:00 tot 21:00, 7 dagen per week."
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

      {/* Hero - matching homepage */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <Image
          src="/student-aan-huis.webp"
          alt="Student aan huis voor computerhulp"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/75 to-secondary-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-secondary-900/30" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-2xl">
            <ScrollReveal>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Student{' '}
                <span className="text-accent-400">aan huis</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Onze IT-studenten komen bij u thuis voor hulp met uw computer, tablet of telefoon. Jonge mensen met verstand van zaken, die alles rustig en geduldig uitleggen.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-accent"
                >
                  Afspraak maken
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+31642827860"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Bel ons<span className="hidden sm:inline"> - 06-42827860</span>
                </a>
              </div>

              <p className="text-accent-400 text-sm font-medium mb-8">
                Meestal binnen 24 uur geholpen
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/15 rounded-full px-3 py-1 font-medium">
                  <GraduationCap className="w-3.5 h-3.5 text-primary-300" />
                  HBO-opgeleide studenten
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/15 rounded-full px-3 py-1 font-medium">
                  <Banknote className="w-3.5 h-3.5 text-primary-300" />
                  Betaalbare tarieven
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/15 rounded-full px-3 py-1 font-medium">
                  <CalendarDays className="w-3.5 h-3.5 text-primary-300" />
                  7 dagen per week
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider variant="soft-curve" topColor="#1c1917" bottomColor="#fafaf9" />

      <CompactServicesSection />

      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />

      <HowItWorks />

      <SectionDivider variant="wave" topColor="#ffffff" bottomColor="#fafaf9" />

      <PricingSection />

      <SectionDivider
        variant="layered-wave"
        topColor="#fafaf9"
        bottomColor={{ colors: ['#1c1917', '#292524', '#1c1917'], id: 'grad-trust' }}
      />

      <TrustAndPricing />

      <SectionDivider
        variant="swoosh"
        topColor={{ colors: ['#1c1917', '#292524', '#1c1917'], id: 'grad-trust-bot' }}
        bottomColor="#fafaf9"
      />

      {/* Cities overview */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Werkgebied</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                ICT Student aan huis in heel Nederland
              </h2>
              <p className="text-secondary-500 max-w-xl mx-auto text-lg">
                Onze studenten komen bij u thuis, waar u ook woont.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 mb-10">
            {displayCities.map((city, index) => (
              <ScrollReveal key={city.slug} delay={index * 50}>
                <Link
                  href={`/student-aan-huis-${city.slug}`}
                  className="group flex items-center gap-3 bg-white rounded-xl p-3.5 lg:p-4 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="font-medium text-secondary-900 text-sm group-hover:text-primary-600 transition-colors truncate">
                    {city.name}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-secondary-300 group-hover:text-primary-500 transition-colors flex-shrink-0 ml-auto" />
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-secondary-400 text-sm">+ {cities.length - 12} andere steden</span>
              <Link
                href="/regios"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-primary text-sm"
              >
                Alle regio&apos;s bekijken
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
                Veelgestelde vragen
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <div className="bg-secondary-50 rounded-2xl shadow-card overflow-hidden">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider
        variant="tilt"
        topColor="#ffffff"
        bottomColor={{ colors: ['#204a8e', '#2557a7', '#204a8e'], id: 'grad-cta' }}
      />

      <CTASection />

      <SectionDivider
        variant="diagonal"
        topColor={{ colors: ['#204a8e', '#2557a7', '#204a8e'], id: 'grad-cta-bot' }}
        bottomColor="#1c1917"
      />
    </>
  )
}
