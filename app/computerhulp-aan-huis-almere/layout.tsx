import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Almere | Hulp met IT',
  description: 'Computerhulp aan huis in Almere door HBO-opgeleide ICT-studenten. Hulp in Almere Centrum, Almere Noord, Almere Zuid en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis almere',
    'computer reparatie almere',
    'laptop reparatie almere',
    'ICT student almere',
    'pc hulp almere',
    'computer student almere',
    'almere computerhulp avond',
    'almere IT hulp weekend',
    'computerhulp almere spoed',
    'betaalbare IT hulp almere',
    'wifi problemen almere',
    'internet hulp almere',
    'printer installatie almere',
    'virus verwijderen almere',
    'computerhulp almere centrum',
    'ict hulp almere noord',
    'computer reparatie almere zuid',
    'laptop hulp almere oost',
    'pc hulp almere west',
    'it hulp almere buiten',
    'computerhulp almere',
    'it service almere',
    'computer problemen almere'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Almere | Hulp met IT',
    description: 'Computerhulp aan huis in Almere door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-almere',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Almere - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Almere | Hulp met IT',
    description: 'Computerhulp aan huis in Almere. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-almere'
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

export default function ComputerhulpAanHuisAlmereLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
