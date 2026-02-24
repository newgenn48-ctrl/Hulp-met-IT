import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Weesp | Hulp met IT',
  description: 'ICT Student aan huis in Weesp voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Weesp Centrum, Weesp Noord, Weesp Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis weesp',
    'computerhulp weesp',
    'ict hulp weesp',
    'computer reparatie weesp',
    'laptop hulp weesp',
    'it student weesp',
    'betaalbare computerhulp weesp',
    'computer problemen weesp',
    'wifi problemen weesp',
    'internet hulp weesp',
    'computerhulp weesp centrum',
    'ict hulp weesp noord',
    'computer reparatie weesp oost',
    'laptop hulp weesp west',
    'student computerhulp weesp zuid',
    'it hulp naarden',
    'it service weesp',
    'laptop reparatie weesp',
    'it hulp aan huis weesp'
  ],
  openGraph: {
    title: 'Student aan huis Weesp | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Weesp. Wij komen bij u thuis in Weesp en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-weesp',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Weesp - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Weesp | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Weesp. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-weesp'
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

export default function StudentAanHuisWeespLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
