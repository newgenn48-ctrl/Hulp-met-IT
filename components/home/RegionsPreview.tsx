'use client'

import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import { 
  MapPin, 
  ArrowRight,
  Users
} from 'lucide-react'
import cities from '@/lib/data/cities.json'

const featuredCities = cities
  .slice(0, 6)

export function RegionsPreview() {
  return (
    <section className="section-spacing">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-gradient mb-6">
            Onze Regio's
          </h2>
          <p className="text-xl text-neural-300 max-w-3xl mx-auto leading-relaxed">
            We zijn actief in de belangrijkste Nederlandse steden én omliggende gemeenten. 
            Onze lokale IT-specialisten kennen uw regio door en door en bieden snelle service aan huis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredCities.map((city, index) => (
            <div key={city.slug}>
              <Card className="h-full group hover:scale-105 transition-transform duration-300">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {city.name}
                  </h3>
                  <p className="text-neural-400 text-sm mb-4">
                    {city.population} inwoners
                  </p>
                  <p className="text-neural-300 leading-relaxed mb-6">
                    {city.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-4 h-4 text-primary-400 mr-2" />
                      <span className="text-primary-400 font-semibold text-sm">
                        Lokale IT-service
                      </span>
                    </div>
                  </div>
                  
                  <Link href={`/regios/computerhulp-${city.slug}`} className="btn-secondary text-sm px-4 py-2">
                    IT-hulp {city.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="card-3d max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              In heel Nederland actief
            </h3>
            <p className="text-neural-300 mb-6">
              Ontdek alle steden en omliggende plaatsen waar wij IT-hulp aan huis bieden. Van Amsterdam tot Arnhem, 
              van Rotterdam tot Utrecht - overal in deze regio's staan onze experts voor u klaar.
            </p>
            <Link href="/regios" className="btn-cta">
              Alle regio's bekijken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}