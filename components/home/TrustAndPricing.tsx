'use client'

import { Check, GraduationCap, MapPin, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const stats = [
  { value: 'HBO', label: 'Opgeleide studenten', icon: GraduationCap },
  { value: '40+', label: 'Steden', icon: MapPin },
  { value: '7', label: 'Dagen per week', icon: Clock },
]

const trustPoints = [
  'Echte mensen, geen callcenter',
  'Duidelijke taal, geen jargon',
  'Geduldig en op uw tempo',
  'Veilig en verzekerd',
  'Nazorg als u nog vragen heeft',
]

export function TrustAndPricing() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* Stats row */}
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-16 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-5xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Centered trust content */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-primary-400 font-semibold text-sm tracking-wide uppercase mb-3">Wie wij zijn</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Persoonlijk en betrouwbaar
            </h2>
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
              Wij zijn een klein team van vriendelijke studenten. U krijgt iemand aan de deur die u rustig helpt en alles uitlegt in gewone taal.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary-400" />
                </div>
                <span className="text-white/90 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
