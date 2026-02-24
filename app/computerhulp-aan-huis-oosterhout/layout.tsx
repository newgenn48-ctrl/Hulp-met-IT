import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Oosterhout | Hulp met IT',
  description: 'Computerhulp aan huis in Oosterhout door HBO-opgeleide ICT-studenten. Hulp in Oosterhout Centrum, Oosterhout Noord, Oosterhout Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis oosterhout',
    'computer reparatie oosterhout',
    'laptop reparatie oosterhout',
    'ICT student oosterhout',
    'pc hulp oosterhout',
    'computer student oosterhout',
    'oosterhout computerhulp avond',
    'oosterhout IT hulp weekend',
    'computerhulp oosterhout spoed',
    'betaalbare IT hulp oosterhout',
    'wifi problemen oosterhout',
    'internet hulp oosterhout',
    'printer installatie oosterhout',
    'virus verwijderen oosterhout',
    'computerhulp oosterhout centrum',
    'ict hulp oosterhout noord',
    'computer reparatie oosterhout oost',
    'laptop hulp slotjes',
    'pc hulp vrachelen',
    'it hulp dommelbergen',
    'computerhulp oosterhout',
    'it service oosterhout',
    'computer problemen oosterhout'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Oosterhout | Hulp met IT',
    description: 'Computerhulp aan huis in Oosterhout door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-oosterhout',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Oosterhout - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Oosterhout | Hulp met IT',
    description: 'Computerhulp aan huis in Oosterhout. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-oosterhout'
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

export default function ComputerhulpAanHuisOosterhoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
