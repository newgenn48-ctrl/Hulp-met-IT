'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Hoe snel kunnen jullie langskomen?',
    answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur bij u langskomen. Voor spoedhulp is vaak dezelfde dag nog mogelijk.'
  },
  {
    question: 'Wat kost een huisbezoek?',
    answer: 'Wij rekenen €14,50 per kwartier voor standaard hulp, met een minimum van 45 minuten. Voorrijkosten zijn €10 eenmalig. Bij spoedhulp is het tarief €18,50 per kwartier.'
  },
  {
    question: 'Moet ik vooraf betalen?',
    answer: 'Nee, u betaalt pas achteraf. Wij sturen een factuur na afloop van het bezoek. Betalen kan via iDEAL, bankoverschrijving of contant.'
  },
  {
    question: 'Wat voor problemen lossen jullie op?',
    answer: 'Vrijwel alle computerproblemen: trage computers, virussen, wifi-problemen, printer installatie, e-mail instellingen, software updates, en meer. Ook geven wij uitleg en les.'
  },
  {
    question: 'Komen jullie ook in mijn regio?',
    answer: 'Wij zijn actief in heel Nederland. Van Amsterdam tot Maastricht, wij komen bij u thuis.'
  },
  {
    question: 'Wat als het probleem niet opgelost kan worden?',
    answer: 'Dat komt zelden voor, maar mocht het zo zijn dan betaalt u alleen voor de tijd die wij besteed hebben. Wij zijn eerlijk en transparant.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-primary-700 font-semibold mb-3">Veelgestelde vragen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Heeft u vragen?
          </h2>
          <p className="text-lg text-secondary-600">
            Hier vindt u antwoorden op de meest gestelde vragen.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-secondary-50 rounded-xl border border-secondary-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-100 transition-colors"
              >
                <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-700 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
