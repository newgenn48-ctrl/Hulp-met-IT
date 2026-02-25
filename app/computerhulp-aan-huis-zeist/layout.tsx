import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zeist | Hulp met IT',
  description: 'Computerhulp aan huis in Zeist door HBO-opgeleide ICT-studenten. Hulp in Zeist Centrum, Zeist Noord, Zeist Zuid en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis zeist',
    'computer reparatie zeist',
    'laptop reparatie zeist',
    'ICT student zeist',
    'pc hulp zeist',
    'computer student zeist',
    'zeist computerhulp avond',
    'zeist IT hulp weekend',
    'computerhulp zeist spoed',
    'betaalbare IT hulp zeist',
    'wifi problemen zeist',
    'internet hulp zeist',
    'printer installatie zeist',
    'virus verwijderen zeist',
    'computerhulp zeist centrum',
    'ict hulp zeist noord',
    'computer reparatie zeist zuid',
    'laptop hulp austerlitz',
    'pc hulp den dolder',
    'it hulp bosch en duin',
    'computerhulp zeist',
    'it service zeist',
    'computer problemen zeist'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zeist | Hulp met IT',
    description: 'Computerhulp aan huis in Zeist door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-zeist',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Zeist - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zeist | Hulp met IT',
    description: 'Computerhulp aan huis in Zeist. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zeist'
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

export default function ComputerhulpAanHuisZeistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
