'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Shield,
  Users,
  ChevronDown
} from 'lucide-react'
import cities from '@/lib/data/cities.json'

const regiosFaqData = [
  {
    question: "In welke Nederlandse steden bieden jullie computerhulp aan?",
    answer: "We zijn actief in 30+ Nederlandse steden, waaronder Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Tilburg, Groningen en vele andere. Ook bedienen we omliggende gemeenten en kleinere plaatsen."
  },
  {
    question: "Waar kan ik computerhulp aan huis krijgen?",
    answer: "Onze IT-service is beschikbaar in alle grote Nederlandse steden en omliggende gebieden. Van Noord-Holland tot Zuid-Holland, Utrecht, Noord-Brabant, Overijssel en meer regio's."
  },
  {
    question: "Hoeveel kost computerhulp in verschillende steden?",
    answer: "Onze tarieven zijn landelijk hetzelfde: vanaf €14,50 per kwartier (min. 3 kwartier = €43,50) + €10 voorrijkosten. We hanteren transparante, vaste tarieven door heel Nederland."
  },
  {
    question: "Zijn jullie IT-specialisten lokaal beschikbaar?",
    answer: "Ja! In elke stad hebben we lokale IT-experts die de regio kennen. Zij zorgen voor snelle service en persoonlijke aandacht in uw eigen omgeving."
  },
  {
    question: "Hoe snel kunnen jullie komen in mijn stad?",
    answer: "In de meeste steden zijn we binnen 24-48 uur beschikbaar. Voor spoedgevallen proberen we vaak nog dezelfde dag te komen. Bel voor de snelste service!"
  }
]

export default function RegiosPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: regiosFaqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-secondary-50 border-b border-secondary-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-secondary-500 hover:text-primary-500">Home</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">Regio&apos;s</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100/50 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            {/* Rating */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-500 fill-primary-500" />
                ))}
                <div className="relative w-5 h-5">
                  <Star className="absolute w-5 h-5 text-primary-200 fill-primary-200" />
                  <div className="absolute overflow-hidden" style={{ width: '80%' }}>
                    <Star className="w-5 h-5 text-primary-500 fill-primary-500" />
                  </div>
                </div>
              </div>
              <span className="text-secondary-600">4.8/5 · 2000+ klanten</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight mb-6">
              Computerhulp
              <span className="text-primary-500"> in heel Nederland</span>
            </h1>

            <p className="text-xl text-secondary-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Hulp met IT is actief in de belangrijkste Nederlandse steden én omliggende gemeenten.
              Onze lokale IT-specialisten kennen uw regio door en door en bieden snelle, betrouwbare service aan huis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-secondary-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">30+ Steden</h3>
              <p className="text-secondary-600">Actief in steden en omliggende plaatsen</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-secondary-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">24-48u Service</h3>
              <p className="text-secondary-600">Snelle response in elke regio</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-secondary-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">4.8+ Rating</h3>
              <p className="text-secondary-600">Uitstekende reviews in alle steden</p>
            </div>
          </div>
        </div>
      </section>

      {/* USP Bar */}
      <section className="bg-primary-500 py-6">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Mobile */}
          <div className="grid grid-cols-3 gap-4 md:hidden text-white text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">Landelijk</p>
              <p className="text-primary-100 text-xs">heel NL</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">Lokaal</p>
              <p className="text-primary-100 text-xs">kennen de regio</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-sm">Betrouwbaar</p>
              <p className="text-primary-100 text-xs">verzekerd</p>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center justify-center gap-10 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">Landelijke dekking</p>
                <p className="text-primary-100 text-sm">30+ steden in Nederland</p>
              </div>
            </div>
            <div className="w-px h-10 bg-primary-400" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">Lokale experts</p>
                <p className="text-primary-100 text-sm">Kennen uw regio door en door</p>
              </div>
            </div>
            <div className="w-px h-10 bg-primary-400" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">Betrouwbaar</p>
                <p className="text-primary-100 text-sm">Gescreend en verzekerd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-semibold mb-3">Onze locaties</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Vind computerhulp in uw stad
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Klik op uw stad voor meer informatie over onze lokale IT-service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link key={city.slug} href={`/regios/${city.slug}`}>
                <div className="bg-secondary-50 rounded-xl p-6 border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-800 group-hover:text-primary-500 transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-primary-500 text-sm">{city.population} inwoners</p>
                    </div>
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
                    {city.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary-500">{city.region}</span>
                    <span className="text-primary-500 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Meer info
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not Found Section */}
      <section className="py-16 lg:py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-secondary-200 shadow-sm text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Uw stad niet gevonden?
            </h2>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              We breiden ons servicebereik continu uit. Neem contact op om te kijken
              of we ook in uw plaats of gemeente actief zijn of binnenkort komen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel voor beschikbaarheid
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 border-2 border-primary-300 hover:bg-primary-50 rounded-xl transition-colors"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-semibold mb-3">Veelgestelde vragen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Vragen over IT-hulp in Nederland
            </h2>
          </div>

          <div className="space-y-3">
            {regiosFaqData.map((faq, index) => (
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
                    className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform ${
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
            Klaar voor computerhulp?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Onze IT-specialisten staan in heel Nederland klaar om u te helpen. Snel, vakkundig en betaalbaar.
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
