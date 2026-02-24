import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Helmond | Hulp met IT',
  description: 'ICT Student aan huis in Helmond voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Helmond Centrum, Helmond Noord, Helmond Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis helmond',
    'computerhulp helmond',
    'ict hulp helmond',
    'computer reparatie helmond',
    'laptop hulp helmond',
    'it student helmond',
    'betaalbare computerhulp helmond',
    'computer problemen helmond',
    'wifi problemen helmond',
    'internet hulp helmond',
    'computerhulp helmond centrum',
    'ict hulp helmond noord',
    'computer reparatie helmond oost',
    'laptop hulp helmond west',
    'student computerhulp brandevoort',
    'it hulp rijpelberg',
    'it service helmond',
    'laptop reparatie helmond',
    'it hulp aan huis helmond'
  ],
  openGraph: {
    title: 'Student aan huis Helmond | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Helmond. Wij komen bij u thuis in Helmond en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-helmond',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Helmond - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Helmond | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Helmond. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-helmond'
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

export default function StudentAanHuisHelmondLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
