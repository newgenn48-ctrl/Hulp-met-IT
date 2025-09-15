'use client'

import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { PricingSection } from '@/components/home/PricingSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import Link from 'next/link'
import { 
  Phone, 
  Calendar,
  GraduationCap,
  Euro,
  Zap,
  MapPin
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
    description: 'Bel of plan online - binnen Middelburg snel beschikbaar'
  },
  {
    step: '2', 
    title: 'Student Komt Langs',
    description: 'IT-student komt naar je adres in Middelburg'
  },
  {
    step: '3',
    title: 'Probleem Opgelost',
    description: 'Vakkundige hulp tegen studententarief + uitleg'
  }
]

const middelburgAreas = [
  'Middelburg Centrum', 'Middelburg Noord', 'Middelburg Oost', 'Middelburg West',
  'Middelburg Zuid', 'Vlissingen', 'Veere', 'Koudekerke',
  'Arnemuiden', 'Goes', 'Kapelle', 'Westkapelle'
]

export default function StudentAanHuisMiddelburgLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hulp met IT - Student Aan Huis Middelburg",
            "description": "Betaalbare computerhulp in Middelburg door ervaren IT-studenten",
            "url": "https://hulpmetit.nl/student-aan-huis-middelburg",
            "telephone": "+31642827860",
            "email": "info@hulpmetit.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Middelburg",
              "addressRegion": "Zeeland",
              "addressCountry": "NL"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Middelburg"
              }
            ],
            "serviceType": "Student computerhulp aan huis Middelburg",
            "priceRange": "€13,99 - €18,50",
            "openingHours": "Mo-Su 08:00-22:00"
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
                Student Aan Huis Service Middelburg
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                Student Aan Huis Middelburg
                <br />
                <span className="text-white">Betaalbare Computerhulp</span>
              </h1>
              
              <p className="text-xl text-neural-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Computerproblemen in Middelburg? Onze IT-studenten komen naar je toe! Betaalbare hulp door lokale studenten. 
                <span className="text-primary-300 font-semibold"> Betaalbare tarieven - snel en vakkundig!</span>
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

        {/* Middelburg Areas Section */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Werkgebied Middelburg & Omgeving
              </h2>
              <p className="text-xl text-neural-300">
                Onze IT-studenten komen naar alle wijken in en rondom Middelburg
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {middelburgAreas.map((area, index) => (
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
              <Link href="/regios/middelburg" className="btn-secondary">
                <MapPin className="w-5 h-5 mr-2" />
                Meer Info Middelburg
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-spacing bg-white/5">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Hoe Werkt Student Aan Huis in Middelburg?
              </h2>
              <p className="text-xl text-neural-300">
                Snel, lokaal en betaalbaar - vakkundige hulp in Middelburg
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

      </div>
    </>
  )
}