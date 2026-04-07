import { AppointmentFormWrapper } from '@/components/forms/AppointmentFormWrapper'
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
        <AppointmentFormWrapper />
      </div>
    </div>
    </>
  )
}
