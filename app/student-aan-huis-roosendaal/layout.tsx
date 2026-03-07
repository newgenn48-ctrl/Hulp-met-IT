import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Roosendaal | Hulp met IT',
  description: 'ICT Student aan huis in Roosendaal voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Roosendaal Centrum, Roosendaal Noord, Roosendaal Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis roosendaal',
    'computerhulp roosendaal',
    'ict hulp roosendaal',
    'computer reparatie roosendaal',
    'laptop hulp roosendaal',
    'it student roosendaal',
    'betaalbare computerhulp roosendaal',
    'computer problemen roosendaal',
    'wifi problemen roosendaal',
    'internet hulp roosendaal',
    'computerhulp roosendaal centrum',
    'ict hulp roosendaal noord',
    'computer reparatie roosendaal oost',
    'laptop hulp tolberg',
    'student computerhulp kroeven',
    'it hulp langdonk',
    'it service roosendaal',
    'laptop reparatie roosendaal',
    'it hulp aan huis roosendaal'
  ],
  openGraph: {
    title: 'Student aan huis Roosendaal | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Roosendaal. Wij komen bij u thuis in Roosendaal en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-roosendaal',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Roosendaal - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Roosendaal | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Roosendaal. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-roosendaal'
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

export default function StudentAanHuisRoosendaalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
