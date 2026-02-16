'use client'

import Link from 'next/link'
import { Monitor, Printer, Wifi, Smartphone, Mail, Shield, HardDrive, ArrowRight } from 'lucide-react'
import services from '@/lib/data/services.json'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor, Printer, Wifi, Smartphone, Mail, Shield, HardDrive,
}

export function CompactServicesSection() {
  const displayServices = services.slice(0, 6)

  return (
    <section className="relative py-20 lg:py-28 bg-secondary-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-15" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Onze diensten</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Waar kunnen wij u mee helpen?
            </h2>
            <p className="text-secondary-500 max-w-2xl mx-auto text-lg">
              Of het nu gaat om uw computer, printer of internet — wij komen bij u thuis en helpen u rustig verder.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-column professional grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Monitor
            return (
              <ScrollReveal key={service.slug} delay={index * 80}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className="group block h-full bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-secondary-500 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                    Meer info
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-10">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              Bekijk alle diensten
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
