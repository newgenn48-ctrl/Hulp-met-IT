'use client'

import Link from 'next/link'
import { Monitor, Printer, Wifi, Smartphone, Mail, ChevronRight } from 'lucide-react'
import services from '@/lib/data/services.json'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Printer,
  Wifi,
  Smartphone,
  Mail,
}

export function CompactServicesSection() {
  const displayServices = services.slice(0, 6)

  return (
    <section className="py-16 lg:py-24 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900">
            Onze diensten
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {displayServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Monitor
            return (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="group flex items-center gap-4 bg-white rounded-lg px-5 py-4 hover:shadow-md transition-shadow border border-secondary-100"
              >
                <div className="w-9 h-9 rounded-md bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-[18px] h-[18px] text-primary-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-secondary-900 text-[15px]">
                    {service.name}
                  </h3>
                  <p className="text-secondary-500 text-sm truncate">
                    {service.shortDescription}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-secondary-300 group-hover:text-primary-500 transition-colors flex-shrink-0" />
              </Link>
            )
          })}
        </div>

        <div className="mt-6">
          <Link
            href="/diensten"
            className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            Alle diensten bekijken &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
