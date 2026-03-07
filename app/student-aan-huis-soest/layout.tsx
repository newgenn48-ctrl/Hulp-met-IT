import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Soest | Hulp met IT',
  description: 'ICT Student aan huis in Soest voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Soest Centrum, Soest Noord, Soest Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis soest',
    'computerhulp soest',
    'ict hulp soest',
    'computer reparatie soest',
    'laptop hulp soest',
    'it student soest',
    'betaalbare computerhulp soest',
    'computer problemen soest',
    'wifi problemen soest',
    'internet hulp soest',
    'computerhulp soest centrum',
    'ict hulp soest noord',
    'computer reparatie soest oost',
    'laptop hulp soest west',
    'student computerhulp soest zuid',
    'it hulp soesterberg',
    'it service soest',
    'laptop reparatie soest',
    'it hulp aan huis soest'
  ],
  openGraph: {
    title: 'Student aan huis Soest | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Soest. Wij komen bij u thuis in Soest en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-soest',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Soest - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Soest | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Soest. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-soest'
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

export default function StudentAanHuisSoestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
