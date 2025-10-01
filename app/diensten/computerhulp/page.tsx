import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FAQSection } from '@/components/ui/FAQSection'
import Link from 'next/link'
import {
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react'
import { Metadata } from 'next'
import services from '@/lib/data/services.json'

const service = services.find(s => s.slug === 'computerhulp')!

export const metadata: Metadata = {
  title: 'Computerhulp | Virus verwijderen | Data behouden',
  description: service.longDescription,
  keywords: service.keywords,
  openGraph: {
    title: `${service.name} - Hulp met IT`,
    description: service.longDescription,
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${service.name} - Hulp met IT`,
    description: service.longDescription,
    images: ['/og-image.webp'],
  },
}

const faqData = [
  {
    question: "Wat kost computerhulp aan huis?",
    answer: "Onze tarieven beginnen vanaf €28,50 per kwartier. We rekenen alleen voor de tijd die daadwerkelijk besteed wordt aan het oplossen van uw probleem. Er zijn geen voorrijkosten of verborgen kosten."
  },
  {
    question: "Hoe snel kunnen jullie komen voor computerhulp?",
    answer: "We proberen binnen 24-48 uur bij u langs te komen. Voor spoedgevallen kunnen we vaak nog dezelfde dag een afspraak inplannen. Bel ons voor de snelste service."
  },
  {
    question: "Kunnen jullie alle computermerken repareren?",
    answer: "Ja, we werken met alle computermerken: Windows PC's, Apple Mac computers, laptops van alle merken, en tablets. Onze technici hebben ervaring met zowel hardware als software problemen."
  },
  {
    question: "Wat als mijn computer niet meer te repareren is?",
    answer: "We geven eerst een eerlijke diagnose. Als reparatie economisch niet rendabel is, adviseren we over vervanging en helpen we bij data-overzet naar een nieuwe computer."
  },
  {
    question: "Kunnen jullie mijn data redden als mijn computer kapot is?",
    answer: "Data-redding is een van onze specialiteiten. We kunnen vaak data herstellen van kapotte harde schijven, gehackte computers, of systemen die niet meer opstarten."
  }
]

export default function ComputerhulpPage() {

  const breadcrumbItems = [
    { name: 'Diensten', url: '/diensten' },
    { name: 'Computerhulp', url: '/diensten/computerhulp' }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
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
        
        <section className="hero-section">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">{service.emoji}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-6">
                {service.name}
              </h1>
              <p className="text-xl text-secondary-700 max-w-3xl mx-auto leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="card-3d">
                  <h2 className="text-3xl font-semibold text-secondary-800 mb-6">
                    Wat we voor u doen
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-secondary-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-3d">
                  <h2 className="text-3xl font-semibold text-secondary-800 mb-6">
                    Ons Proces
                  </h2>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-secondary-800 font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-secondary-700">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-3d">
                  <h2 className="text-3xl font-semibold text-secondary-800 mb-6">
                    Veel voorkomende problemen
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.commonIssues.map((issue, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-secondary-700">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <div className="card-3d">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-4">
                    Direct een afspraak?
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+31642827860"
                      className="btn-cta w-full text-center flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Direct bellen
                    </a>
                    <Link href="/afspraak" className="btn-secondary w-full">
                      Online afspraak maken
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <FAQSection
              title="Veelgestelde Vragen over Computerhulp"
              subtitle="Antwoorden op de meest gestelde vragen over onze computerhulp service"
              faqs={faqData}
            />

            <div className="text-center">
              <div className="card-3d max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-secondary-800 mb-4">
                  Klaar voor persoonlijke computerhulp?
                </h2>
                <p className="text-secondary-700 mb-6">
                  Bel nu voor een snelle afspraak of bekijk onze andere diensten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+31642827860" className="btn-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    Direct bellen
                  </a>
                  <Link href="/diensten" className="btn-secondary">
                    Alle diensten
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}