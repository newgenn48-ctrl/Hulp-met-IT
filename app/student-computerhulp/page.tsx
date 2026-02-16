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
  CalendarDays
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { TrustAndPricing } from '@/components/home/TrustAndPricing'
import { CTASection } from '@/components/home/CTASection'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CompactServicesSection } from '@/components/home/CompactServicesSection'

const faqData = [
  { question: 'Waarom student computerhulp kiezen?', answer: 'Studenten combineren actuele IT-kennis met betaalbare tarieven. Ze zijn geduldig, spreken uw taal en leggen alles rustig en geduldig uit. Bovendien komen ze bij u thuis.' },
  { question: 'Zijn studenten wel goed genoeg voor mijn probleem?', answer: 'Ja! Onze studenten zijn HBO-opgeleid in IT en hebben praktijkervaring. Ze worden geselecteerd op zowel technische vaardigheden als communicatie. Ze lossen dagelijks dezelfde problemen op als dure IT-bedrijven.' },
  { question: 'Wat kost student computerhulp?', answer: 'Wij rekenen €14,50 per kwartier, met een minimum van 3 kwartier (€43,50 + €10 voorrijkosten = €53,50). Veel goedkoper dan een commercieel IT-bedrijf.' },
  { question: 'Waarmee helpen jullie studenten?', answer: 'Met alles rondom computers, laptops, tablets en telefoons: trage systemen, virusverwijdering, wifi-problemen, e-mail instellen, printers, software installatie, Windows updates, en meer.' },
  { question: 'Hoe snel kan een student langskomen?', answer: 'Vaak al binnen 24 uur. Studenten hebben flexibele roosters, waardoor we ook op korte termijn kunnen helpen. Bel voor de snelste beschikbaarheid.' }
]

export default function StudentComputerhulpPage() {
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
        <Image src="/student-aan-huis.webp" alt="Student computerhulp aan huis" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/75 to-secondary-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-secondary-900/30" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Student{' '}<span className="text-accent-400">computerhulp</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Betaalbare computerhulp door HBO-opgeleide IT-studenten. Ze komen bij u thuis, leggen alles rustig uit in gewone taal.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link href="/afspraak" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-accent">
                  Student inplannen <ArrowRight className="w-5 h-5" />
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

      {/* Waarom student computerhulp */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Waarom een student?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">Voordelen van student computerhulp</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl shadow-card p-8 space-y-4">
              <p className="text-secondary-600 leading-relaxed">
                Onze studenten volgen IT-opleidingen aan hogescholen en universiteiten, waardoor zij altijd beschikken over actuele kennis van de nieuwste technologieën. Ze combineren deze vakkennis met betaalbare tarieven — vanaf €14,50 per kwartier, zonder verborgen kosten.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Wat onze studenten onderscheidt, is hun geduld en persoonlijke aanpak. Ze leggen alles rustig en geduldig uit in begrijpelijke taal, zonder jargon en zonder haast. Alle studenten zijn gescreend en verzekerd, zodat uw apparaten en gegevens altijd in veilige handen zijn.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Onze studenten zijn 7 dagen per week beschikbaar, ook &apos;s avonds en in het weekend. En u krijgt altijd eerlijk advies: geen onnodige reparaties. Als iets niet te fixen is, vertellen we dat eerlijk. U betaalt alleen voor de daadwerkelijk bestede tijd.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />
      <HowItWorks />
      <SectionDivider variant="wave" topColor="#ffffff" bottomColor="#fafaf9" />
      <PricingSection />
      <SectionDivider variant="layered-wave" topColor="#fafaf9" bottomColor={{ colors: ['#1c1917', '#292524', '#1c1917'], id: 'grad-trust' }} />
      <TrustAndPricing />
      <SectionDivider variant="swoosh" topColor={{ colors: ['#1c1917', '#292524', '#1c1917'], id: 'grad-trust-bot' }} bottomColor="#fafaf9" />
      <CompactServicesSection />
      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">Veelgestelde vragen over student computerhulp</h2>
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
