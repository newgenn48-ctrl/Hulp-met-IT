import { FloatingElements } from '@/components/three/FloatingElements'
import { MetaTags } from '@/components/seo/MetaTags'
import Link from 'next/link'
import { 
  ArrowLeft, 
  CheckCircle, 
  Phone, 
  Calendar,
  Star,
  Shield,
  Wrench,
  Clock
} from 'lucide-react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import services from '@/lib/data/services.json'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Dienst niet gevonden',
    }
  }

  return {
    title: `${service.name} - IT Service aan Huis | Hulp met IT`,
    description: `${service.description} ✓ Ervaren IT-specialisten ✓ Vaste tarieven €13,99 per kwartier ✓ Snelle service ✓ Direct online afspraak maken`,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} - IT Service aan Huis`,
      description: service.description,
      images: [`/images/services/${service.slug}.webp`],
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug)
  
  if (!service) {
    notFound()
  }

  return (
    <>
      <MetaTags
        title={`${service.name} - IT Service aan Huis`}
        description={service.description}
      />
      
      <div className="relative min-h-screen">
        <FloatingElements />
        
        <section className="hero-section relative z-10 md:z-auto">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="mb-8">
              <Link href="/diensten" className="btn-secondary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Terug naar diensten
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-4">
                    {service.name}
                  </h1>
                  <p className="text-xl text-neural-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="card-3d mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Wat houdt deze service in?
                  </h2>
                  <p className="text-neural-300 leading-relaxed mb-6">
                    {service.longDescription}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-neural-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-3d mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Hoe werkt het?
                  </h2>
                  <div className="grid gap-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-white mb-2">
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

                {service.commonIssues && (
                  <div className="card-3d">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Veelvoorkomende problemen
                    </h2>
                    <div className="grid gap-4">
                      {service.commonIssues.map((issue, index) => (
                        <div key={index} className="flex items-start">
                          <Wrench className="w-5 h-5 text-accent-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-neural-300">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <div className="card-3d text-center">
                    <div className="space-y-3">
                      <Link href="/afspraak" className="btn-cta w-full">
                        <Calendar className="w-5 h-5 mr-2" />
                        Afspraak maken
                      </Link>

                      <a href="tel:+31642827860" className="btn-secondary w-full">
                        <Phone className="w-5 h-5 mr-2" />
                        Direct bellen
                      </a>
                    </div>
                  </div>

                  <div className="card-3d">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Waarom kiezen voor ons?
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-neural-300">5-sterren service</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-neural-300">Volledig verzekerd</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-neural-300">24-48u service</span>
                      </div>
                    </div>
                  </div>

                  <div className="card-3d">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Vragen over deze service?
                    </h3>
                    <p className="text-sm text-neural-300 mb-4">
                      Heeft u specifieke vragen? Neem vrijblijvend contact met ons op.
                    </p>
                    <Link href="/contact" className="btn-secondary w-full text-sm px-4 py-2">
                      Contact opnemen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}