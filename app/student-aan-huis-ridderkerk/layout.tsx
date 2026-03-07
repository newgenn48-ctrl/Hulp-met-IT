import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Ridderkerk | Hulp met IT',
  description: 'ICT Student aan huis in Ridderkerk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Ridderkerk Centrum, Drievliet, Bolnes en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis ridderkerk',
    'computerhulp ridderkerk',
    'ict hulp ridderkerk',
    'computer reparatie ridderkerk',
    'laptop hulp ridderkerk',
    'it student ridderkerk',
    'betaalbare computerhulp ridderkerk',
    'computer problemen ridderkerk',
    'wifi problemen ridderkerk',
    'internet hulp ridderkerk',
    'computerhulp ridderkerk centrum',
    'ict hulp drievliet',
    'computer reparatie bolnes',
    'laptop hulp slikkerveer',
    'student computerhulp rijsoord',
    'it hulp donkersloot',
    'it service ridderkerk',
    'laptop reparatie ridderkerk',
    'it hulp aan huis ridderkerk'
  ],
  openGraph: {
    title: 'Student aan huis Ridderkerk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Ridderkerk. Wij komen bij u thuis in Ridderkerk en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-ridderkerk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Ridderkerk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Ridderkerk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Ridderkerk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-ridderkerk'
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

export default function StudentAanHuisRidderkerkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
