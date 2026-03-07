import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Wassenaar | Hulp met IT',
  description: 'ICT Student aan huis in Wassenaar voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Wassenaar Centrum, Wassenaar Dorp, Duindigt en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis wassenaar',
    'computerhulp wassenaar',
    'ict hulp wassenaar',
    'computer reparatie wassenaar',
    'laptop hulp wassenaar',
    'it student wassenaar',
    'betaalbare computerhulp wassenaar',
    'computer problemen wassenaar',
    'wifi problemen wassenaar',
    'internet hulp wassenaar',
    'computerhulp wassenaar centrum',
    'ict hulp wassenaar dorp',
    'computer reparatie duindigt',
    'laptop hulp de kieviet',
    'student computerhulp oud-wassenaar',
    'it hulp kasteel de wittenburg',
    'it service wassenaar',
    'laptop reparatie wassenaar',
    'it hulp aan huis wassenaar'
  ],
  openGraph: {
    title: 'Student aan huis Wassenaar | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Wassenaar. Wij komen bij u thuis in Wassenaar en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-wassenaar',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Wassenaar - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Wassenaar | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Wassenaar. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-wassenaar'
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

export default function StudentAanHuisWassenaarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
