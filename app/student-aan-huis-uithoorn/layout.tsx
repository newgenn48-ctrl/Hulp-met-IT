import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Uithoorn | Hulp met IT',
  description: 'ICT Student aan huis in Uithoorn voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Uithoorn, De Kwakel, Thamerdal en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis uithoorn',
    'computerhulp uithoorn',
    'ict hulp uithoorn',
    'computer reparatie uithoorn',
    'laptop hulp uithoorn',
    'it student uithoorn',
    'betaalbare computerhulp uithoorn',
    'computer problemen uithoorn',
    'wifi problemen uithoorn',
    'internet hulp uithoorn',
    'computerhulp uithoorn',
    'ict hulp de kwakel',
    'computer reparatie thamerdal',
    'laptop hulp legmeer',
    'student computerhulp uithoorn-centrum',
    'it hulp zijdelwaard',
    'it service uithoorn',
    'laptop reparatie uithoorn',
    'it hulp aan huis uithoorn'
  ],
  openGraph: {
    title: 'Student aan huis Uithoorn | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Uithoorn. Wij komen bij u thuis in Uithoorn en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-uithoorn',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Uithoorn - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Uithoorn | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Uithoorn. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-uithoorn'
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

export default function StudentAanHuisUithoornLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
