import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Huizen | Hulp met IT',
  description: 'Computerhulp aan huis in Huizen door HBO-opgeleide ICT-studenten. Hulp in Huizen Centrum, Huizen Noord, Huizen Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis huizen',
    'computer reparatie huizen',
    'laptop reparatie huizen',
    'ICT student huizen',
    'pc hulp huizen',
    'computer student huizen',
    'huizen computerhulp avond',
    'huizen IT hulp weekend',
    'computerhulp huizen spoed',
    'betaalbare IT hulp huizen',
    'wifi problemen huizen',
    'internet hulp huizen',
    'printer installatie huizen',
    'virus verwijderen huizen',
    'computerhulp huizen centrum',
    'ict hulp huizen noord',
    'computer reparatie huizen oost',
    'laptop hulp huizen west',
    'pc hulp huizen zuid',
    'it hulp huizen haven',
    'computerhulp huizen',
    'it service huizen',
    'computer problemen huizen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Huizen | Hulp met IT',
    description: 'Computerhulp aan huis in Huizen door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-huizen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Huizen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Huizen | Hulp met IT',
    description: 'Computerhulp aan huis in Huizen. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-huizen'
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

export default function ComputerhulpAanHuisHuizenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
