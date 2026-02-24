import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Bergen op Zoom | Hulp met IT',
  description: 'Computerhulp aan huis in Bergen op Zoom door HBO-opgeleide ICT-studenten. Hulp in Bergen op Zoom Centrum, Bergen op Zoom Noord, Bergen op Zoom Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis bergen op zoom',
    'computer reparatie bergen op zoom',
    'laptop reparatie bergen op zoom',
    'ICT student bergen op zoom',
    'pc hulp bergen op zoom',
    'computer student bergen op zoom',
    'bergen op zoom computerhulp avond',
    'bergen op zoom IT hulp weekend',
    'computerhulp bergen op zoom spoed',
    'betaalbare IT hulp bergen op zoom',
    'wifi problemen bergen op zoom',
    'internet hulp bergen op zoom',
    'printer installatie bergen op zoom',
    'virus verwijderen bergen op zoom',
    'computerhulp bergen op zoom centrum',
    'ict hulp bergen op zoom noord',
    'computer reparatie bergen op zoom oost',
    'laptop hulp bergse plaat',
    'pc hulp gageldonk',
    'it hulp halsteren',
    'computerhulp bergen op zoom',
    'it service bergen op zoom',
    'computer problemen bergen op zoom'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Bergen op Zoom | Hulp met IT',
    description: 'Computerhulp aan huis in Bergen op Zoom door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-bergen-op-zoom',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Bergen op Zoom - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Bergen op Zoom | Hulp met IT',
    description: 'Computerhulp aan huis in Bergen op Zoom. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-bergen-op-zoom'
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

export default function ComputerhulpAanHuisBergenOpZoomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
