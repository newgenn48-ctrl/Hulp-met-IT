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
    question: 'Wat kost het om een PC te laten maken?',
    answer: 'Wij rekenen €15,50 per kwartier, met een minimum van 3 kwartier (€43,50 + €10 voorrijkosten = €56,50). De meeste reparaties zijn binnen 1-2 uur klaar.'
  },
  {
    question: 'Komen jullie bij mij thuis om de PC te repareren?',
    answer: 'Ja! Dat is precies wat wij doen. Onze studenten komen bij u aan huis, zodat u niet met uw PC hoeft te slepen. Handig en veilig.'
  },
  {
    question: 'Hoe snel kan mijn PC gemaakt worden?',
    answer: 'Vaak kunnen we binnen 24 uur langskomen. De meeste softwareproblemen lossen we in 1 bezoek op. Bij hardwareproblemen kan het soms een tweede bezoek vergen.'
  },
  {
    question: 'Is het goedkoper om een PC te laten maken of een nieuwe te kopen?',
    answer: 'Vaak is reparatie veel goedkoper. Onze studenten geven eerlijk advies: als reparatie niet meer loont, vertellen we dat ook. U betaalt dan alleen voor de diagnose.'
  },
  {
    question: 'Repareren jullie ook laptops?',
    answer: 'Ja, wij repareren zowel desktops als laptops. Windows, Apple, Chromebook — alle merken en types.'
  },
  {
    question: 'Hoe lang duurt een gemiddelde PC reparatie?',
    answer: 'De meeste problemen lossen we binnen 45 tot 90 minuten op. Bij complexere reparaties zoals een Windows herinstallatie of data-overzetting kan het langer duren. Onze student geeft u altijd vooraf een eerlijke inschatting.'
  }
]

export default function PcLatenMakenPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hulpmetit.nl' },
      { '@type': 'ListItem', position: 2, name: 'PC Laten Maken', item: 'https://hulpmetit.nl/pc-laten-maken' }
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
    name: 'PC Laten Maken aan Huis',
    alternateName: ['PC reparatie aan huis', 'Computer laten repareren', 'PC laten repareren'],
    description: 'PC laten maken aan huis door HBO-opgeleide ICT-studenten. Snelle diagnose en reparatie.',
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
    name: 'Hulp met IT - PC Laten Maken',
    description: 'PC laten maken aan huis door HBO-opgeleide ICT-studenten',
    url: 'https://hulpmetit.nl/pc-laten-maken',
    telephone: '+31858005006',
    email: 'info@hulpmetit.nl',
    areaServed: { '@type': 'Country', name: 'Nederland' },
    serviceType: 'PC laten maken aan huis',
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
          alt="ICT-student maakt PC bij klant aan huis"
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
                PC laten maken{' '}
                <span className="text-accent-400">bij u aan huis</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                PC kapot of traag? Geen zorgen. Onze student komt bij u thuis, bekijkt het probleem en repareert uw computer. Snel, betaalbaar en zonder gedoe.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-accent"
                >
                  PC laten repareren
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

      {/* Over PC reparatie */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">PC reparatie</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Waar wij uw PC mee helpen
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl shadow-card p-8 space-y-4">
              <p className="text-secondary-600 leading-relaxed">
                Uw PC doet het niet meer zoals het hoort? Of het nu gaat om een zwart scherm, vreemde kleuren of flikkeringen — wij diagnosticeren het probleem en zorgen dat uw computer weer normaal werkt. Bij een volle of trage harde schijf upgraden wij naar een snellere SSD, maken opslagruimte vrij of herstellen verloren bestanden.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Is uw PC gewoon traag geworden? Dan optimaliseren wij het systeem, verwijderen onnodige programma&apos;s en zorgen dat alles weer vlot draait. Soms is een schone Windows herinstallatie de beste oplossing — uiteraard met behoud van uw bestanden.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Wij adviseren en installeren ook hardware upgrades zoals extra geheugen of een snellere schijf. Bij elk probleem stellen wij een eerlijke diagnose: als reparatie niet meer loont, vertellen wij dat ook. U betaalt dan alleen voor de diagnose.
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

      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />

      {/* Over PC laten maken */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div>
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
                PC laten maken
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                PC kapot? Wij maken hem bij u thuis
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-4">
                Wanneer uw PC het laat afweten, wilt u snel weer aan de slag. Bij Hulp Met IT hoeft u uw computer niet naar een winkel te brengen. Onze HBO-opgeleide ICT-studenten komen bij u thuis, stellen een diagnose en repareren uw PC ter plekke. Van trage systemen tot defecte hardware — wij lossen het op.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-4">
                Wij helpen met allerlei PC problemen: virusverwijdering, <a href="/diensten/internet-wifi" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">internet- en wifi-herstel</a>, <a href="/diensten/email-problemen" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">e-mail configuratie</a>, Windows updates en harde schijf upgrades. Ook het aansluiten van een <a href="/diensten/printerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">printer</a> of het instellen van <a href="/diensten/computerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">beveiligingssoftware</a> behoort tot onze service.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Heeft u specifiek een laptop probleem? Bekijk dan onze <a href="/laptop-reparatie" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">laptop reparatie</a> pagina. Of heeft u een geheel nieuwe computer? Wij helpen ook met <a href="/computer-installeren-aan-huis" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">installatie aan huis</a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="tilt" topColor="#ffffff" bottomColor="#ffffff" />

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
                Veelgestelde vragen over PC laten maken
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
            <a href="/pc-hulp-aan-huis" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              PC hulp aan huis
            </a>
            {' '}en{' '}
            <a href="/computerproblemen" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              computerproblemen
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
