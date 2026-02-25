import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Rhenen | Hulp met IT',
  description: 'Computerhulp aan huis in Rhenen door HBO-opgeleide ICT-studenten. Hulp in Rhenen, Elst, Achterberg en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis rhenen',
    'computer reparatie rhenen',
    'laptop reparatie rhenen',
    'ICT student rhenen',
    'pc hulp rhenen',
    'computer student rhenen',
    'rhenen computerhulp avond',
    'rhenen IT hulp weekend',
    'computerhulp rhenen spoed',
    'betaalbare IT hulp rhenen',
    'wifi problemen rhenen',
    'internet hulp rhenen',
    'printer installatie rhenen',
    'virus verwijderen rhenen',
    'computerhulp rhenen',
    'ict hulp elst',
    'computer reparatie achterberg',
    'laptop hulp remmerden',
    'pc hulp de nude',
    'it hulp grebbeberg',
    'it service rhenen',
    'computer problemen rhenen',
    'it hulp aan huis rhenen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Rhenen | Hulp met IT',
    description: 'Computerhulp aan huis in Rhenen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-rhenen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Rhenen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Rhenen | Hulp met IT',
    description: 'Computerhulp aan huis in Rhenen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-rhenen'
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

export default function ComputerhulpAanHuisRhenenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
