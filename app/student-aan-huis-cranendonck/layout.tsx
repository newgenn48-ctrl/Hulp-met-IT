import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Cranendonck | Hulp met IT',
  description: 'ICT Student aan huis in Cranendonck voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Budel, Maarheeze, Budel-Schoot en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis cranendonck',
    'computerhulp cranendonck',
    'ict hulp cranendonck',
    'computer reparatie cranendonck',
    'laptop hulp cranendonck',
    'it student cranendonck',
    'betaalbare computerhulp cranendonck',
    'computer problemen cranendonck',
    'wifi problemen cranendonck',
    'internet hulp cranendonck',
    'computerhulp budel',
    'ict hulp maarheeze',
    'computer reparatie budel-schoot',
    'laptop hulp budel-dorplein',
    'student computerhulp gastel',
    'it hulp soerendonk',
    'it service cranendonck',
    'laptop reparatie cranendonck',
    'it hulp aan huis cranendonck'
  ],
  openGraph: {
    title: 'Student aan huis Cranendonck | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Cranendonck. Wij komen bij u thuis in Cranendonck en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-cranendonck',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Cranendonck - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Cranendonck | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Cranendonck. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-cranendonck'
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

export default function StudentAanHuisCranendonckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
