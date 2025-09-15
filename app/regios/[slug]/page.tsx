import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import Link from 'next/link'
import { 
  MapPin, 
  Users, 
  Clock, 
  Star,
  Phone,
  ArrowRight,
  CheckCircle,
  Award,
  Shield,
  Zap
} from 'lucide-react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import cities from '@/lib/data/cities.json'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const params = cities.map((city) => ({
    slug: city.slug,
  }))
  
  // Also generate params for computerhulp- prefixed URLs
  const computerhulpParams = cities.map((city) => ({
    slug: `computerhulp-${city.slug}`,
  }))
  
  return [...params, ...computerhulpParams]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Handle both formats: direct city slug and computerhulp-city
  const citySlug = params.slug.startsWith('computerhulp-') 
    ? params.slug.replace('computerhulp-', '') 
    : params.slug
    
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    return {
      title: 'Stad niet gevonden'
    }
  }

  const title = `Computerhulp ${city.name} - IT Service aan Huis | Hulp met IT`
  const description = `${city.longDescription} ✓ Snelle service ✓ Lokale kennis ✓ Ervaren IT-specialisten`

  // Use computerhulp- URL in metadata if that's how we were accessed
  const canonicalUrl = params.slug.startsWith('computerhulp-') 
    ? `https://hulpmetit.nl/regios/computerhulp-${city.slug}`
    : `https://hulpmetit.nl/regios/${city.slug}`

  return {
    title,
    description,
    keywords: city.keywords,
    openGraph: {
      title: `Computerhulp ${city.name} - Hulp met IT`,
      description: city.longDescription,
      images: [`/images/cities/${city.slug}-og.webp`],
      type: 'website',
      locale: 'nl_NL'
    },
    alternates: {
      canonical: canonicalUrl
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function CityPage({ params }: PageProps) {
  // Handle both formats: direct city slug and computerhulp-city
  const citySlug = params.slug.startsWith('computerhulp-') 
    ? params.slug.replace('computerhulp-', '') 
    : params.slug
    
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    notFound()
  }

  const benefits = [
    {
      icon: Clock,
      title: 'Snelle Service',
      description: 'Meestal binnen 24-48 uur ter plaatse voor al uw IT-problemen',
    },
    {
      icon: Star,
      title: 'Hoge Kwaliteit',
      description: 'Ervaren IT-studenten met uitstekende reviews en resultaten',
    },
    {
      icon: Users,
      title: 'Lokale Kennis',
      description: `Onze specialisten kennen ${city.name} en omgeving door en door`,
    },
    {
      icon: Shield,
      title: 'Volledig Verzekerd',
      description: 'Alle medewerkers zijn gescreend en verzekerd voor uw veiligheid',
    },
  ]

  const schemaUrl = params.slug.startsWith('computerhulp-') 
    ? `https://hulpmetit.nl/regios/computerhulp-${city.slug}`
    : `https://hulpmetit.nl/regios/${city.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Hulp met IT ${city.name}`,
    description: city.longDescription,
    url: schemaUrl,
    telephone: '+31642827860',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng,
    },
    areaServed: city.serviceAreas.map(area => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: [
      'Computerhulp',
      'IT Support', 
      'Laptop Reparatie',
      'Internet Installatie',
      'Printer Hulp',
      'E-mail Problemen',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
    },
    openingHours: [
      'Mo-Fr 08:00-21:00',
      'Sa 09:00-18:00', 
      'Su 10:00-17:00'
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="relative min-h-screen">
        <ClientWrapper>
          <FloatingElements />
        </ClientWrapper>
        
        <section className="hero-section relative z-10 md:z-auto">
          <div className="max-w-6xl mx-auto container-padding">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mr-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gradient">
                    Computerhulp {city.name}
                  </h1>
                  <p className="text-lg text-neural-300">{city.population} inwoners</p>
                </div>
              </div>
              
              <p className="text-xl text-neural-300 max-w-4xl mx-auto leading-relaxed mb-8">
                {city.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+31642827860" className="btn-cta text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Direct bellen - Snelle service
                </a>
                <Link href="/afspraak">
                  <button className="btn-secondary text-lg px-8 py-4">
                    Online afspraak maken
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="card-3d text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neural-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Service Areas */}
            <div className="mb-8">
              <div className="card-3d">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Waar we actief zijn in {city.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {city.serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-neural-300">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Preview */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-center text-white mb-4">
                Onze IT-Diensten in {city.name}
              </h2>
              <p className="text-lg text-neural-300 text-center max-w-3xl mx-auto mb-8">
                Van eenvoudige installaties tot complexe reparaties - onze IT-specialisten 
                in {city.name} helpen u met alle computerproblemen.
              </p>
              <ServicesPreview />
            </div>

            {/* Why Choose Us */}
            <div className="mb-8">
              <div className="card-3d">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Waarom kiezen voor Hulp met IT in {city.name}?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Lokale Expertise
                        </h3>
                        <p className="text-neural-300">
                          Onze IT-specialisten kennen {city.name} door en door en begrijpen 
                          de specifieke behoeften van inwoners en bedrijven.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Bewezen Track Record
                        </h3>
                        <p className="text-neural-300">
                          Vele tevreden klanten in {city.name} en omgeving vertrouwen 
                          al jaren op onze betrouwbare IT-service.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Snelle Response
                        </h3>
                        <p className="text-neural-300">
                          In {city.name} zijn we meestal binnen 24-48 uur ter plaatse, 
                          vaak zelfs nog sneller voor spoedgevallen.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Veilig & Betrouwbaar
                        </h3>
                        <p className="text-neural-300">
                          Volledig verzekerd, gescreende medewerkers en garantie op al ons werk. 
                          Uw apparaten en data zijn veilig bij ons.
                        </p>
                      </div>
                    </div>
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