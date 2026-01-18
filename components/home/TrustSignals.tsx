'use client'

import { Shield, Clock, Award, Heart } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Persoonlijke aandacht',
    description: 'Duidelijke uitleg zonder technisch jargon. U begrijpt wat we doen.'
  },
  {
    icon: Shield,
    title: 'Veilig & betrouwbaar',
    description: 'Volledig verzekerd. Uw gegevens zijn bij ons in goede handen.'
  },
  {
    icon: Clock,
    title: 'Snel geholpen',
    description: 'Wij werken efficiënt en lossen uw probleem zo snel mogelijk op.'
  },
  {
    icon: Award,
    title: '10+ jaar ervaring',
    description: 'Al meer dan 5.000 huisbezoeken bij particulieren en kleine ondernemers.'
  }
]

export function TrustSignals() {
  return (
    <section className="py-20 lg:py-28 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-16">
          <p className="text-primary-700 font-semibold mb-3">Waarom wij</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            IT-hulp waar u op kunt vertrouwen
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Wij begrijpen dat het frustrerend is als uw techniek niet doet wat u wilt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="flex gap-5 bg-white rounded-xl p-6 border border-secondary-200"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
