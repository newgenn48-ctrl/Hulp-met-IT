import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Steenbergen | Hulp met IT',
  description: 'ICT Student aan huis in Steenbergen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Steenbergen Centrum, Dinteloord, Kruisland en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis steenbergen',
    'computerhulp steenbergen',
    'ict hulp steenbergen',
    'computer reparatie steenbergen',
    'laptop hulp steenbergen',
    'it student steenbergen',
    'betaalbare computerhulp steenbergen',
    'computer problemen steenbergen',
    'wifi problemen steenbergen',
    'internet hulp steenbergen',
    'computerhulp steenbergen centrum',
    'ict hulp dinteloord',
    'computer reparatie kruisland',
    'laptop hulp nieuw-vossemeer',
    'student computerhulp de heen',
    'it hulp welberg',
    'it service steenbergen',
    'laptop reparatie steenbergen',
    'it hulp aan huis steenbergen'
  ],
  openGraph: {
    title: 'Student aan huis Steenbergen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Steenbergen. Wij komen bij u thuis in Steenbergen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-steenbergen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Steenbergen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Steenbergen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Steenbergen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-steenbergen'
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

export default function StudentAanHuisSteenbergenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
