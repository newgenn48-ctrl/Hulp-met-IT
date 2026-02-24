import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Groningen | Hulp met IT',
  description: 'ICT Student aan huis in Groningen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Groningen Centrum, Groningen Noord, Groningen Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis groningen',
    'computerhulp groningen',
    'ict hulp groningen',
    'computer reparatie groningen',
    'laptop hulp groningen',
    'it student groningen',
    'betaalbare computerhulp groningen',
    'computer problemen groningen',
    'wifi problemen groningen',
    'internet hulp groningen',
    'computerhulp groningen centrum',
    'ict hulp groningen noord',
    'computer reparatie groningen oost',
    'laptop hulp groningen west',
    'student computerhulp groningen zuid',
    'it hulp paddepoel',
    'it service groningen',
    'laptop reparatie groningen',
    'it hulp aan huis groningen'
  ],
  openGraph: {
    title: 'Student aan huis Groningen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Groningen. Wij komen bij u thuis in Groningen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-groningen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Groningen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Groningen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Groningen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-groningen'
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

export default function StudentAanHuisGroningenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
