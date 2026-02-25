import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Zundert | Hulp met IT',
  description: 'ICT Student aan huis in Zundert voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Zundert Centrum, Rijsbergen, Achtmaal en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis zundert',
    'computerhulp zundert',
    'ict hulp zundert',
    'computer reparatie zundert',
    'laptop hulp zundert',
    'it student zundert',
    'betaalbare computerhulp zundert',
    'computer problemen zundert',
    'wifi problemen zundert',
    'internet hulp zundert',
    'computerhulp zundert centrum',
    'ict hulp rijsbergen',
    'computer reparatie achtmaal',
    'laptop hulp klein zundert',
    'student computerhulp wernhout',
    'it hulp zundert noord',
    'it service zundert',
    'laptop reparatie zundert',
    'it hulp aan huis zundert'
  ],
  openGraph: {
    title: 'Student aan huis Zundert | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zundert. Wij komen bij u thuis in Zundert en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-zundert',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Zundert - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Zundert | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zundert. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-zundert'
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

export default function StudentAanHuisZundertLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
