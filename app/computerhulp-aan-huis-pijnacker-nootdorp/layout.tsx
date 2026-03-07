import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Pijnacker-Nootdorp | Hulp met IT',
  description: 'Computerhulp aan huis in Pijnacker-Nootdorp door HBO-opgeleide ICT-studenten. Hulp in Pijnacker, Nootdorp, Delfgauw en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis pijnacker-nootdorp',
    'computer reparatie pijnacker-nootdorp',
    'laptop reparatie pijnacker-nootdorp',
    'ICT student pijnacker-nootdorp',
    'pc hulp pijnacker-nootdorp',
    'computer student pijnacker-nootdorp',
    'pijnacker-nootdorp computerhulp avond',
    'pijnacker-nootdorp IT hulp weekend',
    'computerhulp pijnacker-nootdorp spoed',
    'betaalbare IT hulp pijnacker-nootdorp',
    'wifi problemen pijnacker-nootdorp',
    'internet hulp pijnacker-nootdorp',
    'printer installatie pijnacker-nootdorp',
    'virus verwijderen pijnacker-nootdorp',
    'computerhulp pijnacker',
    'ict hulp nootdorp',
    'computer reparatie delfgauw',
    'laptop hulp ackerswoude',
    'pc hulp pijnacker-zuid',
    'it hulp klapwijk',
    'computerhulp pijnacker-nootdorp',
    'it service pijnacker-nootdorp',
    'computer problemen pijnacker-nootdorp'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Pijnacker-Nootdorp | Hulp met IT',
    description: 'Computerhulp aan huis in Pijnacker-Nootdorp door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-pijnacker-nootdorp',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Pijnacker-Nootdorp - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Pijnacker-Nootdorp | Hulp met IT',
    description: 'Computerhulp aan huis in Pijnacker-Nootdorp. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-pijnacker-nootdorp'
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

export default function ComputerhulpAanHuisPijnackerNootdorpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
