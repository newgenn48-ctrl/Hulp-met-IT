'use client'

import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import cities from '@/lib/data/cities.json'

const featuredCities = cities.slice(0, 6)

export function RegionsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-16">
          <p className="text-primary-700 font-semibold mb-3">Werkgebied</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Actief in heel Nederland
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Onze IT-specialisten komen bij u thuis, waar u ook woont.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {featuredCities.map((city) => (
            <Link
              key={city.slug}
              href={`/computerhulp-aan-huis-${city.slug}`}
              className="group flex items-center gap-3 bg-secondary-50 hover:bg-primary-50 rounded-xl p-4 border border-secondary-200 hover:border-primary-300 transition-colors"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-secondary-200 group-hover:border-primary-300 group-hover:bg-primary-100 transition-colors flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {city.name}
                </p>
                <p className="text-secondary-500">IT-hulp aan huis</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/regios"
            className="inline-flex items-center justify-center px-7 py-4 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors shadow-lg shadow-primary-600/30"
          >
            Bekijk alle regio&apos;s
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  )
}
