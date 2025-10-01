'use client'

import { FloatingDevices } from '@/components/three/FloatingDevices'
import Link from 'next/link'
import { Calendar, Phone, Star, Clock, CheckCircle } from 'lucide-react'

export function HeroSection() {
  const benefits = [
    { icon: Clock, text: 'Ervaren specialisten' },
    { icon: Star, text: 'Rustig en geduldig' },
    { icon: CheckCircle, text: 'Transparante prijzen' },
  ]

  return (
    <section className="hero-section relative flex items-start justify-center overflow-hidden">
      <FloatingDevices />
      
      <div className="relative z-10 max-w-6xl mx-auto container-padding text-center">
        
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Vriendelijke Computerhulp</span>
          <br />
          <span className="text-secondary-800">aan Huis</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto mb-6 leading-relaxed">
          Hulp nodig met uw computer, tablet, smartphone of printer? Onze vriendelijke IT-specialisten komen <span className="text-primary-700 font-semibold">binnen 24-48u</span> naar u toe en lossen het snel en vakkundig voor u op én zorgen dat u voortaan zelfverzekerd met uw apparaten kunt werken!
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
  )
}