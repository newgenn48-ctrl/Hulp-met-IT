import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Pijnacker-Nootdorp | Hulp met IT',
  description: 'ICT Student aan huis in Pijnacker-Nootdorp voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Pijnacker, Nootdorp, Delfgauw en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis pijnacker-nootdorp',
    'computerhulp pijnacker-nootdorp',
    'ict hulp pijnacker-nootdorp',
    'computer reparatie pijnacker-nootdorp',
    'laptop hulp pijnacker-nootdorp',
    'it student pijnacker-nootdorp',
    'betaalbare computerhulp pijnacker-nootdorp',
    'computer problemen pijnacker-nootdorp',
    'wifi problemen pijnacker-nootdorp',
    'internet hulp pijnacker-nootdorp',
    'computerhulp pijnacker',
    'ict hulp nootdorp',
    'computer reparatie delfgauw',
    'laptop hulp ackerswoude',
    'student computerhulp pijnacker-zuid',
    'it hulp klapwijk',
    'it service pijnacker-nootdorp',
    'laptop reparatie pijnacker-nootdorp',
    'it hulp aan huis pijnacker-nootdorp'
  ],
  openGraph: {
    title: 'Student aan huis Pijnacker-Nootdorp | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Pijnacker-Nootdorp. Wij komen bij u thuis in Pijnacker-Nootdorp en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-pijnacker-nootdorp',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Pijnacker-Nootdorp - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Pijnacker-Nootdorp | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Pijnacker-Nootdorp. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-pijnacker-nootdorp'
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

export default function StudentAanHuisPijnackerNootdorpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
