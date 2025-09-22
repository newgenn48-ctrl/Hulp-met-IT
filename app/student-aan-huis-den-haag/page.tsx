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
    description: 'Bel of plan online - binnen Den Haag snel beschikbaar'
  },
  {
    step: '2',
    title: 'Student Komt Langs',
    description: 'IT-student komt naar je adres in Den Haag'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Vakkundige hulp tegen studententarief + uitleg'
  }
]

const denHaagAreas = [
  'Den Haag Centrum', 'Scheveningen', 'Wassenaar', 'Voorburg',
  'Leidschenveen', 'Bezuidenhout', 'Haagse Hout', 'Loosduinen',
  'Rijswijk', 'Delft'
]

const faqData = [
  {
    question: "Wat kost student aan huis hulp in Den Haag?",
    answer: "Onze tarieven beginnen vanaf €13,99 per kwartier in Den Haag. Dit is veel voordeliger dan traditionele computerhulp services. Je betaalt alleen voor de daadwerkelijk bestede tijd, geen voorrijkosten of minimumtarief."
  },
  {
    question: "Zijn jullie studenten wel gekwalificeerd in Den Haag?",
    answer: "Ja, onze studenten in Den Haag volgen IT-opleidingen en hebben praktijkervaring. Ze zijn vertrouwd met moderne technologie en worden geselecteerd op hun technische vaardigheden en communicatieve vaardigheden."
  },
  {
    question: "Kunnen jullie ook 's avonds en weekenden komen in Den Haag?",
    answer: "Ja, dat is een van onze grote voordelen! Onze studenten in Den Haag hebben flexibele schema's en kunnen vaak ook 's avonds en in weekenden. We zijn bereikbaar van 08:00 tot 22:00, 7 dagen per week."
  },
  {
    question: "Hoe snel kunnen jullie komen in Den Haag?",
    answer: "In Den Haag kunnen we vaak nog dezelfde dag langskomen, vooral 's avonds en in weekenden. Voor urgent problemen proberen we binnen 2-4 uur beschikbaar te zijn."
  },
  {
    question: "Welke wijken in Den Haag bedienen jullie?",
    answer: "We bedienen alle wijken van Den Haag: Centrum, Scheveningen, Bezuidenhout, Haagse Hout, Loosduinen, plus omliggende gemeenten zoals Wassenaar, Voorburg, Rijswijk en Delft."
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

export default function StudentAanHuisDenHaagLanding() {
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
            "name": "Hulp met IT - Student Aan Huis Den Haag",
            "description": "Betaalbare computerhulp in Den Haag door ervaren IT-studenten aan huis. Snel, betrouwbaar en vakkundig. Van Scheveningen tot Wassenaar.",
            "url": "https://hulpmetit.nl/student-aan-huis-den-haag",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Den Haag",
              "addressRegion": "Zuid-Holland",
              "addressCountry": "NL"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Den Haag"
              },
              {
                "@type": "City",
                "name": "Scheveningen"
              },
              {
                "@type": "City",
                "name": "Wassenaar"
              },
              {
                "@type": "City",
                "name": "Voorburg"
              }
            ],
            "serviceType": "Student computerhulp aan huis Den Haag",
            "priceRange": "€13,99 - €18,50",
            "openingHours": "Mo-Su 08:00-22:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            },
            "offers": {
              "@type": "Offer",
              "description": "Computerhulp aan huis door IT-studenten",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "13.99",
                "priceCurrency": "EUR",
                "unitText": "per kwartier"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IT Diensten Den Haag",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Computer reparatie Den Haag"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Laptop hulp Den Haag"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "WiFi installatie Den Haag"
                  }
                }
              ]
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
                Student Aan Huis Service Den Haag
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                Student Aan Huis Den Haag
                <br />
                <span className="text-white">Betaalbare Computerhulp</span>
              </h1>

              <p className="text-xl text-neural-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Computerproblemen in Den Haag? Onze IT-studenten komen naar je toe! Betaalbare hulp door lokale studenten. Van Scheveningen tot Wassenaar -
                <span className="text-primary-300 font-semibold"> snel, vakkundig en betaalbaar!</span>
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
                Hoe Werkt Student Aan Huis in Den Haag?
              </h2>
              <p className="text-xl text-neural-300">
                Snel, lokaal en betaalbaar - vakkundige hulp in Den Haag
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
                Waarom kiezen voor onze Student Aan Huis in Den Haag?
              </h2>
              <p className="text-xl text-neural-300 max-w-3xl mx-auto">
                Ontdek de voordelen van computerhulp door ervaren IT-studenten in Den Haag
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Betaalbare Tarieven Den Haag</h3>
                <p className="text-neural-300 leading-relaxed">
                  Vanaf €13,99 per kwartier in Den Haag - veel goedkoper dan traditionele computerhulp. Perfecte kwaliteit tegen studententarieven.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lokale IT-Studenten</h3>
                <p className="text-neural-300 leading-relaxed">
                  Onze studenten in Den Haag zijn opgeleid in de nieuwste technologieën en kennen de stad goed. Snel ter plaatse in alle wijken.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Flexibele Tijden</h3>
                <p className="text-neural-300 leading-relaxed">
                  Ook 's avonds en in weekenden beschikbaar in Den Haag. Studenten hebben flexibele schema's en kunnen snel schakelen.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Heel Den Haag & Omgeving</h3>
                <p className="text-neural-300 leading-relaxed">
                  Van Centrum tot Scheveningen, van Bezuidenhout tot Wassenaar - onze studenten komen overal in Den Haag en omgeving.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Snelle Beschikbaarheid</h3>
                <p className="text-neural-300 leading-relaxed">
                  Vaak nog dezelfde dag beschikbaar in Den Haag. Korte reistijd door lokale studenten betekent snelle hulp bij jou thuis.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Moderne Kennis</h3>
                <p className="text-neural-300 leading-relaxed">
                  Studenten zijn vertrouwd met de nieuwste software en technologieën. Ideaal voor moderne computerproblemen en innovaties.
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
                Onze Student IT Diensten in Den Haag
              </h2>
              <p className="text-xl text-neural-300">
                Uitgebreide computerhulp door vakkundige IT-studenten in Den Haag en omgeving
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">🖥️ Computer & Laptop Hulp Den Haag</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Laptop en Computer Reparatie</h4>
                  <ul className="text-neural-300 space-y-2">
                    <li>• Computer start niet op - volledige diagnose en reparatie</li>
                    <li>• Laptop scherm vervangen en touchscreen reparaties</li>
                    <li>• Toetsenbord, touchpad en muis problemen oplossen</li>
                    <li>• Hardware upgrades: RAM geheugen, SSD en harde schijf</li>
                    <li>• Ventilator reiniging en koeling bij oververhitting</li>
                    <li>• Virus verwijdering en prestatie optimalisatie</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Software Installatie & Updates</h4>
                  <ul className="text-neural-300 space-y-2">
                    <li>• Windows 10/11 installatie en systeem updates</li>
                    <li>• Microsoft Office pakket installatie en configuratie</li>
                    <li>• Antivirus software installeren en optimaliseren</li>
                    <li>• Browser installatie en persoonlijke data overzetten</li>
                    <li>• Printer drivers installeren en netwerk verbinding</li>
                    <li>• Backup systeem opzetten voor veilige data opslag</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">🌐 Internet & Netwerk Den Haag</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">WiFi & Internet Problemen</h4>
                  <ul className="text-neural-300 space-y-2">
                    <li>• WiFi verbinding problemen diagnosticeren en oplossen</li>
                    <li>• Router installatie, configuratie en optimalisatie</li>
                    <li>• Langzame internet snelheid analyseren en verbeteren</li>
                    <li>• Netwerk printer verbinding en delen tussen apparaten</li>
                    <li>• Smart TV, tablet en telefoon internet verbinding</li>
                    <li>• Beveiligde thuisnetwerk opzetten met wachtwoordbeveiliging</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Smartphone & Tablet Hulp</h4>
                  <ul className="text-neural-300 space-y-2">
                    <li>• iPhone en Android telefoon volledige installatie</li>
                    <li>• Apps downloaden, organiseren en accounts koppelen</li>
                    <li>• Contacten, foto's en documenten synchroniseren</li>
                    <li>• iPad en Android tablet optimaal configureren</li>
                    <li>• Privacy instellingen en beveiliging optimaliseren</li>
                    <li>• E-mail accounts instellen en sociale media koppelen</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="glass-effect rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-white mb-4">🏛️ Speciaal voor Den Haag Bewoners</h3>
                <p className="text-neural-300 leading-relaxed mb-6">
                  Als regeringsstad heeft Den Haag unieke IT-behoeften. Onze studenten begrijpen de specifieke vereisten van
                  overheidswerknemers, internationale organisaties en diplomaten. We bieden discrete, professionele service
                  aangepast aan de Haagse context, van het Binnenhof tot Scheveningen.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-white mb-2">• Diplomatiek Kwartier Service</h4>
                    <p className="text-neural-300 text-sm">Speciale service voor internationale bewoners</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">• Overheids IT-ondersteuning</h4>
                    <p className="text-neural-300 text-sm">Ervaring met overheids-specifieke software</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">• Scheveningen tot Wassenaar</h4>
                    <p className="text-neural-300 text-sm">Volledige dekking van de Haagse regio</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">• Meertalige Ondersteuning</h4>
                    <p className="text-neural-300 text-sm">Service in Nederlands, Engels en andere talen</p>
                  </div>
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
                Veelgestelde Vragen Student Aan Huis Den Haag
              </h2>
              <p className="text-xl text-neural-300">
                Antwoorden op de meest gestelde vragen over onze student IT service in Den Haag
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

        {/* Den Haag Areas Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Werkgebied Den Haag & Omgeving
              </h2>
              <p className="text-xl text-neural-300">
                Onze IT-studenten komen naar alle wijken in en rondom Den Haag
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {denHaagAreas.map((area, index) => (
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
              <Link href="/regios/den-haag" className="btn-secondary">
                <MapPin className="w-5 h-5 mr-2" />
                Meer Info Den Haag
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Klaar voor Betaalbare Computerhulp in Den Haag?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Onze ervaren IT-studenten in Den Haag staan klaar om je te helpen. Van Scheveningen tot Wassenaar - snel, betaalbaar en vakkundig!
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