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
  { question: 'Waarom student computerhulp kiezen?', answer: 'Studenten combineren actuele IT-kennis met betaalbare tarieven. Ze zijn geduldig, spreken uw taal en leggen alles rustig en geduldig uit. Bovendien komen ze bij u thuis.' },
  { question: 'Zijn studenten wel goed genoeg voor mijn probleem?', answer: 'Ja! Onze studenten zijn HBO-opgeleid in IT en hebben praktijkervaring. Ze worden geselecteerd op zowel technische vaardigheden als communicatie. Ze lossen dagelijks dezelfde problemen op als dure IT-bedrijven.' },
  { question: 'Wat kost student computerhulp?', answer: 'Wij rekenen €14,50 per kwartier, met een minimum van 3 kwartier (€43,50 + €10 voorrijkosten = €53,50). Veel goedkoper dan een commercieel IT-bedrijf.' },
  { question: 'Waarmee helpen jullie studenten?', answer: 'Met alles rondom computers, laptops, tablets en telefoons: trage systemen, virusverwijdering, wifi-problemen, e-mail instellen, printers, software installatie, Windows updates, en meer.' },
  { question: 'Hoe snel kan een student langskomen?', answer: 'Vaak al binnen 24 uur. Studenten hebben flexibele roosters, waardoor we ook op korte termijn kunnen helpen. Bel voor de snelste beschikbaarheid.' },
  { question: 'In welke steden zijn jullie studenten actief?', answer: 'Onze HBO-opgeleide ICT-studenten zijn actief in meer dan 40 steden door heel Nederland, waaronder Amsterdam, Rotterdam, Utrecht, Den Haag, Eindhoven en vele andere plaatsen. Bekijk onze regio-pagina voor een compleet overzicht.' }
]

export default function StudentComputerhulpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hulpmetit.nl' },
      { '@type': 'ListItem', position: 2, name: 'Student Computerhulp', item: 'https://hulpmetit.nl/student-computerhulp' }
    ]
  }

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  }

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Student Computerhulp aan Huis',
    alternateName: ['Computerhulp door studenten', 'ICT student aan huis', 'Betaalbare computerhulp'],
    description: 'Betaalbare computerhulp aan huis door HBO-opgeleide ICT-studenten',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Hulp met IT',
      telephone: '+31858005006',
      url: 'https://hulpmetit.nl'
    },
    areaServed: { '@type': 'Country', name: 'Nederland' },
    offers: { '@type': 'Offer', price: '14.50', priceCurrency: 'EUR' }
  }

  const localBusinessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hulp met IT - Student Computerhulp',
    description: 'Betaalbare computerhulp aan huis door HBO-opgeleide ICT-studenten',
    url: 'https://hulpmetit.nl/student-computerhulp',
    telephone: '+31858005006',
    email: 'info@hulpmetit.nl',
    areaServed: { '@type': 'Country', name: 'Nederland' },
    serviceType: 'Student computerhulp aan huis',
    priceRange: '€53,50 - €100',
    openingHours: 'Mo-Su 08:00-21:00'
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }} />

      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <Image src="/student-aan-huis.webp" alt="HBO-opgeleide ICT-student biedt computerhulp aan huis" fill priority className="object-cover" sizes="100vw" />
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
                <a href="tel:+31858005006" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl transition-colors">
                  <Phone className="w-4 h-4" /> Bel 085-8005006
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

      <TestimonialsSection />
      <SectionDivider variant="layered-wave" topColor="#fafaf9" bottomColor={{ colors: ['#1c1917', '#292524', '#1c1917'], id: 'grad-trust' }} />
      <TrustAndPricing />
      <SectionDivider variant="swoosh" topColor={{ colors: ['#1c1917', '#292524', '#1c1917'], id: 'grad-trust-bot' }} bottomColor="#fafaf9" />
      <CompactServicesSection />
      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />

      {/* Over student computerhulp */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div>
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
                Student computerhulp
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Waarom kiezen voor een ICT-student aan huis?
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-4">
                Bij Hulp Met IT werken uitsluitend HBO-opgeleide ICT-studenten die zijn geselecteerd op zowel technische kennis als communicatieve vaardigheden. Zij zijn opgegroeid met technologie en kunnen u op een begrijpelijke manier uitleggen hoe alles werkt. Dat maakt onze hulp persoonlijk, betaalbaar en effectief.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-4">
                Onze studenten helpen u met <a href="/diensten/computerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">alle computerproblemen</a>, van <a href="/diensten/internet-wifi" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">internet en wifi</a> tot <a href="/diensten/email-problemen" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">e-mail instellen</a>, <a href="/diensten/printerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">printer aansluiten</a> en <a href="/diensten/tablet-smartphone" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">tablet en smartphone</a> hulp.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Speciaal voor ouderen bieden wij ook <a href="/computerhulp-senioren" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">computerhulp voor senioren</a> met extra geduld en aandacht. Heeft u een <a href="/tv-installatie-aan-huis" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">TV die geïnstalleerd</a> moet worden? Ook daar helpen onze studenten mee.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

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

      {/* Cross-links */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary-600">
            Bekijk ook onze{' '}
            <a href="/computerproblemen" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              computerproblemen
            </a>
            ,{' '}
            <a href="/computerhulp-senioren" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              computerhulp voor senioren
            </a>
            {' '}en{' '}
            <a href="/computer-reparatie" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              computer reparatie
            </a>
            {' '}pagina&apos;s.
          </p>
        </div>
      </section>

      <SectionDivider variant="tilt" topColor="#ffffff" bottomColor={{ colors: ['#204a8e', '#2557a7', '#204a8e'], id: 'grad-cta' }} />
      <CTASection />
      <SectionDivider variant="diagonal" topColor={{ colors: ['#204a8e', '#2557a7', '#204a8e'], id: 'grad-cta-bot' }} bottomColor="#1c1917" />
    </>
  )
}
