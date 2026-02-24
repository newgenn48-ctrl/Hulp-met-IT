import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Leiden | Hulp met IT',
  description: 'ICT Student aan huis in Leiden voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Leiden Centrum, Leiden Noord, Leiden Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis leiden',
    'computerhulp leiden',
    'ict hulp leiden',
    'computer reparatie leiden',
    'laptop hulp leiden',
    'it student leiden',
    'betaalbare computerhulp leiden',
    'computer problemen leiden',
    'wifi problemen leiden',
    'internet hulp leiden',
    'computerhulp leiden centrum',
    'ict hulp leiden noord',
    'computer reparatie leiden oost',
    'laptop hulp leiden west',
    'student computerhulp leiden zuid',
    'it hulp leidse hout',
    'it service leiden',
    'laptop reparatie leiden',
    'it hulp aan huis leiden'
  ],
  openGraph: {
    title: 'Student aan huis Leiden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Leiden. Wij komen bij u thuis in Leiden en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-leiden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Leiden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Leiden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Leiden. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-leiden'
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

export default function StudentAanHuisLeidenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
