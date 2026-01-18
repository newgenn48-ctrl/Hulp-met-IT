'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Award, Clock, Shield } from 'lucide-react'

const stats = [
  { icon: Users, value: '2000+', label: 'Tevreden klanten' },
  { icon: Award, value: '10+', label: 'Jaar ervaring' },
  { icon: Clock, value: 'Snel', label: 'Ter plaatse' },
  { icon: Shield, value: '100%', label: 'Verzekerd' },
]

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Foto */}
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl transform -rotate-3" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/student-aan-huis.webp"
                alt="Hulp met IT specialist helpt klant thuis"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary-500 font-semibold mb-3">Over Hulp met IT</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              Persoonlijke IT-hulp waar u op kunt rekenen
            </h2>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              <strong className="text-secondary-800">Hulp met IT</strong> is geen groot bedrijf, maar een klein team dat echt om u geeft.
              Al meer dan 10 jaar helpen wij mensen met hun computer- en IT-problemen.
            </p>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Of u nu moeite heeft met uw laptop, WiFi, printer of tablet - wij komen
              naar u toe en zorgen ervoor dat alles weer werkt.
            </p>

            {/* Stats inline */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-5 h-5 text-primary-600" />
                    </div>
                    <p className="text-xl font-bold text-secondary-900">{stat.value}</p>
                    <p className="text-secondary-600 text-sm">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            <Link
              href="/over-ons"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors shadow-lg shadow-primary-500/30"
            >
              Meer over ons
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
