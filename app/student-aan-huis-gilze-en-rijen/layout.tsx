import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Gilze en Rijen | Hulp met IT',
  description: 'ICT Student aan huis in Gilze en Rijen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Rijen, Gilze, Molenschot en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis gilze en rijen',
    'computerhulp gilze en rijen',
    'ict hulp gilze en rijen',
    'computer reparatie gilze en rijen',
    'laptop hulp gilze en rijen',
    'it student gilze en rijen',
    'betaalbare computerhulp gilze en rijen',
    'computer problemen gilze en rijen',
    'wifi problemen gilze en rijen',
    'internet hulp gilze en rijen',
    'computerhulp rijen',
    'ict hulp gilze',
    'computer reparatie molenschot',
    'laptop hulp rijen centrum',
    'student computerhulp gilze centrum',
    'it hulp hulten',
    'it service gilze en rijen',
    'laptop reparatie gilze en rijen',
    'it hulp aan huis gilze en rijen'
  ],
  openGraph: {
    title: 'Student aan huis Gilze en Rijen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Gilze en Rijen. Wij komen bij u thuis in Gilze en Rijen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-gilze-en-rijen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Gilze en Rijen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Gilze en Rijen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Gilze en Rijen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-gilze-en-rijen'
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

export default function StudentAanHuisGilzeEnRijenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
