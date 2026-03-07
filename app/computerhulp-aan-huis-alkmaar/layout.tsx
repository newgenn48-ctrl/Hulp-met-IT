import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Alkmaar | Hulp met IT',
  description: 'Computerhulp aan huis in Alkmaar door HBO-opgeleide ICT-studenten. Hulp in Alkmaar Centrum, Alkmaar Noord, Alkmaar Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis alkmaar',
    'computer reparatie alkmaar',
    'laptop reparatie alkmaar',
    'ICT student alkmaar',
    'pc hulp alkmaar',
    'computer student alkmaar',
    'alkmaar computerhulp avond',
    'alkmaar IT hulp weekend',
    'computerhulp alkmaar spoed',
    'betaalbare IT hulp alkmaar',
    'wifi problemen alkmaar',
    'internet hulp alkmaar',
    'printer installatie alkmaar',
    'virus verwijderen alkmaar',
    'computerhulp alkmaar centrum',
    'ict hulp alkmaar noord',
    'computer reparatie alkmaar oost',
    'laptop hulp overdie',
    'pc hulp de mare',
    'it hulp koedijk',
    'computerhulp alkmaar',
    'it service alkmaar',
    'computer problemen alkmaar'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Alkmaar | Hulp met IT',
    description: 'Computerhulp aan huis in Alkmaar door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-alkmaar',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Alkmaar - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Alkmaar | Hulp met IT',
    description: 'Computerhulp aan huis in Alkmaar. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-alkmaar'
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

export default function ComputerhulpAanHuisAlkmaarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
