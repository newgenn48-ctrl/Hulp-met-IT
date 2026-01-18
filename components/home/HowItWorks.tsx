'use client'

import { Phone, Calendar, Wrench, ThumbsUp } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Bel of plan online',
    description: 'Bespreek uw probleem en plan een afspraak.'
  },
  {
    icon: Calendar,
    number: '02',
    title: 'Wij komen langs',
    description: 'Onze specialist komt snel bij u thuis.'
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Wij gaan aan de slag',
    description: 'De meeste problemen lossen wij direct op.'
  },
  {
    icon: ThumbsUp,
    number: '04',
    title: 'Nazorg inbegrepen',
    description: 'Vragen achteraf? Bel gerust!'
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-16">
          <p className="text-primary-700 font-semibold mb-3">Hoe het werkt</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            In 4 simpele stappen geholpen
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Geen ingewikkelde procedures. Gewoon persoonlijke hulp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary-700" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-600">
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
