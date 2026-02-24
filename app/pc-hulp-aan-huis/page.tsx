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
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CompactServicesSection } from '@/components/home/CompactServicesSection'
import cities from '@/lib/data/cities.json'

const displayCities = cities.slice(0, 12)

const faqData = [
  { question: 'Wat kost PC hulp aan huis?', answer: 'Wij rekenen €14,50 per kwartier, met een minimum van 3 kwartier (€43,50 + €10 voorrijkosten = €53,50). U betaalt achteraf, alleen voor de bestede tijd.' },
  { question: 'Hoe snel kan iemand langskomen voor PC hulp?', answer: 'In de meeste gevallen kunnen wij binnen 24 uur bij u langskomen. Voor spoedgevallen proberen wij vaak nog dezelfde dag te helpen.' },
  { question: 'Welke PC problemen lossen jullie op aan huis?', answer: 'Vrijwel alles: trage computer, virusverwijdering, internetproblemen, printers, e-mail, software installatie, Windows updates, data backup en meer. Bij hardware problemen geven wij eerlijk advies.' },
  { question: 'Moet ik mijn PC naar een winkel brengen?', answer: 'Nee! Dat is juist het voordeel van onze service. Wij komen naar u toe, zodat u niet hoeft te sjouwen met uw computer.' },
  { question: 'Zijn jullie ook beschikbaar in het weekend?', answer: 'Ja, wij zijn 7 dagen per week beschikbaar van 08:00 tot 21:00 uur. Ook in het weekend en op feestdagen.' }
]

export default function PcHulpAanHuisPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <Image src="/hulp-met-it.webp" alt="PC hulp aan huis door ICT-student" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/75 to-secondary-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-secondary-900/30" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                PC hulp{' '}<span className="text-accent-400">aan huis</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Problemen met uw PC? Onze student komt bij u thuis en lost het op. Geen gedoe met inleveren, wij werken aan uw keukentafel en leggen alles rustig uit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link href="/afspraak" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-accent">
                  Hulp inplannen <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+31642827860" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl transition-colors">
                  <Phone className="w-4 h-4" /> Bel 06-42827860
                </a>
              </div>
              <p className="text-accent-400 text-sm font-medium mb-8">Meestal binnen 24 uur geholpen</p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/15 rounded-full px-3 py-1 font-medium"><GraduationCap className="w-3.5 h-3.5 text-primary-300" />HBO-opgeleide studenten</span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/15 rounded-full px-3 py-1 font-medium"><Banknote className="w-3.5 h-3.5 text-primary-300" />Vanaf €14,50 per kwartier</span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/15 rounded-full px-3 py-1 font-medium"><CalendarDays className="w-3.5 h-3.5 text-primary-300" />7 dagen per week</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider variant="soft-curve" topColor="#1c1917" bottomColor="#fafaf9" />

      {/* Over PC hulp aan huis */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">PC hulp</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">Waarmee wij u helpen</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl shadow-card p-8 space-y-4">
              <p className="text-secondary-600 leading-relaxed">
                Problemen met uw PC? Of het nu gaat om een trage computer, virusinfecties, internetproblemen of vastgelopen software — onze HBO-opgeleide studenten lossen het op bij u aan de keukentafel. Geen gedoe met inleveren bij een winkel of wekenlang wachten.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Wij helpen met alles: printers die niet werken, e-mailproblemen, software-installatie, Windows updates, data backup en meer. Bij hardwareproblemen stellen wij een eerlijke diagnose. Onze studenten leggen alles rustig uit in begrijpelijke taal, zodat u ook weet wat er aan de hand was.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Beschikbaar 7 dagen per week van 08:00 tot 21:00, ook in het weekend. In de meeste gevallen komen wij binnen 24 uur bij u langs. U betaalt vanaf €14,50 per kwartier, alleen voor de daadwerkelijk bestede tijd.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />
      <CompactServicesSection />
      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />
      <HowItWorks />
      <SectionDivider variant="wave" topColor="#ffffff" bottomColor="#fafaf9" />
      <PricingSection />

      <TestimonialsSection />
      <SectionDivider variant="layered-wave" topColor="#fafaf9" bottomColor={{ colors: ['#1c1917', '#292524', '#1c1917'], id: 'grad-trust' }} />
      <TrustAndPricing />
      <SectionDivider variant="swoosh" topColor={{ colors: ['#1c1917', '#292524', '#1c1917'], id: 'grad-trust-bot' }} bottomColor="#fafaf9" />
      {/* Cities overview */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Werkgebied</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">PC hulp aan huis in heel Nederland</h2>
              <p className="text-secondary-500 max-w-xl mx-auto text-lg">Onze studenten komen bij u thuis, waar u ook woont.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 mb-10">
            {displayCities.map((city, index) => (
              <ScrollReveal key={city.slug} delay={index * 50}>
                <Link href={`/computerhulp-aan-huis-${city.slug}`} className="group flex items-center gap-3 bg-white rounded-xl p-3.5 lg:p-4 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="font-medium text-secondary-900 text-sm group-hover:text-primary-600 transition-colors truncate">{city.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-secondary-300 group-hover:text-primary-500 transition-colors flex-shrink-0 ml-auto" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-secondary-400 text-sm">+ {cities.length - 12} andere steden</span>
              <Link href="/regios" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-primary text-sm">
                Alle regio&apos;s bekijken <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">Veelgestelde vragen over PC hulp aan huis</h2>
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
                    <ChevronDown className={`w-5 h-5 text-primary-700 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
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

      <SectionDivider variant="tilt" topColor="#ffffff" bottomColor={{ colors: ['#204a8e', '#2557a7', '#204a8e'], id: 'grad-cta' }} />
      <CTASection />
      <SectionDivider variant="diagonal" topColor={{ colors: ['#204a8e', '#2557a7', '#204a8e'], id: 'grad-cta-bot' }} bottomColor="#1c1917" />
    </>
  )
}
