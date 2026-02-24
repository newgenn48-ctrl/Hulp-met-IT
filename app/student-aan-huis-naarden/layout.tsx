import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Naarden | Hulp met IT',
  description: 'ICT Student aan huis in Naarden voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Naarden Centrum, Naarden Noord, Naarden Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis naarden',
    'computerhulp naarden',
    'ict hulp naarden',
    'computer reparatie naarden',
    'laptop hulp naarden',
    'it student naarden',
    'betaalbare computerhulp naarden',
    'computer problemen naarden',
    'wifi problemen naarden',
    'internet hulp naarden',
    'computerhulp naarden centrum',
    'ict hulp naarden noord',
    'computer reparatie naarden oost',
    'laptop hulp naarden west',
    'student computerhulp naarden zuid',
    'it hulp naarden vesting',
    'it service naarden',
    'laptop reparatie naarden',
    'it hulp aan huis naarden'
  ],
  openGraph: {
    title: 'Student aan huis Naarden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Naarden. Wij komen bij u thuis in Naarden en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-naarden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Naarden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Naarden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Naarden. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-naarden'
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

export default function StudentAanHuisNaardenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
