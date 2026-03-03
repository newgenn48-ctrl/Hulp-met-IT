'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  MapPin,
  ArrowRight,
  Phone,
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
    answer: "Onze tarieven zijn landelijk hetzelfde: vanaf €14,50 per kwartier (min. 3 kwartier = 3 x €14,50) + €10 voorrijkosten. We hanteren transparante, vaste tarieven door heel Nederland."
  },
  {
    question: "Zijn jullie studenten lokaal beschikbaar?",
    answer: "Ja! In elke stad hebben we lokale ICT-studenten die de regio kennen. Zij zorgen voor snelle service en persoonlijke aandacht in uw eigen omgeving."
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
            <Link href="/" className="text-secondary-500 hover:text-primary-700">Home</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">Regio&apos;s</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Werkgebied</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
              Computerhulp in heel Nederland
            </h1>
            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              Wij komen bij u thuis, waar u ook woont. In meer dan 30 steden door heel Nederland staan onze studenten voor u klaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
              >
                Afspraak maken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+31858005006"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel 085-8005006
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="relative py-20 lg:py-28 bg-secondary-50">
        <div className="absolute inset-0 bg-dots opacity-15" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Onze locaties</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-3">
              Vind computerhulp in uw stad
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Klik op uw stad voor meer informatie over onze lokale IT-service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <Link key={city.slug} href={`/regios/${city.slug}`}>
                <div className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 group">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-secondary-500 text-sm">{city.region}</p>
                    </div>
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-secondary-600 text-sm leading-relaxed mb-3">
                    {city.description}
                  </p>
                  <span className="text-primary-600 font-medium text-sm inline-flex items-center">
                    Meer info
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not Found Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Uitbreiding</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Uw stad niet gevonden?
            </h2>
            <p className="text-secondary-600 mb-8">
              We breiden ons servicebereik continu uit. Neem contact op om te kijken
              of we ook in uw plaats of gemeente actief zijn of binnenkort komen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
              >
                Afspraak maken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+31858005006"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel 085-8005006
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 lg:py-28 bg-secondary-50">
        <div className="absolute inset-0 bg-dots opacity-15" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
              Veelgestelde vragen
            </h2>
          </div>

          <div className="space-y-3">
            {regiosFaqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-20 lg:py-28 text-center">
          <p className="text-white/70 font-semibold text-sm tracking-wide uppercase mb-3">Direct aan de slag</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Klaar voor computerhulp?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Onze HBO-opgeleide studenten staan in heel Nederland klaar om u te helpen. Snel, vakkundig en betaalbaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+31858005006"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel 085-8005006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
