import { AppointmentFormWrapper } from '@/components/forms/AppointmentFormWrapper'
import { Shield, Phone } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Afspraak Maken - Computerhulp aan Huis | Hulp met IT',
  description: 'Plan direct online een afspraak voor computerhulp aan huis. Binnen 24 uur geholpen. Vanaf €15,50 per kwartier. Bevestiging per e-mail.',
  keywords: [
    'afspraak maken hulp met IT',
    'online afspraak computer',
    'IT hulp inplannen',
    'computer reparatie afspraak',
    'technische ondersteuning plannen'
  ],
  alternates: {
    canonical: '/afspraak',
  },
  openGraph: {
    title: 'Afspraak Maken | Hulp met IT',
    description: 'Direct online een afspraak inplannen voor computerhulp aan huis',
    images: ['/og-image.webp'],
    url: 'https://hulpmetit.nl/afspraak',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
}

export default function AfspraakPage() {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hulpmetit.nl' },
      { '@type': 'ListItem', position: 2, name: 'Afspraak maken', item: 'https://hulpmetit.nl/afspraak' }
    ]
  }

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
    <div className="min-h-screen bg-secondary-50 pt-32 pb-12">
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-3">
            Afspraak maken
          </h1>
          <p className="text-secondary-600 mb-6">
            Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 border border-primary-200 rounded-full px-3 py-1 text-sm font-medium">
              <Phone className="w-3.5 h-3.5" />
              Gratis intakegesprek
            </span>
            <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 border border-primary-200 rounded-full px-3 py-1 text-sm font-medium">
              <Shield className="w-3.5 h-3.5" />
              Geen verplichtingen
            </span>
          </div>
        </div>
        <AppointmentFormWrapper />
      </div>
    </div>
    </>
  )
}
