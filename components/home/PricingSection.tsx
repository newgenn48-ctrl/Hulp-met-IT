'use client'

import Link from 'next/link'
import { Phone, ArrowRight, Check, Clock } from 'lucide-react'

export function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-16">
          <p className="text-primary-700 font-semibold mb-3">Tarieven</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Duidelijke prijzen, geen verrassingen
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            U betaalt alleen voor de tijd die wij besteden. Transparant en eerlijk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Standaard */}
          <div className="bg-white rounded-2xl p-8 border-2 border-secondary-200">
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              Standaard hulp
            </h3>
            <p className="text-secondary-500 mb-6">Afspraak vanaf overmorgen</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-secondary-900">€14,50</span>
              <span className="text-secondary-500 ml-2">per kwartier</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-secondary-700">
                <Check className="w-5 h-5 text-primary-700" />
                Minimaal 45 minuten
              </li>
              <li className="flex items-center gap-3 text-secondary-700">
                <Check className="w-5 h-5 text-primary-700" />
                €10 voorrijkosten (eenmalig)
              </li>
              <li className="flex items-center gap-3 text-secondary-700">
                <Check className="w-5 h-5 text-primary-700" />
                Betaling achteraf
              </li>
            </ul>
            <div className="bg-secondary-50 rounded-lg p-4 text-center">
              <p className="text-sm text-secondary-600">Voorbeeld: 45 min</p>
              <p className="text-2xl font-bold text-secondary-900">€53,50 totaal</p>
            </div>
          </div>

          {/* Spoedhulp */}
          <div className="bg-primary-500 rounded-2xl p-8 text-white relative">
            <div className="absolute -top-3 right-8">
              <span className="bg-white text-primary-600 text-sm font-bold px-4 py-1 rounded-full shadow-md">
                Populair
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Spoedhulp
            </h3>
            <p className="text-white/80 mb-6">Vandaag of morgen bij u thuis</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">€18,50</span>
              <span className="text-white/80 ml-2">per kwartier</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" />
                Binnen 24 uur bij u
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" />
                Ook &apos;s avonds en weekends
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" />
                Prioriteit bij acute problemen
              </li>
            </ul>
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <p className="text-sm text-white/80">Voorbeeld: 45 min</p>
              <p className="text-2xl font-bold">€65,50 totaal</p>
            </div>
          </div>

        </div>

        {/* Note */}
        <div className="flex items-center justify-center gap-3 bg-primary-50 border border-primary-200 rounded-xl px-6 py-4 mb-12 max-w-xl mx-auto">
          <Clock className="w-5 h-5 text-primary-700 flex-shrink-0" />
          <p className="text-secondary-700 font-medium">
            De meeste voorkomende problemen worden binnen 45 minuten opgelost.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Hulp nodig? Bel ons direct.
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-lg mx-auto">
            Vrijblijvend adviesgesprek. Wij vertellen u direct wat wij voor u kunnen doen - zonder verplichtingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel 06-42 82 78 60
            </a>
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-xl transition-colors"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
