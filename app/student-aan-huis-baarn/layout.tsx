import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Baarn | Hulp met IT',
  description: 'ICT Student aan huis in Baarn voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Baarn Centrum, Baarn Noord, Baarn Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis baarn',
    'computerhulp baarn',
    'ict hulp baarn',
    'computer reparatie baarn',
    'laptop hulp baarn',
    'it student baarn',
    'betaalbare computerhulp baarn',
    'computer problemen baarn',
    'wifi problemen baarn',
    'internet hulp baarn',
    'computerhulp baarn centrum',
    'ict hulp baarn noord',
    'computer reparatie baarn oost',
    'laptop hulp baarn west',
    'student computerhulp baarn zuid',
    'it hulp soestdijk',
    'it service baarn',
    'laptop reparatie baarn',
    'it hulp aan huis baarn'
  ],
  openGraph: {
    title: 'Student aan huis Baarn | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Baarn. Wij komen bij u thuis in Baarn en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-baarn',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Baarn - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Baarn | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Baarn. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-baarn'
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

export default function StudentAanHuisBaarnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
