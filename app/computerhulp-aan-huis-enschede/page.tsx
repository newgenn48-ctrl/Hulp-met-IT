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
    description: 'Bel ons of maak online een afspraak. Wij plannen een geschikt moment in Enschede'
  },
  {
    step: '2',
    title: 'Specialist Komt Langs',
    description: 'Onze vriendelijke specialist komt naar u toe in Enschede en bekijkt rustig uw probleem'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Wij lossen het probleem op en leggen duidelijk uit wat er gebeurd is'
  }
]


const faqData = [
  {
    question: "Wat kost computerhulp aan huis in Enschede?",
    answer: "Onze computerhulp aan huis in Enschede begint vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Voor 1 uur betaalt u €69,50. Wij werken met transparante prijzen zonder verborgen kosten."
  },
  {
    question: "Hoe snel kan een specialist bij mij thuis komen in Enschede?",
    answer: "In de meeste gevallen kunnen wij binnen 24-48 uur bij u langskomen in Enschede. Voor spoedgevallen bieden wij vaak nog dezelfde dag service aan."
  },
  {
    question: "Welke computerproblemen lossen jullie op in Enschede?",
    answer: "Wij helpen met alle computerproblemen: trage computer, virusverwijdering, Windows updates, software installatie, internet problemen, e-mail instellen, printer setup en meer."
  },
  {
    question: "Hebben jullie ervaring met computerhulp aan huis?",
    answer: "Ja, wij hebben ruim 10+ jaar ervaring met computerhulp aan huis in Enschede en omgeving. Onze specialisten zijn vakkundig opgeleid en kunnen vrijwel elk computerprobleem oplossen."
  },
  {
    question: "Werken jullie ook in het weekend in Enschede?",
    answer: "Ja, wij zijn 7 dagen per week beschikbaar van 08:00 tot 21:00 uur. Ook in het weekend kunt u dus rekenen op onze computerhulp aan huis in Enschede."
  }
]

export default function ComputerhulpAanHuisEnschede() {
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
                "name": "Computerhulp aan huis Enschede",
                "item": "https://hulpmetit.nl/computerhulp-aan-huis-enschede"
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
            "name": "Hulp met IT - Computerhulp aan Huis Enschede",
            "description": "Professionele computerhulp aan huis in Enschede door ervaren specialisten",
            "url": "https://hulpmetit.nl/computerhulp-aan-huis-enschede",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "areaServed": {
              "@type": "City",
              "name": "Enschede",
              "addressRegion": "Overijssel",
              "addressCountry": "NL"
            },
            "serviceType": "Computerhulp aan huis Enschede",
            "priceRange": "€51,97 - €100",
            "openingHours": "Mo-Su 08:00-21:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "250"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Enschede",
              "addressRegion": "Overijssel",
              "addressCountry": "NL"
            }
          })
        }}
      />
      {/* Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white/50 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto container-padding py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-primary-600 hover:text-primary-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gray-700 font-medium">Computerhulp aan huis Enschede</span>
            </li>
          </ol>
        </div>
      </nav>

      <CityHeroSection cityName="Enschede" />

      <div className="relative">
        <ServicesGrid
          title="Wat We Voor U Kunnen Doen"
          maxItems={6}
        />

        <PricingSection />        {/* Process Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Hoe Werkt Computerhulp aan Huis in Enschede?
              </h2>
              <p className="text-xl text-secondary-700">
                Eenvoudig en snel - van afspraak tot opgeloste computerproblemen
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 text-lg leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

        {/* Why Choose Section */}
        <section className="section-spacing bg-neural-900/30">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Waarom kiezen voor Computerhulp aan Huis Enschede?
              </h2>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
                Ontdek de voordelen van professionele computerhulp door ervaren specialisten
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">10+ Jaar Ervaring</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Onze specialisten hebben ruim 10 jaar ervaring met computerhulp in Enschede. Vakkundige oplossingen voor elk probleem.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Betrouwbaar & Professioneel</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Gediplomeerde IT-specialisten die discreet en zorgvuldig te werk gaan. U kunt met een gerust hart hulp aan huis krijgen.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Snelle Service</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Meestal binnen 24-48 uur bij u thuis in Enschede. Voor spoedgevallen vaak nog dezelfde dag beschikbaar.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Duidelijke Uitleg</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Wij nemen rustig de tijd om alles uit te leggen in begrijpelijke taal. Na onze hulp begrijpt u precies wat er gebeurd is.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">7 Dagen per Week</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Ook 's avonds en in het weekend bereikbaar in Enschede. Wij passen ons aan uw schema aan.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Eerlijke Prijzen</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Transparante tarieven vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Geen verrassingen, u weet vooraf wat u betaalt.
                </p>
              </div>
            </div>
          </div>
        </section>

        </section>

        {/* Services Section */}
        {/* SEO Content Section */}
        <section className="section-spacing bg-neural-900/50">
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
              Computerhulp aan Huis in Heel Enschede
            </h2>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">🏘️ Enschede Wijken</h3>
                <ul className="text-secondary-700 space-y-2">
                  <li>• Computerhulp Enschede Centrum</li>
                  <li>• Computerhulp Enschede Noord</li>
                  <li>• Computerhulp Enschede Zuid</li>
                  <li>• Computerhulp Enschede Oost</li>
                  <li>• Computerhulp Enschede West</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-4">
                Waarom Computerhulp aan Huis Enschede?
              </h3>
              <p className="text-secondary-700 text-lg leading-relaxed">
                Hulp met IT biedt computerhulp aan huis in heel Enschede. Van de Jordaan tot Bijlmermeer, van Nieuw-West tot Zuidoost - onze vriendelijke specialisten komen naar u toe en nemen rustig de tijd om uw computerproblemen op te lossen en uit te leggen hoe alles werkt.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-secondary-800 text-center mb-6">
                Veelgestelde Vragen over Computerhulp aan Huis Enschede
              </h3>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="glass-effect rounded-lg overflow-hidden">
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