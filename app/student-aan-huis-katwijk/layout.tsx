import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Katwijk | Hulp met IT',
  description: 'ICT Student aan huis in Katwijk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Katwijk aan Zee, Katwijk aan den Rijn, Katwijk Centrum en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis katwijk',
    'computerhulp katwijk',
    'ict hulp katwijk',
    'computer reparatie katwijk',
    'laptop hulp katwijk',
    'it student katwijk',
    'betaalbare computerhulp katwijk',
    'computer problemen katwijk',
    'wifi problemen katwijk',
    'internet hulp katwijk',
    'computerhulp katwijk aan zee',
    'ict hulp katwijk aan den rijn',
    'computer reparatie katwijk centrum',
    'laptop hulp katwijk noord',
    'student computerhulp katwijk zuid',
    'it hulp rijnsburg',
    'it service katwijk',
    'laptop reparatie katwijk',
    'it hulp aan huis katwijk'
  ],
  openGraph: {
    title: 'Student aan huis Katwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Katwijk. Wij komen bij u thuis in Katwijk en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-katwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Katwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Katwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Katwijk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-katwijk'
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

export default function StudentAanHuisKatwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
