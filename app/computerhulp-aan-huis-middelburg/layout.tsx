import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Middelburg | Hulp met IT',
  description: 'Computerhulp aan huis in Middelburg door HBO-opgeleide ICT-studenten. Hulp in Middelburg Centrum, Middelburg Noord, Middelburg Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis middelburg',
    'computer reparatie middelburg',
    'laptop reparatie middelburg',
    'ICT student middelburg',
    'pc hulp middelburg',
    'computer student middelburg',
    'middelburg computerhulp avond',
    'middelburg IT hulp weekend',
    'computerhulp middelburg spoed',
    'betaalbare IT hulp middelburg',
    'wifi problemen middelburg',
    'internet hulp middelburg',
    'printer installatie middelburg',
    'virus verwijderen middelburg',
    'computerhulp middelburg centrum',
    'ict hulp middelburg noord',
    'computer reparatie middelburg oost',
    'laptop hulp middelburg west',
    'pc hulp middelburg zuid',
    'it hulp vlissingen',
    'computerhulp middelburg',
    'it service middelburg',
    'computer problemen middelburg'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Middelburg | Hulp met IT',
    description: 'Computerhulp aan huis in Middelburg door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-middelburg',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Middelburg - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Middelburg | Hulp met IT',
    description: 'Computerhulp aan huis in Middelburg. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-middelburg'
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

export default function ComputerhulpAanHuisMiddelburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
