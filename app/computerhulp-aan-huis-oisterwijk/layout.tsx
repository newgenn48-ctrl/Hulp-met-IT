import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Oisterwijk | Hulp met IT',
  description: 'Computerhulp aan huis in Oisterwijk door HBO-opgeleide ICT-studenten. Hulp in Oisterwijk Centrum, Moergestel, Heukelom en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis oisterwijk',
    'computer reparatie oisterwijk',
    'laptop reparatie oisterwijk',
    'ICT student oisterwijk',
    'pc hulp oisterwijk',
    'computer student oisterwijk',
    'oisterwijk computerhulp avond',
    'oisterwijk IT hulp weekend',
    'computerhulp oisterwijk spoed',
    'betaalbare IT hulp oisterwijk',
    'wifi problemen oisterwijk',
    'internet hulp oisterwijk',
    'printer installatie oisterwijk',
    'virus verwijderen oisterwijk',
    'computerhulp oisterwijk centrum',
    'ict hulp moergestel',
    'computer reparatie heukelom',
    'laptop hulp oisterwijk noord',
    'pc hulp oisterwijk zuid',
    'it hulp kerkhoven',
    'computerhulp oisterwijk',
    'it service oisterwijk',
    'computer problemen oisterwijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Oisterwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Oisterwijk door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-oisterwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Oisterwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Oisterwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Oisterwijk. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-oisterwijk'
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

export default function ComputerhulpAanHuisOisterwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
