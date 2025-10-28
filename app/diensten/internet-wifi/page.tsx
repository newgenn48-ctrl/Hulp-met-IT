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

const service = services.find(s => s.slug === 'internet-wifi')!

export const metadata: Metadata = {
  title: 'WiFi Problemen | Internet hulp | Snel opgelost',
  description: service.longDescription,
  keywords: service.keywords,
  alternates: {
    canonical: '/diensten/internet-wifi',
  },
  openGraph: {
    title: `${service.name} - Hulp met IT`,
    description: service.longDescription,
    url: 'https://hulpmetit.nl/diensten/internet-wifi',
    images: [`/images/${service.slug}-og.webp`],
    type: 'website',
    locale: 'nl_NL',
  },
}

const faqData = [
  {
    question: "Waarom is mijn WiFi zo langzaam?",
    answer: "Langzame WiFi kan verschillende oorzaken hebben: te veel apparaten op het netwerk, verouderde router, interferentie van andere apparaten, of een slechte internetverbinding. Wij diagnosticeren het probleem en bieden een passende oplossing."
  },
  {
    question: "Kan ik overal in huis WiFi krijgen?",
    answer: "Ja, we kunnen WiFi-bereik uitbreiden met repeaters, mesh-systemen of extra toegangspunten. We maken een plan voor optimale dekking door uw hele huis."
  },
  {
    question: "Wat kost internet en WiFi hulp?",
    answer: "Onze tarieven beginnen vanaf €14,50 per kwartier (min. 3 kwartier = €43,50) + €10 voorrijkosten. We maken eerst een diagnose en geven een duidelijke kostenopgave voordat we beginnen met de reparatie."
  },
  {
    question: "Kunnen jullie alle internetproviders helpen?",
    answer: "Ja, we werken met alle providers: KPN, Ziggo, T-Mobile, Delta, Caiway en andere. We kennen de specificaties van alle modems en routers."
  },
  {
    question: "Hoe beveilig ik mijn WiFi netwerk?",
    answer: "We stellen sterke WPA3-beveiliging in, veranderen standaard wachtwoorden, en zorgen voor een veilig gastennetwerk. Ook updaten we de firmware voor optimale beveiliging."
  }
]

export default function InternetWifiPage() {

  const breadcrumbItems = [
    { name: 'Diensten', url: '/diensten' },
    { name: 'Internet & WiFi', url: '/diensten/internet-wifi' }
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
              title="Veelgestelde Vragen over Internet & WiFi"
              subtitle="Antwoorden op de meest gestelde vragen over internet en WiFi problemen"
              faqs={faqData}
            />

            <div className="text-center">
              <div className="card-3d max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-secondary-800 mb-4">
                  Klaar om uw internet te verbeteren?
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