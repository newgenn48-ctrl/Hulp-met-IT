import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Boxtel | Hulp met IT',
  description: 'Computerhulp aan huis in Boxtel door HBO-opgeleide ICT-studenten. Hulp in Boxtel Centrum, Boxtel Noord, Boxtel Zuid en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis boxtel',
    'computer reparatie boxtel',
    'laptop reparatie boxtel',
    'ICT student boxtel',
    'pc hulp boxtel',
    'computer student boxtel',
    'boxtel computerhulp avond',
    'boxtel IT hulp weekend',
    'computerhulp boxtel spoed',
    'betaalbare IT hulp boxtel',
    'wifi problemen boxtel',
    'internet hulp boxtel',
    'printer installatie boxtel',
    'virus verwijderen boxtel',
    'computerhulp boxtel centrum',
    'ict hulp boxtel noord',
    'computer reparatie boxtel zuid',
    'laptop hulp liempde',
    'pc hulp lennisheuvel',
    'it hulp esch',
    'computerhulp boxtel',
    'it service boxtel',
    'computer problemen boxtel'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Boxtel | Hulp met IT',
    description: 'Computerhulp aan huis in Boxtel door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-boxtel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Boxtel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Boxtel | Hulp met IT',
    description: 'Computerhulp aan huis in Boxtel. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-boxtel'
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

export default function ComputerhulpAanHuisBoxtelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
