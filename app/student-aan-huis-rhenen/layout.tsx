import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Rhenen | Hulp met IT',
  description: 'ICT Student aan huis in Rhenen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Rhenen, Elst, Achterberg en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis rhenen',
    'computerhulp rhenen',
    'ict hulp rhenen',
    'computer reparatie rhenen',
    'laptop hulp rhenen',
    'it student rhenen',
    'betaalbare computerhulp rhenen',
    'computer problemen rhenen',
    'wifi problemen rhenen',
    'internet hulp rhenen',
    'computerhulp rhenen',
    'ict hulp elst',
    'computer reparatie achterberg',
    'laptop hulp remmerden',
    'student computerhulp de nude',
    'it hulp grebbeberg',
    'it service rhenen',
    'laptop reparatie rhenen',
    'it hulp aan huis rhenen'
  ],
  openGraph: {
    title: 'Student aan huis Rhenen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Rhenen. Wij komen bij u thuis in Rhenen en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-rhenen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Rhenen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Rhenen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Rhenen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-rhenen'
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

export default function StudentAanHuisRhenenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
