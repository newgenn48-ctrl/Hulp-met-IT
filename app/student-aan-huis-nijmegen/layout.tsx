import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Nijmegen | Hulp met IT',
  description: 'ICT Student aan huis in Nijmegen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Nijmegen Centrum, Nijmegen Noord, Nijmegen Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis nijmegen',
    'computerhulp nijmegen',
    'ict hulp nijmegen',
    'computer reparatie nijmegen',
    'laptop hulp nijmegen',
    'it student nijmegen',
    'betaalbare computerhulp nijmegen',
    'computer problemen nijmegen',
    'wifi problemen nijmegen',
    'internet hulp nijmegen',
    'computerhulp nijmegen centrum',
    'ict hulp nijmegen noord',
    'computer reparatie nijmegen oost',
    'laptop hulp nijmegen west',
    'student computerhulp nijmegen zuid',
    'it hulp waalsprong',
    'it service nijmegen',
    'laptop reparatie nijmegen',
    'it hulp aan huis nijmegen'
  ],
  openGraph: {
    title: 'Student aan huis Nijmegen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Nijmegen. Wij komen bij u thuis in Nijmegen en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-nijmegen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Nijmegen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Nijmegen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Nijmegen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-nijmegen'
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

export default function StudentAanHuisNijmegenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
