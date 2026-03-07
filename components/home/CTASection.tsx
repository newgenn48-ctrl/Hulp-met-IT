'use client'

import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Kunnen wij u ergens<br className="hidden sm:block" /> mee helpen?
          </h2>

          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Wij helpen u graag. Bel gerust of plan een afspraak, dan komen wij bij u langs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-accent"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+31858005006"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Bel 085-8005006
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/50 text-sm">
            <span>Ma-Zo: 08:00-21:00</span>
            <span className="hidden sm:inline-block w-px h-4 bg-white/20" aria-hidden="true" />
            <span>Vanaf &euro;15,50 / kwartier</span>
            <span className="hidden sm:inline-block w-px h-4 bg-white/20" aria-hidden="true" />
            <span>Betaling achteraf</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
