'use client'

import { ServicesGrid } from '@/components/services/ServicesGrid'
import { PricingSection } from '@/components/home/PricingSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
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

const benefits = [
  { icon: Users, text: '10+ jaar ervaring' },
  { icon: MessageCircle, text: 'Begrijpelijke uitleg' },
  { icon: CheckCircle, text: 'Betaalbaar en betrouwbaar' }
]

const processSteps = [
  {
    step: '1',
    title: 'Afspraak Maken',
    description: 'Bel ons of maak online een afspraak. Wij plannen een geschikt moment in Laren'
  },
  {
    step: '2',
    title: 'Specialist Komt Langs',
    description: 'Onze vriendelijke specialist komt naar u toe in Laren en bekijkt rustig uw probleem'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Wij lossen het probleem op en leggen duidelijk uit wat er gebeurd is'
  }
]


const faqData = [
  {
    question: "Wat kost computerhulp aan huis in Laren?",
    answer: "Onze computerhulp aan huis in Laren begint vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Voor 1 uur betaalt u €69,50. Wij werken met transparante prijzen zonder verborgen kosten."
  },
  {
    question: "Hoe snel kan een specialist bij mij thuis komen in Laren?",
    answer: "In de meeste gevallen kunnen wij binnen 24-48 uur bij u langskomen in Laren. Voor spoedgevallen bieden wij vaak nog dezelfde dag service aan."
  },
  {
    question: "Welke computerproblemen lossen jullie op in Laren?",
    answer: "Wij helpen met alle computerproblemen: trage computer, virusverwijdering, Windows updates, software installatie, internet problemen, e-mail instellen, printer setup en meer."
  },
  {
    question: "Hebben jullie ervaring met computerhulp aan huis?",
    answer: "Ja, wij hebben ruim 10+ jaar ervaring met computerhulp aan huis in Laren en omgeving. Onze specialisten zijn vakkundig opgeleid en kunnen vrijwel elk computerprobleem oplossen."
  },
  {
    question: "Werken jullie ook in het weekend in Laren?",
    answer: "Ja, wij zijn 7 dagen per week beschikbaar van 08:00 tot 21:00 uur. Ook in het weekend kunt u dus rekenen op onze computerhulp aan huis in Laren."
  }
]

export default function ComputerhulpAanHuisLaren() {
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
                "name": "Computerhulp aan huis Laren",
                "item": "https://hulpmetit.nl/computerhulp-aan-huis-laren"
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
            "name": "Hulp met IT - Computerhulp aan Huis Laren",
            "description": "Professionele computerhulp aan huis in Laren door ervaren specialisten",
            "url": "https://hulpmetit.nl/computerhulp-aan-huis-laren",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "areaServed": {
              "@type": "City",
              "name": "Laren",
              "addressRegion": "Noord-Holland",
              "addressCountry": "NL"
            },
            "serviceType": "Computerhulp aan huis Laren",
            "priceRange": "€51,97 - €100",
            "openingHours": "Mo-Su 08:00-21:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "250"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Laren",
              "addressRegion": "Noord-Holland",
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
              <span className="text-gray-700 font-medium">Computerhulp aan huis Laren</span>
            </li>
          </ol>
        </div>
      </nav>

      <section className="relative flex items-start justify-center overflow-hidden pt-20">
                {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/computerhulp-aan-huis/computerhulp-aan-huis.webp)',
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-primary-800/40 to-accent-900/30" />
        </div>

<div className="relative z-10 max-w-6xl mx-auto container-padding text-center flex items-center min-h-[600px] lg:min-h-[700px]">
          <div className="w-full">

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Computerhulp aan Huis</span>
            <br />
            <span className="text-yellow-400">Laren</span>
          </h1>

          <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-6 leading-relaxed">Rustige, vriendelijke hulp aan huis in Laren. Wij helpen u met uw computer, wifi, printer of telefoon.</p>

          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-lg text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <IconComponent className="w-6 h-6 text-white" />
                  <span className="drop-shadow-sm">{benefit.text}</span>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Link href="/afspraak" className="btn-cta shadow-2xl hover:shadow-3xl transition-shadow">
              <Calendar className="w-6 h-6 mr-3" />
              Afspraak Maken
            </Link>

            <a href="tel:+31642827860" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow bg-white/95 hover:bg-white">
              <Phone className="w-5 h-5 mr-2" />
              Bel Nu
            </a>
          </div>

        </div>
        </div>
      </section>

      <div className="relative">
        <ServicesGrid
          title="Wat We Voor U Kunnen Doen"
          maxItems={6}
        />

        <PricingSection />
        <TestimonialsSection />
        {/* Process Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Hoe Werkt Computerhulp aan Huis in Laren?
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
                Waarom kiezen voor Computerhulp aan Huis Laren?
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
                  Onze specialisten hebben ruim 10 jaar ervaring met computerhulp in Laren. Vakkundige oplossingen voor elk probleem.
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
                  Meestal binnen 24-48 uur bij u thuis in Laren. Voor spoedgevallen vaak nog dezelfde dag beschikbaar.
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
                  Ook 's avonds en in het weekend bereikbaar in Laren. Wij passen ons aan uw schema aan.
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
              Computerhulp aan Huis in Heel Laren
            </h2>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">🏘️ Laren Wijken</h3>
                <ul className="text-secondary-700 space-y-2">
                  <li>• Computerhulp Laren Centrum</li>
                  <li>• Computerhulp Laren Noord</li>
                  <li>• Computerhulp Laren Zuid</li>
                  <li>• Computerhulp Laren Oost</li>
                  <li>• Computerhulp Laren West</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-4">
                Waarom Computerhulp aan Huis Laren?
              </h3>
              <p className="text-secondary-700 text-lg leading-relaxed">
                Hulp met IT biedt computerhulp aan huis in heel Laren. Van de Jordaan tot Bijlmermeer, van Nieuw-West tot Zuidoost - onze vriendelijke specialisten komen naar u toe en nemen rustig de tijd om uw computerproblemen op te lossen en uit te leggen hoe alles werkt.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-secondary-800 text-center mb-6">
                Veelgestelde Vragen over Computerhulp aan Huis Laren
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