import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Papendrecht | Hulp met IT',
  description: 'ICT Student aan huis in Papendrecht voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Papendrecht Centrum, Papendrecht Noord, Papendrecht West en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis papendrecht',
    'computerhulp papendrecht',
    'ict hulp papendrecht',
    'computer reparatie papendrecht',
    'laptop hulp papendrecht',
    'it student papendrecht',
    'betaalbare computerhulp papendrecht',
    'computer problemen papendrecht',
    'wifi problemen papendrecht',
    'internet hulp papendrecht',
    'computerhulp papendrecht centrum',
    'ict hulp papendrecht noord',
    'computer reparatie papendrecht west',
    'laptop hulp westpolder',
    'student computerhulp kraaihoek',
    'it hulp molenvliet',
    'it service papendrecht',
    'laptop reparatie papendrecht',
    'it hulp aan huis papendrecht'
  ],
  openGraph: {
    title: 'Student aan huis Papendrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Papendrecht. Wij komen bij u thuis in Papendrecht en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-papendrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Papendrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Papendrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Papendrecht. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-papendrecht'
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

export default function StudentAanHuisPapendrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
