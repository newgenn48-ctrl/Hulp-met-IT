import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { NoSSR } from '@/components/NoSSR'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import Link from 'next/link'
import { 
  Monitor, 
  Wifi, 
  Shield, 
  HardDrive, 
  Smartphone,
  Printer,
  GraduationCap,
  Mail,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Metadata } from 'next'
import services from '@/lib/data/services.json'

export const metadata: Metadata = {
  title: 'Computerhulp & IT Diensten aan Huis | Hulp met IT',
  description: 'Overzicht van al onze IT-diensten: computer hulp, laptop ondersteuning, internet problemen, computer opschonen, software installatie en meer. Transparante tarieven, persoonlijke service.',
  keywords: [
    'IT diensten',
    'computer hulp',
    'laptop ondersteuning',
    'computer opschonen',
    'software installatie',
    'internet problemen',
    'hardware hulp',
    'data ondersteuning'
  ],
  openGraph: {
    title: 'Onze IT-Diensten - Vriendelijke Computerhulp aan Huis',
    description: 'Vriendelijke IT-diensten aan huis: hulp, installatie, onderhoud en meer',
    images: ['/images/services-og.webp'],
  },
}

const iconMap = {
  Monitor,
  Wifi,
  Shield,
  HardDrive,
  Smartphone,
  Printer,
  GraduationCap,
  Mail,
}

export default function DienstenPage() {
  const breadcrumbItems = [
    { name: 'Diensten', url: '/diensten' }
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="relative min-h-screen">
        <NoSSR fallback={<div className="absolute inset-0 pointer-events-none" />}>
          <ClientWrapper>
            <FloatingElements />
          </ClientWrapper>
        </NoSSR>
        
        <section className="hero-section relative z-10">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-6">
                Onze Diensten
              </h1>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto leading-relaxed">
                Van eenvoudige software-installaties tot complexe netwerkproblemen -
                onze vriendelijke IT-specialisten helpen u persoonlijk met alle computergerelateerde vragen.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {services.map((service, _index) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap]
                
                return (
                  <div key={service.slug} className="card-3d group">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-secondary-800 mb-3">
                          {service.name}
                        </h3>
                        <p className="text-secondary-700 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-lg font-medium text-secondary-800 mb-3">
                            Wat we doen:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-secondary-700 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-secondary-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href={`/diensten/${service.slug}`} className="btn-secondary relative z-20">
                          Meer informatie
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center">
              <div className="glass-effect rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-secondary-800 mb-4">
                  Niet gevonden wat u zoekt?
                </h2>
                <p className="text-lg text-secondary-700 mb-6">
                  We helpen graag met alle IT-gerelateerde problemen. 
                  Neem contact op voor een gratis adviesgesprek.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/afspraak" className="btn-cta">
                    Afspraak Maken
                  </Link>
                  <Link href="/contact" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center">
                    Direct contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}