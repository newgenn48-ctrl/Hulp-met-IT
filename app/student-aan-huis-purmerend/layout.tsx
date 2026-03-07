import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Purmerend | Hulp met IT',
  description: 'ICT Student aan huis in Purmerend voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Purmerend Centrum, Purmerend Noord, Purmerend Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis purmerend',
    'computerhulp purmerend',
    'ict hulp purmerend',
    'computer reparatie purmerend',
    'laptop hulp purmerend',
    'it student purmerend',
    'betaalbare computerhulp purmerend',
    'computer problemen purmerend',
    'wifi problemen purmerend',
    'internet hulp purmerend',
    'computerhulp purmerend centrum',
    'ict hulp purmerend noord',
    'computer reparatie purmerend zuid',
    'laptop hulp weidevenne',
    'student computerhulp overwhere',
    'it hulp wheermolen',
    'it service purmerend',
    'laptop reparatie purmerend',
    'it hulp aan huis purmerend'
  ],
  openGraph: {
    title: 'Student aan huis Purmerend | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Purmerend. Wij komen bij u thuis in Purmerend en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-purmerend',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Purmerend - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Purmerend | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Purmerend. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-purmerend'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1
    }
  }
}

export default function StudentAanHuisPurmerendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
