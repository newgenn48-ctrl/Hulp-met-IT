'use client'

import { PricingCard } from '@/components/ui/PricingCard'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export function PricingSection() {
  const standardFeatures = [
    "Minimale afname: 3 kwartier",
    "Voorrijkosten €10 (eenmalig)",
    "Afspraak vanaf overmorgen mogelijk"
  ]

  const urgentFeatures = [
    "Minimale afname: 3 kwartier",
    "Voorrijkosten €10 (eenmalig)",
    "Binnen 24 uur bij u thuis",
    "Ook avonden en weekenden beschikbaar",
    "Prioriteit bij acute problemen"
  ]

  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Transparante Prijzen
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Alle kosten vooraf bekend, geen verrassingen achteraf. Minimaal 3 kwartier per bezoek voor grondige hulp.
            Meeste problemen zijn binnen deze tijd opgelost!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-4">
          <PricingCard
            title="Standaard Hulp"
            price="€14,50"
            period="per kwartier"
            features={standardFeatures}
          />

          <PricingCard
            title="Spoedhulp"
            price="€18,50"
            period="per kwartier"
            features={urgentFeatures}
            popular={true}
          />
        </div>

        <p className="text-center text-sm text-secondary-600 mb-8">
          * Alle prijzen zijn inclusief 21% BTW
        </p>

        <div className="text-center">
          <div className="card-3d max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              Klaar om uw IT-problemen op te lossen?
            </h3>
            <p className="text-primary-700 mb-6">
              Bel direct om uw probleem te bespreken. Wij adviseren u eerlijk over de beste oplossing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/afspraak" className="btn-cta">
                <ArrowRight className="w-5 h-5 mr-2" />
                Afspraak Maken
              </Link>
              <a href="tel:+31642827860" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Direct Bellen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}