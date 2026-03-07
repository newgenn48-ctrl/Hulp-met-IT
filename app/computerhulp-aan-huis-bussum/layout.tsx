import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Bussum | Hulp met IT',
  description: 'Computerhulp aan huis in Bussum door HBO-opgeleide ICT-studenten. Hulp in Bussum Centrum, Bussum Noord, Bussum Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis bussum',
    'computer reparatie bussum',
    'laptop reparatie bussum',
    'ICT student bussum',
    'pc hulp bussum',
    'computer student bussum',
    'bussum computerhulp avond',
    'bussum IT hulp weekend',
    'computerhulp bussum spoed',
    'betaalbare IT hulp bussum',
    'wifi problemen bussum',
    'internet hulp bussum',
    'printer installatie bussum',
    'virus verwijderen bussum',
    'computerhulp bussum centrum',
    'ict hulp bussum noord',
    'computer reparatie bussum oost',
    'laptop hulp bussum west',
    'pc hulp bussum zuid',
    'it hulp brink',
    'computerhulp bussum',
    'it service bussum',
    'computer problemen bussum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Bussum | Hulp met IT',
    description: 'Computerhulp aan huis in Bussum door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-bussum',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Bussum - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Bussum | Hulp met IT',
    description: 'Computerhulp aan huis in Bussum. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-bussum'
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

export default function ComputerhulpAanHuisBussumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
