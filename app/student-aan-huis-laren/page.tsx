'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  Phone,
  ArrowRight,
  ChevronDown,
  MapPin,
  Banknote,
  GraduationCap,
  CalendarDays
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { TrustAndPricing } from '@/components/home/TrustAndPricing'
import { CTASection } from '@/components/home/CTASection'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CompactServicesSection } from '@/components/home/CompactServicesSection'
import { NearbyCities } from '@/components/city/NearbyCities'
import { CityAboutSection } from '@/components/city/CityAboutSection'

const CITY = 'Laren'

const areas = [
  'Laren Centrum', 'Laren Noord', 'Blaricum', 'Hilversum',
  'Bussum', 'Naarden', 'Huizen', 'Eemnes',
  'Baarn', 'Loosdrecht', 'Kortenhoef', 'Hollandsche Rading'
]

const faqData = [
  {
    question: `Wat kost ICT student aan huis hulp in ${CITY}?`,
    answer: `Wij rekenen €14,50 per kwartier, met een minimum van 3 kwartier. Voorrijkosten zijn €10 eenmalig. U betaalt achteraf.`
  },
  {
    question: `Zijn de studenten wel gekwalificeerd in ${CITY}?`,
    answer: `Ja, onze studenten in ${CITY} volgen IT-opleidingen aan de Hogeschool Utrecht. Ze worden geselecteerd op technische én communicatieve vaardigheden. Alle studenten zijn gescreend.`
  },
  {
    question: `Kunnen jullie ook 's avonds en in weekenden in ${CITY}?`,
    answer: `Ja, dat is een van onze voordelen! Studenten hebben flexibele schema's. We zijn bereikbaar van 08:00 tot 21:00, 7 dagen per week in ${CITY}.`
  },
  {
    question: `Hoe snel kunnen jullie komen in ${CITY}?`,
    answer: `Vaak kunnen we nog dezelfde dag langskomen in ${CITY}. Voor urgente problemen proberen we binnen enkele uren beschikbaar te zijn.`
  },
  {
    question: `Welke gebieden in ${CITY} bedienen jullie?`,
    answer: `We bedienen heel ${CITY} en omgeving, inclusief ${areas.slice(0, 6).join(', ')} en meer.`
  }
]

export default function StudentAanHuisCityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

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
        name: `ICT Student aan Huis ${CITY}`,
        item: 'https://hulpmetit.nl/student-aan-huis-laren'
      }
    ]
  }

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
      url: 'https://hulpmetit.nl'
    },
    areaServed: {
      '@type': 'City',
      name: CITY
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

      {/* Hero - matching homepage */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <Image
          src="/student-aan-huis.webp"
          alt="Student aan huis in Laren"
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
                Student aan huis{' '}
                <span className="text-accent-400">in {CITY}</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Een HBO-opgeleide student komt bij u thuis in {CITY}, lost het probleem op en legt alles uit in gewone taal. Zo kunt u er weer tegenaan.
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

      <CityAboutSection citySlug="laren" pageType="student" />

      <SectionDivider variant="soft-curve" topColor="#ffffff" bottomColor="#ffffff" />

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

      {/* Areas - city-specific */}
      {areas.length > 0 && (
        <section className="py-20 lg:py-28 bg-secondary-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Werkgebied</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
              {areas.map((area, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-3.5 lg:p-4 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="font-medium text-secondary-900 text-sm">{area}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <NearbyCities currentCitySlug="laren" pageType="student" />

      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />

      {/* FAQ - city-specific */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
                Vragen over ICT student aan huis in {CITY}
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

      {/* Cross-link */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary-600">
            Heeft u een complex probleem? Onze{' '}
            <a href="/computerhulp-aan-huis-laren" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              HBO-opgeleide studenten staan klaar
            </a>
            .
          </p>
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
