import { CompactServicesSection } from '@/components/home/CompactServicesSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  Award,
  MapPin,
  Shield,
  Heart,
  Target,
  CheckCircle,
  Phone,
  ArrowRight
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Hulp met IT - HBO-opgeleide ICT-studenten bij u thuis',
  description: 'Leer meer over Hulp met IT: wie we zijn, onze missie en waarom mensen ons vertrouwen. Persoonlijke computerhulp door HBO-opgeleide ICT-studenten aan huis.',
  keywords: [
    'over hulp met IT',
    'ICT studenten',
    'bedrijfsinfo',
    'wie zijn wij',
    'missie',
    'visie',
    'team',
    'student aan huis'
  ],
  alternates: {
    canonical: '/over-ons',
  },
  openGraph: {
    title: 'Over Ons - Hulp met IT',
    description: 'Persoonlijke IT-service door HBO-opgeleide ICT-studenten bij u aan huis',
    images: ['/og-image.webp'],
    url: 'https://hulpmetit.nl/over-ons',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
}

const stats = [
  { number: 'HBO', label: 'Opgeleide studenten', icon: Users },
  { number: '40+', label: 'Steden', icon: MapPin },
  { number: '7', label: 'Dagen per week', icon: Award },
]

const values = [
  {
    icon: Heart,
    title: 'Persoonlijk contact',
    description: 'U belt niet met een callcenter, maar met echte mensen. En de student die langskomt, helpt u rustig en geduldig.'
  },
  {
    icon: Shield,
    title: 'Betrouwbaar',
    description: 'Onze studenten zijn gescreend en verzekerd. Uw spullen en gegevens zijn bij ons in goede handen.'
  },
  {
    icon: Target,
    title: 'Echt geholpen',
    description: 'We zijn pas tevreden als u tevreden bent. We zoeken naar oplossingen die blijven werken, niet naar snelle trucjes.'
  },
  {
    icon: Award,
    title: 'Goed opgeleid',
    description: 'Onze studenten zijn HBO-opgeleid en weten waar ze mee bezig zijn. Dat merkt u aan de kwaliteit van de hulp.'
  },
]

export default function OverOnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hulpmetit.nl' },
            { '@type': 'ListItem', position: 2, name: 'Over Ons', item: 'https://hulpmetit.nl/over-ons' }
          ]
        }) }}
      />

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
                Over Ons
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                Wie wij zijn
              </h1>
              <p className="text-lg text-secondary-600 leading-relaxed mb-4">
                Wij helpen mensen met hun computer, internet en apparaten. Gewoon bij u thuis, met geduld en in begrijpelijke taal. Onze studenten staan door heel Nederland voor u klaar.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                Onze studenten komen bij u thuis, leggen alles rustig uit
                en zorgen dat u weer zorgeloos met uw apparaten kunt werken.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
                >
                  Afspraak maken
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+31642827860"
                  className="inline-flex items-center justify-center bg-secondary-100 hover:bg-secondary-200 text-secondary-700 font-semibold px-6 py-3.5 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel ons<span className="hidden sm:inline"> - 06-42827860</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card">
              <Image
                src="/hulp-met-it.webp"
                alt="ICT-student helpt klant met computer"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missie & Aanpak */}
      <section className="relative bg-secondary-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-15" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Onze missie</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Wat ons drijft
            </h2>
            <p className="text-secondary-500 max-w-2xl mx-auto text-lg">
              Wij willen dat iedereen hulp kan krijgen met de computer — zonder gedoe en zonder grote rekeningen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Onze Missie
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                Wij vinden dat technologie het leven makkelijker moet maken, niet moeilijker.
                Daarom helpen wij mensen thuis met hun computer en apparaten — rustig, begrijpelijk en voor een eerlijke prijs.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Onze studenten zijn goed opgeleid en weten wat ze doen. Maar nog belangrijker:
                ze leggen alles uit in gewone taal en zorgen dat u zich op uw gemak voelt.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Onze Aanpak
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Altijd bij de tijd', text: 'Onze studenten weten wat er speelt en houden hun kennis up-to-date' },
                  { title: 'Eerlijke prijzen', text: 'U betaalt een faire prijs, zonder verrassingen achteraf' },
                  { title: 'Gewone taal', text: 'Wij leggen alles uit zodat u het begrijpt, zonder moeilijke woorden' },
                  { title: 'Aandacht voor u', text: 'Wij helpen u rustig en geduldig, en beantwoorden al uw vragen' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-0.5">{item.title}</h4>
                      <p className="text-secondary-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cijfers */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">In cijfers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Onze Cijfers
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="bg-secondary-50 rounded-2xl shadow-card p-6 text-center">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <p className="text-3xl font-bold text-secondary-900 mb-1">
                    {stat.number}
                  </p>
                  <p className="text-secondary-500">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Waarden */}
      <section className="relative bg-secondary-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-15" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Waar we voor staan</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Onze Waarden
            </h2>
            <p className="text-secondary-500 max-w-2xl mx-auto text-lg">
              Dit zijn de principes waar wij dagelijks naar handelen.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 p-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-secondary-500 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <TestimonialsSection />

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Klaar om kennis te maken?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            We helpen u graag. Maak vrijblijvend een afspraak of bel ons gerust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
            >
              Afspraak maken
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-200"
            >
              Contact opnemen
            </Link>
          </div>
        </div>
      </section>

      <CompactServicesSection />
    </>
  )
}
