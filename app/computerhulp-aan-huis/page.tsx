'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Banknote,
  GraduationCap,
  CalendarDays,
  MapPin,
  PhoneCall,
  UserCheck,
  CheckCircle
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { TrustAndPricing } from '@/components/home/TrustAndPricing'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CompactServicesSection } from '@/components/home/CompactServicesSection'
import cities from '@/lib/data/cities.json'

const displayCities = cities.slice(0, 12)

const faqData = [
  {
    question: 'Wat kost computerhulp aan huis?',
    answer: 'Computerhulp aan huis kost €14,50 per kwartier, met een minimum van 45 minuten (3 kwartier). De voorrijkosten bedragen eenmalig €10. Een standaard bezoek van 45 minuten kost dus €53,50. U betaalt achteraf per pin of Tikkie.'
  },
  {
    question: 'Hoe snel kunnen jullie komen?',
    answer: 'Voor computerhulp aan huis kunnen we vaak nog dezelfde dag bij u langskomen. In de meeste gevallen bent u binnen 24 uur geholpen. Wij zijn actief in meer dan 40 steden door heel Nederland.'
  },
  {
    question: 'Welke problemen lossen jullie op?',
    answer: 'Onze computerhulp aan huis omvat onder andere: trage computers, virusverwijdering, internet- en wifi-problemen, e-mail instellen, printers aansluiten, software installatie, Windows updates, laptop reparatie en data-backup. Wij nemen de tijd om alles uit te leggen.'
  },
  {
    question: 'Kunnen jullie alle merken computers helpen?',
    answer: 'Ja, onze HBO-opgeleide studenten hebben ervaring met alle merken: HP, Dell, Lenovo, Asus, Acer, Apple en anderen. Ook helpen wij met alle Windows-versies, macOS, tablets en smartphones.'
  },
  {
    question: "Komen jullie ook 's avonds en in weekenden?",
    answer: "Ja, wij bieden computerhulp aan huis van maandag tot en met zondag. Onze studenten zijn beschikbaar van 08:00 tot 21:00 uur — ook in de avonduren en het weekend. Ideaal als u doordeweeks geen tijd heeft."
  },
  {
    question: 'Wat als het probleem niet opgelost kan worden?',
    answer: 'Wij zijn altijd eerlijk over wat wel en niet mogelijk is. Mocht het probleem niet direct oplosbaar zijn, dan geven wij u een helder advies over de volgende stappen. U betaalt alleen voor de tijd die besteed is aan diagnose en advies.'
  }
]

export default function ComputerhulpAanHuisPage() {
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
        name: 'Computerhulp aan huis',
        item: 'https://hulpmetit.nl/computerhulp-aan-huis'
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
    name: 'Computerhulp aan Huis',
    alternateName: ['Computer reparatie aan huis', 'Laptop hulp thuis', 'ICT student aan huis'],
    description: 'Persoonlijke computerhulp aan huis door HBO-opgeleide ICT-studenten in heel Nederland',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Hulp met IT',
      telephone: '+31642827860',
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
    name: 'Hulp met IT - Computerhulp aan Huis',
    description: 'Betrouwbare computerhulp aan huis door HBO-opgeleide ICT-studenten in heel Nederland',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis',
    telephone: '+31642827860',
    email: 'info@hulpmetit.nl',
    areaServed: {
      '@type': 'Country',
      name: 'Nederland'
    },
    serviceType: 'Computerhulp aan huis',
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
          alt="IT-student geeft computerhulp aan huis"
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
                <span className="text-accent-400">aan huis</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Betrouwbare computerhulp aan huis in heel Nederland. Onze IT-studenten lossen alles snel en vakkundig op — bij u thuis.
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

      <SectionDivider variant="wave" topColor="#fafaf9" bottomColor="#fafaf9" />

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

      {/* About */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div>
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
                Computerhulp aan huis
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Computerhulp aan huis: Geduldig en vertrouwd
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-4">
                Zoekt u betrouwbare computerhulp aan huis? Bij Hulp Met IT staan onze geduldige HBO-studenten voor u klaar om al uw digitale uitdagingen op te lossen. Wij begrijpen dat technologie soms overweldigend kan zijn. Daarom bieden wij niet alleen een snelle oplossing voor uw probleem, maar leggen wij ook in begrijpelijke taal uit hoe u uw apparaten voortaan zelfverzekerd kunt gebruiken.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-4">
                Wij zijn actief in meer dan 40 steden door heel Nederland. Onze studenten zijn snel ter plaatse om u te helpen met uw <a href="/diensten/computerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">laptop</a>, <a href="/diensten/printerhulp" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">printer</a>, <a href="/diensten/internet-wifi" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">WiFi</a> of <a href="/diensten/email-problemen" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">e-mail</a>. Naast hulp aan huis bieden wij ook hulp op afstand, zodat kleine vragen direct beantwoord kunnen worden zonder dat u hoeft te wachten.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Onze experts zijn gespecialiseerd in <a href="/computerhulp-senioren" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">computerhulp voor ouderen</a> en minder ervaren computergebruikers. Wij nemen de tijd, werken rustig en zorgen ervoor dat u weer zorgeloos met uw apparaten kunt werken.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Hoe werkt het</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
                Computerhulp aan huis — in 3 stappen
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { icon: PhoneCall, step: '1', title: 'Bel of plan online', desc: 'Neem contact op via telefoon of plan online een afspraak voor computerhulp aan huis. Vertel kort wat het probleem is.' },
              { icon: UserCheck, step: '2', title: 'Student komt langs', desc: 'Een HBO-opgeleide ICT-student komt op de afgesproken tijd bij u thuis. Geen gedoe met wegbrengen.' },
              { icon: CheckCircle, step: '3', title: 'Probleem opgelost', desc: 'Uw probleem wordt ter plekke opgelost. U krijgt uitleg en betaalt achteraf.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" />
                </div>
                <span className="text-primary-500 font-bold text-xs sm:text-sm">Stap {item.step}</span>
                <h3 className="font-bold text-secondary-900 text-sm sm:text-lg mt-1 mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-secondary-600 leading-relaxed hidden sm:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />

      {/* Cities overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Werkgebied</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                Computerhulp aan huis in heel Nederland
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
                  className="group flex items-center gap-3 bg-secondary-50 rounded-xl p-3.5 lg:p-4 shadow-card hover:shadow-card-hover transition-all duration-300"
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

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
                Veelgestelde vragen over computerhulp aan huis
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-50 transition-colors"
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
      <section className="py-6 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary-600">
            Op zoek naar betaalbare hulp? Onze{' '}
            <a href="/student-aan-huis" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2">
              IT-studenten helpen u ook graag
            </a>
            .
          </p>
        </div>
      </section>

      <SectionDivider
        variant="tilt"
        topColor="#fafaf9"
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
