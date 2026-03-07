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
  {
    question: 'Welke computerproblemen lossen jullie op?',
    answer: 'Wij lossen vrijwel alle computerproblemen op: trage computers, virusinfecties, internetproblemen, printerproblemen, e-mailproblemen, software installatie, Windows updates, data backup en meer.'
  },
  {
    question: 'Hoe snel kunnen jullie mijn computerprobleem oplossen?',
    answer: 'De meeste problemen lossen we binnen 1 bezoek op. Vaak kunnen we binnen 24 uur bij u langskomen. Voor spoedgevallen proberen we dezelfde dag te komen.'
  },
  {
    question: 'Wat kost het om computerproblemen te laten oplossen?',
    answer: 'Wij rekenen €15,50 per kwartier, met een minimum van 3 kwartier (€43,50 + €10 voorrijkosten = €56,50). U betaalt achteraf, alleen voor de bestede tijd.'
  },
  {
    question: 'Moet ik mijn computer naar jullie toe brengen?',
    answer: 'Nee, dat hoeft niet! Onze studenten komen bij u thuis langs. Wij lossen het probleem ter plekke op aan uw eigen keukentafel.'
  },
  {
    question: 'Helpen jullie ook met Apple/Mac problemen?',
    answer: 'Ja, wij helpen met alle merken: Windows, Apple/Mac, Chromebook, en alle gangbare laptops en desktops.'
  },
  {
    question: 'Lossen jullie ook problemen op afstand op?',
    answer: 'Ja, voor bepaalde computerproblemen bieden wij ook hulp op afstand. Via een veilige verbinding kunnen onze studenten meekijken op uw scherm en het probleem direct oplossen. Dit is ideaal voor snelle software-vragen.'
  }
]

export default function ComputerProblemenPage() {
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

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hulpmetit.nl' },
      { '@type': 'ListItem', position: 2, name: 'Computerproblemen', item: 'https://hulpmetit.nl/computerproblemen' }
    ]
  }

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Computerproblemen Oplossen aan Huis',
    alternateName: ['Computer problemen hulp', 'PC problemen oplossen', 'Computer storing verhelpen'],
    description: 'Professionele hulp bij computerproblemen aan huis door HBO-opgeleide ICT-studenten',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Hulp met IT',
      telephone: '+31858005006',
      url: 'https://hulpmetit.nl'
    },
    areaServed: { '@type': 'Country', name: 'Nederland' },
    offers: { '@type': 'Offer', price: '15.50', priceCurrency: 'EUR' }
  }

  const localBusinessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hulp met IT - Computerproblemen Oplossen',
    description: 'Professionele hulp bij computerproblemen aan huis door HBO-opgeleide ICT-studenten',
    url: 'https://hulpmetit.nl/computerproblemen',
    telephone: '+31858005006',
    email: 'info@hulpmetit.nl',
    areaServed: { '@type': 'Country', name: 'Nederland' },
    serviceType: 'Computerproblemen oplossen aan huis',
    priceRange: '€56,50 - €100',
    openingHours: 'Mo-Su 08:00-21:00'
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <Image
          src="/hulp-met-it.webp"
          alt="ICT-student helpt klant met computerproblemen aan huis"
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
                Computerproblemen?{' '}
                <span className="text-accent-400">Wij lossen het op</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Trage computer, virus, internetproblemen of andere storing? Onze student komt bij u thuis en lost het rustig samen met u op. Geen gedoe, gewoon hulp.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-accent"
                >
                  Direct hulp inplannen
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+31858005006"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Bel 085-8005006
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
                  Vanaf €15,50 per kwartier
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

      {/* Over computerproblemen */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Veelvoorkomend</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Herkenbare computerproblemen
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl shadow-card p-8 space-y-4">
              <p className="text-secondary-600 leading-relaxed">
                Uw computer start langzaam op, reageert traag of loopt regelmatig vast? Dit zijn veelvoorkomende problemen die wij dagelijks oplossen. Vaak is het systeem overbelast door onnodige programma&apos;s, achterstallige updates of een volle harde schijf.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Virussen en malware zijn een andere veelvoorkomende oorzaak van computerproblemen. Verdachte pop-ups, vreemd gedrag of programma&apos;s die u niet herkent? Onze studenten verwijderen malware grondig en beveiligen uw computer tegen toekomstige bedreigingen.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Ook internetproblemen, blauwe schermen, crashes en vastgelopen Windows updates lossen wij op. Daarnaast helpen wij bij volle harde schijven, ontbrekende bestanden en dataherstel. Welk computerprobleem u ook heeft — onze student komt bij u thuis en lost het snel en vakkundig op.
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
      <CompactServicesSection />

      {/* Over computerproblemen */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div>
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
                Computerproblemen oplossen
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Professionele hulp bij elk computerprobleem
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-4">
                Of het nu gaat om een trage computer, een virus, internetproblemen of een vastgelopen systeem — bij Hulp Met IT bent u aan het juiste adres. Onze HBO-opgeleide ICT-studenten komen bij u thuis en lossen elk probleem geduldig en vakkundig op. Wij werken met alle merken en systemen.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-4">
                Naast het oplossen van uw huidige probleem, helpen wij ook met het voorkomen van toekomstige problemen. Denk aan het installeren van goede <a href="/diensten/computerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">beveiligingssoftware</a>, het opschonen van uw systeem, en het instellen van automatische <a href="/diensten/internet-wifi" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">internet- en wifi-verbindingen</a>. Ook helpen wij met <a href="/diensten/email-problemen" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">e-mailproblemen</a> en <a href="/diensten/printerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">printerproblemen</a>.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Heeft u een nieuw apparaat nodig? Wij helpen ook met het <a href="/computer-installeren-aan-huis" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">installeren van een nieuwe computer</a>. En voor specifieke laptop-issues kunt u terecht bij onze <a href="/laptop-reparatie" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">laptop reparatie</a> service.
              </p>
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
                Veelgestelde vragen over computerproblemen
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

      {/* Cross-links */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary-600">
            Bekijk ook onze{' '}
            <a href="/computer-reparatie" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              computer reparatie
            </a>
            ,{' '}
            <a href="/laptop-reparatie" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              laptop reparatie
            </a>
            {' '}en{' '}
            <a href="/pc-hulp-aan-huis" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              PC hulp aan huis
            </a>
            {' '}pagina&apos;s.
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
