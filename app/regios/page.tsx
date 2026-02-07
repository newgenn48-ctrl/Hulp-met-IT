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
            <Link href="/" className="text-secondary-500 hover:text-primary-700">Home</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-700 font-medium">Regio&apos;s</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
              Computerhulp in heel Nederland
            </h1>
            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              Wij komen bij u thuis, waar u ook woont. In meer dan 30 steden door heel Nederland staan onze medewerkers voor u klaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                Afspraak maken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel ons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
            Vind computerhulp in uw stad
          </h2>
          <p className="text-secondary-600 mb-10 max-w-2xl">
            Klik op uw stad voor meer informatie over onze lokale IT-service.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <Link key={city.slug} href={`/regios/${city.slug}`}>
                <div className="bg-white rounded-lg p-5 border border-secondary-200 hover:border-primary-300 transition-colors group">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
              Uw stad niet gevonden?
            </h2>
            <p className="text-secondary-600 mb-8">
              We breiden ons servicebereik continu uit. Neem contact op om te kijken
              of we ook in uw plaats of gemeente actief zijn of binnenkort komen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                Afspraak maken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel ons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-8">
            Veelgestelde vragen
          </h2>

          <div className="space-y-3">
            {regiosFaqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-secondary-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-50 transition-colors"
                >
                  <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`px-5 pb-5 ${openFaq === index ? '' : 'hidden'}`}>
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
            Klaar voor computerhulp?
          </h2>
          <p className="text-secondary-600 mb-8 max-w-xl mx-auto">
            Onze IT-specialisten staan in heel Nederland klaar om u te helpen. Snel, vakkundig en betaalbaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
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
