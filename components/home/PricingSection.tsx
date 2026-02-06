'use client'

import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export function PricingSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
          Eenvoudige prijzen
        </h2>
        <p className="text-secondary-500 mb-10">
          Geen abonnement, geen verborgen kosten. U betaalt achteraf.
        </p>

        <div className="bg-white rounded-xl border border-secondary-200 text-left mb-8">
          <div className="p-6 border-b border-secondary-100">
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold text-secondary-900">Hulp aan huis</h3>
              <div className="text-right">
                <span className="text-3xl font-bold text-secondary-900">&euro;14,50</span>
                <p className="text-xs text-secondary-400 mt-0.5">per kwartier</p>
              </div>
            </div>
          </div>
          <div className="px-6 py-3.5 border-b border-secondary-100 flex justify-between items-center">
            <span className="text-sm text-secondary-600">Minimum</span>
            <span className="text-sm font-medium text-secondary-900">45 minuten (3 kwartier)</span>
          </div>
          <div className="px-6 py-3.5 border-b border-secondary-100 flex justify-between items-center">
            <span className="text-sm text-secondary-600">Voorrijkosten</span>
            <span className="text-sm font-medium text-secondary-900">&euro;10</span>
          </div>
          <div className="px-6 py-3.5 flex justify-between items-center">
            <span className="text-sm text-secondary-600">Betaling</span>
            <span className="text-sm font-medium text-secondary-900">Achteraf, per pin of tikkie</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+31642827860"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            Bel voor advies
          </a>
          <Link
            href="/afspraak"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-secondary-700 bg-white border border-secondary-200 hover:border-secondary-300 rounded-lg transition-colors"
          >
            Afspraak inplannen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
