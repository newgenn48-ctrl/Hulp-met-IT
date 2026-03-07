import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Haarlem | Hulp met IT',
  description: 'Computerhulp aan huis in Haarlem door HBO-opgeleide ICT-studenten. Hulp in Haarlem Centrum, Haarlem Noord, Haarlem Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis haarlem',
    'computer reparatie haarlem',
    'laptop reparatie haarlem',
    'ICT student haarlem',
    'pc hulp haarlem',
    'computer student haarlem',
    'haarlem computerhulp avond',
    'haarlem IT hulp weekend',
    'computerhulp haarlem spoed',
    'betaalbare IT hulp haarlem',
    'wifi problemen haarlem',
    'internet hulp haarlem',
    'printer installatie haarlem',
    'virus verwijderen haarlem',
    'computerhulp haarlem centrum',
    'ict hulp haarlem noord',
    'computer reparatie haarlem oost',
    'laptop hulp haarlem zuid',
    'pc hulp schalkwijk',
    'it hulp botermarkt',
    'computerhulp haarlem',
    'it service haarlem',
    'computer problemen haarlem'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Haarlem | Hulp met IT',
    description: 'Computerhulp aan huis in Haarlem door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-haarlem',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Haarlem - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Haarlem | Hulp met IT',
    description: 'Computerhulp aan huis in Haarlem. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-haarlem'
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

export default function ComputerhulpAanHuisHaarlemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
