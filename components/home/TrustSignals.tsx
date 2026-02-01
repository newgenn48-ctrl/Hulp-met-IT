'use client'

import { User, Brain, Heart, Shield, Home, Award } from 'lucide-react'

const features = [
  {
    icon: User,
    title: 'Geen groot bedrijf, maar echte mensen',
  },
  {
    icon: Brain,
    title: 'Geen technische taal',
  },
  {
    icon: Heart,
    title: 'Geduldig en vriendelijk',
  },
  {
    icon: Shield,
    title: 'Veilig en verzekerd',
  },
  {
    icon: Home,
    title: 'Hulp gewoon bij u thuis',
  },
  {
    icon: Award,
    title: '10+ jaar ervaring',
  }
]

export function TrustSignals() {
  return (
    <section className="py-16 lg:py-20 bg-secondary-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Waarom mensen voor ons kiezen
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-secondary-200"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-secondary-800 font-medium">{feature.title}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
