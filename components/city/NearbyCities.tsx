import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { getNearbyCities } from '@/lib/utils/distance'

interface NearbyCitiesProps {
  currentCitySlug: string
  pageType: 'regios' | 'computerhulp' | 'student'
}

export function NearbyCities({ currentCitySlug, pageType }: NearbyCitiesProps) {
  const nearby = getNearbyCities(currentCitySlug, 5)

  if (nearby.length === 0) return null

  const getPath = (slug: string) => {
    switch (pageType) {
      case 'regios':
        return `/regios/${slug}`
      case 'computerhulp':
        return `/computerhulp-aan-huis-${slug}`
      case 'student':
        return `/student-aan-huis-${slug}`
    }
  }

  const getLabel = () => {
    switch (pageType) {
      case 'regios':
        return 'Computerhulp in de buurt'
      case 'computerhulp':
        return 'Computerhulp in de buurt'
      case 'student':
        return 'IT-studenten in de buurt'
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3">
          {getLabel()}
        </h2>
        <p className="text-secondary-600 mb-8 max-w-2xl">
          Wij zijn ook actief in omliggende steden. Bekijk onze diensten bij u in de buurt.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {nearby.map((city) => (
            <Link
              key={city.slug}
              href={getPath(city.slug)}
              className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-secondary-900 block">{city.name}</span>
                <span className="text-secondary-500 text-sm">{city.region}</span>
                <span className="text-secondary-400 text-xs block mt-1">{city.distance} km</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
