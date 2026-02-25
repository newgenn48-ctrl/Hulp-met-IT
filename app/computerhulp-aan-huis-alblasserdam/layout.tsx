import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Alblasserdam | Hulp met IT',
  description: 'Computerhulp aan huis in Alblasserdam door HBO-opgeleide ICT-studenten. Hulp in Alblasserdam Centrum, Souburgh, Babylonienburg en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis alblasserdam',
    'computer reparatie alblasserdam',
    'laptop reparatie alblasserdam',
    'ICT student alblasserdam',
    'pc hulp alblasserdam',
    'computer student alblasserdam',
    'alblasserdam computerhulp avond',
    'alblasserdam IT hulp weekend',
    'computerhulp alblasserdam spoed',
    'betaalbare IT hulp alblasserdam',
    'wifi problemen alblasserdam',
    'internet hulp alblasserdam',
    'printer installatie alblasserdam',
    'virus verwijderen alblasserdam',
    'computerhulp alblasserdam centrum',
    'ict hulp souburgh',
    'computer reparatie babylonienburg',
    'laptop hulp kinderdijk-omgeving',
    'pc hulp blokweer',
    'it hulp alblasserdam-west',
    'computerhulp alblasserdam',
    'it service alblasserdam',
    'computer problemen alblasserdam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Alblasserdam | Hulp met IT',
    description: 'Computerhulp aan huis in Alblasserdam door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-alblasserdam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Alblasserdam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Alblasserdam | Hulp met IT',
    description: 'Computerhulp aan huis in Alblasserdam. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-alblasserdam'
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

export default function ComputerhulpAanHuisAlblasserdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
