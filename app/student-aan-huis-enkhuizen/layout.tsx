import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Enkhuizen | Hulp met IT',
  description: 'ICT Student aan huis in Enkhuizen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Enkhuizen-Centrum, Gommerwijk, Fruittuinen en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis enkhuizen',
    'computerhulp enkhuizen',
    'ict hulp enkhuizen',
    'computer reparatie enkhuizen',
    'laptop hulp enkhuizen',
    'it student enkhuizen',
    'betaalbare computerhulp enkhuizen',
    'computer problemen enkhuizen',
    'wifi problemen enkhuizen',
    'internet hulp enkhuizen',
    'computerhulp enkhuizen-centrum',
    'ict hulp gommerwijk',
    'computer reparatie fruittuinen',
    'laptop hulp kadijken',
    'student computerhulp westerstrand',
    'it hulp enkhuizen-zuid',
    'it service enkhuizen',
    'laptop reparatie enkhuizen',
    'it hulp aan huis enkhuizen'
  ],
  openGraph: {
    title: 'Student aan huis Enkhuizen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Enkhuizen. Wij komen bij u thuis in Enkhuizen en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-enkhuizen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Enkhuizen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Enkhuizen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Enkhuizen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-enkhuizen'
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

export default function StudentAanHuisEnkhuizenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
