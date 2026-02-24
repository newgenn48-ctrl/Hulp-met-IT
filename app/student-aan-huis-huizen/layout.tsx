import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Huizen | Hulp met IT',
  description: 'ICT Student aan huis in Huizen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Huizen Centrum, Huizen Noord, Huizen Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis huizen',
    'computerhulp huizen',
    'ict hulp huizen',
    'computer reparatie huizen',
    'laptop hulp huizen',
    'it student huizen',
    'betaalbare computerhulp huizen',
    'computer problemen huizen',
    'wifi problemen huizen',
    'internet hulp huizen',
    'computerhulp huizen centrum',
    'ict hulp huizen noord',
    'computer reparatie huizen oost',
    'laptop hulp huizen west',
    'student computerhulp huizen zuid',
    'it hulp huizen haven',
    'it service huizen',
    'laptop reparatie huizen',
    'it hulp aan huis huizen'
  ],
  openGraph: {
    title: 'Student aan huis Huizen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Huizen. Wij komen bij u thuis in Huizen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-huizen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Huizen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Huizen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Huizen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-huizen'
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

export default function StudentAanHuisHuizenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
