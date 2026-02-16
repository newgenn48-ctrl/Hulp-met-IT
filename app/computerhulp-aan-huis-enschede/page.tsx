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

const neighborhoods = [
  'Enschede Centrum',
  'Enschede Noord',
  'Enschede Zuid',
  'Enschede Oost',
  'Enschede West'
]

const faqData = [
  {
    question: "Wat kost computerhulp aan huis in Enschede?",
    answer: "Onze computerhulp aan huis in Enschede kost €14,50 per kwartier, met een minimum van 3 kwartier. Voorrijkosten zijn €10 eenmalig. U betaalt achteraf."
  },
  {
    question: "Hoe snel kan een student bij mij thuis komen in Enschede?",
    answer: "In de meeste gevallen kunnen wij binnen 24-48 uur bij u langskomen in Enschede. Voor spoedgevallen bieden wij vaak nog dezelfde dag service aan."
  },
  {
    question: "Welke computerproblemen lossen jullie op in Enschede?",
    answer: "Wij helpen met alle computerproblemen: trage computer, virusverwijdering, Windows updates, software installatie, internet problemen, e-mail instellen, printer setup en meer."
  },
  {
    question: "Hebben jullie ervaring met computerhulp aan huis?",
    answer: "Ja, wij hebben ruime ervaring met computerhulp aan huis in Enschede en omgeving. Onze studenten zijn HBO-opgeleid en kunnen vrijwel elk computerprobleem oplossen."
  },
  {
    question: "Werken jullie ook in het weekend in Enschede?",
    answer: "Ja, wij zijn 7 dagen per week beschikbaar van 08:00 tot 21:00 uur. Ook in het weekend kunt u dus rekenen op onze computerhulp aan huis in Enschede."
  }
]

export default function ComputerhulpAanHuisEnschede() {
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
        name: 'Computerhulp aan huis Enschede',
        item: 'https://hulpmetit.nl/computerhulp-aan-huis-enschede'
      }
    ]
  }

  const localBusinessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hulp met IT - Computerhulp aan Huis Enschede',
    description: 'Professionele computerhulp aan huis in Enschede door HBO-opgeleide ICT-studenten',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-enschede',
    telephone: '+31642827860',
    email: 'info@hulpmetit.nl',
    areaServed: {
      '@type': 'City',
      name: 'Enschede',
      addressRegion: 'Overijssel',
      addressCountry: 'NL'
    },
    serviceType: 'Computerhulp aan huis Enschede',
    priceRange: '\u20AC53,50 - \u20AC100',
    openingHours: 'Mo-Su 08:00-21:00'
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero - matching homepage */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <Image
          src="/hulp-met-it.webp"
          alt="Computerhulp aan huis in Enschede"
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
                Computerhulp{' '}
                <span className="text-accent-400">aan huis in Enschede</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Een HBO-opgeleide student komt bij u thuis in Enschede, lost het probleem op en legt alles uit in gewone taal. Zo kunt u er weer tegenaan.
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

      <CityAboutSection citySlug="enschede" pageType="computerhulp" />

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

      {/* Neighborhoods - city-specific */}
      {neighborhoods.length > 0 && (
        <section className="py-20 lg:py-28 bg-secondary-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Werkgebied</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                  Computerhulp aan huis in heel Enschede
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-4 mb-10">
              {neighborhoods.map((hood, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-3.5 lg:p-4 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="font-medium text-secondary-900 text-sm">{hood}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <p className="text-secondary-500 text-lg leading-relaxed max-w-3xl mx-auto">
                  Hulp met IT biedt computerhulp aan huis in heel Enschede. Onze vriendelijke studenten komen naar u toe en helpen u rustig en geduldig met uw computerproblemen. Betaalbaar en bij u thuis.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <NearbyCities currentCitySlug="enschede" pageType="computerhulp" />

      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />

      {/* FAQ - city-specific */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
                Veelgestelde vragen over computerhulp aan huis Enschede
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
            Op zoek naar betaalbare hulp? Onze{' '}
            <a href="/student-aan-huis-enschede" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              IT-studenten helpen u ook graag
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
