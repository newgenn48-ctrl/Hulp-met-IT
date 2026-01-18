'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  Phone,
  ArrowRight,
  Star,
  ChevronDown,
  Users,
  Award,
  Shield,
  Clock,
  Monitor,
  Wrench
} from 'lucide-react'
import { PricingSection } from '@/components/home/PricingSection'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'

const benefits = [
  {
    icon: Award,
    title: '10+ Jaar Ervaring',
    description: 'Onze specialisten hebben ruim 10 jaar ervaring met computerhulp.'
  },
  {
    icon: Users,
    title: 'Persoonlijke Aanpak',
    description: 'Geduldig en begrijpelijke uitleg, zonder vakjargon.'
  },
  {
    icon: Clock,
    title: 'Snel Ter Plaatse',
    description: 'Vaak nog dezelfde dag, ook voor spoedgevallen.'
  },
  {
    icon: Shield,
    title: 'Betrouwbaar & Veilig',
    description: 'Alle specialisten zijn gescreend. Uw privacy staat voorop.'
  },
  {
    icon: Wrench,
    title: 'Alle Problemen',
    description: 'Van trage computer tot virus, wij lossen het op.'
  },
  {
    icon: Monitor,
    title: 'Alle Merken',
    description: 'HP, Dell, Lenovo, Asus, Apple - wij kennen ze allemaal.'
  }
]

const processSteps = [
  {
    title: 'U belt of plant online',
    description: 'Vertel ons kort wat het probleem is. Wij plannen een afspraak op een moment dat u uitkomt.'
  },
  {
    title: 'Specialist komt langs',
    description: 'Een ervaren IT-specialist komt bij u thuis met alle benodigde tools.'
  },
  {
    title: 'Probleem wordt opgelost',
    description: 'Vakkundige hulp ter plekke. U krijgt uitleg zodat u het begrijpt.'
  },
  {
    title: 'Betaling achteraf',
    description: 'U betaalt pas na afloop. Geen vooruitbetaling, geen verrassingen.'
  }
]

const faqData = [
  {
    question: 'Wat kost computerhulp aan huis?',
    answer: 'Wij rekenen €14,50 per kwartier met een minimum van 45 minuten (€43,50) plus €10 voorrijkosten. Een standaard bezoek van 45 minuten kost dus €53,50. U betaalt achteraf.'
  },
  {
    question: 'Hoe snel kunnen jullie komen?',
    answer: 'Vaak kunnen we nog dezelfde dag langskomen. Voor urgente problemen proberen we binnen enkele uren beschikbaar te zijn.'
  },
  {
    question: 'Kunnen jullie alle merken computers helpen?',
    answer: 'Ja, wij hebben ervaring met alle merken: HP, Dell, Lenovo, Asus, Acer, Apple en anderen. Ook helpen wij met alle Windows-versies.'
  },
  {
    question: 'Wat als het probleem niet opgelost kan worden?',
    answer: 'We zijn eerlijk over wat wel en niet mogelijk is. U betaalt alleen voor de tijd die besteed is aan diagnose en advies.'
  },
  {
    question: "Komen jullie ook 's avonds en in weekenden?",
    answer: "Ja, wij zijn flexibel. We zijn bereikbaar van 08:00 tot 22:00, 7 dagen per week."
  }
]

export default function ComputerhulpAanHuisPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Structured data
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
    alternateName: ['Computer reparatie aan huis', 'Laptop hulp thuis', 'IT specialist aan huis'],
    description: 'Professionele computerhulp aan huis door ervaren IT-specialisten',
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
            <span className="text-secondary-700 font-medium">Computerhulp aan huis</span>
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
                Computerhulp
                <span className="text-primary-700"> aan huis</span>
              </h1>

              {/* Subtitel */}
              <p className="text-xl text-secondary-600 leading-relaxed mb-4 max-w-lg">
                Professionele computerhulp bij u thuis. Snel, betrouwbaar en met 10+ jaar ervaring.
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
                  src="/hulp-met-it.webp"
                  alt="IT-specialist helpt klant thuis met computerproblemen"
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
                <Award className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">10+ jaar</p>
              <p className="text-primary-100 text-xs">ervaring</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">Snel</p>
              <p className="text-primary-100 text-xs">ter plaatse</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">Betaling</p>
              <p className="text-primary-100 text-xs">achteraf</p>
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
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">10+ jaar ervaring</p>
                  <p className="text-primary-100 text-sm">Vakkundige specialisten</p>
                </div>
              </div>
              <div className="w-px h-10 bg-primary-400" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Snel ter plaatse</p>
                  <p className="text-primary-100 text-sm">Vaak dezelfde dag</p>
                </div>
              </div>
              <div className="w-px h-10 bg-primary-400" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Betaling achteraf</p>
                  <p className="text-primary-100 text-sm">Geen vooruitbetaling</p>
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

      {/* Why Us */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-700 font-semibold mb-3">Waarom wij?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Voordelen van computerhulp aan huis
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-secondary-200">
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
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-700 font-semibold mb-3">Hoe het werkt</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              In 4 stappen geholpen
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
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-700 font-semibold mb-3">Veelgestelde vragen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Vragen over computerhulp aan huis
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-secondary-50 rounded-xl border border-secondary-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-100 transition-colors"
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
            Klaar voor professionele computerhulp?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Onze ervaren IT-specialisten staan klaar om u te helpen. Snel, vakkundig en betrouwbaar.
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
