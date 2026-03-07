import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Eersel | Hulp met IT',
  description: 'ICT Student aan huis in Eersel voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Eersel Centrum, Duizel, Steensel en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis eersel',
    'computerhulp eersel',
    'ict hulp eersel',
    'computer reparatie eersel',
    'laptop hulp eersel',
    'it student eersel',
    'betaalbare computerhulp eersel',
    'computer problemen eersel',
    'wifi problemen eersel',
    'internet hulp eersel',
    'computerhulp eersel centrum',
    'ict hulp duizel',
    'computer reparatie steensel',
    'laptop hulp knegsel',
    'student computerhulp wintelre',
    'it hulp vessem',
    'it service eersel',
    'laptop reparatie eersel',
    'it hulp aan huis eersel'
  ],
  openGraph: {
    title: 'Student aan huis Eersel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Eersel. Wij komen bij u thuis in Eersel en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-eersel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Eersel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Eersel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Eersel. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-eersel'
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

export default function StudentAanHuisEerselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
