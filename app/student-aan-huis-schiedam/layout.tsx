import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Schiedam | Hulp met IT',
  description: 'ICT Student aan huis in Schiedam voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Schiedam Centrum, Schiedam Noord, Schiedam Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis schiedam',
    'computerhulp schiedam',
    'ict hulp schiedam',
    'computer reparatie schiedam',
    'laptop hulp schiedam',
    'it student schiedam',
    'betaalbare computerhulp schiedam',
    'computer problemen schiedam',
    'wifi problemen schiedam',
    'internet hulp schiedam',
    'computerhulp schiedam centrum',
    'ict hulp schiedam noord',
    'computer reparatie schiedam oost',
    'laptop hulp schiedam west',
    'student computerhulp schiedam zuid',
    'it hulp groenoord',
    'it service schiedam',
    'laptop reparatie schiedam',
    'it hulp aan huis schiedam'
  ],
  openGraph: {
    title: 'Student aan huis Schiedam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Schiedam. Wij komen bij u thuis in Schiedam en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-schiedam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Schiedam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Schiedam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Schiedam. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-schiedam'
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

export default function StudentAanHuisSchiedamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
