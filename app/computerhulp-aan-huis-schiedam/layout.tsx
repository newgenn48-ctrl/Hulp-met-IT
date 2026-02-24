import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Schiedam | Hulp met IT',
  description: 'Computerhulp aan huis in Schiedam door HBO-opgeleide ICT-studenten. Hulp in Schiedam Centrum, Schiedam Noord, Schiedam Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis schiedam',
    'computer reparatie schiedam',
    'laptop reparatie schiedam',
    'ICT student schiedam',
    'pc hulp schiedam',
    'computer student schiedam',
    'schiedam computerhulp avond',
    'schiedam IT hulp weekend',
    'computerhulp schiedam spoed',
    'betaalbare IT hulp schiedam',
    'wifi problemen schiedam',
    'internet hulp schiedam',
    'printer installatie schiedam',
    'virus verwijderen schiedam',
    'computerhulp schiedam centrum',
    'ict hulp schiedam noord',
    'computer reparatie schiedam oost',
    'laptop hulp schiedam west',
    'pc hulp schiedam zuid',
    'it hulp groenoord',
    'computerhulp schiedam',
    'it service schiedam',
    'computer problemen schiedam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Schiedam | Hulp met IT',
    description: 'Computerhulp aan huis in Schiedam door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-schiedam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Schiedam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Schiedam | Hulp met IT',
    description: 'Computerhulp aan huis in Schiedam. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-schiedam'
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

export default function ComputerhulpAanHuisSchiedamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
