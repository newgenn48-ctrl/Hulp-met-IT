import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Eersel | Hulp met IT',
  description: 'Computerhulp aan huis in Eersel door HBO-opgeleide ICT-studenten. Hulp in Eersel Centrum, Duizel, Steensel en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis eersel',
    'computer reparatie eersel',
    'laptop reparatie eersel',
    'ICT student eersel',
    'pc hulp eersel',
    'computer student eersel',
    'eersel computerhulp avond',
    'eersel IT hulp weekend',
    'computerhulp eersel spoed',
    'betaalbare IT hulp eersel',
    'wifi problemen eersel',
    'internet hulp eersel',
    'printer installatie eersel',
    'virus verwijderen eersel',
    'computerhulp eersel centrum',
    'ict hulp duizel',
    'computer reparatie steensel',
    'laptop hulp knegsel',
    'pc hulp wintelre',
    'it hulp vessem',
    'computerhulp eersel',
    'it service eersel',
    'computer problemen eersel'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Eersel | Hulp met IT',
    description: 'Computerhulp aan huis in Eersel door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-eersel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Eersel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Eersel | Hulp met IT',
    description: 'Computerhulp aan huis in Eersel. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-eersel'
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

export default function ComputerhulpAanHuisEerselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
