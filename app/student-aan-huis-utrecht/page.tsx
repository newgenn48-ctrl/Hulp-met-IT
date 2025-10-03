'use client'

import { ServicesGrid } from '@/components/services/ServicesGrid'
import { FloatingDevices } from '@/components/three/FloatingDevices'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { PricingSection } from '@/components/home/PricingSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { TrustSignals } from '@/components/home/TrustSignals'
import { Windows11UrgentSection } from '@/components/home/Windows11UrgentSection'
import Link from 'next/link'
import { useState } from 'react'
import {
  Phone,
  Calendar,
  Users,
  MessageCircle,
  CheckCircle,
  GraduationCap,
  Zap,
  Euro,
  MapPin,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const benefits = [
  { icon: Users, text: 'Persoonlijke hulp aan huis' },
  { icon: MessageCircle, text: 'Begrijpelijke uitleg, zonder vakjargon' },
  { icon: CheckCircle, text: 'Betaalbaar en betrouwbaar' }
]

const processSteps = [
  {
    step: '1',
    title: 'Plan Afspraak',
    description: 'Bel of plan online - binnen Utrecht snel beschikbaar'
  },
  {
    step: '2',
    title: 'Student Komt Langs',
    description: 'IT-student komt naar je adres in Utrecht'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Vakkundige hulp tegen studententarief + uitleg'
  }
]

const utrechtAreas = [
  'Utrecht Centrum', 'Utrecht Noord', 'Utrecht Zuid', 'Utrecht Oost',
  'Utrecht West', 'Nieuwegein', 'Zeist', 'Houten',
  'Bunnik', 'De Bilt', 'Maarssen', 'Vleuten'
]

const faqData = [
  {
    question: "Wat kost student aan huis hulp in Utrecht?",
    answer: "Onze tarieven beginnen vanaf €53,50 voor 3 kwartier in Utrecht. Dit is veel voordeliger dan traditionele computerhulp services. Je betaalt alleen voor de daadwerkelijk bestede tijd, geen voorrijkosten of minimumtarief."
  },
  {
    question: "Zijn jullie studenten wel gekwalificeerd in Utrecht?",
    answer: "Ja, onze studenten in Utrecht volgen IT-opleidingen aan de Hogeschool Utrecht en andere instellingen. Ze hebben praktijkervaring en worden geselecteerd op hun technische vaardigheden en communicatieve vaardigheden."
  },
  {
    question: "Kunnen jullie ook 's avonds en weekenden komen in Utrecht?",
    answer: "Ja, dat is een van onze grote voordelen! Onze studenten in Utrecht hebben flexibele schema's en kunnen vaak ook 's avonds en in weekenden. We zijn bereikbaar van 08:00 tot 22:00, 7 dagen per week."
  },
  {
    question: "Hoe snel kunnen jullie komen in Utrecht?",
    answer: "In Utrecht kunnen we vaak nog dezelfde dag langskomen, vooral 's avonds en in weekenden. Voor urgent problemen proberen we binnen 2-4 uur beschikbaar te zijn."
  },
  {
    question: "Welke wijken in Utrecht bedienen jullie?",
    answer: "We bedienen alle wijken van Utrecht: Centrum, Noord, Zuid, Oost, West, plus omliggende gemeenten zoals Nieuwegein, Zeist, Houten, De Bilt en Bunnik."
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
        type="button"
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <h3 className="text-xl font-semibold text-secondary-800 pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-primary-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-primary-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-secondary-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function StudentAanHuisUtrechtLanding() {
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
            "name": "Hulp met IT - Student Aan Huis Utrecht",
            "description": "Betaalbare computerhulp in Utrecht door ervaren IT-studenten van de Hogeschool Utrecht",
            "url": "https://hulpmetit.nl/student-aan-huis-utrecht",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Utrecht",
              "addressRegion": "Utrecht",
              "addressCountry": "NL"
            },
            "areaServed": { "@type": "City", "name": "Utrecht" },
            "serviceType": "Student aan huis Utrecht",
            "priceRange": "€53,50 - €65,50",
            "openingHours": "Mo-Su 08:00-22:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Lisa van der Berg"
                },
                "reviewBody": "Snelle en vakkundige hulp van een vriendelijke student uit Utrecht. Mijn laptop werkt weer perfect!"
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Jan Vermeulen"
                },
                "reviewBody": "Betaalbaar en efficiënt. De student kwam snel langs in Utrecht Centrum en loste alles op."
              }
            ],
            "offers": [
              {
                "@type": "Offer",
                "name": "Student Computerhulp Basis",
                "price": "53.50",
                "priceCurrency": "EUR",
                "description": "Basiscomputerhulp door IT-student"
              },
              {
                "@type": "Offer",
                "name": "Student Computerhulp Premium",
                "price": "18.50",
                "priceCurrency": "EUR",
                "description": "Uitgebreide computerhulp en installaties"
              }
            ]
          })
        }}
      />

      <section className="hero-section relative flex items-start justify-center overflow-hidden">
        <FloatingDevices />

        <div className="relative z-10 max-w-6xl mx-auto container-padding text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Student aan Huis Utrecht</span>
          </h1>

          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto mb-6 leading-relaxed">
            Heeft u vragen of problemen met uw computer, tablet, smartphone of een ander apparaat? Onze IT-studenten komen bij u thuis in <span className="text-primary-700 font-semibold">Utrecht en omgeving</span>. U krijgt rustige, geduldige hulp zodat u alles goed begrijpt. Onze studenten zijn betrouwbaar en zorgvuldig, zodat u met een gerust hart hulp aan huis krijgt.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-lg text-primary-700"
                >
                  <IconComponent className="w-6 h-6 text-primary-700" />
                  <span>{benefit.text}</span>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Link href="/afspraak" className="btn-cta">
              <Calendar className="w-6 h-6 mr-3" />
              Afspraak Maken
            </Link>

            <a href="tel:+31642827860" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Bel Nu
            </a>
          </div>
        </div>
      </section>

      <div className="relative">

        <TrustSignals />

        <ServicesGrid
          title="Wat Wij Voor U Kunnen Doen"
          maxItems={6}
        />

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Windows 11 Urgent Section */}
        <Windows11UrgentSection />

        {/* Process Section */}
        <section className="section-spacing bg-white/5">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Hoe Werkt Student Aan Huis in Utrecht?
              </h2>
              <p className="text-xl text-secondary-700">
                Snel, lokaal en betaalbaar - vakkundige hulp in Utrecht door HU-studenten
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
        </section>

        {/* Services Section */}
        <ServicesPreview />

        {/* Why Choose Student Section */}
        <section className="section-spacing bg-neural-900/30">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Waarom Kiezen Voor Student Aan Huis Utrecht?
              </h2>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
                Ontdek de voordelen van computerhulp door ervaren IT-studenten uit Utrecht
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Betaalbare Tarieven Utrecht</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Vanaf €53,50 voor 3 kwartier in Utrecht - veel goedkoper dan traditionele computerhulp. Perfecte kwaliteit tegen studententarieven zonder voorrijkosten.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Lokale HU-Studenten</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Onze studenten uit Utrecht volgen IT-opleidingen aan de Hogeschool Utrecht en zijn opgeleid in de nieuwste technologieën. Snel ter plaatse in heel Utrecht.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Flexibele Tijden</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Ook 's avonds en in weekenden beschikbaar in Utrecht. Studenten hebben flexibele schema's en kunnen vaak nog dezelfde dag langskomen.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Heel Utrecht</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Van Centrum tot Noord, van Oost tot West - onze studenten komen overal in Utrecht en omgeving zoals Nieuwegein, Zeist en Houten.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Snelle Beschikbaarheid</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Vaak nog dezelfde dag beschikbaar in Utrecht. Korte reistijd binnen de stad betekent snelle hulp bij urgent computerproblemen.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Moderne Kennis</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Studenten zijn vertrouwd met de nieuwste software en technologieën. Ideaal voor moderne computerproblemen en de laatste Windows updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Onze Student IT Diensten in Utrecht
              </h2>
              <p className="text-xl text-secondary-700">
                Uitgebreide computerhulp door vakkundige IT-studenten in Utrecht en omgeving
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">🖥️ Computer & Laptop Hulp Utrecht</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Laptop en Computer Reparatie</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Computer start niet op - diagnose en reparatie</li>
                    <li>• Laptop scherm vervangen of repareren</li>
                    <li>• Toetsenbord en touchpad problemen</li>
                    <li>• Hardware upgrades (RAM, SSD, harde schijf)</li>
                    <li>• Ventilator reiniging bij oververhitting</li>
                    <li>• Batterij problemen en vervanging</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Software Installatie & Updates</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Windows 11 installatie en updates</li>
                    <li>• Microsoft Office 365 installatie en configuratie</li>
                    <li>• Antivirus software installeren en instellen</li>
                    <li>• Browser installatie en bookmarks overzetten</li>
                    <li>• Printer drivers en software installeren</li>
                    <li>• Backup software configuratie</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">🌐 Internet & Netwerk Utrecht</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">WiFi & Internet Problemen</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• WiFi verbinding problemen oplossen</li>
                    <li>• Router instellen en configureren (Ziggo, KPN)</li>
                    <li>• Langzame internet snelheid verbeteren</li>
                    <li>• Netwerk printer verbinding maken</li>
                    <li>• Smart TV internet verbinding</li>
                    <li>• Thuisnetwerk beveiligen</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Smartphone & Tablet Hulp</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• iPhone en Android telefoon instellen</li>
                    <li>• Apps downloaden en organiseren</li>
                    <li>• Contacten en foto's synchroniseren</li>
                    <li>• iPad en Android tablet koppelen</li>
                    <li>• Privacy instellingen optimaliseren</li>
                    <li>• WhatsApp en social media apps installeren</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="glass-effect rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">🏢 Speciaal voor Utrecht Bewoners</h3>
                <p className="text-secondary-700 leading-relaxed mb-6">
                  Als universitaire stad heeft Utrecht unieke IT-behoeften. Onze studenten van de Hogeschool Utrecht begrijpen de specifieke vereisten van
                  studenten, onderzoekers en professionals in de kenniseconomie. We bieden discrete, professionele service
                  aangepast aan de Utrechtse context, van de binnenstad tot Science Park.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-2">• Science Park Service</h4>
                    <p className="text-secondary-700 text-sm">Speciale service voor universitaire omgeving</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-2">• Student IT-ondersteuning</h4>
                    <p className="text-secondary-700 text-sm">Ervaring met onderwijsspecifieke software</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-2">• Centrum tot Nieuwegein</h4>
                    <p className="text-secondary-700 text-sm">Volledige dekking van de Utrechtse regio</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-2">• Flexibele Studentenservice</h4>
                    <p className="text-secondary-700 text-sm">Ook 's avonds en weekenden beschikbaar</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Veelgestelde Vragen Student Aan Huis Utrecht
              </h2>
              <p className="text-xl text-secondary-700">
                Antwoorden op de meest gestelde vragen over onze student IT service in Utrecht
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

        {/* Utrecht Areas Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Werkgebied Utrecht & Omgeving
              </h2>
              <p className="text-xl text-secondary-700">
                Onze IT-studenten komen naar alle wijken in en rondom Utrecht
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {utrechtAreas.map((area, index) => (
                <div key={index} className="glass-effect rounded-lg p-4 text-center">
                  <MapPin className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <span className="text-secondary-700 text-base font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-secondary-700 text-lg mb-6">
                Niet in de lijst? <strong className="text-secondary-800">Bel ons</strong> - wij komen waarschijnlijk ook bij jou!
              </p>
              <Link href="/regios/utrecht" className="btn-secondary">
                <MapPin className="w-5 h-5 mr-2" />
                Meer Info Utrecht
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6">
              Klaar voor Betaalbare Computerhulp in Utrecht?
            </h2>
            <p className="text-xl text-primary-700 mb-8 max-w-2xl mx-auto">
              Onze ervaren IT-studenten in Utrecht staan klaar om je te helpen. Snel, betaalbaar en vakkundig - van Centrum tot Nieuwegein!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/afspraak" className="btn-cta">
                <Calendar className="w-6 h-6 mr-3" />
                Plan Nu Je Afspraak
              </Link>
              <Link href="tel:+31642827860" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                Bel Direct
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}