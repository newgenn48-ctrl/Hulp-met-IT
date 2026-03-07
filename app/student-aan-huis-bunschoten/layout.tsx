import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Bunschoten | Hulp met IT',
  description: 'ICT Student aan huis in Bunschoten voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Bunschoten, Spakenburg, Eemdijk en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis bunschoten',
    'computerhulp bunschoten',
    'ict hulp bunschoten',
    'computer reparatie bunschoten',
    'laptop hulp bunschoten',
    'it student bunschoten',
    'betaalbare computerhulp bunschoten',
    'computer problemen bunschoten',
    'wifi problemen bunschoten',
    'internet hulp bunschoten',
    'computerhulp bunschoten',
    'ict hulp spakenburg',
    'computer reparatie eemdijk',
    'laptop hulp zevenhuizen',
    'student computerhulp hoogland',
    'it hulp vathorst',
    'it service bunschoten',
    'laptop reparatie bunschoten',
    'it hulp aan huis bunschoten'
  ],
  openGraph: {
    title: 'Student aan huis Bunschoten | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bunschoten. Wij komen bij u thuis in Bunschoten en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-bunschoten',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Bunschoten - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Bunschoten | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bunschoten. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-bunschoten'
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

export default function StudentAanHuisBunschotenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
