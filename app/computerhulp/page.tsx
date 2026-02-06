'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  ChevronDown,
  Zap,
  Shield,
  Clock,
  Monitor,
  Wifi,
  Mail,
  Printer,
  Smartphone,
  GraduationCap,
  ChevronRight,
  Check
} from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: "Computerhulp",
    desc: "Problemen oplossen, onderhoud en installatie",
    href: "/diensten/computerhulp"
  },
  {
    icon: Printer,
    title: "Printerhulp",
    desc: "Installatie, draadloos printen en storingen",
    href: "/diensten/printerhulp"
  },
  {
    icon: Mail,
    title: "E-mail Problemen",
    desc: "Instellen, synchroniseren en beveiligen",
    href: "/diensten/email-problemen"
  },
  {
    icon: Wifi,
    title: "Internet & WiFi",
    desc: "Router installatie en netwerk optimalisatie",
    href: "/diensten/internet-wifi"
  },
  {
    icon: Smartphone,
    title: "Tablet & Smartphone",
    desc: "Apps, WhatsApp, foto's en instellingen",
    href: "/diensten/tablet-smartphone"
  },
  {
    icon: GraduationCap,
    title: "Uitleg & Les",
    desc: "Persoonlijke computerles op uw tempo",
    href: "/diensten/uitleg-les"
  },
]

const faqData = [
  {
    question: 'Wat kost computerhulp aan huis?',
    answer: 'Wij rekenen \u20ac14,50 per kwartier, met een minimum van 3 kwartier. Voorrijkosten zijn \u20ac10 eenmalig. U betaalt achteraf.'
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
  },
  {
    question: 'Moet ik vooraf betalen?',
    answer: 'Nee, u betaalt pas achteraf. Betalen kan via pin of tikkie.'
  }
]

export default function ComputerhulpPage() {
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
      price: '14.50',
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

      <div className="min-h-screen">

        {/* HERO */}
        <section className="bg-white pt-24 sm:pt-28 md:pt-32 pb-12 lg:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-4">
                Computerhulp aan huis
              </p>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-secondary-900 leading-[1.1] mb-6">
                Wij lossen het{' '}
                <span className="text-primary-600">voor u op</span>
              </h1>

              <p className="text-lg text-secondary-600 leading-relaxed mb-8 max-w-lg">
                Vastgelopen met uw computer of laptop? Wij komen bij u thuis en lossen het op. U hoeft nergens heen — gewoon duidelijke hulp zonder gedoe.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                >
                  Afspraak maken
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+31642827860"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Bel ons
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-secondary-500">
                <span>10+ jaar ervaring</span>
                <span className="w-1 h-1 rounded-full bg-secondary-300" />
                <span>Betaling achteraf</span>
                <span className="w-1 h-1 rounded-full bg-secondary-300" />
                <span>&euro;14,50 per kwartier</span>
              </div>
            </div>
          </div>
          <div className="h-px bg-secondary-200 mt-12 lg:mt-20" />
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900">
                Waar kunnen we mee helpen?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="group flex items-start gap-4 bg-white rounded-lg px-5 py-4 hover:shadow-md transition-shadow border border-secondary-100"
                  >
                    <div className="w-9 h-9 rounded-md bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconComponent className="w-[18px] h-[18px] text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-secondary-900 text-[15px]">
                        {service.title}
                      </h3>
                      <p className="text-secondary-500 text-sm">
                        {service.desc}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-secondary-300 group-hover:text-primary-500 transition-colors flex-shrink-0 mt-1" />
                  </Link>
                )
              })}
            </div>

            <div className="mt-6">
              <Link
                href="/diensten"
                className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
              >
                Alle diensten bekijken &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
                Hoe werkt het?
              </h2>
              <p className="text-secondary-500 max-w-lg mx-auto">
                In drie stappen naar een werkende computer.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-600 font-bold text-sm mb-4">
                  1
                </div>
                <h3 className="font-semibold text-secondary-900 text-[15px] mb-1">Neem contact op</h3>
                <p className="text-secondary-500 text-sm leading-snug">
                  Bel of stuur een WhatsApp. Beschrijf kort uw probleem.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-600 font-bold text-sm mb-4">
                  2
                </div>
                <h3 className="font-semibold text-secondary-900 text-[15px] mb-1">Plan een afspraak</h3>
                <p className="text-secondary-500 text-sm leading-snug">
                  Wij komen op een moment dat u uitkomt. Vaak al binnen 24-48 uur.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-600 font-bold text-sm mb-4">
                  3
                </div>
                <h3 className="font-semibold text-secondary-900 text-[15px] mb-1">Probleem opgelost</h3>
                <p className="text-secondary-500 text-sm leading-snug">
                  Onze specialist lost het ter plaatse op. U betaalt alleen voor de tijd.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-16 lg:py-24 bg-secondary-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
                  Waarom klanten voor ons kiezen
                </h2>
                <p className="text-secondary-500 mb-8 max-w-lg">
                  Wij geloven in persoonlijke service, transparante prijzen en vakmanschap. Geen gedoe, gewoon goede hulp.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-md bg-primary-50 flex items-center justify-center mt-0.5">
                      <Zap className="w-[18px] h-[18px] text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 text-[15px] mb-0.5">Snel geholpen</h3>
                      <p className="text-secondary-500 text-sm">Meestal binnen 24-48 uur bij u thuis</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-md bg-primary-50 flex items-center justify-center mt-0.5">
                      <Shield className="w-[18px] h-[18px] text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 text-[15px] mb-0.5">Vaste tarieven</h3>
                      <p className="text-secondary-500 text-sm">U weet vooraf wat het kost, geen verrassingen</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-md bg-primary-50 flex items-center justify-center mt-0.5">
                      <Clock className="w-[18px] h-[18px] text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 text-[15px] mb-0.5">10+ jaar ervaring</h3>
                      <p className="text-secondary-500 text-sm">Alle merken en problemen, wij kennen ze</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-md bg-primary-50 flex items-center justify-center mt-0.5">
                      <Check className="w-[18px] h-[18px] text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 text-[15px] mb-0.5">Duidelijke uitleg</h3>
                      <p className="text-secondary-500 text-sm">Geen jargon, wij leggen het begrijpelijk uit</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Pricing Card */}
              <div>
                <div className="bg-white rounded-xl border border-secondary-200">
                  <div className="p-6 border-b border-secondary-100">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-semibold text-secondary-900">Hulp aan huis</h3>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-secondary-900">&euro;14,50</span>
                        <p className="text-xs text-secondary-400 mt-0.5">per kwartier</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-3.5 border-b border-secondary-100 flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Minimum</span>
                    <span className="text-sm font-medium text-secondary-900">45 minuten (3 kwartier)</span>
                  </div>
                  <div className="px-6 py-3.5 border-b border-secondary-100 flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Voorrijkosten</span>
                    <span className="text-sm font-medium text-secondary-900">&euro;10</span>
                  </div>
                  <div className="px-6 py-3.5 border-b border-secondary-100 flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Inclusief</span>
                    <span className="text-sm font-medium text-secondary-900">21% BTW</span>
                  </div>
                  <div className="px-6 py-3.5 flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Betaling</span>
                    <span className="text-sm font-medium text-secondary-900">Achteraf, per pin of tikkie</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/afspraak"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors flex-1"
                  >
                    Afspraak maken
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+31642827860"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-secondary-700 bg-white border border-secondary-200 hover:border-secondary-300 rounded-lg transition-colors flex-1"
                  >
                    <Phone className="w-4 h-4" />
                    Bel ons
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
              Veelgestelde vragen
            </h2>
            <p className="text-secondary-500 mb-10">
              Hier vindt u antwoorden op de meest gestelde vragen over computerhulp aan huis.
            </p>

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

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-secondary-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
              Hulp nodig?
            </h2>
            <p className="text-secondary-500 mb-8">
              Neem vrijblijvend contact op. We helpen u graag verder.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                Afspraak maken
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-secondary-700 bg-white border border-secondary-200 hover:border-secondary-300 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Bel ons
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
