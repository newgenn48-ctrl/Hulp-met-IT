import { ParticleField } from '@/components/three/ParticleField'
import { ClientWrapper } from '@/components/ClientWrapper'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/ui/FAQSection'
import Link from 'next/link'
import {
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Phone,
  CheckCircle
} from 'lucide-react'
import { Metadata } from 'next'
import cities from '@/lib/data/cities.json'

export const metadata: Metadata = {
  title: 'IT-Hulp heel Nederland - Onze Regio\'s | Hulp met IT',
  description: 'Hulp met IT is actief in de belangrijkste Nederlandse steden én omliggende gemeenten. Vind uw plaats en ontdek onze lokale IT-service. ✓ Amsterdam ✓ Rotterdam ✓ Den Haag ✓ Utrecht ✓ En meer!',
  keywords: [
    'IT hulp Nederland',
    'computerhulp alle steden',
    'landelijke IT service',
    'computer reparatie Nederland',
    'IT hulp aan huis overal',
    'technische ondersteuning Nederland',
    'lokale IT specialist'
  ],
  openGraph: {
    title: 'Onze Regio\'s - IT-Hulp in heel Nederland',
    description: 'Ontdek onze IT-service in uw stad. Lokale experts, snelle service, vaste tarieven.',
    images: ['/images/regios-og.webp'],
  },
}

// Alle steden samen zonder regionale opsplitsing

const regiosFaqData = [
  {
    question: "In welke Nederlandse steden bieden jullie computerhulp aan?",
    answer: "We zijn actief in 30+ Nederlandse steden, waaronder Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Tilburg, Groningen en vele andere. Ook bedienen we omliggende gemeenten en kleinere plaatsen."
  },
  {
    question: "Waar kan ik computerhulp aan huis krijgen?",
    answer: "Onze IT-service is beschikbaar in alle grote Nederlandse steden en omliggende gebieden. Van Noord-Holland tot Zuid-Holland, Utrecht, Noord-Brabant, Overijssel en meer regio's."
  },
  {
    question: "Hoeveel kost computerhulp in verschillende steden?",
    answer: "Onze tarieven zijn landelijk hetzelfde: vanaf €14,50 per kwartier (min. 3 kwartier = €43,50) + €10 voorrijkosten. Geen voorrijkosten in de meeste steden. We hanteren transparante, vaste tarieven door heel Nederland."
  },
  {
    question: "Zijn jullie IT-specialisten lokaal beschikbaar?",
    answer: "Ja! In elke stad hebben we lokale IT-experts die de regio kennen. Zij zorgen voor snelle service en persoonlijke aandacht in uw eigen omgeving."
  },
  {
    question: "Hoe snel kunnen jullie komen in mijn stad?",
    answer: "In de meeste steden zijn we binnen 24-48 uur beschikbaar. Voor spoedgevallen proberen we vaak nog dezelfde dag te komen. Bel voor de snelste service!"
  }
]

export default function RegiosPage() {
  const breadcrumbItems = [
    { name: 'Regio\'s', url: '/regios' }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": regiosFaqData.map(faq => ({
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
          <ParticleField />
        </ClientWrapper>
        
        <section className="hero-section relative z-10 md:z-auto">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-6">
                Onze Regio's
              </h1>
              <p className="text-xl text-secondary-700 max-w-4xl mx-auto leading-relaxed mb-8">
                Hulp met IT is actief in de belangrijkste Nederlandse steden én omliggende gemeenten. 
                Onze lokale IT-specialisten kennen uw regio door en door en bieden snelle, betrouwbare service aan huis.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="card-3d text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">30+ Steden</h3>
                  <p className="text-secondary-700">Actief in steden en omliggende plaatsen</p>
                </div>
                
                <div className="card-3d text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">24-48u Service</h3>
                  <p className="text-secondary-700">Snelle response in elke regio</p>
                </div>
                
                <div className="card-3d text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">4.8+ Rating</h3>
                  <p className="text-secondary-700">Uitstekende reviews in alle steden</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {cities.map((city) => (
                    <Link key={city.slug} href={`/regios/computerhulp-${city.slug}`}>
                      <div className="card-3d group hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-secondary-800 mb-1 group-hover:text-primary-300 transition-colors">
                              {city.name} <span className="text-sm text-primary-400 font-normal">en omgeving</span>
                            </h3>
                            <p className="text-primary-400 text-xs">{city.population} inwoners</p>
                          </div>
                          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <MapPin className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        
                        <p className="text-secondary-700 mb-4 leading-relaxed text-sm">
                          {city.description}
                        </p>
                        
                        
                        <div className="flex items-center justify-between">
                          <span className="text-secondary-700 font-medium">
                            Meer over {city.name}
                          </span>
                          <ArrowRight className="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="card-3d max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-secondary-800 mb-6">
                  Uw stad niet gevonden?
                </h2>
                <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                  We breiden ons servicebereik continu uit. Neem contact op om te kijken 
                  of we ook in uw plaats of gemeente actief zijn of binnenkort komen.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-400 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-800 mb-2">Landelijke dekking</h3>
                      <p className="text-secondary-700">We komen ook naar kleinere plaatsen in de omgeving van onze servicesteden</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-400 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-800 mb-2">Groeiende coverage</h3>
                      <p className="text-secondary-700">Elke maand voegen we nieuwe serviceregio's toe aan ons netwerk</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+31642827860" className="btn-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    Bel voor beschikbaarheid
                  </a>
                  <Link href="/contact" className="btn-secondary">
                    Neem contact op
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Section for Voice Search */}
            <FAQSection
              title="Veelgestelde Vragen over IT-Hulp in Nederland"
              subtitle="Antwoorden op de meest gestelde vragen over onze landelijke IT-service"
              faqs={regiosFaqData}
            />

          </div>
        </section>
      </div>
    </>
  )
}