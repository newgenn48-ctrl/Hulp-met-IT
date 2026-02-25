import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Laarbeek | Hulp met IT',
  description: 'Computerhulp aan huis in Laarbeek door HBO-opgeleide ICT-studenten. Hulp in Beek en Donk, Aarle-Rixtel, Lieshout en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis laarbeek',
    'computer reparatie laarbeek',
    'laptop reparatie laarbeek',
    'ICT student laarbeek',
    'pc hulp laarbeek',
    'computer student laarbeek',
    'laarbeek computerhulp avond',
    'laarbeek IT hulp weekend',
    'computerhulp laarbeek spoed',
    'betaalbare IT hulp laarbeek',
    'wifi problemen laarbeek',
    'internet hulp laarbeek',
    'printer installatie laarbeek',
    'virus verwijderen laarbeek',
    'computerhulp beek en donk',
    'ict hulp aarle-rixtel',
    'computer reparatie lieshout',
    'laptop hulp mariahout',
    'pc hulp beek en donk centrum',
    'it hulp aarle-rixtel centrum',
    'computerhulp laarbeek',
    'it service laarbeek',
    'computer problemen laarbeek'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Laarbeek | Hulp met IT',
    description: 'Computerhulp aan huis in Laarbeek door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-laarbeek',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Laarbeek - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Laarbeek | Hulp met IT',
    description: 'Computerhulp aan huis in Laarbeek. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-laarbeek'
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

export default function ComputerhulpAanHuisLaarbeekLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
