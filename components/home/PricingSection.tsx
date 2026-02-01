'use client'

import Link from 'next/link'
import { Phone, ArrowRight, Check } from 'lucide-react'

export function PricingSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Wat kost het?
          </h2>
        </div>

        {/* Simpele prijs card */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 sm:p-10 text-center text-white mb-8">
          <p className="text-white/80 text-lg mb-2">Meeste problemen opgelost</p>
          <div className="mb-6">
            <span className="text-5xl sm:text-6xl font-bold">vanaf €49</span>
            <span className="text-xl ml-2">all-in</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Inclusief voorrijkosten</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Inclusief eerste 45 minuten</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Geen verborgen kosten</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Betaling achteraf</span>
            </div>
          </div>

          <p className="text-white/70 text-sm mb-8">
            Spoedhulp mogelijk (vandaag of morgen) • U weet vooraf waar u aan toe bent
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel direct
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

        <p className="text-center text-secondary-500 text-sm">
          Vrijblijvend advies – geen verplichtingen
        </p>

      </div>
    </section>
  )
}
