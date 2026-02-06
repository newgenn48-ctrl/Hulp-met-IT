'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'

const points = [
  'Echte mensen, geen callcenter',
  'Duidelijke taal, geen jargon',
  'Geduldig en op uw tempo',
  'Meer dan 10 jaar ervaring',
  'Veilig en verzekerd',
  'Nazorg als u nog vragen heeft',
]

export function TrustSignals() {
  return (
    <section className="relative bg-secondary-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/student-aan-huis.webp"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Persoonlijk en betrouwbaar
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Wij zijn geen groot bedrijf. U krijgt een vriendelijke medewerker aan de deur die de tijd voor u neemt.
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {points.map((point, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-white/90 text-[15px]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
