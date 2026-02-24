'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const plan = {
  name: 'Standaardhulp',
  price: '14,50',
  unit: '/ kwartier',
  features: [
    { label: 'Minimum', value: '45 minuten' },
    { label: 'Voorrijkosten', value: '€10' },
    { label: 'Geholpen vanaf', value: 'Binnen 48 uur' },
    { label: 'Beschikbaar', value: 'Ma-Zo 08:00-21:00' },
    { label: 'Betaling', value: 'Achteraf per pin of Tikkie' },
  ],
  cta: 'Afspraak inplannen',
}

export function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Tarieven</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Duidelijke prijzen, geen verrassingen
            </h2>
            <p className="text-secondary-500 max-w-xl mx-auto text-lg">
              U betaalt alleen voor de tijd die nodig is. Geen abonnement, geen kleine lettertjes.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-md mx-auto">
          <ScrollReveal>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-card">
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600" />

              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-secondary-900">{plan.name}</h3>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl lg:text-5xl font-extrabold text-secondary-900">&euro;{plan.price}</span>
                  <span className="text-secondary-500 font-medium">{plan.unit}</span>
                </div>

                <div className="space-y-0 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature.label} className="flex items-center justify-between py-2.5 border-b border-secondary-100 last:border-0">
                      <span className="text-sm text-secondary-600 flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        {feature.label}
                      </span>
                      <span className="text-sm font-semibold text-secondary-900">{feature.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-white bg-primary-600 hover:bg-primary-700 shadow-primary"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
