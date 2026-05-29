'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const rows = [
  { label: 'per kwartier', value: '€15,50' },
  { label: 'voorrijkosten', value: '€10' },
  { label: 'minimale afname', value: '3 kwartier' },
]

export function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Tarieven</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
              Wat kost het?
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-md mx-auto">
          <ScrollReveal>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-card">
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600" />

              <div className="p-6 lg:p-8">
                <div className="space-y-0 mb-8">
                  {rows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-3.5 border-b border-secondary-100 last:border-0">
                      <span className="text-secondary-600">{row.label}</span>
                      <span className="text-lg font-bold text-secondary-900">{row.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-white bg-primary-600 hover:bg-primary-700 shadow-primary"
                >
                  Afspraak inplannen
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
