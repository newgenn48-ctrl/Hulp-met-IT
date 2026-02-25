import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Zeist | Hulp met IT',
  description: 'ICT Student aan huis in Zeist voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Zeist Centrum, Zeist Noord, Zeist Zuid en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis zeist',
    'computerhulp zeist',
    'ict hulp zeist',
    'computer reparatie zeist',
    'laptop hulp zeist',
    'it student zeist',
    'betaalbare computerhulp zeist',
    'computer problemen zeist',
    'wifi problemen zeist',
    'internet hulp zeist',
    'computerhulp zeist centrum',
    'ict hulp zeist noord',
    'computer reparatie zeist zuid',
    'laptop hulp austerlitz',
    'student computerhulp den dolder',
    'it hulp bosch en duin',
    'it service zeist',
    'laptop reparatie zeist',
    'it hulp aan huis zeist'
  ],
  openGraph: {
    title: 'Student aan huis Zeist | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zeist. Wij komen bij u thuis in Zeist en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-zeist',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Zeist - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Zeist | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zeist. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-zeist'
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

export default function StudentAanHuisZeistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
