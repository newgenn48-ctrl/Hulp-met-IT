'use client'

import { Monitor, Printer, Wifi, Smartphone, Mail, GraduationCap, ChevronRight } from 'lucide-react'
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
  title = "Onze diensten",
  showAll = false,
  maxItems = 6
}: ServicesGridProps) {
  const displayServices = showAll ? services : services.slice(0, maxItems)

  return (
    <section className="relative py-20 lg:py-28 bg-secondary-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900">
            {title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {displayServices.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Monitor
            return (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="group flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <IconComponent className="w-[18px] h-[18px] text-primary-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-secondary-900 text-sm">
                    {service.name}
                  </h3>
                  <p className="text-secondary-500 text-sm">
                    {service.shortDescription}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-secondary-300 group-hover:text-primary-500 transition-colors flex-shrink-0 mt-1" />
              </Link>
            )
          })}
        </div>

        {!showAll && (
          <div className="mt-6">
            <Link
              href="/diensten"
              className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
            >
              Alle diensten bekijken &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
