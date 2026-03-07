import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Drimmelen | Hulp met IT',
  description: 'ICT Student aan huis in Drimmelen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Made, Terheijden, Lage Zwaluwe en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis drimmelen',
    'computerhulp drimmelen',
    'ict hulp drimmelen',
    'computer reparatie drimmelen',
    'laptop hulp drimmelen',
    'it student drimmelen',
    'betaalbare computerhulp drimmelen',
    'computer problemen drimmelen',
    'wifi problemen drimmelen',
    'internet hulp drimmelen',
    'computerhulp made',
    'ict hulp terheijden',
    'computer reparatie lage zwaluwe',
    'laptop hulp hooge zwaluwe',
    'student computerhulp wagenberg',
    'it hulp drimmelen dorp',
    'it service drimmelen',
    'laptop reparatie drimmelen',
    'it hulp aan huis drimmelen'
  ],
  openGraph: {
    title: 'Student aan huis Drimmelen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Drimmelen. Wij komen bij u thuis in Drimmelen en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-drimmelen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Drimmelen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Drimmelen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Drimmelen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-drimmelen'
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

export default function StudentAanHuisDrimmelenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
