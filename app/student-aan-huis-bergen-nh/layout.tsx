import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Bergen | Hulp met IT',
  description: 'ICT Student aan huis in Bergen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Bergen, Bergen aan Zee, Egmond aan Zee en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis bergen',
    'computerhulp bergen',
    'ict hulp bergen',
    'computer reparatie bergen',
    'laptop hulp bergen',
    'it student bergen',
    'betaalbare computerhulp bergen',
    'computer problemen bergen',
    'wifi problemen bergen',
    'internet hulp bergen',
    'computerhulp bergen',
    'ict hulp bergen aan zee',
    'computer reparatie egmond aan zee',
    'laptop hulp egmond aan den hoef',
    'student computerhulp egmond-binnen',
    'it hulp schoorl',
    'it service bergen',
    'laptop reparatie bergen',
    'it hulp aan huis bergen'
  ],
  openGraph: {
    title: 'Student aan huis Bergen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bergen. Wij komen bij u thuis in Bergen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-bergen-nh',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Bergen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Bergen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Bergen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-bergen-nh'
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

export default function StudentAanHuisBergenNhLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
