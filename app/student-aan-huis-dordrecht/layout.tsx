import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Dordrecht | Hulp met IT',
  description: 'ICT Student aan huis in Dordrecht voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Dordrecht Centrum, Dordrecht Noord, Dordrecht Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis dordrecht',
    'computerhulp dordrecht',
    'ict hulp dordrecht',
    'computer reparatie dordrecht',
    'laptop hulp dordrecht',
    'it student dordrecht',
    'betaalbare computerhulp dordrecht',
    'computer problemen dordrecht',
    'wifi problemen dordrecht',
    'internet hulp dordrecht',
    'computerhulp dordrecht centrum',
    'ict hulp dordrecht noord',
    'computer reparatie dordrecht oost',
    'laptop hulp dordrecht west',
    'student computerhulp dordrecht zuid',
    'it hulp wielwijk',
    'it service dordrecht',
    'laptop reparatie dordrecht',
    'it hulp aan huis dordrecht'
  ],
  openGraph: {
    title: 'Student aan huis Dordrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Dordrecht. Wij komen bij u thuis in Dordrecht en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-dordrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Dordrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Dordrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Dordrecht. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-dordrecht'
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

export default function StudentAanHuisDordrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
