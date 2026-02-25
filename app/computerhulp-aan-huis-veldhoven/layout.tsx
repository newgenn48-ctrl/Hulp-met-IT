import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Veldhoven | Hulp met IT',
  description: 'Computerhulp aan huis in Veldhoven door HBO-opgeleide ICT-studenten. Hulp in Veldhoven Centrum, Veldhoven Noord, Veldhoven Zuid en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis veldhoven',
    'computer reparatie veldhoven',
    'laptop reparatie veldhoven',
    'ICT student veldhoven',
    'pc hulp veldhoven',
    'computer student veldhoven',
    'veldhoven computerhulp avond',
    'veldhoven IT hulp weekend',
    'computerhulp veldhoven spoed',
    'betaalbare IT hulp veldhoven',
    'wifi problemen veldhoven',
    'internet hulp veldhoven',
    'printer installatie veldhoven',
    'virus verwijderen veldhoven',
    'computerhulp veldhoven centrum',
    'ict hulp veldhoven noord',
    'computer reparatie veldhoven zuid',
    'laptop hulp meerveldhoven',
    'pc hulp d\'ekker',
    'it hulp zilverackers',
    'computerhulp veldhoven',
    'it service veldhoven',
    'computer problemen veldhoven'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Veldhoven | Hulp met IT',
    description: 'Computerhulp aan huis in Veldhoven door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-veldhoven',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Veldhoven - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Veldhoven | Hulp met IT',
    description: 'Computerhulp aan huis in Veldhoven. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-veldhoven'
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

export default function ComputerhulpAanHuisVeldhovenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
