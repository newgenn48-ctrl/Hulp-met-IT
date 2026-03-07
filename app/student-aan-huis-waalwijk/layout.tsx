import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Waalwijk | Hulp met IT',
  description: 'ICT Student aan huis in Waalwijk voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Waalwijk Centrum, Waalwijk Noord, Waalwijk Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis waalwijk',
    'computerhulp waalwijk',
    'ict hulp waalwijk',
    'computer reparatie waalwijk',
    'laptop hulp waalwijk',
    'it student waalwijk',
    'betaalbare computerhulp waalwijk',
    'computer problemen waalwijk',
    'wifi problemen waalwijk',
    'internet hulp waalwijk',
    'computerhulp waalwijk centrum',
    'ict hulp waalwijk noord',
    'computer reparatie waalwijk zuid',
    'laptop hulp baardwijk',
    'student computerhulp waspik',
    'it hulp sprang-capelle',
    'it service waalwijk',
    'laptop reparatie waalwijk',
    'it hulp aan huis waalwijk'
  ],
  openGraph: {
    title: 'Student aan huis Waalwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Waalwijk. Wij komen bij u thuis in Waalwijk en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-waalwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Waalwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Waalwijk | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Waalwijk. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-waalwijk'
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

export default function StudentAanHuisWaalwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
