import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Headphones,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Hulp met IT - Dagelijks Bereikbaar 08:00-21:00',
  description: 'Neem contact op met Hulp met IT. Bel 085-8005006 of mail info@hulpmetit.nl. 7 dagen per week bereikbaar. Vrijblijvend advies over uw computerproblemen.',
  keywords: [
    'contact hulp met IT',
    'IT hulp telefoon',
    'computer hulp contact',
    'IT service bereikbaar',
    'technische ondersteuning',
    'hulp computer problemen'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact - Hulp met IT',
    description: 'Direct bereikbaar voor al uw IT-vragen en computerproblemen',
    images: ['/og-image.webp'],
    url: 'https://hulpmetit.nl/contact',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefonisch',
    value: '085-8005006',
    description: 'Dagelijks bereikbaar van 8:00 - 21:00',
    action: 'tel:+31858005006'
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
    value: '085-8005006',
    description: 'Voor snelle vragen en updates',
    action: 'https://wa.me/31642827860'
  },
  {
    icon: MapPin,
    title: 'Locatie',
    value: 'Landelijk werkzaam',
    description: 'Actief in 30+ steden door heel Nederland',
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
    answer: 'We rekenen \u20AC14,50 per kwartier, met een minimum van 3 kwartier (\u20AC43,50). Voorrijkosten zijn \u20AC10 eenmalig. U betaalt achteraf, dus u weet altijd waar u aan toe bent.'
  },
  {
    question: 'Welke betalingsmogelijkheden accepteren jullie?',
    answer: 'We accepteren contant geld, pinbetaling ter plaatse, iDEAL en bankoverschrijving. Betaling kan direct na afloop of binnen 14 dagen.'
  },
  {
    question: 'Geven jullie garantie op het werk?',
    answer: 'Ja, bent u niet tevreden? Dan krijgt u uw geld terug. En mocht het probleem terugkomen, dan komen wij kosteloos nog een keer langs.'
  }
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
              Contact
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              Neem contact op
            </h1>
            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              Heeft u een vraag of wilt u een afspraak maken? Bel, app of mail ons — we reageren meestal binnen 2 uur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+31858005006"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Bel 085-8005006
              </a>
              <a
                href="https://wa.me/31642827860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-secondary-100 hover:bg-secondary-200 text-secondary-700 font-semibold px-6 py-3.5 rounded-xl transition-colors"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
            <div className="space-y-2 text-sm text-secondary-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Vrijblijvend advies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Reactie binnen 2 uur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>7 dagen per week bereikbaar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Openingstijden */}
      <section className="relative bg-secondary-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-15" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Bereikbaarheid</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Zo bereikt u ons
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact kanalen */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-6">
                Contactkanalen
              </h3>
              <div className="space-y-1">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  const content = (
                    <div className="flex items-start gap-3 p-3 rounded-xl">
                      <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary-900 mb-0.5">
                          {item.title}
                        </h4>
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
                      className="block hover:bg-secondary-50 rounded-xl transition-colors"
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
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-primary-600" />
                Openingstijden
              </h3>
              <div className="space-y-3 text-base">
                <div className="flex justify-between py-2 border-b border-secondary-100">
                  <span className="text-secondary-600">Maandag - Vrijdag</span>
                  <span className="font-medium text-secondary-900">8:00 - 21:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-secondary-100">
                  <span className="text-secondary-600">Zaterdag</span>
                  <span className="font-medium text-secondary-900">8:00 - 21:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-secondary-100">
                  <span className="text-secondary-600">Zondag</span>
                  <span className="font-medium text-secondary-900">8:00 - 21:00</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-secondary-50 rounded-xl">
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
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Vragen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Veelgestelde Vragen
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary-50 rounded-2xl shadow-card p-6">
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Liever direct een afspraak maken?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Vul het formulier in, kies een moment dat u uitkomt, en wij bevestigen het per e-mail.
          </p>
          <Link
            href="/afspraak"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-accent transition-all duration-200 hover:-translate-y-0.5"
          >
            Online afspraak maken
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
