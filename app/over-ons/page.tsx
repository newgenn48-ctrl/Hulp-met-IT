import { ParticleField } from '@/components/three/ParticleField'
import { ClientWrapper } from '@/components/ClientWrapper'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import Link from 'next/link'
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  Heart,
  Target,
  Star,
  CheckCircle
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
  { number: '4.9/5', label: 'Gemiddelde beoordeling', icon: Star },
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
      <div className="relative min-h-screen">
        <ClientWrapper>
          <ParticleField />
        </ClientWrapper>
        
        <section className="hero-section relative z-10 md:z-auto">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-4">
                Over Hulp met IT
              </h1>
              <p className="text-lg text-secondary-700 max-w-3xl mx-auto leading-relaxed">
                Al meer dan 10 jaar helpen wij mensen met hun IT-problemen. 
                Wat begon als een klein initiatief, is uitgegroeid tot de meest betrouwbare 
                IT-service voor particulieren in Nederland.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="card-3d">
                <h2 className="text-3xl font-bold text-secondary-800 mb-6">
                  Onze Missie
                </h2>
                <p className="text-secondary-700 leading-relaxed mb-6">
                  Wij geloven dat technologie het leven moet verrijken, niet compliceren. 
                  Onze missie is om IT-ondersteuning toegankelijk, begrijpelijk en 
                  betaalbaar te maken voor iedereen.
                </p>
                <p className="text-secondary-700 leading-relaxed">
                  Door het inzetten van ervaren IT-specialisten creëren we een 
                  unieke service: klanten krijgen kwalitatieve hulp tegen een 
                  eerlijke prijs, met persoonlijke aandacht en vakkundigheid.
                </p>
              </div>

              <div className="card-3d">
                <h2 className="text-3xl font-bold text-secondary-800 mb-6">
                  Onze Aanpak
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary-800 mb-1">
                        Up-to-date Kennis
                      </h3>
                      <p className="text-secondary-700">
                        Onze specialisten blijven continu op de hoogte van nieuwe technologieën
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary-800 mb-1">
                        Innovatieve Oplossingen
                      </h3>
                      <p className="text-secondary-700">
                        Creatieve en moderne aanpak voor alle IT-uitdagingen
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary-800 mb-1">
                        Eerlijke Prijzen
                      </h3>
                      <p className="text-secondary-700">
                        Kwaliteit tegen een faire prijs zonder verrassingen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary-800 mb-1">
                        Duidelijke Communicatie
                      </h3>
                      <p className="text-secondary-700">
                        Complexe technische zaken uitgelegd in begrijpelijke taal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center text-secondary-800 mb-8">
                Onze Cijfers
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="card-3d text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gradient mb-2">
                        {stat.number}
                      </div>
                      <p className="text-primary-600">
                        {stat.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center text-secondary-800 mb-8">
                Onze Waarden
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon
                  return (
                    <div key={index} className="card-3d">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                            {value.title}
                          </h3>
                          <p className="text-secondary-700 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>


            <div className="text-center">
              <div className="card-3d max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-secondary-800 mb-4">
                  Klaar om kennis te maken?
                </h2>
                <p className="text-secondary-700 mb-6">
                  We helpen u graag met al uw IT-vragen. 
                  Maak vrijblijvend een afspraak of neem direct contact op.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/afspraak" className="btn-cta">
                    Afspraak maken
                  </Link>
                  <Link href="/contact" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center">
                    Contact opnemen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesGrid
          title="Wat We Voor U Kunnen Doen"
          maxItems={6}
        />
      </div>
    </>
  )
}