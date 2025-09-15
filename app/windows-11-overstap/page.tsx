'use client'

import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import Link from 'next/link'
import { 
  Phone, 
  Calendar,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Download,
  Settings,
  FileText,
  Users,
  Zap,
  Star
} from 'lucide-react'

const urgencyPoints = [
  {
    icon: AlertTriangle,
    title: 'Windows 10 Support Stopt',
    description: 'Microsoft stopt op 14 oktober 2025 met beveiligingsupdates',
    color: 'text-red-400'
  },
  {
    icon: Shield,
    title: 'Veiligheidsrisico\'s',
    description: 'Geen bescherming meer tegen virussen en malware',
    color: 'text-orange-400'
  },
  {
    icon: Clock,
    title: 'Beperkte Tijd',
    description: 'Wacht niet tot het te laat is - plan nu je overstap',
    color: 'text-yellow-400'
  }
]

const serviceSteps = [
  {
    step: '1',
    icon: FileText,
    title: 'Gratis Intake & Plan',
    description: 'We controleren je systeem en maken een overstapplan op maat'
  },
  {
    step: '2',
    icon: Download,
    title: 'Backup & Voorbereiding',
    description: 'Volledige backup van al je bestanden en instellingen'
  },
  {
    step: '3',
    icon: Settings,
    title: 'Windows 11 Installatie',
    description: 'Professionele installatie en configuratie van Windows 11'
  },
  {
    step: '4',
    icon: CheckCircle,
    title: 'Alles Werkend',
    description: 'Je programma\'s, bestanden en instellingen precies zoals je gewend bent'
  }
]

const includedServices = [
  'Gratis compatibiliteitscheck',
  'Volledige backup van al je bestanden',
  'Windows 11 Pro installatie',
  'Alle programma\'s opnieuw installeren',
  'Persoonlijke instellingen overnemen',
  'E-mail accounts configureren',
  'Printer en apparaten instellen',
  'Uitleg nieuwe Windows 11 functies',
  '30 dagen gratis nazorg',
  'Geen verborgen kosten'
]

// Standard pricing structure - same as other pages

export default function Windows11OverstapLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Windows 11 Overstap Service - Hulp met IT",
            "description": "Professionele Windows 11 overstap service door IT-specialisten. Zorgeloos overstappen van Windows 10 naar Windows 11.",
            "provider": {
              "@type": "Organization",
              "name": "Hulp met IT",
              "telephone": "+31642827860",
              "email": "info@hulpmetit.nl"
            },
            "serviceType": "Windows 11 migratie service",
            "priceRange": "€51,97+",
            "areaServed": {
              "@type": "Country",
              "name": "Nederland"
            }
          })
        }}
      />
      
      <div className="relative min-h-screen">
        <ClientWrapper>
          <FloatingElements />
        </ClientWrapper>
        
        {/* Hero Section */}
        <section className="hero-section relative z-10 md:z-auto">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Windows 10 Support Eindigt 14 Oktober 2025
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                Windows 11 Overstap Service
                <br />
                <span className="text-white">Zorgeloos & Professioneel</span>
              </h1>
              
              <p className="text-xl text-neural-300 max-w-4xl mx-auto leading-relaxed mb-8">
                <strong className="text-red-400">Windows 10 stopt binnenkort!</strong> Onze IT-experts komen naar je toe voor een 
                <span className="text-primary-300 font-semibold"> zorgeloze overstap naar Windows 11</span> - 
                inclusief backup, installatie en nazorg.
              </p>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 max-w-4xl mx-auto mb-8">
                <p className="text-red-300 text-lg font-semibold mb-2">
                  ⚠️ Belangrijk: Na 14 oktober 2025 krijgt Windows 10 geen beveiligingsupdates meer
                </p>
                <p className="text-neural-300">
                  Dit betekent dat je computer kwetsbaar wordt voor virussen, malware en cyberaanvallen. 
                  <strong className="text-white"> Plan nu je overstap</strong> en blijf veilig online.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/afspraak" className="btn-cta">
                  <Calendar className="w-6 h-6 mr-3" />
                  Plan Je Overstap Nu
                </Link>
                <a href="tel:+31642827860" className="btn-secondary text-xl px-8 py-4 inline-flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Direct Bellen: 06-42827860
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Points */}
        <section className="section-spacing bg-white/5">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Waarom Nu Overstappen?
              </h2>
              <p className="text-xl text-neural-300">
                Microsoft stopt binnenkort met Windows 10 support
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {urgencyPoints.map((point, index) => {
                const IconComponent = point.icon
                return (
                  <div key={index} className="glass-effect rounded-lg p-6 text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-red-500 to-orange-500`}>
                      <IconComponent className={`w-8 h-8 text-white`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                    <p className="text-neural-300 leading-relaxed">{point.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Zo Werkt Onze Windows 11 Overstap
              </h2>
              <p className="text-xl text-neural-300">
                Van planning tot werkende computer - wij regelen alles
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-neural-300 leading-relaxed">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-spacing bg-white/5">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transparante Prijzen, Geen Verrassingen
              </h2>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">€41,97</div>
                  <p className="text-neural-300 text-lg">Voor 45 minuten</p>
                  <p className="text-neural-400 text-sm">(minimum bezoek)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">€10,-</div>
                  <p className="text-neural-300 text-lg">Reiskosten</p>
                  <p className="text-neural-400 text-sm">(eenmalig per bezoek)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">24-48u</div>
                  <p className="text-neural-300 text-lg">Snelle service</p>
                  <p className="text-neural-400 text-sm">(meestal binnen 2 dagen)</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-neural-300 text-sm">Extra tijd: €13,99 per kwartier • Geen verrassingen achteraf</p>
                <p className="text-neural-400 text-xs mt-2">Windows 11 overstap: Gemiddeld 2-4 uur werk</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-spacing">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Wat Krijg Je Van Ons?
              </h2>
              <p className="text-xl text-neural-300">
                Complete service van A tot Z
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedServices.map((service, index) => (
                <div key={index} className="flex items-center glass-effect rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-neural-200 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Final CTA */}
        <section className="section-spacing bg-gradient-to-r from-red-600 to-orange-600">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Windows 10 Stopt Binnenkort - Wacht Niet Langer!
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Plan nu je zorgeloze overstap naar Windows 11
            </p>
            <p className="text-lg text-white/80 mb-8">
              ✅ Professionele installatie ✅ Alles blijft werken ✅ 30 dagen nazorg
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/afspraak" className="btn-cta">
                <Calendar className="w-6 h-6 mr-3" />
                Plan Nu Je Overstap
              </Link>
              <a href="tel:+31642827860" className="bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white/30 transition-colors inline-flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                Of Bel Direct: 06-42827860
              </a>
            </div>
            
            <div className="mt-8 bg-white/10 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-white/90 text-sm">
                <strong>Voordelen:</strong> ✓ Transparante prijzen ✓ Geen verborgen kosten ✓ 30 dagen nazorg inbegrepen
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}