'use client'

import { ServicesGrid } from '@/components/services/ServicesGrid'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { PricingSection } from '@/components/home/PricingSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
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

const CITY = 'Baarn'
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

const serviceAreas = [
  'Baarn Centrum',
  'Baarn Noord',
  'Lage Vuursche',
  'Soest',
  'Soestdijk',
  'Hilversum',
  'Eemnes',
  'Laren',
  'Amersfoort',
  'Bunschoten',
  'Blaricum',
  'Maartensdijk'
]

const faqData = [
  {
    question: `Wat kost ICT student aan huis hulp in ${CITY}?`,
    answer: `Onze tarieven in ${CITY} zijn zeer betaalbaar: €14,50 per kwartier met slechts €10 voorrijkosten. Een gemiddeld bezoek van 45 minuten kost dus €53,50. Dit is veel voordeliger dan traditionele computerhulp services. Je betaalt alleen voor de daadwerkelijk bestede tijd.`
  },
  {
    question: `Zijn jullie studenten wel gekwalificeerd in ${CITY}?`,
    answer: `Ja, onze studenten in ${CITY} volgen IT-opleidingen aan ${LOCAL_INSTITUTION} en hebben praktijkervaring. Ze zijn vertrouwd met moderne technologie en worden geselecteerd op hun technische vaardigheden en communicatieve vaardigheden.`
  },
  {
    question: `Kunnen jullie ook 's avonds en weekenden komen in ${CITY}?`,
    answer: `Ja, dat is een van onze grote voordelen! Onze studenten in ${CITY} hebben flexibele schema's en kunnen vaak ook 's avonds en in weekenden. We zijn bereikbaar van 08:00 tot 22:00, 7 dagen per week.`
  },
  {
    question: `Hoe snel kunnen jullie komen in ${CITY}?`,
    answer: `In ${CITY} kunnen we vaak nog dezelfde dag langskomen, vooral 's avonds en in weekenden. Voor urgente problemen proberen we binnen 2-4 uur beschikbaar te zijn.`
  },
  {
    question: `Welke gebieden in ${CITY} bedienen jullie?`,
    answer: `We bedienen heel ${CITY} en omgeving: ${serviceAreas.join(', ')}. Staat jouw wijk er niet bij? Neem contact op, we komen waarschijnlijk ook bij jou!`
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

export default function StudentAanHuisBaarnPage() {
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
                "name": `ICT Student aan huis ${CITY}`,
                "item": `https://hulpmetit.nl/student-aan-huis-${CITY.toLowerCase()}`
              }
            ]
          })
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Hulp met IT - ICT Student aan Huis ${CITY}`,
            "description": `Betaalbare computerhulp in ${CITY} door ervaren IT-studenten van ${LOCAL_INSTITUTION}`,
            "url": `https://hulpmetit.nl/student-aan-huis-${CITY.toLowerCase()}`,
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": CITY,
              "addressRegion": "Utrecht",
              "addressCountry": "NL"
            },
            "areaServed": serviceAreas.map(area => ({
              "@type": "Place",
              "name": area
            })),
            "serviceType": "Computerhulp aan huis",
            "priceRange": "€14,50/kwartier + €10 voorrijkosten",
            "openingHours": "Mo-Su 08:00-22:00"
          })
        }}
      />

      {/* FAQ Schema */}
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
              <span className="text-gray-700 font-medium">ICT Student aan huis {CITY}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
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
              <span className="text-white drop-shadow-lg">ICT Student aan Huis {CITY}</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-6 leading-relaxed">
              Heeft u vragen of problemen met uw computer, tablet, smartphone of een ander apparaat? Onze IT-studenten van <span className="font-semibold">{LOCAL_INSTITUTION}</span> komen bij u thuis in <span className="font-semibold">{CITY} en omgeving</span>. U krijgt rustige, geduldige hulp zodat u alles goed begrijpt. Onze studenten zijn betrouwbaar en zorgvuldig, zodat u met een gerust hart hulp aan huis krijgt.
            </p>

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
          title="Wat Wij Voor U Kunnen Doen"
          maxItems={6}
        />

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Process Section */}
        <section className="section-spacing bg-white/5">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Hoe Werkt ICT Student aan Huis in {CITY}?
              </h2>
              <p className="text-xl text-secondary-700">
                Snel, lokaal en betaalbaar - vakkundige hulp in {CITY}
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
                Waarom kiezen voor ICT Student aan Huis in {CITY}?
              </h2>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
                Ontdek de voordelen van computerhulp door ervaren IT-studenten van {LOCAL_INSTITUTION}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Betaalbare Tarieven</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Slechts €14,50 per kwartier met €10 voorrijkosten in {CITY}. Veel goedkoper dan traditionele computerhulp. Perfecte kwaliteit tegen studententarieven.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Studenten van {LOCAL_INSTITUTION}</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Onze studenten zijn opgeleid aan {LOCAL_INSTITUTION} en kennen de nieuwste technologieen. Snel ter plaatse in {CITY}.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Flexibele Tijden</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Ook 's avonds en in weekenden beschikbaar in {CITY}. Studenten hebben flexibele schema's.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Heel {CITY} & Omgeving</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Van Baarn Centrum tot Lage Vuursche, van Soestdijk tot Hilversum - onze studenten komen overal in {CITY} en omgeving.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Snelle Beschikbaarheid</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Vaak nog dezelfde dag beschikbaar in {CITY}. Korte reistijd betekent snelle hulp.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Moderne Kennis</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Studenten zijn vertrouwd met de nieuwste software en technologieen. Ideaal voor moderne computerproblemen.
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
                Onze IT Diensten in {CITY}
              </h2>
              <p className="text-xl text-secondary-700">
                Uitgebreide computerhulp door vakkundige IT-studenten in {CITY}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">Computer & Laptop Hulp {CITY}</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Laptop en Computer Reparatie</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>- Computer start niet op - diagnose en reparatie</li>
                    <li>- Laptop scherm vervangen of repareren</li>
                    <li>- Toetsenbord en touchpad problemen</li>
                    <li>- Hardware upgrades (RAM, SSD, harde schijf)</li>
                    <li>- Ventilator reiniging bij oververhitting</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
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

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">WiFi & Internet Problemen</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>- WiFi verbinding problemen oplossen</li>
                    <li>- Router instellen en configureren</li>
                    <li>- Langzame internet snelheid verbeteren</li>
                    <li>- Netwerk printer verbinding maken</li>
                    <li>- Smart TV internet verbinding</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
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
        <section className="section-spacing bg-neural-900/50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Veelgestelde Vragen - ICT Student aan Huis {CITY}
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

        {/* Service Areas Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Werkgebied {CITY} & Omgeving
              </h2>
              <p className="text-xl text-secondary-700">
                Onze IT-studenten komen naar alle gebieden in en rondom {CITY}
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6">
              Klaar voor Betaalbare Computerhulp in {CITY}?
            </h2>
            <p className="text-xl text-primary-700 mb-8 max-w-2xl mx-auto">
              Onze ervaren IT-studenten van {LOCAL_INSTITUTION} in {CITY} staan klaar om je te helpen. Snel, betaalbaar en vakkundig!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/afspraak" className="btn-cta shadow-2xl hover:shadow-3xl transition-shadow">
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
