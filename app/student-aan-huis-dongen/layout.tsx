import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Dongen | Hulp met IT',
  description: 'ICT Student aan huis in Dongen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Dongen Centrum, Dongen Noord, Dongen Zuid en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis dongen',
    'computerhulp dongen',
    'ict hulp dongen',
    'computer reparatie dongen',
    'laptop hulp dongen',
    'it student dongen',
    'betaalbare computerhulp dongen',
    'computer problemen dongen',
    'wifi problemen dongen',
    'internet hulp dongen',
    'computerhulp dongen centrum',
    'ict hulp dongen noord',
    'computer reparatie dongen zuid',
    'laptop hulp \'s gravenmoer',
    'student computerhulp klein-dongen',
    'it hulp de biezen',
    'it service dongen',
    'laptop reparatie dongen',
    'it hulp aan huis dongen'
  ],
  openGraph: {
    title: 'Student aan huis Dongen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Dongen. Wij komen bij u thuis in Dongen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-dongen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Dongen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Dongen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Dongen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-dongen'
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

export default function StudentAanHuisDongenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
