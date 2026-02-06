'use client'

import { Phone, Calendar, Home, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: 'U belt ons',
    description: 'Vertel kort wat er aan de hand is'
  },
  {
    icon: Calendar,
    title: 'Afspraak op uw moment',
    description: 'Vaak al dezelfde of volgende dag'
  },
  {
    icon: Home,
    title: 'Wij komen bij u thuis',
    description: 'Rustig, vriendelijk en duidelijk'
  },
  {
    icon: CheckCircle,
    title: 'Probleem opgelost',
    description: 'Met uitleg zodat u het begrijpt'
  }
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
            Hoe werkt het?
          </h2>
          <p className="text-secondary-500 max-w-lg mx-auto">
            Van telefoontje tot opgelost probleem &mdash; in vier stappen.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 mb-4">
                  <IconComponent className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 text-[15px] mb-1">
                  {step.title}
                </h3>
                <p className="text-secondary-500 text-sm leading-snug">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
