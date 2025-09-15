import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { PricingSection } from '@/components/home/PricingSection'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import Link from 'next/link'
import { 
  Phone, 
  Calendar,
  CheckCircle,
  Clock,
  Award,
  Users
} from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: '24-48u Service',
    description: 'Snelle hulp wanneer u het nodig heeft'
  },
  {
    icon: Award,
    title: '10+ Jaar Ervaring',
    description: 'Ruime ervaring met computerproblemen'
  },
  {
    icon: Users,
    title: 'Ervaren Specialisten',
    description: 'Rustig, geduldig en betrouwbaar'
  }
]



const processSteps = [
  {
    step: '1',
    title: 'Plan Afspraak',
    description: 'Maak online een afspraak of bel ons direct voor een snelle planning'
  },
  {
    step: '2', 
    title: 'Specialist Komt & Lost Op',
    description: 'Binnen 24-48u komt onze specialist en lost uw probleem ter plekke op'
  },
  {
    step: '3',
    title: 'Klaar & Uitleg',
    description: 'Probleem opgelost + duidelijke uitleg en tips om herhaling te voorkomen'
  }
]

export default function ComputerhulpAanHuisLanding() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hulp met IT - Computerhulp aan Huis",
            "description": "Professionele computerhulp aan huis door ervaren specialisten",
            "url": "https://hulpmetit.nl/computerhulp-aan-huis",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "areaServed": {
              "@type": "Country",
              "name": "Nederland"
            },
            "serviceType": "Computerhulp aan huis",
            "priceRange": "€51,97 - €100",
            "openingHours": "Mo-Su 08:00-21:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog", 
              "name": "Computerhulp Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Computer reparatie aan huis"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Virus verwijdering"
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
              <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Nu beschikbaar in heel Nederland
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                Computerhulp aan Huis
                <br />
                <span className="text-white">Specialist binnen 24u</span>
              </h1>
              
              <p className="text-xl text-neural-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Computerhulp aan huis door ervaren specialisten. Wij komen naar u toe en lossen uw computerprobleem ter plekke op. 
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
                  Afspraak Maken
                </Link>
                <a href="tel:+31642827860" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Bel Nu: 06-42827860
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesPreview />

        {/* Process Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Hoe Werkt Onze Computerhulp aan Huis?
              </h2>
              <p className="text-xl text-neural-300">
                Eenvoudig en zonder gedoe - van probleem tot oplossing
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

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Pricing Section */}
        <PricingSection />

      </div>
    </>
  )
}