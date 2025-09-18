'use client'

import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import { 
  Monitor, 
  Wifi, 
  Printer,
  Smartphone,
  GraduationCap,
  Mail,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: Monitor,
    emoji: '💻',
    title: 'Computer',
    href: '/diensten/computerhulp'
  },
  {
    icon: Printer,
    emoji: '🖨️',
    title: 'Printer & Scanner',
    href: '/diensten/printerhulp'
  },
  {
    icon: Mail,
    emoji: '📧',
    title: 'E-mail',
    href: '/diensten/email-problemen'
  },
  {
    icon: Wifi,
    emoji: '📶',
    title: 'Internet',
    href: '/diensten/internet-wifi'
  },
  {
    icon: Smartphone,
    emoji: '📱',
    title: 'Tablet & Smartphone',
    href: '/diensten/tablet-smartphone'
  },
  {
    icon: GraduationCap,
    emoji: '🎓',
    title: 'Uitleg & Les',
    href: '/diensten/uitleg-les'
  },
]

export function ServicesPreview() {
  return (
    <section className="section-spacing">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-gradient mb-6">
            Onze Diensten
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, _index) => {
            const IconComponent = service.icon
            return (
              <Link key={service.title} href={service.href}>
                <Card className="h-full group hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>

                    {/* Hover button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <div className="btn-secondary">
                        Meer informatie
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/diensten" className="btn-cta">
            Alle diensten bekijken
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}