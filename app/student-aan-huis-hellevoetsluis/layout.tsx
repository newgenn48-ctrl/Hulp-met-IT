import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Hellevoetsluis | Hulp met IT',
  description: 'ICT Student aan huis in Hellevoetsluis voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Hellevoetsluis Centrum, De Vesting, Nieuw-Helvoet en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis hellevoetsluis',
    'computerhulp hellevoetsluis',
    'ict hulp hellevoetsluis',
    'computer reparatie hellevoetsluis',
    'laptop hulp hellevoetsluis',
    'it student hellevoetsluis',
    'betaalbare computerhulp hellevoetsluis',
    'computer problemen hellevoetsluis',
    'wifi problemen hellevoetsluis',
    'internet hulp hellevoetsluis',
    'computerhulp hellevoetsluis centrum',
    'ict hulp de vesting',
    'computer reparatie nieuw-helvoet',
    'laptop hulp kickersbloem',
    'student computerhulp de ravense hoek',
    'it hulp oudenhoorn',
    'it service hellevoetsluis',
    'laptop reparatie hellevoetsluis',
    'it hulp aan huis hellevoetsluis'
  ],
  openGraph: {
    title: 'Student aan huis Hellevoetsluis | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hellevoetsluis. Wij komen bij u thuis in Hellevoetsluis en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-hellevoetsluis',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Hellevoetsluis - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Hellevoetsluis | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hellevoetsluis. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-hellevoetsluis'
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

export default function StudentAanHuisHellevoetsluisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
