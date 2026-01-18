'use client'

import { Monitor, Printer, Wifi, Smartphone, Mail, GraduationCap, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import services from '@/lib/data/services.json'

const iconMap = {
  Monitor,
  Printer,
  Wifi,
  Smartphone,
  Mail,
  GraduationCap
}

interface ServicesGridProps {
  title?: string
  showAll?: boolean
  maxItems?: number
}

export function ServicesGrid({
  title = "Waar kunnen wij u mee helpen?",
  showAll = false,
  maxItems = 6
}: ServicesGridProps) {
  const displayServices = showAll ? services : services.slice(0, maxItems)

  return (
    <section className="py-20 lg:py-28 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-16">
          <p className="text-primary-700 font-semibold mb-3">Onze diensten</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Van trage computers tot WiFi-problemen. Wij helpen u met al uw technische vragen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="group bg-white rounded-xl p-6 border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary-700 font-medium group-hover:text-primary-600">
                  Meer info
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            )
          })}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link
              href="/diensten"
              className="inline-flex items-center justify-center px-7 py-4 text-lg font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors shadow-lg shadow-primary-500/30"
            >
              Bekijk alle diensten
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
