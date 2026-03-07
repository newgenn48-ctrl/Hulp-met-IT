import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Alkmaar | Hulp met IT',
  description: 'ICT Student aan huis in Alkmaar voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Alkmaar Centrum, Alkmaar Noord, Alkmaar Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis alkmaar',
    'computerhulp alkmaar',
    'ict hulp alkmaar',
    'computer reparatie alkmaar',
    'laptop hulp alkmaar',
    'it student alkmaar',
    'betaalbare computerhulp alkmaar',
    'computer problemen alkmaar',
    'wifi problemen alkmaar',
    'internet hulp alkmaar',
    'computerhulp alkmaar centrum',
    'ict hulp alkmaar noord',
    'computer reparatie alkmaar oost',
    'laptop hulp overdie',
    'student computerhulp de mare',
    'it hulp koedijk',
    'it service alkmaar',
    'laptop reparatie alkmaar',
    'it hulp aan huis alkmaar'
  ],
  openGraph: {
    title: 'Student aan huis Alkmaar | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Alkmaar. Wij komen bij u thuis in Alkmaar en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-alkmaar',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Alkmaar - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Alkmaar | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Alkmaar. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-alkmaar'
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

export default function StudentAanHuisAlkmaarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
