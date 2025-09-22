'use client'

import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { PricingSection } from '@/components/home/PricingSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import Link from 'next/link'
import { useState } from 'react'
import {
  Phone,
  Calendar,
  GraduationCap,
  Euro,
  Zap,
  MapPin,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const benefits = [
  {
    icon: Euro,
    title: 'Betaalbare Tarieven',
    description: 'Vanaf €13,99 per kwartier'
  },
  {
    icon: GraduationCap,
    title: 'IT-Student Aan Huis',
    description: 'Ervaren student komt naar u toe'
  },
  {
    icon: Zap,
    title: 'Snel & Flexibel',
    description: 'Ook avonden en weekenden'
  }
]

const processSteps = [
  {
    step: '1',
    title: 'Plan Afspraak',
    description: 'Bel of plan online - binnen Middelburg snel beschikbaar'
  },
  {
    step: '2', 
    title: 'Student Komt Langs',
    description: 'IT-student komt naar je adres in Middelburg'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Vakkundige hulp tegen studententarief + uitleg'
  }
]

const middelburgAreas = [
  'Middelburg Centrum', 'Middelburg Noord', 'Middelburg Oost', 'Middelburg West',
  'Middelburg Zuid', 'Vlissingen', 'Veere', 'Koudekerke',
  'Arnemuiden', 'Goes', 'Kapelle', 'Westkapelle'
]

const faqData = [
  {
    question: "Wat kost student aan huis hulp in Middelburg?",
    answer: "Onze tarieven beginnen vanaf €13,99 per kwartier in Middelburg. Dit is veel voordeliger dan traditionele computerhulp services. Je betaalt alleen voor de daadwerkelijk bestede tijd, geen voorrijkosten of minimumtarief."
  },
  {
    question: "Zijn jullie studenten wel gekwalificeerd in Middelburg?",
    answer: "Ja, onze studenten in Middelburg volgen IT-opleidingen en hebben praktijkervaring. Ze zijn vertrouwd met moderne technologie en worden geselecteerd op hun technische vaardigheden en communicatieve vaardigheden."
  },
  {
    question: "Kunnen jullie ook 's avonds en weekenden komen in Middelburg?",
    answer: "Ja, dat is een van onze grote voordelen! Onze studenten in Middelburg hebben flexibele schema's en kunnen vaak ook 's avonds en in weekenden. We zijn bereikbaar van 08:00 tot 22:00, 7 dagen per week."
  },
  {
    question: "Hoe snel kunnen jullie komen in Middelburg?",
    answer: "In Middelburg kunnen we vaak nog dezelfde dag langskomen, vooral 's avonds en in weekenden. Voor urgent problemen proberen we binnen 2-4 uur beschikbaar te zijn in Zeeland."
  },
  {
    question: "Welke plaatsen in Zeeland bedienen jullie?",
    answer: "We bedienen alle wijken van Middelburg: Centrum, Noord, Oost, West, Zuid, plus omliggende plaatsen zoals Vlissingen, Goes, Veere, Koudekerke, Arnemuiden en kustplaatsen zoals Westkapelle."
  }
]

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="glass-effect rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <h3 className="text-xl font-semibold text-white pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-primary-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-primary-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-neural-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function StudentAanHuisMiddelburgLanding() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hulp met IT - Student Aan Huis Middelburg",
            "description": "Betaalbare computerhulp in Middelburg door ervaren IT-studenten. Zeelandse hoofdstad en kustgebied.",
            "url": "https://hulpmetit.nl/student-aan-huis-middelburg",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Middelburg",
              "addressRegion": "Zeeland",
              "addressCountry": "NL"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Middelburg"
              }
            ],
            "serviceType": "Student computerhulp aan huis Middelburg",
            "priceRange": "€13,99 - €18,50",
            "openingHours": "Mo-Su 08:00-22:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            },
            "offers": {
              "@type": "Offer",
              "description": "Computerhulp door IT-studenten in Middelburg",
              "price": "13.99",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      
      <div className="relative min-h-screen">
        <ClientWrapper>
          <FloatingElements />
        </ClientWrapper>
        
        {/* Hero Section */}
        <section className="hero-section relative z-10 md:z-auto">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                Student Aan Huis Service Middelburg
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                Student Aan Huis Middelburg
                <br />
                <span className="text-white">Betaalbare Computerhulp</span>
              </h1>
              
              <p className="text-xl text-neural-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Computerproblemen in Middelburg? Onze IT-studenten komen naar je toe! Betaalbare hulp door lokale studenten. 
                <span className="text-primary-300 font-semibold"> Betaalbare tarieven - snel en vakkundig!</span>
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={index} className="glass-effect rounded-lg p-4 text-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-neural-300 text-base">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/afspraak" className="btn-cta">
                  <Calendar className="w-6 h-6 mr-3" />
                  Afspraak Maken
                </Link>
                <Link href="tel:+31642827860" className="btn-secondary">
                  <Phone className="w-6 h-6 mr-3" />
                  Bel Nu: 06-42827860
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesPreview />

        {/* Process Section */}
        <section className="section-spacing bg-white/5">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Hoe Werkt Student Aan Huis in Middelburg?
              </h2>
              <p className="text-xl text-neural-300">
                Snel, lokaal en betaalbaar - vakkundige hulp in Middelburg
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-neural-300 text-lg leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Why Choose Student Section */}
        <section className="section-spacing bg-neural-900/30">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Waarom kiezen voor onze Student Aan Huis in Middelburg?
              </h2>
              <p className="text-xl text-neural-300 max-w-3xl mx-auto">
                Ontdek de voordelen van computerhulp door ervaren IT-studenten in Middelburg
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Betaalbare Tarieven Middelburg</h3>
                <p className="text-neural-300 leading-relaxed">
                  Vanaf €13,99 per kwartier in Middelburg - veel goedkoper dan traditionele computerhulp. Perfecte kwaliteit tegen studententarieven.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lokale IT-Studenten</h3>
                <p className="text-neural-300 leading-relaxed">
                  Onze studenten in Middelburg zijn opgeleid in de nieuwste technologieën en kennen Zeeland goed. Van centrum tot kustgebied.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Flexibele Tijden</h3>
                <p className="text-neural-300 leading-relaxed">
                  Ook 's avonds en in weekenden beschikbaar in Middelburg. Studenten hebben flexibele schema's die perfect aansluiten bij uw behoeften.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Heel Zeeland</h3>
                <p className="text-neural-300 leading-relaxed">
                  Van historisch Middelburg tot Vlissingen, van Goes tot kustplaatsen zoals Westkapelle - onze studenten komen overal in Zeeland.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Snelle Beschikbaarheid</h3>
                <p className="text-neural-300 leading-relaxed">
                  Vaak nog dezelfde dag beschikbaar in Middelburg. Ook in het weekend en tijdens vakanties beschikbaar.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Moderne Kennis</h3>
                <p className="text-neural-300 leading-relaxed">
                  Studenten zijn vertrouwd met de nieuwste software en technologieën. Ideaal voor moderne computerproblemen en nieuwe systemen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Onze Student IT Diensten in Middelburg
              </h2>
              <p className="text-xl text-neural-300">
                Uitgebreide computerhulp door vakkundige IT-studenten in Middelburg
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">🖥️ Computer & Laptop Hulp Middelburg</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Laptop en Computer Reparatie</h4>
                  <ul className="text-neural-300 space-y-2">
                    <li>• Computer start niet op - diagnose en reparatie</li>
                    <li>• Laptop scherm vervangen of repareren</li>
                    <li>• Toetsenbord en touchpad problemen</li>
                    <li>• Hardware upgrades (RAM, SSD, harde schijf)</li>
                    <li>• Ventilator reiniging bij oververhitting</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Software Installatie & Updates</h4>
                  <ul className="text-neural-300 space-y-2">
                    <li>• Windows installatie en updates</li>
                    <li>• Microsoft Office installatie en configuratie</li>
                    <li>• Antivirus software installeren</li>
                    <li>• Browser installatie en bookmarks overzetten</li>
                    <li>• Printer drivers en software installeren</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">🌐 Internet & Netwerk Middelburg</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">WiFi & Internet Problemen</h4>
                  <ul className="text-neural-300 space-y-2">
                    <li>• WiFi verbinding problemen oplossen</li>
                    <li>• Router instellen en configureren</li>
                    <li>• Langzame internet snelheid verbeteren</li>
                    <li>• Netwerk printer verbinding maken</li>
                    <li>• Smart TV internet verbinding</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Smartphone & Tablet Hulp</h4>
                  <ul className="text-neural-300 space-y-2">
                    <li>• iPhone en Android telefoon instellen</li>
                    <li>• Apps downloaden en organiseren</li>
                    <li>• Contacten en foto's synchroniseren</li>
                    <li>• Tablet koppelen aan WiFi en accounts</li>
                    <li>• Privacy instellingen optimaliseren</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-spacing bg-neural-900/50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Veelgestelde Vragen Student Aan Huis Middelburg
              </h2>
              <p className="text-xl text-neural-300">
                Antwoorden op de meest gestelde vragen over onze student IT service in Middelburg
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Middelburg Areas Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Werkgebied Middelburg & Omgeving
              </h2>
              <p className="text-xl text-neural-300">
                Onze IT-studenten komen naar alle wijken in en rondom Middelburg
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {middelburgAreas.map((area, index) => (
                <div key={index} className="glass-effect rounded-lg p-4 text-center">
                  <MapPin className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <span className="text-neural-200 text-base font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-neural-300 text-lg mb-6">
                Niet in de lijst? <strong className="text-white">Bel ons</strong> - wij komen waarschijnlijk ook bij jou!
              </p>
              <Link href="/regios/middelburg" className="btn-secondary">
                <MapPin className="w-5 h-5 mr-2" />
                Meer Info Middelburg
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Klaar voor Betaalbare Computerhulp in Middelburg?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Onze ervaren IT-studenten in Middelburg staan klaar om je te helpen. Snel, betaalbaar en vakkundig!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/afspraak" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-3" />
                Plan Nu Je Afspraak
              </Link>
              <Link href="tel:+31642827860" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                Bel Direct: 06-42827860
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}