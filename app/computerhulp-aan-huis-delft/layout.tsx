import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Delft | Hulp met IT',
  description: 'Computerhulp aan huis in Delft door HBO-opgeleide ICT-studenten. Hulp in Delft Centrum, Delft Noord, Delft Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis delft',
    'computer reparatie delft',
    'laptop reparatie delft',
    'ICT student delft',
    'pc hulp delft',
    'computer student delft',
    'delft computerhulp avond',
    'delft IT hulp weekend',
    'computerhulp delft spoed',
    'betaalbare IT hulp delft',
    'wifi problemen delft',
    'internet hulp delft',
    'printer installatie delft',
    'virus verwijderen delft',
    'computerhulp delft centrum',
    'ict hulp delft noord',
    'computer reparatie delft oost',
    'laptop hulp delft west',
    'pc hulp delft zuid',
    'it hulp tanthof',
    'computerhulp delft',
    'it service delft',
    'computer problemen delft'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Delft | Hulp met IT',
    description: 'Computerhulp aan huis in Delft door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-delft',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Delft - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Delft | Hulp met IT',
    description: 'Computerhulp aan huis in Delft. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-delft'
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

export default function ComputerhulpAanHuisDelftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
