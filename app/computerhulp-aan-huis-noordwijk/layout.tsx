import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Noordwijk | Hulp met IT',
  description: 'Computerhulp aan huis in Noordwijk door HBO-opgeleide ICT-studenten. Hulp in Noordwijk aan Zee, Noordwijk-Binnen, Noordwijkerhout en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis noordwijk',
    'computer reparatie noordwijk',
    'laptop reparatie noordwijk',
    'ICT student noordwijk',
    'pc hulp noordwijk',
    'computer student noordwijk',
    'noordwijk computerhulp avond',
    'noordwijk IT hulp weekend',
    'computerhulp noordwijk spoed',
    'betaalbare IT hulp noordwijk',
    'wifi problemen noordwijk',
    'internet hulp noordwijk',
    'printer installatie noordwijk',
    'virus verwijderen noordwijk',
    'computerhulp noordwijk aan zee',
    'ict hulp noordwijk-binnen',
    'computer reparatie noordwijkerhout',
    'laptop hulp de zilk',
    'pc hulp langeveld',
    'it hulp offem',
    'computerhulp noordwijk',
    'it service noordwijk',
    'computer problemen noordwijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Noordwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Noordwijk door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-noordwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Noordwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Noordwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Noordwijk. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-noordwijk'
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

export default function ComputerhulpAanHuisNoordwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
