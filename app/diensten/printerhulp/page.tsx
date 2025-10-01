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

const service = services.find(s => s.slug === 'printerhulp')!

export const metadata: Metadata = {
  title: 'Printerhulp | Alle merken | Installatie reparatie',
  description: service.longDescription,
  keywords: service.keywords,
  openGraph: {
    title: `${service.name} - Hulp met IT`,
    description: service.longDescription,
    images: [`/images/${service.slug}-og.webp`],
  },
}

const faqData = [
  {
    question: "Mijn printer print niet, wat kan ik doen?",
    answer: "Er zijn verschillende oorzaken waarom een printer niet print: lege cartridges, papierstoring, verkeerde instellingen, of driver problemen. We diagnosticeren het probleem en lossen het ter plekke op."
  },
  {
    question: "Kunnen jullie alle printermerken helpen?",
    answer: "Ja, we werken met alle merken: HP, Canon, Epson, Brother, Samsung, Lexmark en meer. Zowel inkjet als laser printers, van thuisgebruik tot kantoorprinters."
  },
  {
    question: "Wat kost printerhulp aan huis?",
    answer: "Onze printerhulp begint vanaf €28,50 per kwartier. Dit omvat diagnose, reparatie en installatie. Voor complexere problemen geven we vooraf een kostenopgave."
  },
  {
    question: "Kunnen jullie een nieuwe printer installeren?",
    answer: "Ja, we installeren nieuwe printers, zorgen voor de juiste drivers, stellen WiFi-printing in, en leren u hoe alles werkt. Ook koppelen we de printer aan al uw apparaten."
  },
  {
    question: "Hoe vaak moet ik mijn printer onderhouden?",
    answer: "We adviseren regelmatig onderhoud: hoofden reinigen, cartridges controleren, en software updaten. Bij intensief gebruik raden we professioneel onderhoud aan."
  }
]

export default function PrinterhulpPage() {

  const breadcrumbItems = [
    { name: 'Diensten', url: '/diensten' },
    { name: 'Printerhulp', url: '/diensten/printerhulp' }
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
              title="Veelgestelde Vragen over Printerhulp"
              subtitle="Antwoorden op de meest gestelde vragen over printer problemen en hulp"
              faqs={faqData}
            />

            <div className="text-center">
              <div className="card-3d max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-secondary-800 mb-4">
                  Klaar voor printerhulp aan huis?
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