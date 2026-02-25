import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Veldhoven | Hulp met IT',
  description: 'ICT Student aan huis in Veldhoven voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Veldhoven Centrum, Veldhoven Noord, Veldhoven Zuid en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis veldhoven',
    'computerhulp veldhoven',
    'ict hulp veldhoven',
    'computer reparatie veldhoven',
    'laptop hulp veldhoven',
    'it student veldhoven',
    'betaalbare computerhulp veldhoven',
    'computer problemen veldhoven',
    'wifi problemen veldhoven',
    'internet hulp veldhoven',
    'computerhulp veldhoven centrum',
    'ict hulp veldhoven noord',
    'computer reparatie veldhoven zuid',
    'laptop hulp meerveldhoven',
    'student computerhulp d\'ekker',
    'it hulp zilverackers',
    'it service veldhoven',
    'laptop reparatie veldhoven',
    'it hulp aan huis veldhoven'
  ],
  openGraph: {
    title: 'Student aan huis Veldhoven | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Veldhoven. Wij komen bij u thuis in Veldhoven en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-veldhoven',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Veldhoven - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Veldhoven | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Veldhoven. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-veldhoven'
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

export default function StudentAanHuisVeldhovenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
