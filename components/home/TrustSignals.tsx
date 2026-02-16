'use client'

import { Check } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const points = [
  'Echte mensen, geen callcenter',
  'Duidelijke taal, geen jargon',
  'Geduldig en op uw tempo',
  'HBO-opgeleide studenten',
  'Veilig en verzekerd',
  'Nazorg als u nog vragen heeft',
]

export function TrustSignals() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background + grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <ScrollReveal>
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Persoonlijk en betrouwbaar
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Wij zijn een klein team. U krijgt een vriendelijke student aan de deur die u rustig en geduldig helpt.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-3">
          {points.map((point, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg border border-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="w-7 h-7 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-white/90 text-[15px]">{point}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
