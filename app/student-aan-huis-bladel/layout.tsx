import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Bladel | Hulp met IT',
  description: 'ICT Student aan huis in Bladel voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Bladel Centrum, Hapert, Hoogeloon en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis bladel',
    'computerhulp bladel',
    'ict hulp bladel',
    'computer reparatie bladel',
    'laptop hulp bladel',
    'it student bladel',
    'betaalbare computerhulp bladel',
    'computer problemen bladel',
    'wifi problemen bladel',
    'internet hulp bladel',
    'computerhulp bladel centrum',
    'ict hulp hapert',
    'computer reparatie hoogeloon',
    'laptop hulp netersel',
    'student computerhulp casteren',
    'it hulp bladel noord',
    'it service bladel',
    'laptop reparatie bladel',
    'it hulp aan huis bladel'
  ],
  openGraph: {
    title: 'Student aan huis Bladel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bladel. Wij komen bij u thuis in Bladel en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-bladel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Bladel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Bladel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bladel. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-bladel'
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

export default function StudentAanHuisBladelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
