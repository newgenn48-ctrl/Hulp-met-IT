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
  ChevronRight,
  Cpu,
  HardDrive,
  Zap,
  ShieldCheck,
  RefreshCw,
  Wrench
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { TrustAndPricing } from '@/components/home/TrustAndPricing'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import cities from '@/lib/data/cities.json'

const displayCities = cities.slice(0, 12)

const repairServices = [
  { icon: Zap, title: 'Trage computer', description: 'PC loopt vast of is langzaam? Wij optimaliseren en versnellen hem.' },
  { icon: ShieldCheck, title: 'Virus & malware', description: 'Computer geïnfecteerd? Wij verwijderen virussen en beveiligen uw PC.' },
  { icon: HardDrive, title: 'Harde schijf & opslag', description: 'Schijf vol of kapot? Wij upgraden naar SSD of herstellen data.' },
  { icon: RefreshCw, title: 'Windows herinstallatie', description: 'Opnieuw beginnen met een schone installatie van Windows.' },
  { icon: Cpu, title: 'Hardware problemen', description: 'Onderdelen defect? Wij diagnosticeren en vervangen componenten.' },
  { icon: Wrench, title: 'Opstartproblemen', description: 'Computer start niet op? Wij vinden de oorzaak en lossen het op.' },
]

const faqData = [
  {
    question: 'Wat kost computer reparatie aan huis?',
    answer: 'Wij rekenen €15,50 per kwartier, met een minimum van 3 kwartier (€43,50). Voorrijkosten zijn €10 eenmalig. Totaal vanaf €56,50.'
  },
  {
    question: 'Repareren jullie ook desktops en towers?',
    answer: 'Ja, wij repareren zowel desktop PC\'s als laptops. Van alle merken en met alle Windows-versies.'
  },
  {
    question: 'Hoe snel kunnen jullie komen?',
    answer: 'Vaak kunnen we nog dezelfde dag langskomen. Voor urgente problemen proberen we binnen enkele uren beschikbaar te zijn.'
  },
  {
    question: 'Kunnen jullie ook onderdelen vervangen?',
    answer: 'Ja, we kunnen de meeste onderdelen vervangen zoals harde schijven, geheugen, voedingen en meer. Onderdelen worden apart berekend.'
  },
  {
    question: 'Wat als de reparatie niet lukt?',
    answer: 'We zijn eerlijk over wat wel en niet mogelijk is. U betaalt alleen voor de bestede tijd. We adviseren u dan over de beste vervolgstappen.'
  },
  {
    question: 'Repareren jullie ook Apple Mac computers?',
    answer: 'Ja, onze studenten hebben ervaring met zowel Windows als Apple/Mac systemen. Wij helpen met software-problemen, instellingen, updates en meer op alle gangbare besturingssystemen.'
  }
]

export default function ComputerReparatiePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hulpmetit.nl' },
      { '@type': 'ListItem', position: 2, name: 'Computer Reparatie', item: 'https://hulpmetit.nl/computer-reparatie' }
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
    name: 'Computer Reparatie aan Huis',
    alternateName: ['PC reparatie', 'Computer laten repareren', 'Desktop reparatie'],
    description: 'Professionele computer reparatie aan huis door HBO-opgeleide ICT-studenten',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Hulp met IT',
      telephone: '+31858005006',
      url: 'https://hulpmetit.nl'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nederland'
    },
    offers: {
      '@type': 'Offer',
      price: '15.50',
      priceCurrency: 'EUR'
    }
  }

  const localBusinessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hulp met IT - Computer Reparatie aan Huis',
    description: 'Professionele computer reparatie aan huis door HBO-opgeleide ICT-studenten',
    url: 'https://hulpmetit.nl/computer-reparatie',
    telephone: '+31858005006',
    email: 'info@hulpmetit.nl',
    areaServed: { '@type': 'Country', name: 'Nederland' },
    serviceType: 'Computer reparatie aan huis',
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
          alt="ICT-student repareert computer bij klant aan huis"
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
                Computer reparatie{' '}
                <span className="text-accent-400">aan huis</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Computer kapot, traag of doet het niet meer? Onze student komt bij u thuis en repareert uw PC ter plekke. Snel, vakkundig en betaalbaar.
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

      {/* Reparatie services */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Onze expertise</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Welke computer problemen lossen wij op?
              </h2>
              <p className="text-secondary-500 max-w-xl mx-auto text-lg">
                Van trage PC&apos;s tot hardware defecten — wij repareren het allemaal.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repairServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary-500 mb-4" />
                  <h3 className="font-bold text-secondary-900 mb-2">{service.title}</h3>
                  <p className="text-secondary-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
        bottomColor="#ffffff"
      />

      {/* Over computer reparatie */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div>
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
                Computer reparatie
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Vakkundige computer reparatie bij u thuis
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-4">
                Een kapotte computer is vervelend, maar u hoeft er niet mee naar een winkel. Bij Hulp Met IT komen onze HBO-opgeleide ICT-studenten bij u aan huis om uw computer te repareren. Van trage systemen en virusinfecties tot hardware-problemen en opstartfouten — wij lossen het ter plekke op.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-4">
                Onze reparatieservice omvat onder andere het verwijderen van virussen, het upgraden van <a href="/diensten/computerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">harde schijven en geheugen</a>, het oplossen van <a href="/diensten/internet-wifi" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">internet- en wifi-problemen</a>, en het herstellen van <a href="/diensten/email-problemen" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">e-mailinstellingen</a>. Ook helpen wij met <a href="/diensten/printerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">printers</a> die niet meer werken na een update.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Heeft u specifiek een laptop die gerepareerd moet worden? Bekijk dan ook onze <a href="/laptop-reparatie" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">laptop reparatie</a> pagina. Of wilt u uw <a href="/pc-laten-maken" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">PC laten maken</a>? Wij staan voor u klaar.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="wave" topColor="#ffffff" bottomColor="#fafaf9" />

      {/* Cities */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Werkgebied</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Computer reparatie in heel Nederland
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
                  href={`/computerhulp-aan-huis-${city.slug}`}
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
                Veelgestelde vragen over computer reparatie
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
            <a href="/laptop-reparatie" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              laptop reparatie
            </a>
            ,{' '}
            <a href="/pc-laten-maken" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              PC laten maken
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
