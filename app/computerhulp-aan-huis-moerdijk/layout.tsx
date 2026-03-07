import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Moerdijk | Hulp met IT',
  description: 'Computerhulp aan huis in Moerdijk door HBO-opgeleide ICT-studenten. Hulp in Zevenbergen, Klundert, Fijnaart en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis moerdijk',
    'computer reparatie moerdijk',
    'laptop reparatie moerdijk',
    'ICT student moerdijk',
    'pc hulp moerdijk',
    'computer student moerdijk',
    'moerdijk computerhulp avond',
    'moerdijk IT hulp weekend',
    'computerhulp moerdijk spoed',
    'betaalbare IT hulp moerdijk',
    'wifi problemen moerdijk',
    'internet hulp moerdijk',
    'printer installatie moerdijk',
    'virus verwijderen moerdijk',
    'computerhulp zevenbergen',
    'ict hulp klundert',
    'computer reparatie fijnaart',
    'laptop hulp willemstad',
    'pc hulp standdaarbuiten',
    'it hulp moerdijk dorp',
    'computerhulp moerdijk',
    'it service moerdijk',
    'computer problemen moerdijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Moerdijk | Hulp met IT',
    description: 'Computerhulp aan huis in Moerdijk door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-moerdijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Moerdijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Moerdijk | Hulp met IT',
    description: 'Computerhulp aan huis in Moerdijk. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-moerdijk'
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

export default function ComputerhulpAanHuisMoerdijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
