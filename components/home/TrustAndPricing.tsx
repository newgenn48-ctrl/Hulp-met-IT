'use client'

import { GraduationCap, MapPin, Clock, Users, MessageCircle, Heart } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const stats = [
  { title: 'Slimme HBO-studenten', subtitle: 'Vakkundig en sociaal sterk', icon: GraduationCap },
  { title: 'In meer dan 40 steden', subtitle: 'Altijd een expert bij u in de buurt', icon: MapPin },
  { title: '7 dagen p/w bereikbaar', subtitle: 'Ook in het weekend staan we klaar', icon: Clock },
]

const benefits = [
  {
    icon: Users,
    title: 'Echte mensen, geen keuzemenu\u2019s',
    description: 'Bij ons krijgt u direct iemand aan de lijn die u begrijpt. Geen anoniem callcenter, maar persoonlijk contact.',
  },
  {
    icon: MessageCircle,
    title: 'Duidelijke taal, geen technisch jargon',
    description: 'Wij praten niet in computercode. Wij leggen alles stap voor stap uit, zodat u het de volgende keer zelf kunt.',
  },
  {
    icon: Heart,
    title: 'Geduldig en op uw eigen tempo',
    description: 'Geen vraag is te gek. Wij zuchten niet en we gaan pas weg als u zich weer helemaal zelfverzekerd voelt.',
  },
]

export function TrustAndPricing() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* Stats row */}
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-16 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary-400" />
                </div>
                <div className="text-sm sm:text-base font-bold text-white mb-1">{stat.title}</div>
                <div className="text-xs sm:text-sm text-white/60">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Centered trust content */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-primary-400 font-semibold text-sm tracking-wide uppercase mb-3">Waarom wij</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Waarom kiezen voor Hulp Met IT?
            </h2>
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
              Persoonlijk, geduldig en bij u aan huis. Wij zijn een team van vriendelijke studenten die begrijpen dat technologie soms lastig is. U krijgt geen snelle reparateur over de vloer, maar een rustige helper die de tijd neemt om alles in gewone mensentaal uit te leggen.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
