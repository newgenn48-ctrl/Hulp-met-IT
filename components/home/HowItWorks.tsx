'use client'

import { Phone, Calendar, Home, CheckCircle } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const steps = [
  {
    icon: Phone,
    title: 'Neem contact op',
    description: 'Bel ons of plan online een afspraak. Wij luisteren en denken mee.',
  },
  {
    icon: Calendar,
    title: 'Afspraak inplannen',
    description: 'Wij komen wanneer het u uitkomt. Vaak al dezelfde of volgende dag.',
  },
  {
    icon: Home,
    title: 'Hulp aan huis',
    description: 'Onze student lost het probleem rustig bij u thuis op.',
  },
  {
    icon: CheckCircle,
    title: 'Opgelost',
    description: 'U krijgt duidelijke uitleg. Bij vragen kunt u altijd terugbellen.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Zo werkt het</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              In vier stappen geholpen
            </h2>
            <p className="text-secondary-500 max-w-xl mx-auto text-lg">
              Geen ingewikkeld gedoe. Gewoon even bellen, en wij regelen de rest.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal process bar on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200" />

          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <ScrollReveal key={index} delay={index * 120}>
                <div className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-0 md:px-4">
                  {/* Number + icon circle */}
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white shadow-card flex flex-col items-center justify-center flex-shrink-0 md:mb-6">
                    <span className="text-xs font-bold text-primary-400 leading-none">Stap {index + 1}</span>
                    <IconComponent className="w-6 h-6 text-primary-600 mt-1" />
                  </div>

                  <div className="md:max-w-[200px]">
                    <h3 className="font-bold text-secondary-900 mb-1">{step.title}</h3>
                    <p className="text-secondary-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
