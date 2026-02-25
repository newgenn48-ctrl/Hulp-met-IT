import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Maassluis | Hulp met IT',
  description: 'Computerhulp aan huis in Maassluis door HBO-opgeleide ICT-studenten. Hulp in Maassluis Centrum, Koningshoek, Sluispolder en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis maassluis',
    'computer reparatie maassluis',
    'laptop reparatie maassluis',
    'ICT student maassluis',
    'pc hulp maassluis',
    'computer student maassluis',
    'maassluis computerhulp avond',
    'maassluis IT hulp weekend',
    'computerhulp maassluis spoed',
    'betaalbare IT hulp maassluis',
    'wifi problemen maassluis',
    'internet hulp maassluis',
    'printer installatie maassluis',
    'virus verwijderen maassluis',
    'computerhulp maassluis centrum',
    'ict hulp koningshoek',
    'computer reparatie sluispolder',
    'laptop hulp het balkon',
    'pc hulp wipperspark',
    'it hulp kapelpolder',
    'computerhulp maassluis',
    'it service maassluis',
    'computer problemen maassluis'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Maassluis | Hulp met IT',
    description: 'Computerhulp aan huis in Maassluis door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-maassluis',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Maassluis - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Maassluis | Hulp met IT',
    description: 'Computerhulp aan huis in Maassluis. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-maassluis'
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

export default function ComputerhulpAanHuisMaassluisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
