import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Molenlanden | Hulp met IT',
  description: 'Computerhulp aan huis in Molenlanden door HBO-opgeleide ICT-studenten. Hulp in Groot-Ammers, Bleskensgraaf, Nieuw-Lekkerland en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis molenlanden',
    'computer reparatie molenlanden',
    'laptop reparatie molenlanden',
    'ICT student molenlanden',
    'pc hulp molenlanden',
    'computer student molenlanden',
    'molenlanden computerhulp avond',
    'molenlanden IT hulp weekend',
    'computerhulp molenlanden spoed',
    'betaalbare IT hulp molenlanden',
    'wifi problemen molenlanden',
    'internet hulp molenlanden',
    'printer installatie molenlanden',
    'virus verwijderen molenlanden',
    'computerhulp groot-ammers',
    'ict hulp bleskensgraaf',
    'computer reparatie nieuw-lekkerland',
    'laptop hulp kinderdijk',
    'pc hulp oud-alblas',
    'it hulp brandwijk',
    'computerhulp molenlanden',
    'it service molenlanden',
    'computer problemen molenlanden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Molenlanden | Hulp met IT',
    description: 'Computerhulp aan huis in Molenlanden door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-molenlanden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Molenlanden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Molenlanden | Hulp met IT',
    description: 'Computerhulp aan huis in Molenlanden. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-molenlanden'
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

export default function ComputerhulpAanHuisMolenlandenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
