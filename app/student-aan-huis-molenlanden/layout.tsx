import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Molenlanden | Hulp met IT',
  description: 'ICT Student aan huis in Molenlanden voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Groot-Ammers, Bleskensgraaf, Nieuw-Lekkerland en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis molenlanden',
    'computerhulp molenlanden',
    'ict hulp molenlanden',
    'computer reparatie molenlanden',
    'laptop hulp molenlanden',
    'it student molenlanden',
    'betaalbare computerhulp molenlanden',
    'computer problemen molenlanden',
    'wifi problemen molenlanden',
    'internet hulp molenlanden',
    'computerhulp groot-ammers',
    'ict hulp bleskensgraaf',
    'computer reparatie nieuw-lekkerland',
    'laptop hulp kinderdijk',
    'student computerhulp oud-alblas',
    'it hulp brandwijk',
    'it service molenlanden',
    'laptop reparatie molenlanden',
    'it hulp aan huis molenlanden'
  ],
  openGraph: {
    title: 'Student aan huis Molenlanden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Molenlanden. Wij komen bij u thuis in Molenlanden en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-molenlanden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Molenlanden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Molenlanden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Molenlanden. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-molenlanden'
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

export default function StudentAanHuisMolenlandenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
