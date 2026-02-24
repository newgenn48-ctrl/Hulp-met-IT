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
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CompactServicesSection } from '@/components/home/CompactServicesSection'

const faqData = [
  { question: 'Wat kost hulp bij laptop problemen?', answer: 'Wij rekenen €14,50 per kwartier, met een minimum van 3 kwartier (€43,50 + €10 voorrijkosten = €53,50). De meeste laptop problemen lossen we binnen 1 bezoek op.' },
  { question: 'Kunnen jullie alle merken laptops helpen?', answer: 'Ja, wij helpen met alle merken: HP, Dell, Lenovo, Asus, Acer, Apple MacBook, Microsoft Surface en meer. Windows, macOS en Chromebook.' },
  { question: 'Mijn laptop start niet meer op, kunnen jullie helpen?', answer: 'Ja! Opstartproblemen zijn een van de meest voorkomende issues die wij oplossen. Van blauw scherm tot zwart scherm — wij diagnosticeren en repareren het.' },
  { question: 'Is het beter om mijn laptop te laten repareren of een nieuwe te kopen?', answer: 'Dat hangt af van het probleem en de leeftijd van uw laptop. Onze studenten geven eerlijk advies. Vaak is een SSD upgrade of schone installatie al voldoende.' },
  { question: 'Kunnen jullie mijn laptop ook sneller maken?', answer: 'Ja! Met een SSD upgrade, geheugenuitbreiding of systeemoptimalisatie maken we uw laptop merkbaar sneller. Dit is vaak goedkoper dan een nieuwe laptop.' }
]

export default function HulpBijLaptopProblemenPage() {
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
        <Image src="/hulp-met-it.webp" alt="Hulp bij laptop problemen aan huis" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/75 to-secondary-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-secondary-900/30" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Hulp bij{' '}<span className="text-accent-400">laptop problemen</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Laptop traag, vastgelopen of werkt niet meer? Onze student komt bij u thuis en lost het op. Snel, betaalbaar en zonder dat u ergens heen hoeft.
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

      {/* Over laptop problemen */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Laptop problemen</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">Veelvoorkomende laptop problemen</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl shadow-card p-8 space-y-4">
              <p className="text-secondary-600 leading-relaxed">
                Uw laptop reageert langzaam, de opstart duurt lang of programma&apos;s hangen? Wij optimaliseren uw systeem voor merkbaar snellere prestaties. Ook wifi-problemen lossen wij op: geen verbinding, trage snelheid of een laptop die steeds wordt losgekoppeld van het netwerk.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Gaat uw batterij snel leeg of werkt de laptop alleen nog op netstroom? Wij diagnosticeren het probleem en adviseren over vervanging. Bij verdachte pop-ups, vreemd gedrag of onbekende programma&apos;s verwijderen wij malware grondig en beveiligen uw laptop tegen toekomstige dreigingen.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Is uw opslagruimte vol of zijn bestanden kwijt? Wij helpen met opruimen, backup maken en eventueel upgraden naar een snellere SSD. Ook vastgelopen Windows updates, foutmeldingen of een laptop die niet meer opstart na een update — wij herstellen het bij u thuis.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />
      <HowItWorks />
      <SectionDivider variant="wave" topColor="#ffffff" bottomColor="#fafaf9" />
      <PricingSection />

      <TestimonialsSection />
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
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">Veelgestelde vragen over laptop problemen</h2>
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
