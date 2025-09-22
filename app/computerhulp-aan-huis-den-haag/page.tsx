import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { PricingSection } from '@/components/home/PricingSection'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import Link from 'next/link'
import {
  Phone,
  Calendar,
  Clock,
  Award,
  Users,
  MapPin
} from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Snelle Hulp Den Haag',
    description: 'Wij komen snel naar u toe in heel Den Haag'
  },
  {
    icon: Award,
    title: 'Vriendelijke Specialisten',
    description: 'Ervaren helpers die rustig uitleggen wat er gebeurt'
  },
  {
    icon: Users,
    title: 'Persoonlijke Aanpak',
    description: 'Geduldig en begripvol, we nemen de tijd voor u'
  }
]

const processSteps = [
  {
    step: '1',
    title: 'Afspraak Maken',
    description: 'Bel ons of maak online een afspraak. Wij plannen een geschikt moment in Den Haag'
  },
  {
    step: '2',
    title: 'Specialist Komt Langs',
    description: 'Onze vriendelijke specialist komt naar u toe in Den Haag en bekijkt rustig uw probleem'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Wij lossen het probleem op en leggen duidelijk uit wat er gebeurd is'
  }
]

export default function ComputerhulpAanHuisDenHaag() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hulp met IT - Computerhulp aan Huis Den Haag",
            "description": "Professionele computerhulp aan huis in Den Haag door ervaren specialisten",
            "url": "https://hulpmetit.nl/computerhulp-aan-huis-den-haag",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "areaServed": {
              "@type": "City",
              "name": "Den Haag",
              "addressRegion": "Zuid-Holland",
              "addressCountry": "NL"
            },
            "serviceType": "Computerhulp aan huis Den Haag",
            "priceRange": "€51,97 - €100",
            "openingHours": "Mo-Su 08:00-21:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "250"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Den Haag",
              "addressRegion": "Zuid-Holland",
              "addressCountry": "NL"
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
              <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                Computerhulp aan Huis Den Haag
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                Computerhulp aan Huis
                <br />
                <span className="text-white">Den Haag</span>
              </h1>

              <p className="text-xl text-neural-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Computerhulp aan huis door vriendelijke specialisten in Den Haag. Wij komen naar u toe in heel Den Haag en helpen rustig bij uw computerproblemen.
                <span className="text-primary-300 font-semibold"> Transparante tarieven, geen verrassingen achteraf!</span>
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={index} className="glass-effect rounded-lg p-4 text-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                  Afspraak Maken Den Haag
                </Link>
                <a href="tel:+31642827860" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Bel Nu: 06-42827860
                </a>
              </div>
            </div>
          </div>
        </section>

        <ServicesPreview />
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Hoe Werkt Computerhulp aan Huis in Den Haag?
              </h2>
              <p className="text-xl text-neural-300">
                Eenvoudig en snel - van afspraak tot opgeloste computerproblemen
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-neural-300 text-lg leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <PricingSection />

        <section className="section-spacing bg-neural-900/50">
          <div className="max-w-4xl mx-auto container-padding">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Computerhulp aan Huis in Heel Den Haag
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">🏛️ Den Haag Wijken</h3>
                <ul className="text-neural-300 space-y-2">
                  <li>• Computerhulp Den Haag Centrum</li>
                  <li>• Computerhulp Scheveningen</li>
                  <li>• Computerhulp Wassenaar</li>
                  <li>• Computerhulp Voorburg</li>
                  <li>• Computerhulp Leidschenveen</li>
                </ul>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">💻 Onze Services Den Haag</h3>
                <ul className="text-neural-300 space-y-2">
                  <li>• Laptop reparatie Den Haag</li>
                  <li>• Virus verwijdering Den Haag</li>
                  <li>• Computer traag maken sneller</li>
                  <li>• E-mail en programma's instellen</li>
                  <li>• Internet problemen oplossen</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Waarom Computerhulp aan Huis Den Haag?
              </h3>
              <p className="text-neural-300 text-lg leading-relaxed">
                Hulp met IT biedt computerhulp aan huis in heel Den Haag. Van het Binnenhof tot Scheveningen, van Voorburg tot Wassenaar - onze vriendelijke specialisten komen naar u toe en nemen rustig de tijd om uw computerproblemen op te lossen en uit te leggen hoe alles werkt.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}