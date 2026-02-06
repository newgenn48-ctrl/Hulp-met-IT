import { ServicesGrid } from '@/components/services/ServicesGrid'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  Award,
  Clock,
  Shield,
  Heart,
  Target,
  CheckCircle,
  Phone
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons | 10 jaar ervaring | Betrouwbaar',
  description: 'Leer meer over Hulp met IT: wie we zijn, onze missie en waarom mensen ons vertrouwen voor hun IT-problemen. Persoonlijke service met 10+ jaar ervaring.',
  keywords: [
    'over hulp met IT',
    'IT specialisten',
    'bedrijfsinfo',
    'wie zijn wij',
    'missie',
    'visie',
    'team',
    'ervaring'
  ],
  openGraph: {
    title: 'Over Ons - Hulp met IT',
    description: 'Persoonlijke IT-service door ervaren specialisten met 10+ jaar ervaring',
    images: ['/images/team-og.webp'],
  },
}

const stats = [
  { number: '10+', label: 'Jaar ervaring', icon: Users },
  { number: '24u', label: 'Response tijd', icon: Clock },
  { number: '98%', label: 'Oplossingspercentage', icon: Award },
]

const values = [
  {
    icon: Heart,
    title: 'Persoonlijke Service',
    description: 'Wij geloven in echte menselijke connectie. Geen callcenters, maar directe communicatie met uw IT-specialist.'
  },
  {
    icon: Shield,
    title: 'Betrouwbaarheid',
    description: 'Al onze medewerkers zijn gescreend en volledig verzekerd. Uw data en apparaten zijn bij ons in veilige handen.'
  },
  {
    icon: Target,
    title: 'Resultaatgericht',
    description: 'We zijn pas tevreden als u tevreden bent. Onze focus ligt op duurzame oplossingen, niet op snelle fixes.'
  },
  {
    icon: Award,
    title: 'Kwaliteit',
    description: 'Alleen de best presterende IT-specialisten mogen deel uitmaken van ons team. Kwaliteit staat voorop.'
  },
]

export default function OverOnsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-3">
                Over Ons
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                Wie wij zijn
              </h1>
              <p className="text-lg text-secondary-600 leading-relaxed mb-4">
                Al meer dan 10 jaar helpen wij mensen met hun computer, internet en apparaten. Gewoon bij u thuis, met geduld en in begrijpelijke taal. Wat ooit klein begon, is uitgegroeid tot een team dat door heel Nederland klaarstaat.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                Onze ervaren specialisten komen bij u thuis, nemen de tijd om alles rustig
                uit te leggen, en zorgen dat u weer zorgeloos met uw apparaten kunt werken.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/afspraak"
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Afspraak maken
                </Link>
                <a
                  href="tel:+31642827860"
                  className="inline-flex items-center justify-center bg-secondary-100 hover:bg-secondary-200 text-secondary-800 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel ons
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden">
              <Image
                src="/hulp-met-it.webp"
                alt="IT-specialist helpt klant met computer"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missie & Aanpak */}
      <section className="bg-secondary-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-secondary-200 p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
                Onze Missie
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-4">
                Wij geloven dat technologie het leven moet verrijken, niet compliceren.
                Onze missie is om IT-ondersteuning toegankelijk, begrijpelijk en
                betaalbaar te maken voor iedereen.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Door het inzetten van ervaren IT-specialisten creëren we een
                unieke service: klanten krijgen kwalitatieve hulp tegen een
                eerlijke prijs, met persoonlijke aandacht en vakkundigheid.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-secondary-200 p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
                Onze Aanpak
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Up-to-date Kennis', text: 'Onze specialisten blijven continu op de hoogte van nieuwe technologieën' },
                  { title: 'Eerlijke Prijzen', text: 'Kwaliteit tegen een faire prijs zonder verrassingen' },
                  { title: 'Duidelijke Communicatie', text: 'Complexe technische zaken uitgelegd in begrijpelijke taal' },
                  { title: 'Persoonlijke Aandacht', text: 'We nemen de tijd om u goed te helpen en vragen te beantwoorden' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-0.5">{item.title}</h3>
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
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto container-padding">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-8">
            Onze Cijfers
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="bg-secondary-50 rounded-xl p-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 text-primary-600" />
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
      <section className="bg-secondary-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto container-padding">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-8">
            Onze Waarden
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl border border-secondary-200 p-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-primary-600" />
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

      {/* CTA */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-2xl mx-auto container-padding text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
            Klaar om kennis te maken?
          </h2>
          <p className="text-secondary-600 mb-8">
            We helpen u graag met al uw IT-vragen.
            Maak vrijblijvend een afspraak of neem direct contact op.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Afspraak maken
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-secondary-100 hover:bg-secondary-200 text-secondary-800 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contact opnemen
            </Link>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Wat We Voor U Kunnen Doen"
        maxItems={6}
      />
    </>
  )
}
