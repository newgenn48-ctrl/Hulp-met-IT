import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Castricum | Hulp met IT',
  description: 'Computerhulp aan huis in Castricum door HBO-opgeleide ICT-studenten. Hulp in Castricum, Limmen, Akersloot en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis castricum',
    'computer reparatie castricum',
    'laptop reparatie castricum',
    'ICT student castricum',
    'pc hulp castricum',
    'computer student castricum',
    'castricum computerhulp avond',
    'castricum IT hulp weekend',
    'computerhulp castricum spoed',
    'betaalbare IT hulp castricum',
    'wifi problemen castricum',
    'internet hulp castricum',
    'printer installatie castricum',
    'virus verwijderen castricum',
    'computerhulp castricum',
    'ict hulp limmen',
    'computer reparatie akersloot',
    'laptop hulp bakkum',
    'pc hulp de woude',
    'it hulp castricum-oost',
    'it service castricum',
    'computer problemen castricum',
    'it hulp aan huis castricum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Castricum | Hulp met IT',
    description: 'Computerhulp aan huis in Castricum door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-castricum',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Castricum - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Castricum | Hulp met IT',
    description: 'Computerhulp aan huis in Castricum. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-castricum'
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

export default function ComputerhulpAanHuisCastricumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
