import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Den Helder | Hulp met IT',
  description: 'ICT Student aan huis in Den Helder voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Den Helder Centrum, Nieuw-Den Helder, De Schooten en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis den helder',
    'computerhulp den helder',
    'ict hulp den helder',
    'computer reparatie den helder',
    'laptop hulp den helder',
    'it student den helder',
    'betaalbare computerhulp den helder',
    'computer problemen den helder',
    'wifi problemen den helder',
    'internet hulp den helder',
    'computerhulp den helder centrum',
    'ict hulp nieuw-den helder',
    'computer reparatie de schooten',
    'laptop hulp julianadorp',
    'student computerhulp huisduinen',
    'it hulp van foreestbuurt',
    'it service den helder',
    'laptop reparatie den helder',
    'it hulp aan huis den helder'
  ],
  openGraph: {
    title: 'Student aan huis Den Helder | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Den Helder. Wij komen bij u thuis in Den Helder en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-den-helder',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Den Helder - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Den Helder | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Den Helder. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-den-helder'
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

export default function StudentAanHuisDenHelderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
