import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Eindhoven | Hulp met IT',
  description: 'Computerhulp aan huis in Eindhoven door HBO-opgeleide ICT-studenten. Hulp in Eindhoven Centrum, Woensel Noord, Woensel Zuid en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis eindhoven',
    'computer reparatie eindhoven',
    'laptop reparatie eindhoven',
    'ICT student eindhoven',
    'pc hulp eindhoven',
    'computer student eindhoven',
    'eindhoven computerhulp avond',
    'eindhoven IT hulp weekend',
    'computerhulp eindhoven spoed',
    'betaalbare IT hulp eindhoven',
    'wifi problemen eindhoven',
    'internet hulp eindhoven',
    'printer installatie eindhoven',
    'virus verwijderen eindhoven',
    'computerhulp eindhoven centrum',
    'ict hulp woensel noord',
    'computer reparatie woensel zuid',
    'laptop hulp stratum',
    'pc hulp gestel',
    'it hulp strijp',
    'computerhulp eindhoven',
    'it service eindhoven',
    'computer problemen eindhoven'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Eindhoven | Hulp met IT',
    description: 'Computerhulp aan huis in Eindhoven door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-eindhoven',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Eindhoven - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Eindhoven | Hulp met IT',
    description: 'Computerhulp aan huis in Eindhoven. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-eindhoven'
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

export default function ComputerhulpAanHuisEindhovenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
