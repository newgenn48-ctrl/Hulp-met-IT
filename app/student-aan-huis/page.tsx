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
            "serviceType": "ComputerRepair",
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
      
      <section className="hero-section relative flex items-start justify-center overflow-hidden">
        <FloatingDevices />

        <div className="relative z-10 max-w-6xl mx-auto container-padding text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Student aan Huis</span>
          </h1>

          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto mb-6 leading-relaxed">
            Heeft u vragen of problemen met uw computer, tablet, smartphone of een ander apparaat? Onze IT-studenten komen bij u thuis. U krijgt rustige, geduldige hulp zodat u alles goed begrijpt. Onze studenten zijn betrouwbaar en zorgvuldig, zodat u met een gerust hart hulp aan huis krijgt.
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
        <section className="section-spacing" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 id="process-heading" className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Hoe Werkt Student Aan Huis?
              </h2>
              <p className="text-xl text-secondary-700">
                Snel, flexibel en betaalbaar - vakkundige hulp
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

        {/* Services Section */}
        <ServicesPreview />

        {/* Why Choose Student Section */}
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

        {/* Services Detail Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Onze Student IT Diensten
              </h2>
              <p className="text-xl text-secondary-700">
                Uitgebreide computerhulp door vakkundige IT-studenten
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">🖥️ Computer & Laptop Hulp</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Laptop en Computer Reparatie</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Computer start niet op - diagnose en reparatie</li>
                    <li>• Laptop scherm vervangen of repareren</li>
                    <li>• Toetsenbord en touchpad problemen</li>
                    <li>• Hardware upgrades (RAM, SSD, harde schijf)</li>
                    <li>• Ventilator reiniging bij oververhitting</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Software Installatie & Updates</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Windows installatie en updates</li>
                    <li>• Microsoft Office installatie en configuratie</li>
                    <li>• Antivirus software installeren</li>
                    <li>• Browser installatie en bookmarks overzetten</li>
                    <li>• Printer drivers en software installeren</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Data & Bestanden</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Foto's en documenten overzetten naar nieuwe computer</li>
                    <li>• Backup maken van belangrijke bestanden</li>
                    <li>• Cloud storage instellen (Google Drive, OneDrive)</li>
                    <li>• Verloren bestanden terughalen</li>
                    <li>• Externe harde schijf configureren</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">🌐 Internet & Netwerk</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">WiFi & Internet Problemen</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• WiFi verbinding problemen oplossen</li>
                    <li>• Router instellen en configureren</li>
                    <li>• Langzame internet snelheid verbeteren</li>
                    <li>• Netwerk printer verbinding maken</li>
                    <li>• Smart TV internet verbinding</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">E-mail & Communicatie</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• E-mail accounts instellen (Gmail, Outlook)</li>
                    <li>• WhatsApp Web en desktop apps</li>
                    <li>• Zoom, Teams, Skype installeren</li>
                    <li>• Contacten overzetten tussen apparaten</li>
                    <li>• Sociale media accounts beveiligen</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Smartphone & Tablet Hulp</h4>
                  <ul className="text-secondary-700 space-y-2">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Veelgestelde Vragen Student Aan Huis
              </h2>
              <p className="text-xl text-secondary-700">
                Antwoorden op de meest gestelde vragen over onze student IT service
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

        {/* CTA Section */}
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