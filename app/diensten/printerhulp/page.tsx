import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import Link from 'next/link'
import { 
  Printer, 
  Clock, 
  Euro,
  CheckCircle,
  ArrowRight,
  Phone,
  Shield
} from 'lucide-react'
import { Metadata } from 'next'
import services from '@/lib/data/services.json'

const service = services.find(s => s.slug === 'printerhulp')!

export const metadata: Metadata = {
  title: `${service.name} - Professionele Printerhulp aan Huis | Hulp met IT`,
  description: service.longDescription,
  keywords: service.keywords,
  openGraph: {
    title: `${service.name} - Hulp met IT`,
    description: service.longDescription,
    images: [`/images/${service.slug}-og.webp`],
  },
}

export default function PrinterhulpPage() {
  return (
    <>      
      <div className="relative min-h-screen">
        <ClientWrapper>
          <FloatingElements />
        </ClientWrapper>
        
        <section className="hero-section">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">{service.emoji}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-6">
                {service.name}
              </h1>
              <p className="text-xl text-neural-300 max-w-3xl mx-auto leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="card-3d">
                  <h2 className="text-3xl font-semibold text-white mb-6">
                    Wat we voor u doen
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-neural-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-3d">
                  <h2 className="text-3xl font-semibold text-white mb-6">
                    Ons Proces
                  </h2>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-neural-300">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-3d">
                  <h2 className="text-3xl font-semibold text-white mb-6">
                    Veel voorkomende problemen
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.commonIssues.map((issue, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-neural-300">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <div className="card-3d">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Direct een afspraak?
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+31642827860"
                      className="btn-cta w-full text-center flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Direct bellen
                    </a>
                    <Link href="/afspraak">
                      <button className="btn-secondary w-full">
                        Online afspraak maken
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="card-3d max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Klaar om uw printer te laten installeren?
                </h2>
                <p className="text-neural-300 mb-6">
                  Bel nu voor een snelle afspraak of bekijk onze andere diensten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+31642827860" className="btn-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    Direct bellen
                  </a>
                  <Link href="/diensten">
                    <button className="btn-secondary">
                      Alle diensten
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
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