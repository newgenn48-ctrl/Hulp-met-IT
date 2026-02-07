'use client'

import { ServicesGrid } from '@/components/services/ServicesGrid'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { PricingSection } from '@/components/home/PricingSection'
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

const CITY = 'Huizen'
const LOCAL_INSTITUTION = 'Hogeschool Utrecht'

const benefits = [
  { icon: Users, text: 'Persoonlijke hulp aan huis' },
  { icon: MessageCircle, text: 'Begrijpelijke uitleg, zonder vakjargon' },
  { icon: CheckCircle, text: 'Betaalbaar en betrouwbaar' }
]

const processSteps = [
  {
    step: '1',
    title: 'Plan Afspraak',
    description: `Bel of plan online - binnen ${CITY} snel beschikbaar`
  },
  {
    step: '2',
    title: 'Student Komt Langs',
    description: `IT-student komt naar je adres in ${CITY}`
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Vakkundige hulp tegen studententarief + uitleg'
  }
]

const cityAreas = [
  'Huizen Centrum', 'Huizen Zuid', 'Huizen Oost', 'Bussum',
  'Naarden', 'Blaricum', 'Laren', 'Hilversum',
  'Almere', 'Bussumerheide', 'Gooimeer', 'Eemnes'
]

const faqData = [
  {
    question: `Wat kost computerhulp aan huis in ${CITY}?`,
    answer: `Onze tarieven in ${CITY} beginnen €14,50 per kwartier (€10 voorrijkosten + 3 x €14,50). Dit is veel voordeliger dan traditionele computerhulp. Je betaalt alleen voor de daadwerkelijk bestede tijd.`
  },
  {
    question: `Zijn jullie studenten wel gekwalificeerd voor hulp in ${CITY}?`,
    answer: `Ja, onze studenten volgen IT-opleidingen aan ${LOCAL_INSTITUTION} en hebben praktijkervaring. Ze zijn vertrouwd met moderne technologie en worden geselecteerd op hun technische en communicatieve vaardigheden.`
  },
  {
    question: `Kunnen jullie ook 's avonds en weekenden komen in ${CITY}?`,
    answer: `Ja, dat is een van onze grote voordelen! Onze studenten hebben flexibele schema's en kunnen vaak ook 's avonds en in weekenden langskomen. We zijn bereikbaar van 08:00 tot 21:00, 7 dagen per week.`
  },
  {
    question: `Hoe snel kunnen jullie in ${CITY} komen?`,
    answer: `In ${CITY} en omgeving kunnen we vaak nog dezelfde dag langskomen, vooral 's avonds en in weekenden. Voor urgente problemen proberen we binnen 2-4 uur beschikbaar te zijn.`
  },
  {
    question: `Welke plaatsen in de buurt van ${CITY} bedienen jullie?`,
    answer: `We bedienen ${CITY} en alle omliggende plaatsen in het Gooi, waaronder Bussum, Naarden, Blaricum, Laren, Hilversum, Almere en Eemnes.`
  }
]

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-white rounded-lg border border-secondary-100 overflow-hidden">
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

export default function StudentAanHuisHuizenLanding() {
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
                "name": `Computerhulp ${CITY}`,
                "item": `https://hulpmetit.nl/student-aan-huis-${CITY.toLowerCase()}`
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
            "name": `Hulp met IT - Computerhulp ${CITY}`,
            "description": `Betaalbare computerhulp in ${CITY} door ervaren IT-studenten van ${LOCAL_INSTITUTION}`,
            "url": `https://hulpmetit.nl/student-aan-huis-${CITY.toLowerCase()}`,
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": CITY,
              "addressRegion": "Noord-Holland",
              "addressCountry": "NL"
            },
            "areaServed": [
              { "@type": "City", "name": CITY },
              { "@type": "City", "name": "Bussum" },
              { "@type": "City", "name": "Naarden" },
              { "@type": "City", "name": "Blaricum" },
              { "@type": "City", "name": "Laren" },
              { "@type": "City", "name": "Hilversum" }
            ],
            "serviceType": "Computerhulp aan huis",
            "priceRange": "€14,50 per kwartier - €65,50",
            "openingHours": "Mo-Su 08:00-22:00"
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
              <span className="text-gray-700 font-medium">Computerhulp {CITY}</span>
            </li>
          </ol>
        </div>
      </nav>


      <section className="relative flex items-start justify-center overflow-hidden min-h-[600px] lg:min-h-[700px] pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/student-aan-huis/student-aan-huis.webp)',
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-primary-800/40 to-accent-900/30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto container-padding text-center flex items-center min-h-[600px] lg:min-h-[700px]">
          <div className="w-full">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Computerhulp aan Huis {CITY}</span>
          </h1>

          <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-6 leading-relaxed">
            Heeft u vragen of problemen met uw computer, laptop, tablet of smartphone? Onze IT-studenten van {LOCAL_INSTITUTION} komen bij u thuis in <span className="font-semibold">{CITY} en het Gooi</span>. U krijgt rustige, geduldige hulp zodat u alles goed begrijpt. Betrouwbaar en betaalbaar.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-lg text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <IconComponent className="w-5 h-5 text-primary-600" />
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
          title="Wat Wij Voor U Kunnen Doen"
          maxItems={6}
        />

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonials Section */}        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-white/5">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-4">
                Hoe Werkt Computerhulp aan Huis in {CITY}?
              </h2>
              <p className="text-xl text-secondary-700">
                Snel, lokaal en betaalbaar - vakkundige hulp in {CITY} en omgeving
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
        </section>

        {/* Services Section */}
        <ServicesPreview />

        {/* Why Choose Student Section */}
        <section className="py-16 lg:py-24 bg-secondary-50">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-4">
                Waarom Kiezen voor Computerhulp in {CITY}?
              </h2>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
                Ontdek de voordelen van computerhulp door IT-studenten van {LOCAL_INSTITUTION}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Euro className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Betaalbare Tarieven</h3>
                <p className="text-secondary-700 leading-relaxed">
                  €14,50 per kwartier in {CITY} - veel goedkoper dan traditionele computerhulp. Perfecte kwaliteit tegen studententarieven.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Studenten van {LOCAL_INSTITUTION}</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Onze IT-studenten zijn opgeleid in de nieuwste technologieen en kennen het Gooi goed. Snel ter plaatse in {CITY}.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Flexibele Tijden</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Ook 's avonds en in weekenden beschikbaar in {CITY}. Studenten hebben flexibele schema's.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Heel het Gooi</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Van {CITY} tot Bussum, van Naarden tot Hilversum - onze studenten komen overal in de regio.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Snelle Beschikbaarheid</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Vaak nog dezelfde dag beschikbaar in {CITY}. Korte reistijd betekent snelle hulp.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-secondary-100 p-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Actuele Kennis</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Studenten zijn vertrouwd met de nieuwste software en technologieen. Ideaal voor moderne computerproblemen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-4">
                Onze IT Diensten in {CITY}
              </h2>
              <p className="text-xl text-secondary-700">
                Uitgebreide computerhulp door vakkundige IT-studenten in {CITY} en omgeving
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">Computer & Laptop Hulp {CITY}</h3>

                <div className="bg-white rounded-lg border border-secondary-100 p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Laptop en Computer Reparatie</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>- Computer start niet op - diagnose en reparatie</li>
                    <li>- Laptop scherm vervangen of repareren</li>
                    <li>- Toetsenbord en touchpad problemen</li>
                    <li>- Hardware upgrades (RAM, SSD, harde schijf)</li>
                    <li>- Ventilator reiniging bij oververhitting</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-secondary-100 p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Software Installatie & Updates</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>- Windows installatie en updates</li>
                    <li>- Microsoft Office installatie en configuratie</li>
                    <li>- Antivirus software installeren</li>
                    <li>- Browser installatie en bookmarks overzetten</li>
                    <li>- Printer drivers en software installeren</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">Internet & Netwerk {CITY}</h3>

                <div className="bg-white rounded-lg border border-secondary-100 p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">WiFi & Internet Problemen</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>- WiFi verbinding problemen oplossen</li>
                    <li>- Router instellen en configureren</li>
                    <li>- Langzame internet snelheid verbeteren</li>
                    <li>- Netwerk printer verbinding maken</li>
                    <li>- Smart TV internet verbinding</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-secondary-100 p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Smartphone & Tablet Hulp</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>- iPhone en Android telefoon instellen</li>
                    <li>- Apps downloaden en organiseren</li>
                    <li>- Contacten en foto's synchroniseren</li>
                    <li>- Tablet koppelen aan WiFi en accounts</li>
                    <li>- Privacy instellingen optimaliseren</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-4">
                Veelgestelde Vragen over Computerhulp in {CITY}
              </h2>
              <p className="text-xl text-secondary-700">
                Antwoorden op de meest gestelde vragen over onze IT service in {CITY}
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

        {/* Areas Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-4">
                Werkgebied {CITY} & het Gooi
              </h2>
              <p className="text-xl text-secondary-700">
                Onze IT-studenten komen naar alle plaatsen in en rondom {CITY}
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {cityAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg border border-secondary-100 p-4 text-center">
                  <MapPin className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <span className="text-secondary-700 text-base font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-secondary-700 text-lg mb-6">
                Niet in de lijst? <strong className="text-secondary-800">Bel ons</strong> - wij komen waarschijnlijk ook bij u!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-6">
              Klaar voor Betaalbare Computerhulp in {CITY}?
            </h2>
            <p className="text-xl text-primary-700 mb-8 max-w-2xl mx-auto">
              Onze IT-studenten van {LOCAL_INSTITUTION} staan klaar om u te helpen. Snel, betaalbaar en vakkundig!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/afspraak" className="btn-cta shadow-2xl hover:shadow-3xl transition-shadow">
                <Calendar className="w-6 h-6 mr-3" />
                Plan Nu Uw Afspraak
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
