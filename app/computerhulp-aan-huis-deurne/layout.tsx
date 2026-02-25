import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Deurne | Hulp met IT',
  description: 'Computerhulp aan huis in Deurne door HBO-opgeleide ICT-studenten. Hulp in Deurne Centrum, Liessel, Vlierden en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis deurne',
    'computer reparatie deurne',
    'laptop reparatie deurne',
    'ICT student deurne',
    'pc hulp deurne',
    'computer student deurne',
    'deurne computerhulp avond',
    'deurne IT hulp weekend',
    'computerhulp deurne spoed',
    'betaalbare IT hulp deurne',
    'wifi problemen deurne',
    'internet hulp deurne',
    'printer installatie deurne',
    'virus verwijderen deurne',
    'computerhulp deurne centrum',
    'ict hulp liessel',
    'computer reparatie vlierden',
    'laptop hulp neerkant',
    'pc hulp walsberg',
    'it hulp zeilberg',
    'computerhulp deurne',
    'it service deurne',
    'computer problemen deurne'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Deurne | Hulp met IT',
    description: 'Computerhulp aan huis in Deurne door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-deurne',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Deurne - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Deurne | Hulp met IT',
    description: 'Computerhulp aan huis in Deurne. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-deurne'
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

export default function ComputerhulpAanHuisDeurneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
