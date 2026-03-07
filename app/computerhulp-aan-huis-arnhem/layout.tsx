import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Arnhem | Hulp met IT',
  description: 'Computerhulp aan huis in Arnhem door HBO-opgeleide ICT-studenten. Hulp in Arnhem Centrum, Arnhem Noord, Arnhem Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis arnhem',
    'computer reparatie arnhem',
    'laptop reparatie arnhem',
    'ICT student arnhem',
    'pc hulp arnhem',
    'computer student arnhem',
    'arnhem computerhulp avond',
    'arnhem IT hulp weekend',
    'computerhulp arnhem spoed',
    'betaalbare IT hulp arnhem',
    'wifi problemen arnhem',
    'internet hulp arnhem',
    'printer installatie arnhem',
    'virus verwijderen arnhem',
    'computerhulp arnhem centrum',
    'ict hulp arnhem noord',
    'computer reparatie arnhem oost',
    'laptop hulp arnhem west',
    'pc hulp arnhem zuid',
    'it hulp presikhaaf',
    'computerhulp arnhem',
    'it service arnhem',
    'computer problemen arnhem'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Arnhem | Hulp met IT',
    description: 'Computerhulp aan huis in Arnhem door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-arnhem',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Arnhem - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Arnhem | Hulp met IT',
    description: 'Computerhulp aan huis in Arnhem. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-arnhem'
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

export default function ComputerhulpAanHuisArnhemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
