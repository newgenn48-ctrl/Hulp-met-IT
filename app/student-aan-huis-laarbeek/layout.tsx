import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Laarbeek | Hulp met IT',
  description: 'ICT Student aan huis in Laarbeek voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Beek en Donk, Aarle-Rixtel, Lieshout en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis laarbeek',
    'computerhulp laarbeek',
    'ict hulp laarbeek',
    'computer reparatie laarbeek',
    'laptop hulp laarbeek',
    'it student laarbeek',
    'betaalbare computerhulp laarbeek',
    'computer problemen laarbeek',
    'wifi problemen laarbeek',
    'internet hulp laarbeek',
    'computerhulp beek en donk',
    'ict hulp aarle-rixtel',
    'computer reparatie lieshout',
    'laptop hulp mariahout',
    'student computerhulp beek en donk centrum',
    'it hulp aarle-rixtel centrum',
    'it service laarbeek',
    'laptop reparatie laarbeek',
    'it hulp aan huis laarbeek'
  ],
  openGraph: {
    title: 'Student aan huis Laarbeek | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Laarbeek. Wij komen bij u thuis in Laarbeek en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-laarbeek',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Laarbeek - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Laarbeek | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Laarbeek. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-laarbeek'
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

export default function StudentAanHuisLaarbeekLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
