import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Eindhoven | Hulp met IT',
  description: 'ICT Student aan huis in Eindhoven voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Eindhoven Centrum, Woensel Noord, Woensel Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis eindhoven',
    'computerhulp eindhoven',
    'ict hulp eindhoven',
    'computer reparatie eindhoven',
    'laptop hulp eindhoven',
    'it student eindhoven',
    'betaalbare computerhulp eindhoven',
    'computer problemen eindhoven',
    'wifi problemen eindhoven',
    'internet hulp eindhoven',
    'computerhulp eindhoven centrum',
    'ict hulp woensel noord',
    'computer reparatie woensel zuid',
    'laptop hulp stratum',
    'student computerhulp gestel',
    'it hulp strijp',
    'it service eindhoven',
    'laptop reparatie eindhoven',
    'it hulp aan huis eindhoven'
  ],
  openGraph: {
    title: 'Student aan huis Eindhoven | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Eindhoven. Wij komen bij u thuis in Eindhoven en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-eindhoven',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Eindhoven - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Eindhoven | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Eindhoven. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-eindhoven'
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

export default function StudentAanHuisEindhovenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
