'use client'

import { FloatingDevices } from '@/components/three/FloatingDevices'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { ServicesGrid } from '@/components/services/ServicesGrid'
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
    description: 'Bel of plan online - ook \'s avonds en in weekenden mogelijk'
  },
  {
    step: '2', 
    title: 'Student Komt Langs',
    description: 'Ervaren IT-student komt snel naar je toe met alle benodigde tools'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Vakkundige hulp tegen studententarief + uitleg hoe het werkt'
  }
]

const faqData = [
  {
    question: "Wat kost student aan huis hulp?",
    answer: "Onze tarieven zijn €53,50 voor 3 kwartier plus €10 eenmalige voorrijkosten. Dit is veel voordeliger dan traditionele computerhulp services. Minimum 3 kwartier (€53,50 totaal)."
  },
  {
    question: "Zijn jullie studenten wel gekwalificeerd?",
    answer: "Ja, onze studenten volgen IT-opleidingen en hebben praktijkervaring. Ze zijn vertrouwd met moderne technologie en worden geselecteerd op hun technische vaardigheden en communicatieve vaardigheden. Alle studenten zijn gescreend en getraind."
  },
  {
    question: "Kunnen jullie ook 's avonds en weekenden komen?",
    answer: "Ja, dat is een van onze grote voordelen! Studenten hebben flexibele schema's en kunnen vaak ook 's avonds en in weekenden. We zijn bereikbaar van 08:00 tot 22:00, 7 dagen per week."
  },
  {
    question: "Wat als het probleem niet opgelost kan worden?",
    answer: "We zijn eerlijk over wat wel en niet mogelijk is. Als een probleem te complex is, verwijzen we door naar specialisten. Je betaalt alleen voor de tijd die besteed is aan diagnose en advies."
  },
  {
    question: "Welke gebieden bedienen jullie?",
    answer: "We hebben studenten beschikbaar in alle grote steden van Nederland: Amsterdam, Rotterdam, Utrecht, Den Haag, Eindhoven, Groningen, Tilburg en omliggende gebieden. Bekijk onze locatiepagina's voor specifieke beschikbaarheid."
  },
  {
    question: "Hoe snel kunnen jullie komen?",
    answer: "Vaak kunnen we nog dezelfde dag langskomen, vooral 's avonds en in weekenden. Voor urgent problemen proberen we binnen 2-4 uur beschikbaar te zijn, afhankelijk van de locatie en beschikbaarheid."
  },
  {
    question: "Nemen studenten hun eigen gereedschap mee?",
    answer: "Ja, onze studenten komen volledig uitgerust. Ze brengen laptops, kabels, tools en software mee die nodig zijn voor de meeste reparaties en installaties. Voor specifieke hardware onderdelen overleggen we vooraf."
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

export default function StudentAanHuisLanding() {
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
                "name": "Student aan huis",
                "item": "https://hulpmetit.nl/student-aan-huis"
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
            "@type": ["LocalBusiness", "Service"],
            "name": "Hulp met IT - Student Aan Huis",
            "description": "Betaalbare computerhulp door ervaren IT-studenten aan huis in heel Nederland",
            "url": "https://hulpmetit.nl/student-aan-huis",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "areaServed": {
              "@type": "Country",
              "name": "Nederland"
            },
            "serviceType": "Student aan huis Nederland",
            "priceRange": "€53,50-€100",
            "openingHours": "Mo-Su 08:00-22:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "53.50",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "53.50",
                "priceCurrency": "EUR",
                "unitText": "per kwartier"
              },
              "availability": "https://schema.org/InStock"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Student IT Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Laptop reparatie"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Computer problemen oplossen"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Software installatie"
                  }
                }
              ]
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
              <span className="text-gray-700 font-medium">Student aan huis</span>
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
              <span className="text-white drop-shadow-lg">Student aan Huis</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-8 leading-relaxed drop-shadow-md">
              Heeft u vragen of problemen met uw computer, tablet, smartphone of een ander apparaat? Onze IT-studenten komen bij u thuis. U krijgt rustige, geduldige hulp zodat u alles goed begrijpt. Onze studenten zijn betrouwbaar en zorgvuldig, zodat u met een gerust hart hulp aan huis krijgt.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
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

        {/* 1. DIENSTEN - Eerste vraag: "Wat doen jullie?" */}
        <ServicesGrid
          title="Wat Wij Voor U Kunnen Doen"
          maxItems={6}
        />

        {/* 2. PRIJZEN - Tweede vraag: "Wat kost het?" */}
        <PricingSection />

        {/* 3. WAAROM STUDENT - Derde vraag: "Waarom een student?" */}
        <section className="section-spacing bg-neural-900/30">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Waarom Kiezen Voor Student Aan Huis?
              </h2>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
                Ontdek de voordelen van computerhulp door ervaren IT-studenten
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Betaalbare Tarieven</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Vanaf €53,50 voor 3 kwartier - veel goedkoper dan traditionele computerhulp. Perfecte kwaliteit tegen studententarieven.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Ervaren IT-Studenten</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Onze studenten zijn opgeleid in de nieuwste technologieën en brengen frisse kennis mee. Up-to-date met moderne systemen.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Flexibele Tijden</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Ook 's avonds en in weekenden beschikbaar. Studenten hebben flexibele schema's en kunnen zich aanpassen aan jouw agenda.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Persoonlijke Benadering</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Geduldig en begripvol. Onze studenten nemen de tijd om alles rustig uit te leggen en je te helpen begrijpen.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Snelle Beschikbaarheid</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Vaak nog dezelfde dag beschikbaar. Studenten hebben meer flexibiliteit en kunnen snel inspringen bij urgent problemen.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Moderne Kennis</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Studenten zijn vertrouwd met de nieuwste software, apps en technologieën. Ideaal voor moderne computerproblemen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HOE WERKT HET - Vierde vraag: "Hoe werkt het praktisch?" */}
        <section className="section-spacing bg-white/5" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 id="process-heading" className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Hoe Werkt Student Aan Huis?
              </h2>
              <p className="text-xl text-secondary-700">
                In 3 eenvoudige stappen naar vakkundige hulp
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto" role="list" aria-label="Proces stappen">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center" role="listitem">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" aria-label={`Stap ${step.step}`}>
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 text-lg leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS - Vijfde vraag: "Wat zeggen anderen?" */}
        <TestimonialsSection />

        {/* 6. FAQ - Laatste vragen wegnemen */}
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
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Veelgestelde Vragen Over Student Aan Huis
              </h2>
              <p className="text-xl text-secondary-700">
                Antwoorden op de meest gestelde vragen over student aan huis service
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

        {/* 8. FINAL CTA - Oproep tot actie */}
        <section className="section-spacing bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6">
              Klaar voor Betaalbare Computerhulp?
            </h2>
            <p className="text-xl text-primary-700 mb-8 max-w-2xl mx-auto">
              Onze ervaren IT-studenten staan klaar om je te helpen. Snel, betaalbaar en vakkundig - precies wat je nodig hebt!
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