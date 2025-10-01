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
    description: 'Bel of plan online - binnen Eindhoven snel beschikbaar'
  },
  {
    step: '2',
    title: 'Student Komt Langs',
    description: 'IT-student komt naar je adres in Eindhoven'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Vakkundige hulp tegen studententarief + uitleg'
  }
]

const eindhovenAreas = [
  'Eindhoven Centrum', 'Woensel', 'Stratum', 'Gestel',
  'Tongelre', 'Strijp', 'Veldhoven', 'Helmond',
  'Best', 'Geldrop', 'Son en Breugel', 'Nuenen'
]

const faqData = [
  {
    question: "Wat kost student aan huis hulp in Eindhoven?",
    answer: "Onze tarieven beginnen vanaf €14,50 per kwartier in Eindhoven. Dit is veel voordeliger dan traditionele computerhulp services. Je betaalt alleen voor de daadwerkelijk bestede tijd, geen voorrijkosten of minimumtarief. Perfect voor studenten en inwoners van de technologiestad Eindhoven."
  },
  {
    question: "Zijn jullie studenten wel gekwalificeerd in Eindhoven?",
    answer: "Ja, onze studenten in Eindhoven volgen IT-opleidingen aan de TU/e en andere hogescholen. Ze zijn vertrouwd met moderne technologie en hebben praktijkervaring. Veel van onze studenten werken ook bij techbedrijven in de High Tech Campus Eindhoven, waardoor ze op de hoogte zijn van de nieuwste ontwikkelingen."
  },
  {
    question: "Kunnen jullie ook 's avonds en weekenden komen in Eindhoven?",
    answer: "Ja, dat is een van onze grote voordelen! Onze studenten in Eindhoven hebben flexibele schema's en kunnen vaak ook 's avonds en in weekenden. We zijn bereikbaar van 08:00 tot 22:00, 7 dagen per week. Perfect voor werkende mensen in Eindhoven's tech-industrie."
  },
  {
    question: "Hoe snel kunnen jullie komen in Eindhoven?",
    answer: "In Eindhoven en omgeving kunnen we vaak nog dezelfde dag langskomen, vooral 's avonds en in weekenden. Voor urgente problemen proberen we binnen 2-4 uur beschikbaar te zijn. Door onze lokale studenten hebben we korte reistijden."
  },
  {
    question: "Welke wijken in Eindhoven bedienen jullie?",
    answer: "We bedienen alle wijken van Eindhoven: Centrum, Woensel, Stratum, Gestel, Tongelre, Strijp, plus omliggende gemeenten zoals Veldhoven, Helmond, Best, Geldrop en Son en Breugel. Ook de High Tech Campus en TU/e campus."
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

export default function StudentAanHuisEindhovenLanding() {
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
            "name": "Hulp met IT - Student Aan Huis Eindhoven",
            "description": "Betaalbare computerhulp in Eindhoven door ervaren IT-studenten van TU/e en andere hogescholen. Specialist in tech-ondersteuning voor Eindhoven's innovatieve gemeenschap.",
            "url": "https://hulpmetit.nl/student-aan-huis-eindhoven",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Eindhoven",
              "addressRegion": "Noord-Brabant",
              "addressCountry": "NL"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Eindhoven"
              },
              {
                "@type": "City",
                "name": "Veldhoven"
              },
              {
                "@type": "City",
                "name": "Helmond"
              },
              {
                "@type": "City",
                "name": "Best"
              }
            ],
            "serviceType": "Student computerhulp aan huis Eindhoven",
            "priceRange": "€14,50 - €18,50",
            "openingHours": "Mo-Su 08:00-22:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Computer Reparatie Eindhoven",
                "description": "Professionele computer reparatie door IT-studenten",
                "price": "13.99",
                "priceCurrency": "EUR"
              },
              {
                "@type": "Offer",
                "name": "Laptop Hulp Eindhoven",
                "description": "Laptop reparatie en ondersteuning aan huis",
                "price": "13.99",
                "priceCurrency": "EUR"
              }
            ],
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Mark de Jong"
                },
                "reviewBody": "Excellent service in Eindhoven! Student kwam snel en loste mijn WiFi probleem vakkundig op."
              }
            ]
          })
        }}
      />

      <section className="hero-section relative flex items-start justify-center overflow-hidden">
        <FloatingDevices />

        <div className="relative z-10 max-w-6xl mx-auto container-padding text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Student aan Huis Eindhoven</span>
          </h1>

          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto mb-6 leading-relaxed">
            Heeft u vragen of problemen met uw computer, tablet, smartphone of een ander apparaat? Onze IT-studenten komen bij u thuis in <span className="text-primary-700 font-semibold">Eindhoven en omgeving</span>. U krijgt rustige, geduldige hulp zodat u alles goed begrijpt. Onze studenten zijn betrouwbaar en zorgvuldig, zodat u met een gerust hart hulp aan huis krijgt.
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
                Hoe Werkt Student Aan Huis in Eindhoven?
              </h2>
              <p className="text-xl text-secondary-700">
                Snel, lokaal en betaalbaar - vakkundige tech-hulp in Eindhoven
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
                Waarom Kiezen Voor Student Aan Huis Eindhoven?
              </h2>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
                Ontdek de voordelen van computerhulp door ervaren TU/e IT-studenten in de technologiestad Eindhoven
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Betaalbare Tarieven Eindhoven</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Vanaf €14,50 per kwartier in Eindhoven - veel goedkoper dan traditionele computerhulp. Perfecte kwaliteit tegen studententarieven, ideaal voor de tech-community.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">TU/e IT-Studenten</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Onze studenten in Eindhoven studeren aan TU/e en andere technische hogescholen. Ze zijn opgeleid in de nieuwste technologieën en kennen Eindhoven's tech-ecosysteem goed.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Flexibele Tijden</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Ook 's avonds en in weekenden beschikbaar in Eindhoven. Studenten hebben flexibele schema's, perfect voor werkenden bij ASML, Philips en andere tech-bedrijven.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Heel Tech-Regio Eindhoven</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Van Centrum tot High Tech Campus, van Strijp-S tot TU/e - onze studenten komen overal in Eindhoven en omliggende tech-gemeenten zoals Veldhoven en Best.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Snelle Beschikbaarheid</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Vaak nog dezelfde dag beschikbaar in Eindhoven. Door onze lokale studenten hebben we korte reistijd, zelfs naar High Tech Campus en bedrijventerreinen.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">Moderne Tech Kennis</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Studenten zijn vertrouwd met de nieuwste software en technologieën uit Eindhoven's innovatieve omgeving. Ideaal voor moderne computerproblemen en tech-integratie.
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
                Onze Student IT Diensten in Eindhoven
              </h2>
              <p className="text-xl text-secondary-700">
                Uitgebreide computerhulp door vakkundige IT-studenten in de technologiestad Eindhoven
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">🖥️ Computer & Laptop Hulp Eindhoven</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Laptop en Computer Reparatie</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Computer start niet op - diagnose en reparatie door TU/e studenten</li>
                    <li>• Laptop scherm vervangen of repareren (gaming laptops specialiteit)</li>
                    <li>• Toetsenbord en touchpad problemen vakkundig oplossen</li>
                    <li>• Hardware upgrades (RAM, NVMe SSD, harde schijf) voor betere prestaties</li>
                    <li>• Ventilator reiniging bij oververhitting - cruciaal in Eindhoven's klimaat</li>
                    <li>• Gaming computer optimalisatie en troubleshooting</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Software Installatie & Updates</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• Windows 11 installatie en updates voor optimale prestaties</li>
                    <li>• Microsoft Office 365 installatie en configuratie</li>
                    <li>• Professionele antivirus software installeren en configureren</li>
                    <li>• Browser installatie en bookmarks/wachtwoorden overzetten</li>
                    <li>• Printer drivers en software voor thuiswerkplekken</li>
                    <li>• Specialistische software voor tech-professionals</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">🌐 Internet & Smart Home Eindhoven</h3>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">WiFi & Internet Problemen</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• WiFi verbinding problemen in moderne Eindhoven appartementen</li>
                    <li>• High-end router instellen voor maximale snelheid</li>
                    <li>• Glasvezel internet optimalisatie (KPN, Ziggo, T-Mobile)</li>
                    <li>• Mesh netwerk installatie voor grote woningen</li>
                    <li>• Smart TV en streaming diensten configureren</li>
                    <li>• VPN installatie voor veilig thuiswerken</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">Smartphone & Smart Home</h4>
                  <ul className="text-secondary-700 space-y-2">
                    <li>• iPhone en Android telefoon volledig instellen en migreren</li>
                    <li>• Smart home apparaten koppelen (Philips Hue, Google/Alexa)</li>
                    <li>• Contacten, foto's en documenten synchroniseren</li>
                    <li>• Tablet koppelen aan werk- en privé accounts</li>
                    <li>• Privacy instellingen optimaliseren voor tech-professionals</li>
                    <li>• Home automation en IoT apparaten configureren</li>
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
                Veelgestelde Vragen Student Aan Huis Eindhoven
              </h2>
              <p className="text-xl text-secondary-700">
                Antwoorden op de meest gestelde vragen over onze student IT service in de technologiestad Eindhoven
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

        {/* Eindhoven Areas Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Werkgebied Eindhoven & Technologie Regio
              </h2>
              <p className="text-xl text-secondary-700">
                Onze IT-studenten komen naar alle wijken in Eindhoven en de High Tech regio
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {eindhovenAreas.map((area, index) => (
                <div key={index} className="glass-effect rounded-lg p-4 text-center">
                  <MapPin className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <span className="text-secondary-700 text-base font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-secondary-700 text-lg mb-6">
                Ook High Tech Campus, TU/e Campus en ASML omgeving! <strong className="text-secondary-800">Bel ons</strong> - wij komen waarschijnlijk ook bij jou!
              </p>
              <Link href="/regios/eindhoven" className="btn-secondary">
                <MapPin className="w-5 h-5 mr-2" />
                Meer Info Eindhoven Regio
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-6">
              Klaar voor Betaalbare Tech-Hulp in Eindhoven?
            </h2>
            <p className="text-xl text-primary-700 mb-8 max-w-2xl mx-auto">
              Onze ervaren IT-studenten van TU/e en andere hogescholen in Eindhoven staan klaar om je te helpen.
              Van High Tech Campus tot Strijp-S - snel, betaalbaar en vakkundig!
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