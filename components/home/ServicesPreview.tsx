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
    title: 'Computerhulp',
    description: 'Computer installatie, problemen oplossen, onderhoud en reparatie',
    href: '/diensten/computerhulp'
  },
  {
    icon: Printer,
    emoji: '🖨️',
    title: 'Printerhulp',
    description: 'Printer werkt niet? Wij zorgen dat u weer kunt printen!',
    href: '/diensten/printerhulp'
  },
  {
    icon: Mail,
    emoji: '📧',
    title: 'E-mail Problemen',
    description: 'E-mail werkt niet? Wij zorgen dat u weer berichten kunt versturen!',
    href: '/diensten/email-problemen'
  },
  {
    icon: Wifi,
    emoji: '📶',
    title: 'Internet & WiFi',
    description: 'Internet traag? WiFi problemen? Wij helpen!',
    href: '/diensten/internet-wifi'
  },
  {
    icon: Smartphone,
    emoji: '📱',
    title: 'Tablet & Smartphone',
    description: 'Hulp met uw tablet of smartphone nodig?',
    href: '/diensten/tablet-smartphone'
  },
  {
    icon: GraduationCap,
    emoji: '🎓',
    title: 'Uitleg & Les',
    description: 'Rustig en geduldig computerles aan huis',
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
          <p className="text-xl text-neural-300 max-w-3xl mx-auto leading-relaxed">
            Van het installeren van programma's tot internet problemen - 
            onze vriendelijke specialisten helpen u met alle computer vragen. We leggen alles rustig uit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={service.title}>
                <Card className="h-full group hover:scale-105 transition-transform duration-300">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-neural-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link href={service.href} className="btn-secondary">
                      Meer info
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </Card>
              </div>
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