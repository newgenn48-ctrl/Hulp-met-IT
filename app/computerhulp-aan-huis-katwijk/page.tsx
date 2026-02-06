'use client'

import { CityHeroSection } from '@/components/city/CityHeroSection'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { PricingSection } from '@/components/home/PricingSection'
import { useState } from 'react'
import Link from 'next/link'
import {
  Phone,
  Calendar,
  Users,
  MessageCircle,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const processSteps = [
  {
    step: '1',
    title: 'Afspraak Maken',
    description: 'Bel ons of maak online een afspraak. Wij plannen een geschikt moment in Katwijk'
  },
  {
    step: '2',
    title: 'Specialist Komt Langs',
    description: 'Onze vriendelijke specialist komt naar u toe in Katwijk en bekijkt rustig uw probleem'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Wij lossen het probleem op en leggen duidelijk uit wat er gebeurd is'
  }
]


const faqData = [
  {
    question: "Wat kost computerhulp aan huis in Katwijk?",
    answer: "Onze computerhulp aan huis in Katwijk kost €14,50 per kwartier, met een minimum van 3 kwartier. Voorrijkosten zijn €10 eenmalig. U betaalt achteraf."
  },
  {
    question: "Hoe snel kan een specialist bij mij thuis komen in Katwijk?",
    answer: "In de meeste gevallen kunnen wij binnen 24-48 uur bij u langskomen in Katwijk. Voor spoedgevallen bieden wij vaak nog dezelfde dag service aan."
  },
  {
    question: "Welke computerproblemen lossen jullie op in Katwijk?",
    answer: "Wij helpen met alle computerproblemen: trage computer, virusverwijdering, Windows updates, software installatie, internet problemen, e-mail instellen, printer setup en meer."
  },
  {
    question: "Hebben jullie ervaring met computerhulp aan huis?",
    answer: "Ja, wij hebben ruim 10+ jaar ervaring met computerhulp aan huis in Katwijk en omgeving. Onze specialisten zijn vakkundig opgeleid en kunnen vrijwel elk computerprobleem oplossen."
  },
  {
    question: "Werken jullie ook in het weekend in Katwijk?",
    answer: "Ja, wij zijn 7 dagen per week beschikbaar van 08:00 tot 21:00 uur. Ook in het weekend kunt u dus rekenen op onze computerhulp aan huis in Katwijk."
  }
]

export default function ComputerhulpAanHuisKatwijk() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hulpmetit.nl"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Computerhulp aan huis Katwijk",
                "item": "https://hulpmetit.nl/computerhulp-aan-huis-katwijk"
              }
            ]
          })
        }}
      />

<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hulp met IT - Computerhulp aan Huis Katwijk",
            "description": "Professionele computerhulp aan huis in Katwijk door ervaren specialisten",
            "url": "https://hulpmetit.nl/computerhulp-aan-huis-katwijk",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "areaServed": {
              "@type": "City",
              "name": "Katwijk",
              "addressRegion": "Noord-Holland",
              "addressCountry": "NL"
            },
            "serviceType": "Computerhulp aan huis Katwijk",
            "priceRange": "€51,97 - €100",
            "openingHours": "Mo-Su 08:00-21:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "250"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Katwijk",
              "addressRegion": "Noord-Holland",
              "addressCountry": "NL"
            }
          })
        }}
      />
      {/* Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="bg-secondary-50 border-b border-secondary-200">
        <div className="max-w-7xl mx-auto container-padding py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-primary-600 hover:text-primary-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gray-700 font-medium">Computerhulp aan huis Katwijk</span>
            </li>
          </ol>
        </div>
      </nav>

      <CityHeroSection cityName="Katwijk" />

      <div className="relative">
        <ServicesGrid
          title="Wat We Voor U Kunnen Doen"
          maxItems={6}
        />

        <PricingSection />        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-4">
                Hoe Werkt Computerhulp aan Huis in Katwijk?
              </h2>
              <p className="text-xl text-secondary-700">
                Eenvoudig en snel - van afspraak tot opgeloste computerproblemen
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold text-primary-600">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 text-lg leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

        {/* Why Choose Section */}
        <section className="py-16 lg:py-24 bg-secondary-50">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-4">
                Waarom kiezen voor Computerhulp aan Huis Katwijk?
              </h2>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
                Ontdek de voordelen van professionele computerhulp door ervaren specialisten
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">10+ Jaar Ervaring</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Onze specialisten hebben ruim 10 jaar ervaring met computerhulp in Katwijk. Vakkundige oplossingen voor elk probleem.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Betrouwbaar & Professioneel</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Gediplomeerde IT-specialisten die discreet en zorgvuldig te werk gaan. U kunt met een gerust hart hulp aan huis krijgen.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Snelle Service</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Meestal binnen 24-48 uur bij u thuis in Katwijk. Voor spoedgevallen vaak nog dezelfde dag beschikbaar.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Duidelijke Uitleg</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Wij nemen rustig de tijd om alles uit te leggen in begrijpelijke taal. Na onze hulp begrijpt u precies wat er gebeurd is.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">7 Dagen per Week</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Ook 's avonds en in het weekend bereikbaar in Katwijk. Wij passen ons aan uw schema aan.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Eerlijke Prijzen</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Transparante tarieven: €14,50 per kwartier + €10 voorrijkosten. Geen verrassingen, u weet vooraf wat u betaalt.
                </p>
              </div>
            </div>
          </div>
        </section>

        </section>

        {/* Services Section */}
        {/* SEO Content Section */}
        <section className="py-16 lg:py-24 bg-secondary-50">
                    <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqData.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
<div className="max-w-4xl mx-auto container-padding">
            <h2 className="text-3xl font-bold text-secondary-800 text-center mb-8">
              Computerhulp aan Huis in Heel Katwijk
            </h2>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">🏘️ Katwijk Wijken</h3>
                <ul className="text-secondary-700 space-y-2">
                  <li>• Computerhulp Katwijk Centrum</li>
                  <li>• Computerhulp Katwijk Noord</li>
                  <li>• Computerhulp Katwijk Zuid</li>
                  <li>• Computerhulp Katwijk Oost</li>
                  <li>• Computerhulp Katwijk West</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-4">
                Waarom Computerhulp aan Huis Katwijk?
              </h3>
              <p className="text-secondary-700 text-lg leading-relaxed">
                Hulp met IT biedt computerhulp aan huis in heel Katwijk. Van de Jordaan tot Bijlmermeer, van Nieuw-West tot Zuidoost - onze vriendelijke specialisten komen naar u toe en nemen rustig de tijd om uw computerproblemen op te lossen en uit te leggen hoe alles werkt.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-secondary-800 text-center mb-6">
                Veelgestelde Vragen over Computerhulp aan Huis Katwijk
              </h3>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg border border-secondary-100 overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
                    >
                      <span className="font-semibold text-secondary-800">{faq.question}</span>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4 text-secondary-700">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  )
}