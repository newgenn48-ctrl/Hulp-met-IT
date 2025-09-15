'use client'

import { Button } from '@/components/ui/Button'
import { FloatingElements } from '@/components/three/FloatingElements'
import Link from 'next/link'
import { Calendar, Phone, Star, Clock, CheckCircle } from 'lucide-react'

export function HeroSection() {
  const benefits = [
    { icon: Clock, text: 'Ervaren specialisten' },
    { icon: Star, text: 'Rustig en geduldig' },
    { icon: CheckCircle, text: 'Transparante prijzen' },
  ]

  return (
    <section className="hero-section relative flex items-start justify-center overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
      <FloatingElements />
      
      <div className="relative z-10 max-w-6xl mx-auto container-padding text-center">
        
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Betrouwbare Computerhulp</span>
          <br />
          <span className="text-white">aan Huis</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-neural-300 max-w-4xl mx-auto mb-6 leading-relaxed">
          Computer, tablet, smartphone of printer problemen? Onze vriendelijke specialisten komen <span className="text-primary-300 font-semibold">binnen 24 uur (spoed)</span> of <span className="text-primary-300 font-semibold">vanaf overmorgen (standaard)</span> naar u toe!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="flex items-center space-x-3 text-lg text-neural-300"
              >
                <IconComponent className="w-6 h-6 text-primary-400" />
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
            Bel Nu: 06-42827860
          </a>
        </div>

      </div>
    </section>
  )
}