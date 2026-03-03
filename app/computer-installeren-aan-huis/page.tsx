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
  Monitor,
  Mail,
  Printer,
  FolderSync,
  Settings,
  Wifi
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

const installServices = [
  { icon: Monitor, title: 'Windows instellen', description: 'Nieuwe PC uitpakken, Windows configureren en updates installeren.' },
  { icon: Settings, title: "Programma's installeren", description: 'Alle software die u nodig heeft: Office, browser, antivirus en meer.' },
  { icon: Mail, title: 'E-mail & accounts', description: 'Uw e-mail, Google en Microsoft accounts instellen en synchroniseren.' },
  { icon: Printer, title: 'Printer & apparaten', description: 'Printer, scanner en andere randapparatuur aansluiten en instellen.' },
  { icon: FolderSync, title: 'Data overzetten', description: 'Bestanden, foto\'s en documenten overzetten van uw oude computer.' },
  { icon: Wifi, title: 'Internet & netwerk', description: 'Wifi verbinden, netwerk instellen en online beveiliging regelen.' },
]

const faqData = [
  {
    question: 'Wat kost het om een computer te laten installeren?',
    answer: 'Wij rekenen €14,50 per kwartier, met een minimum van 3 kwartier (€43,50). Voorrijkosten zijn €10 eenmalig. Een volledige installatie duurt gemiddeld 1 tot 2 uur.'
  },
  {
    question: 'Kunnen jullie mijn bestanden overzetten van mijn oude computer?',
    answer: 'Ja, wij zetten al uw bestanden, foto\'s, documenten en favorieten over naar uw nieuwe computer. Ook e-mail en contacten.'
  },
  {
    question: 'Moet ik zelf de computer al hebben gekocht?',
    answer: 'Ja, wij installeren en stellen uw nieuwe computer in. Heeft u advies nodig bij de aankoop? Bel ons gerust, we denken graag mee.'
  },
  {
    question: 'Installeren jullie ook een printer erbij?',
    answer: 'Ja, we sluiten uw printer, scanner en andere apparaten aan en zorgen dat alles werkt met uw nieuwe computer.'
  },
  {
    question: 'Hoe lang duurt een volledige installatie?',
    answer: 'Een basis installatie duurt ongeveer 1 uur. Met data overzetten en extra programma\'s kan het 1,5 tot 2 uur duren.'
  },
  {
    question: 'Kunnen jullie ook mijn oude bestanden en foto\'s overzetten?',
    answer: 'Ja, wij zetten al uw bestanden, foto\'s, documenten en favorieten over van uw oude naar uw nieuwe computer. Ook e-mailaccounts en wachtwoorden worden zorgvuldig overgezet zodat u direct verder kunt werken.'
  }
]

export default function ComputerInstallerenPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hulpmetit.nl' },
      { '@type': 'ListItem', position: 2, name: 'Computer Installeren aan Huis', item: 'https://hulpmetit.nl/computer-installeren-aan-huis' }
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
    name: 'Computer Installeren aan Huis',
    alternateName: ['Nieuwe computer instellen', 'PC installatie aan huis', 'Laptop installeren'],
    description: 'Nieuwe computer of laptop installeren en instellen aan huis door HBO-opgeleide ICT-studenten',
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
      price: '14.50',
      priceCurrency: 'EUR'
    }
  }

  const localBusinessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hulp met IT - Computer Installeren aan Huis',
    description: 'Nieuwe computer of laptop installeren en instellen aan huis door HBO-opgeleide ICT-studenten',
    url: 'https://hulpmetit.nl/computer-installeren-aan-huis',
    telephone: '+31858005006',
    email: 'info@hulpmetit.nl',
    areaServed: { '@type': 'Country', name: 'Nederland' },
    serviceType: 'Computer installatie aan huis',
    priceRange: '€53,50 - €100',
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
          alt="ICT-student installeert nieuwe computer bij klant aan huis"
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
                Computer installeren{' '}
                <span className="text-accent-400">aan huis</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Nieuwe computer of laptop gekocht? Onze student komt bij u thuis en stelt alles in. Van Windows tot uw e-mail, printer en bestanden overzetten.
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
                Alles ingesteld en klaar voor gebruik
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

      {/* Installatie services */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Wat wij doen</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Wat installeren en instellen wij?
              </h2>
              <p className="text-secondary-500 max-w-xl mx-auto text-lg">
                Van uitpakken tot klaar voor gebruik — wij regelen alles.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {installServices.map((service, index) => (
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

      {/* Over computer installeren */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div>
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
                Computer installeren
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Nieuwe computer? Wij stellen alles voor u in
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-4">
                Een nieuwe computer kopen is leuk, maar het instellen kan een uitdaging zijn. Bij Hulp Met IT komen onze HBO-opgeleide ICT-studenten bij u thuis om uw nieuwe PC of laptop helemaal in te richten. Van Windows-instellingen tot het overzetten van al uw bestanden — wij regelen het.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-4">
                Wij installeren en configureren uw <a href="/diensten/email-problemen" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">e-mailaccounts</a>, sluiten uw <a href="/diensten/printerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">printer</a> aan, zorgen voor een veilige <a href="/diensten/internet-wifi" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">internetverbinding</a> en installeren alle programma&apos;s die u nodig heeft. Alles wordt uitgelegd zodat u direct aan de slag kunt.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Mocht u later <a href="/computerproblemen" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">computerproblemen</a> ervaren of hulp nodig hebben met uw <a href="/diensten/tablet-smartphone" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">tablet of smartphone</a>, dan staan wij opnieuw voor u klaar.
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
                Computer installeren in heel Nederland
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
                Veelgestelde vragen over computer installatie
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
            <a href="/computerproblemen" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              computerproblemen
            </a>
            ,{' '}
            <a href="/computer-reparatie" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              computer reparatie
            </a>
            {' '}en{' '}
            <a href="/computerhulp-senioren" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              computerhulp voor senioren
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
