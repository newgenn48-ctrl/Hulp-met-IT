import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Headphones,
  CheckCircle
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Direct bereikbaar | Hele dag',
  description: 'Neem contact op met Hulp met IT voor al uw computervragen. Direct telefonisch bereikbaar. Snelle response. Vrijblijvend advies. Landelijk beschikbaar.',
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
    value: '06 42 82 78 60',
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
    value: '06 42 82 78 60',
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
    answer: 'We hanteren transparante tarieven van \u20AC14,50 per kwartier. Minimaal 3 kwartier (\u20AC41,97) + \u20AC10 reiskosten eenmalig. Geen verrassingen achteraf!'
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
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-3">
              Contact
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              Neem contact op
            </h1>
            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              Heeft u een vraag of wilt u een afspraak maken? Bel, app of mail ons — we reageren meestal binnen een uur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel ons
              </a>
              <a
                href="https://wa.me/31642827860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-secondary-100 hover:bg-secondary-200 text-secondary-800 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
            <div className="space-y-2 text-sm text-secondary-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>Vrijblijvend advies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>Reactie binnen 2 uur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>7 dagen per week bereikbaar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Openingstijden */}
      <section className="bg-secondary-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact kanalen */}
            <div className="bg-white rounded-xl border border-secondary-200 p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-6">
                Contact Kanalen
              </h2>
              <div className="space-y-1">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  const content = (
                    <div className="flex items-start gap-3 p-3 rounded-lg">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-secondary-900 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-secondary-700">
                          {item.value}
                        </p>
                        <p className="text-sm text-secondary-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )

                  return item.action ? (
                    <a
                      key={index}
                      href={item.action}
                      target={item.action.startsWith('https') ? '_blank' : undefined}
                      rel={item.action.startsWith('https') ? 'noopener noreferrer' : undefined}
                      className="block hover:bg-secondary-50 rounded-lg transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  )
                })}
              </div>
            </div>

            {/* Openingstijden */}
            <div className="bg-white rounded-xl border border-secondary-200 p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-primary-600" />
                Openingstijden
              </h2>
              <div className="space-y-3 text-base">
                <div className="flex justify-between py-2 border-b border-secondary-100">
                  <span className="text-secondary-600">Maandag - Vrijdag</span>
                  <span className="font-medium text-secondary-900">8:00 - 21:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-secondary-100">
                  <span className="text-secondary-600">Zaterdag</span>
                  <span className="font-medium text-secondary-900">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-secondary-100">
                  <span className="text-secondary-600">Zondag</span>
                  <span className="font-medium text-secondary-900">10:00 - 17:00</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-secondary-50 rounded-lg">
                <p className="text-sm text-secondary-600 flex items-start">
                  <Headphones className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary-600" />
                  Voor spoedgevallen zijn we ook buiten kantoortijden bereikbaar via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto container-padding">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-8">
            Veelgestelde Vragen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-50 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto container-padding text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
            Liever direct een afspraak maken?
          </h2>
          <p className="text-secondary-600 mb-8">
            Via ons online afspraaksysteem kunt u direct een geschikte tijd inplannen.
            Binnen enkele minuten heeft u bevestiging!
          </p>
          <Link
            href="/afspraak"
            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Online afspraak maken
          </Link>
        </div>
      </section>
    </>
  )
}
