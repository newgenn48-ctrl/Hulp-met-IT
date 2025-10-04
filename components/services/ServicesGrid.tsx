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
  title = "Onze Diensten",
  showAll = false,
  maxItems = 6
}: ServicesGridProps) {
  const displayServices = showAll ? services : services.slice(0, maxItems)

  return (
    <section className="section-spacing bg-primary-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
            {title}
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Professionele IT-ondersteuning voor al uw technische problemen
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {displayServices.map((service, _index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="group text-center p-8 bg-white rounded-2xl shadow-lg border border-primary-200 hover:shadow-xl hover:border-primary-300 hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-secondary-800 group-hover:text-primary-600 transition-colors duration-300 mb-4">
                  {service.name}
                </h3>

                <div className="mt-auto">
                  <span className="inline-flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors">
                    Meer info
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {!showAll && services.length > maxItems && (
          <div className="text-center mt-10">
            <Link href="/diensten" className="btn-cta">
              Alle Diensten Bekijken
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}