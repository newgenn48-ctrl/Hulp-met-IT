import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { NoSSR } from '@/components/NoSSR'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Headphones
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Direct bereikbaar | Hele dag',
  description: 'Neem contact op met Hulp met IT voor al uw computervragen. ✓ Direct telefonisch bereikbaar ✓ Snelle response ✓ Vrijblijvend advies ✓ Landelijk beschikbaar',
  keywords: [
    'contact hulp met IT',
    'IT hulp telefoon',
    'computer hulp contact',
    'IT service bereikbaar',
    'technische ondersteuning',
    'hulp computer problemen'
  ],
  openGraph: {
    title: 'Contact - Hulp met IT',
    description: 'Direct bereikbaar voor al uw IT-vragen en computerproblemen',
    images: ['/images/contact-og.webp'],
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefonisch',
    value: '+31 (0)6 42827860',
    description: 'Dagelijks bereikbaar van 8:00 - 21:00',
    action: 'tel:+31642827860'
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'info@hulpmetit.nl',
    description: 'We reageren binnen 2 uur',
    action: 'mailto:info@hulpmetit.nl'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    value: '+31 (0)6 42827860',
    description: 'Voor snelle vragen en updates',
    action: 'https://wa.me/31642827860'
  },
  {
    icon: MapPin,
    title: 'Locatie',
    value: 'Landelijk werkzaam',
    description: 'Van Groningen tot Maastricht',
    action: null
  }
]

const faqs = [
  {
    question: 'Hoe snel kunnen jullie langs komen?',
    answer: 'In de meeste gevallen kunnen we binnen 24-48 uur een afspraak inplannen. Voor spoedgevallen proberen we nog dezelfde dag te komen.'
  },
  {
    question: 'Wat zijn de kosten?',
    answer: 'We hanteren transparante tarieven van €14,50 per kwartier. Minimaal 3 kwartier (€41,97) + €10 reiskosten eenmalig. Geen verrassingen achteraf!'
  },
  {
    question: 'Welke betalingsmogelijkheden accepteren jullie?',
    answer: 'We accepteren contant geld, pinbetaling ter plaatse, iDEAL en bankoverschrijving. Betaling kan direct na afloop of binnen 14 dagen.'
  },
  {
    question: 'Geven jullie garantie op het werk?',
    answer: 'Ja, we hebben een 100% tevredenheidsgarantie. Bent u niet tevreden met ons werk, dan krijgt u uw geld terug. Ook komen we kosteloos terug als het probleem opnieuw optreedt.'
  }
]

export default function ContactPage() {
  return (
    <>      
      <div className="relative min-h-screen">
        <NoSSR fallback={<div className="absolute inset-0 pointer-events-none" />}>
          <ClientWrapper>
            <FloatingElements />
          </ClientWrapper>
        </NoSSR>
        
        <section className="hero-section relative z-10 md:z-auto">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-6">
                Contact
              </h1>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto leading-relaxed">
                Heeft u vragen over onze services of wilt u direct hulp? 
                We staan klaar om u te helpen via meerdere kanalen.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="card-3d">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div key={index} className="group">
                          {item.action ? (
                            <a 
                              href={item.action}
                              className="flex items-start space-x-3 p-3 rounded-lg transition-colors hover:bg-white/5"
                            >
                              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-medium text-secondary-800 mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-secondary-700 mb-1">
                                  {item.value}
                                </p>
                                <p className="text-sm text-primary-600">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ) : (
                            <div className="flex items-start space-x-3 p-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-medium text-secondary-800 mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-secondary-700 mb-1">
                                  {item.value}
                                </p>
                                <p className="text-sm text-primary-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div>
                <div className="card-3d">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Openingstijden
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-secondary-700">Maandag - Vrijdag</span>
                      <span className="text-secondary-800">8:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-700">Zaterdag</span>
                      <span className="text-secondary-800">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-700">Zondag</span>
                      <span className="text-secondary-800">10:00 - 17:00</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-primary-500/10 rounded-lg">
                    <p className="text-sm text-secondary-700 flex items-start">
                      <Headphones className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      Voor spoedgevallen zijn we ook buiten kantoortijden bereikbaar via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-4xl font-bold text-center text-secondary-800 mb-8">
                Veelgestelde Vragen
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="card-3d">
                    <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-secondary-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="card-3d max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-secondary-800 mb-4">
                  Liever direct een afspraak maken?
                </h2>
                <p className="text-secondary-700 mb-6">
                  Via ons online afspraaksysteem kunt u direct een geschikte tijd inplannen.
                  Binnen enkele minuten heeft u bevestiging!
                </p>
                <a 
                  href="/afspraak"
                  className="btn-cta"
                >
                  Online afspraak maken
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}