import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Nijmegen | Hulp met IT',
  description: 'Computerhulp aan huis in Nijmegen door HBO-opgeleide ICT-studenten. Hulp in Nijmegen Centrum, Nijmegen Noord, Nijmegen Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis nijmegen',
    'computer reparatie nijmegen',
    'laptop reparatie nijmegen',
    'ICT student nijmegen',
    'pc hulp nijmegen',
    'computer student nijmegen',
    'nijmegen computerhulp avond',
    'nijmegen IT hulp weekend',
    'computerhulp nijmegen spoed',
    'betaalbare IT hulp nijmegen',
    'wifi problemen nijmegen',
    'internet hulp nijmegen',
    'printer installatie nijmegen',
    'virus verwijderen nijmegen',
    'computerhulp nijmegen centrum',
    'ict hulp nijmegen noord',
    'computer reparatie nijmegen oost',
    'laptop hulp nijmegen west',
    'pc hulp nijmegen zuid',
    'it hulp waalsprong',
    'computerhulp nijmegen',
    'it service nijmegen',
    'computer problemen nijmegen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Nijmegen | Hulp met IT',
    description: 'Computerhulp aan huis in Nijmegen door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-nijmegen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Nijmegen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Nijmegen | Hulp met IT',
    description: 'Computerhulp aan huis in Nijmegen. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-nijmegen'
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

export default function ComputerhulpAanHuisNijmegenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
