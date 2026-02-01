'use client'

import { Phone, Calendar, Home, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '1',
    title: 'U belt ons',
    description: 'U vertelt kort wat het probleem is'
  },
  {
    icon: Calendar,
    number: '2',
    title: 'Wij plannen direct een afspraak',
    description: 'Vaak nog dezelfde of volgende dag'
  },
  {
    icon: Home,
    number: '3',
    title: 'Wij komen bij u thuis',
    description: 'Rustig, vriendelijk en duidelijk'
  },
  {
    icon: CheckCircle,
    number: '4',
    title: 'Probleem opgelost',
    description: 'Met uitleg en nazorg'
  }
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-20 bg-secondary-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Zo helpen wij u
          </h2>
          <p className="text-lg text-secondary-600">
            Geen moeilijke systemen, geen gedoe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="bg-white rounded-xl p-6 border border-secondary-200 text-center">
                <div className="relative inline-flex mb-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-primary-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-600 text-sm">
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
