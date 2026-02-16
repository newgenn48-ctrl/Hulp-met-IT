'use client'

import Link from 'next/link'
import { MapPin, ArrowRight, ChevronRight } from 'lucide-react'
import cities from '@/lib/data/cities.json'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const displayCities = cities.slice(0, 8)
const totalCities = cities.length

export function RegionsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Werkgebied</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Actief in heel Nederland
            </h2>
            <p className="text-secondary-500 max-w-xl mx-auto text-lg">
              Onze studenten komen gewoon bij u thuis, waar u ook woont.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 mb-10">
          {displayCities.map((city, index) => (
            <ScrollReveal key={city.slug} delay={index * 50}>
              <Link
                href={`/computerhulp-aan-huis-${city.slug}`}
                className="group flex items-center gap-3 bg-white rounded-xl p-3.5 lg:p-4 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-secondary-900 text-sm group-hover:text-primary-600 transition-colors truncate">
                  {city.name}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-secondary-300 group-hover:text-primary-500 transition-colors flex-shrink-0 ml-auto" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-secondary-400 text-sm">+ {totalCities - 8} andere steden</span>
            <Link
              href="/regios"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-primary text-sm"
            >
              Alle regio&apos;s bekijken
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
