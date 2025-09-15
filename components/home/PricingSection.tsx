'use client'

import { PricingCard } from '@/components/ui/PricingCard'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Phone } from 'lucide-react'

export function PricingSection() {
  const standardFeatures = [
    "Afspraak vanaf overmorgen",
    "Minimaal 3 kwartier (€51,97)",
    "Voorrijkosten €10,- (eenmalig)",
    "Telefonische nazorg included"
  ]
  
  const urgentFeatures = [
    "Binnen 24 uur bij u",
    "Minimaal 3 kwartier (€66,85)", 
    "Voorrijkosten €10,- (eenmalig)",
    "Extra telefonische hulp"
  ]

  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Duidelijke Prijzen
          </h2>
          <p className="text-xl text-neural-300 max-w-3xl mx-auto leading-relaxed">
            Alle kosten vooraf bekend, geen verrassingen achteraf. U weet precies waar u aan toe bent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          <PricingCard
            title="Standaard Hulp"
            price="€13,99"
            period="per kwartier"
            features={standardFeatures}
          />
          
          <PricingCard
            title="Spoedhulp"
            price="€18,95"
            period="per kwartier"
            features={urgentFeatures}
            popular={true}
          />
        </div>

        <div className="text-center">
          <div className="card-3d max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Klaar om uw IT-problemen op te lossen?
            </h3>
            <p className="text-neural-300 mb-6">
              Bel direct voor een vrijblijvend gesprek over uw situatie en de beste oplossing.
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