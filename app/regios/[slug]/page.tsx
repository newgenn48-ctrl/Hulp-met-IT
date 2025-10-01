import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { FAQSection } from '@/components/ui/FAQSection'
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

  const breadcrumbItems = [
    { name: 'Regio\'s', url: '/regios' },
    { name: `Computerhulp ${city.name}`, url: `/regios/computerhulp-${city.slug}` }
  ]

  // Generate city-specific FAQ data
  const cityFaqData = [
    {
      question: `Hoe snel kunnen jullie komen voor computerhulp in ${city.name}?`,
      answer: `In ${city.name} zijn we meestal binnen 24-48 uur ter plaatse. Voor spoedgevallen proberen we vaak nog dezelfde dag langs te komen. Bel ons voor de snelste service in ${city.name} en omgeving.`
    },
    {
      question: `Wat kost computerhulp aan huis in ${city.name}?`,
      answer: `Onze tarieven in ${city.name} beginnen vanaf €28,50 per kwartier. Er zijn geen voorrijkosten binnen ${city.name}. We geven altijd een duidelijke kostenopgave vooraf.`
    },
    {
      question: `Welke wijken in ${city.name} bedienen jullie?`,
      answer: `We bedienen ${city.name} en alle omliggende wijken: ${city.serviceAreas.slice(0, 4).join(', ')} en meer. Onze IT-specialisten kennen heel ${city.name} door en door.`
    },
    {
      question: `Kunnen jullie ook 's avonds en weekenden komen in ${city.name}?`,
      answer: `Ja! In ${city.name} zijn we flexibel beschikbaar: doordeweeks tot 21:00, weekenden tot 18:00, en voor noodgevallen soms ook later. We passen ons aan uw schema aan.`
    },
    {
      question: `Wat voor computerproblemen lossen jullie op in ${city.name}?`,
      answer: `In ${city.name} helpen we met alle IT-problemen: langzame computers, virussen, internet/WiFi issues, printer problemen, e-mail instellingen, data recovery en software installaties. Geen probleem te groot of klein!`
    }
  ]

  // Problem-focused content
  const commonProblems = [
    {
      problem: "Computer doet het niet meer",
      solution: `Vaak ligt dit aan een software probleem of een losse kabel. Onze experts in ${city.name} diagnosticeren snel de oorzaak.`,
      urgent: true
    },
    {
      problem: "Internet/WiFi werkt niet",
      solution: `WiFi problemen komen veel voor in ${city.name}. We controleren router, instellingen en signaalsterkte voor optimale verbinding.`,
      urgent: true
    },
    {
      problem: "Computer is heel langzaam",
      solution: `Langzame computers zijn vaak te redden! We ruimen op, verwijderen virussen en optimaliseren de prestaties.`,
      urgent: false
    },
    {
      problem: "Printer print niet",
      solution: `Printer problemen lossen we snel op: driver updates, cartridge issues, en WiFi-printing instellen.`,
      urgent: false
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": cityFaqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

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
                  <p className="text-lg text-secondary-700">{city.population} inwoners</p>
                </div>
              </div>
              
              <p className="text-xl text-secondary-700 max-w-4xl mx-auto leading-relaxed mb-8">
                {city.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+31642827860" className="btn-cta text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Direct bellen - Snelle service
                </a>
                <Link href="/afspraak" className="btn-secondary text-lg px-8 py-4">
                  Online afspraak maken
                  <ArrowRight className="w-5 h-5 ml-2" />
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
                    <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-700 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Service Areas */}
            <div className="mb-8">
              <div className="card-3d">
                <h2 className="text-3xl font-bold text-secondary-800 mb-8 text-center">
                  Waar we actief zijn in {city.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {city.serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-secondary-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Preview */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-center text-secondary-800 mb-4">
                Onze IT-Diensten in {city.name}
              </h2>
              <p className="text-lg text-secondary-700 text-center max-w-3xl mx-auto mb-8">
                Van eenvoudige installaties tot complexe reparaties - onze IT-specialisten 
                in {city.name} helpen u met alle computerproblemen.
              </p>
              <ServicesPreview />
            </div>

            {/* Problem-Focused Content */}
            <div className="mb-8">
              <div className="card-3d">
                <h2 className="text-3xl font-bold text-secondary-800 mb-8 text-center">
                  Computer Problemen in {city.name}? Wij Helpen Direct!
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {commonProblems.map((item, index) => (
                    <div key={index} className={`p-6 rounded-lg border-l-4 ${item.urgent ? 'border-red-500 bg-red-50' : 'border-blue-500 bg-blue-50'}`}>
                      <h3 className="text-lg font-semibold text-secondary-800 mb-3 flex items-center">
                        {item.urgent && <span className="text-red-500 mr-2">🚨</span>}
                        {item.problem}
                      </h3>
                      <p className="text-secondary-700 mb-4">{item.solution}</p>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${item.urgent ? 'text-red-600' : 'text-blue-600'}`}>
                          {item.urgent ? 'Spoedhulp beschikbaar' : 'Snelle oplossing'}
                        </span>
                        <a href="tel:+31642827860" className="text-primary-600 hover:text-primary-700 font-medium">
                          Direct bellen →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-4">
                    Uw probleem staat er niet bij?
                  </h3>
                  <p className="text-secondary-700 mb-6">
                    Geen zorgen! Onze IT-experts in {city.name} hebben oplossingen voor alle computerproblemen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+31642827860" className="btn-cta">
                      <Phone className="w-5 h-5 mr-2" />
                      Bel Nu - Gratis Advies
                    </a>
                    <Link href="/afspraak" className="btn-secondary">
                      Plan Online Afspraak
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-8">
              <div className="card-3d">
                <h2 className="text-3xl font-bold text-secondary-800 mb-8 text-center">
                  Waarom kiezen voor Hulp met IT in {city.name}?
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                          Lokale Expertise
                        </h3>
                        <p className="text-secondary-700">
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
                        <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                          Bewezen Track Record
                        </h3>
                        <p className="text-secondary-700">
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
                        <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                          Snelle Response
                        </h3>
                        <p className="text-secondary-700">
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
                        <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                          Veilig & Betrouwbaar
                        </h3>
                        <p className="text-secondary-700">
                          Volledig verzekerd, gescreende medewerkers en garantie op al ons werk.
                          Uw apparaten en data zijn veilig bij ons.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <FAQSection
              title={`Veelgestelde Vragen over Computerhulp in ${city.name}`}
              subtitle={`Antwoorden op de meest gestelde vragen over IT-service in ${city.name} en omgeving`}
              faqs={cityFaqData}
            />

          </div>
        </section>
      </div>
    </>
  )
}