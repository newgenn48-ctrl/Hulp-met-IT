'use client'

import { Shield, Award, Clock, Users, CheckCircle, Phone } from 'lucide-react'

const trustSignals = [
  {
    icon: Shield,
    title: "Veilig & Betrouwbaar",
    description: "Professionele service met volledige zekerheid en vertrouwen"
  },
  {
    icon: Award, 
    title: "10 Jaar Ervaring",
    description: "Ruime ervaring met alle soorten computer- en IT-problemen"
  },
  {
    icon: Clock,
    title: "Betrouwbare Service",
    description: "Komen altijd op afspraak, meestal binnen 24-48 uur"
  },
  {
    icon: Users,
    title: "Ervaren Specialisten", 
    description: "Alle medewerkers zijn gescreend en hebben ruime ervaring"
  }
]

const guarantees = [
  "✓ Transparante prijzen - geen verrassingen achteraf", 
  "✓ Gratis nazorg - altijd bereikbaar voor vragen",
  "✓ Veilig en betrouwbaar - volledig verzekerd",
  "✓ Snelle service - meestal binnen 24-48 uur"
]

export function TrustSignals() {
  return (
    <section className="section-spacing bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Waarom Ons Vertrouwen?
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Ervaren specialisten met bewezen expertise. Ontdek waarom mensen voor onze service kiezen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {trustSignals.map((signal, index) => {
            const IconComponent = signal.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                  {signal.title}
                </h3>
                <p className="text-primary-700 leading-relaxed">
                  {signal.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="card-3d max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-6">
                Onze Garanties Voor U
              </h3>
              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-700 text-lg">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h4 className="text-xl font-semibold text-secondary-800 mb-4">
                  Nog vragen? Bel ons!
                </h4>
                <p className="text-primary-700 mb-6">
                  Onze vriendelijke medewerkers staan klaar om al uw vragen te beantwoorden. 
                  Geen verplichtingen, gewoon eerlijk advies.
                </p>
                <a href="tel:+31642827860" className="btn-cta w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Bel Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}