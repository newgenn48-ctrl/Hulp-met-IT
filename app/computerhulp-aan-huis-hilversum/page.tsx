import { ServicesGrid } from '@/components/services/ServicesGrid'
import { FloatingDevices } from '@/components/three/FloatingDevices'
import { PricingSection } from '@/components/home/PricingSection'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { TrustSignals } from '@/components/home/TrustSignals'
import { Windows11UrgentSection } from '@/components/home/Windows11UrgentSection'
import Link from 'next/link'
import {
  Phone,
  Calendar,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react'

const benefits = [
  { icon: Clock, text: 'Snelle hulp Hilversum' },
  { icon: Award, text: 'Vriendelijk & betrouwbaar' },
  { icon: CheckCircle, text: 'Vakkundige specialisten' },
]

const processSteps = [
  {
    step: '1',
    title: 'Afspraak Maken',
    description: 'Bel ons of maak online een afspraak. Wij plannen een geschikt moment in Hilversum'
  },
  {
    step: '2',
    title: 'Specialist Komt Langs',
    description: 'Onze vriendelijke specialist komt naar u toe in Hilversum en bekijkt rustig uw probleem'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Wij lossen het probleem op en leggen duidelijk uit wat er gebeurd is'
  }
]

export default function ComputerhulpAanHuisHilversum() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hulp met IT - Computerhulp aan Huis Hilversum",
            "description": "Professionele computerhulp aan huis in Hilversum door ervaren specialisten",
            "url": "https://hulpmetit.nl/computerhulp-aan-huis-hilversum",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "areaServed": {
              "@type": "City",
              "name": "Hilversum",
              "addressRegion": "Noord-Holland",
              "addressCountry": "NL"
            },
            "serviceType": "Computerhulp aan huis Hilversum",
            "priceRange": "€51,97 - €100",
            "openingHours": "Mo-Su 08:00-21:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "250"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hilversum",
              "addressRegion": "Noord-Holland",
              "addressCountry": "NL"
            }
          })
        }}
      />

      <section className="hero-section relative flex items-start justify-center overflow-hidden">
        <FloatingDevices />

        <div className="relative z-10 max-w-6xl mx-auto container-padding text-center">

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Computerhulp aan Huis</span>
            <br />
            <span className="text-secondary-800">Hilversum</span>
          </h1>

          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto mb-6 leading-relaxed">
            Computerhulp aan huis door vriendelijke specialisten in Hilversum. Wij komen <span className="text-primary-700 font-semibold">binnen 24-48u</span> naar u toe en lossen het snel en vakkundig voor u op!
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
          title="Wat We Voor U Kunnen Doen"
          maxItems={6}
        />

        <PricingSection />
        <TestimonialsSection />

        <Windows11UrgentSection />

        {/* Process Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Hoe Werkt Computerhulp aan Huis in Hilversum?
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
        </section>

        {/* Services Section */}
        <ServicesPreview />

        {/* SEO Content Section */}
        <section className="section-spacing bg-neural-900/50">
          <div className="max-w-4xl mx-auto container-padding">
            <h2 className="text-3xl font-bold text-secondary-800 text-center mb-8">
              Computerhulp aan Huis in Heel Hilversum
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">🏘️ Hilversum Wijken</h3>
                <ul className="text-secondary-700 space-y-2">
                  <li>• Computerhulp Hilversum Centrum</li>
                  <li>• Computerhulp Hilversum Noord</li>
                  <li>• Computerhulp Hilversum Zuid</li>
                  <li>• Computerhulp Hilversum Oost</li>
                  <li>• Computerhulp Hilversum West</li>
                  <li>• Computerhulp Kerkelanden</li>
                </ul>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">💻 Onze Services Hilversum</h3>
                <ul className="text-secondary-700 space-y-2">
                  <li>• Laptop reparatie Hilversum</li>
                  <li>• Virus verwijdering Hilversum</li>
                  <li>• Computer traag maken sneller</li>
                  <li>• E-mail en programma's instellen</li>
                  <li>• Internet problemen oplossen</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-4">
                Waarom Computerhulp aan Huis Hilversum?
              </h3>
              <p className="text-secondary-700 text-lg leading-relaxed">
                Hulp met IT biedt computerhulp aan huis in heel Hilversum. Van Centrum tot Kerkelanden, van Noord tot Zuid, inclusief de omliggende plaatsen zoals Bussum, Naarden en Laren - onze vriendelijke specialisten komen naar u toe en nemen rustig de tijd om uw computerproblemen op te lossen en uit te leggen hoe alles werkt.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
