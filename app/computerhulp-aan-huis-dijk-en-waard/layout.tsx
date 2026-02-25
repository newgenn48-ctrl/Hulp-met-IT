import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Dijk en Waard | Hulp met IT',
  description: 'Computerhulp aan huis in Dijk en Waard door HBO-opgeleide ICT-studenten. Hulp in Heerhugowaard, Langedijk, Sint Pancras en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis dijk en waard',
    'computer reparatie dijk en waard',
    'laptop reparatie dijk en waard',
    'ICT student dijk en waard',
    'pc hulp dijk en waard',
    'computer student dijk en waard',
    'dijk en waard computerhulp avond',
    'dijk en waard IT hulp weekend',
    'computerhulp dijk en waard spoed',
    'betaalbare IT hulp dijk en waard',
    'wifi problemen dijk en waard',
    'internet hulp dijk en waard',
    'printer installatie dijk en waard',
    'virus verwijderen dijk en waard',
    'computerhulp heerhugowaard',
    'ict hulp langedijk',
    'computer reparatie sint pancras',
    'laptop hulp noord-scharwoude',
    'pc hulp zuid-scharwoude',
    'it hulp broek op langedijk',
    'computerhulp dijk en waard',
    'it service dijk en waard',
    'computer problemen dijk en waard'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Dijk en Waard | Hulp met IT',
    description: 'Computerhulp aan huis in Dijk en Waard door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-dijk-en-waard',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Dijk en Waard - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Dijk en Waard | Hulp met IT',
    description: 'Computerhulp aan huis in Dijk en Waard. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-dijk-en-waard'
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

export default function ComputerhulpAanHuisDijkEnWaardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
