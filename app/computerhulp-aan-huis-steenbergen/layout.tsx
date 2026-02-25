import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Steenbergen | Hulp met IT',
  description: 'Computerhulp aan huis in Steenbergen door HBO-opgeleide ICT-studenten. Hulp in Steenbergen Centrum, Dinteloord, Kruisland en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis steenbergen',
    'computer reparatie steenbergen',
    'laptop reparatie steenbergen',
    'ICT student steenbergen',
    'pc hulp steenbergen',
    'computer student steenbergen',
    'steenbergen computerhulp avond',
    'steenbergen IT hulp weekend',
    'computerhulp steenbergen spoed',
    'betaalbare IT hulp steenbergen',
    'wifi problemen steenbergen',
    'internet hulp steenbergen',
    'printer installatie steenbergen',
    'virus verwijderen steenbergen',
    'computerhulp steenbergen centrum',
    'ict hulp dinteloord',
    'computer reparatie kruisland',
    'laptop hulp nieuw-vossemeer',
    'pc hulp de heen',
    'it hulp welberg',
    'computerhulp steenbergen',
    'it service steenbergen',
    'computer problemen steenbergen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Steenbergen | Hulp met IT',
    description: 'Computerhulp aan huis in Steenbergen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-steenbergen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Steenbergen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Steenbergen | Hulp met IT',
    description: 'Computerhulp aan huis in Steenbergen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-steenbergen'
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

export default function ComputerhulpAanHuisSteenbergenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
