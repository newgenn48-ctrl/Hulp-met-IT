import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Breda | Hulp met IT',
  description: 'Computerhulp aan huis in Breda door HBO-opgeleide ICT-studenten. Hulp in Breda Centrum, Breda Noord, Breda Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis breda',
    'computer reparatie breda',
    'laptop reparatie breda',
    'ICT student breda',
    'pc hulp breda',
    'computer student breda',
    'breda computerhulp avond',
    'breda IT hulp weekend',
    'computerhulp breda spoed',
    'betaalbare IT hulp breda',
    'wifi problemen breda',
    'internet hulp breda',
    'printer installatie breda',
    'virus verwijderen breda',
    'computerhulp breda centrum',
    'ict hulp breda noord',
    'computer reparatie breda oost',
    'laptop hulp breda west',
    'pc hulp breda zuid',
    'it hulp prinsenbeek',
    'computerhulp breda',
    'it service breda',
    'computer problemen breda'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Breda | Hulp met IT',
    description: 'Computerhulp aan huis in Breda door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-breda',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Breda - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Breda | Hulp met IT',
    description: 'Computerhulp aan huis in Breda. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-breda'
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

export default function ComputerhulpAanHuisBredaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
