'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  Phone,
  ArrowRight,
  Star,
  Check,
  ChevronDown,
  Users,
  Shield,
  Clock,
  GraduationCap,
  Calendar,
  MapPin
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { ServicesGrid } from '@/components/services/ServicesGrid'

const CITY = 'Gouda'

const benefits = [
  {
    icon: Check,
    title: 'Transparante Tarieven',
    description: 'Duidelijke prijzen vooraf, geen verborgen kosten of verrassingen.'
  },
  {
    icon: GraduationCap,
    title: 'IT-Studenten',
    description: 'Opgeleid in de nieuwste technologieën, vertrouwd met moderne systemen.'
  },
  {
    icon: Clock,
    title: 'Flexibele Tijden',
    description: "Ook 's avonds en in weekenden beschikbaar."
  },
  {
    icon: Users,
    title: 'Persoonlijke Aanpak',
    description: 'Geduldig en begrijpelijke uitleg, zonder vakjargon.'
  },
  {
    icon: Calendar,
    title: 'Snel Beschikbaar',
    description: 'Vaak nog dezelfde dag, ook voor spoedgevallen.'
  },
  {
    icon: Shield,
    title: 'Betrouwbaar',
    description: 'Alle studenten zijn gescreend en getraind.'
  }
]

const processSteps = [
  {
    title: 'U belt of plant online',
    description: `Vertel ons kort wat het probleem is. Wij plannen een afspraak op een moment dat u uitkomt in ${CITY}.`
  },
  {
    title: 'Student komt langs',
    description: `Een ervaren IT-student komt bij u thuis in ${CITY} met alle benodigde tools en kennis.`
  },
  {
    title: 'Probleem wordt opgelost',
    description: 'Vakkundige hulp tegen studententarief. U krijgt uitleg zodat u het begrijpt.'
  },
  {
    title: 'Betaling achteraf',
    description: 'U betaalt pas na afloop. Geen vooruitbetaling, geen verrassingen.'
  }
]

const areas = [
  'Gouda Centrum', 'Goverwelle', 'Bloemendaal', 'Kort Haarlem',
  'Plaswijck', 'Reeuwijk', 'Waddinxveen', 'Boskoop',
  'Bodegraven', 'Moordrecht', 'Stolwijk', 'Haastrecht'
]

const faqData = [
  {
    question: `Wat kost ICT student aan huis hulp in ${CITY}?`,
    answer: `Wij rekenen €14,50 per kwartier met een minimum van 45 minuten (€43,50) plus €10 voorrijkosten. Een standaard bezoek van 45 minuten kost dus €53,50. U betaalt achteraf.`
  },
  {
    question: `Zijn de studenten wel gekwalificeerd in ${CITY}?`,
    answer: `Ja, onze studenten in ${CITY} volgen IT-opleidingen aan de Hogeschool van Amsterdam en Leiden. Ze worden geselecteerd op technische én communicatieve vaardigheden. Alle studenten zijn gescreend.`
  },
  {
    question: `Kunnen jullie ook 's avonds en in weekenden in ${CITY}?`,
    answer: `Ja, dat is een van onze voordelen! Studenten hebben flexibele schema's. We zijn bereikbaar van 08:00 tot 22:00, 7 dagen per week in ${CITY}.`
  },
  {
    question: `Hoe snel kunnen jullie komen in ${CITY}?`,
    answer: `Vaak kunnen we nog dezelfde dag langskomen in ${CITY}. Voor urgente problemen proberen we binnen enkele uren beschikbaar te zijn.`
  },
  {
    question: `Welke gebieden in ${CITY} bedienen jullie?`,
    answer: `We bedienen heel ${CITY} en omgeving, inclusief ${areas.slice(0, 6).join(', ')} en meer.`
  }
]

export default function StudentAanHuisCityPage() {
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

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `ICT Student aan Huis ${CITY}`,
    description: `Betaalbare computerhulp door ervaren IT-studenten aan huis in ${CITY}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Hulp met IT',
      telephone: '+31642827860',
      url: 'https://hulpmetit.nl'
    },
    areaServed: {
      '@type': 'City',
      name: CITY
    },
    offers: {
      '@type': 'Offer',
      price: '53.50',
      priceCurrency: 'EUR'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-secondary-50 border-b border-secondary-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-secondary-500 hover:text-primary-700">Home</Link>
            <span className="text-secondary-400">/</span>
            <Link href="/student-aan-huis" className="text-secondary-500 hover:text-primary-700">ICT Student aan huis</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">{CITY}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100/50 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <div>
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary-700 fill-primary-500" />
                  ))}
                  <div className="relative w-5 h-5">
                    <Star className="absolute w-5 h-5 text-primary-200 fill-primary-200" />
                    <div className="absolute overflow-hidden" style={{ width: '80%' }}>
                      <Star className="w-5 h-5 text-primary-700 fill-primary-500" />
                    </div>
                  </div>
                </div>
                <span className="text-secondary-600">4.8/5 · 2000+ klanten</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight mb-6">
                ICT Student
                <span className="text-primary-700"> aan huis {CITY}</span>
              </h1>

              {/* Subtitel */}
              <p className="text-xl text-secondary-600 leading-relaxed mb-4 max-w-lg">
                Betaalbare computerhulp door ervaren IT-studenten in {CITY}. Snel, vakkundig en vriendelijk bij u thuis.
              </p>
              <p className="text-lg text-secondary-500 mb-8 max-w-lg">
                Ook senioren begeleiden wij met geduld en heldere uitleg.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors shadow-lg shadow-primary-500/30"
                >
                  Afspraak maken
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+31642827860"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 border-2 border-primary-300 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel ons
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl transform rotate-3" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/student-aan-huis.webp"
                  alt={`IT-student helpt klant thuis met computer in ${CITY}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* USP Bar */}
      <section className="bg-primary-500 py-6">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Mobile */}
          <div className="grid grid-cols-3 gap-4 md:hidden text-white text-center mb-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">IT-student</p>
              <p className="text-primary-100 text-xs">ervaren</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">Flexibel</p>
              <p className="text-primary-100 text-xs">ook &apos;s avonds</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">Betrouwbaar</p>
              <p className="text-primary-100 text-xs">gescreend</p>
            </div>
          </div>
          <Link
            href="/afspraak"
            className="md:hidden w-full inline-flex items-center justify-center px-6 py-3 font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-xl transition-colors"
          >
            Afspraak maken
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Ervaren IT-studenten</p>
                  <p className="text-primary-100 text-sm">Opgeleid en gescreend</p>
                </div>
              </div>
              <div className="w-px h-10 bg-primary-400" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Flexibele tijden</p>
                  <p className="text-primary-100 text-sm">Ook &apos;s avonds & weekenden</p>
                </div>
              </div>
              <div className="w-px h-10 bg-primary-400" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Betrouwbaar</p>
                  <p className="text-primary-100 text-sm">Alle studenten gescreend</p>
                </div>
              </div>
            </div>
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-xl transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesGrid maxItems={6} />

      {/* Why Student */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-700 font-semibold mb-3">Waarom wij?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Voordelen van ICT student aan huis in {CITY}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-secondary-50 rounded-xl p-6 border border-secondary-200">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">{benefit.title}</h3>
                  <p className="text-secondary-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-700 font-semibold mb-3">Hoe het werkt</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              In 4 stappen geholpen in {CITY}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 bg-white border-2 border-primary-200 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-700">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-secondary-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {/* Pricing */}
      <PricingSection />

      {/* Areas */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-700 font-semibold mb-3">Werkgebied</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              ICT Student aan huis in {CITY} en omgeving
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 bg-secondary-50 rounded-lg p-3 border border-secondary-200">
                <MapPin className="w-4 h-4 text-primary-700 flex-shrink-0" />
                <span className="text-secondary-700 font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-700 font-semibold mb-3">Veelgestelde vragen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Vragen over ICT student aan huis in {CITY}
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-secondary-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-50 transition-colors"
                >
                  <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-700 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Klaar voor computerhulp in {CITY}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Onze ervaren IT-studenten in {CITY} staan klaar om u te helpen. Snel, vakkundig en betaalbaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-xl transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel ons
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
