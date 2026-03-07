import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hellevoetsluis | Hulp met IT',
  description: 'Computerhulp aan huis in Hellevoetsluis door HBO-opgeleide ICT-studenten. Hulp in Hellevoetsluis Centrum, De Vesting, Nieuw-Helvoet en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis hellevoetsluis',
    'computer reparatie hellevoetsluis',
    'laptop reparatie hellevoetsluis',
    'ICT student hellevoetsluis',
    'pc hulp hellevoetsluis',
    'computer student hellevoetsluis',
    'hellevoetsluis computerhulp avond',
    'hellevoetsluis IT hulp weekend',
    'computerhulp hellevoetsluis spoed',
    'betaalbare IT hulp hellevoetsluis',
    'wifi problemen hellevoetsluis',
    'internet hulp hellevoetsluis',
    'printer installatie hellevoetsluis',
    'virus verwijderen hellevoetsluis',
    'computerhulp hellevoetsluis centrum',
    'ict hulp de vesting',
    'computer reparatie nieuw-helvoet',
    'laptop hulp kickersbloem',
    'pc hulp de ravense hoek',
    'it hulp oudenhoorn',
    'computerhulp hellevoetsluis',
    'it service hellevoetsluis',
    'computer problemen hellevoetsluis'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hellevoetsluis | Hulp met IT',
    description: 'Computerhulp aan huis in Hellevoetsluis door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-hellevoetsluis',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Hellevoetsluis - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hellevoetsluis | Hulp met IT',
    description: 'Computerhulp aan huis in Hellevoetsluis. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hellevoetsluis'
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

export default function ComputerhulpAanHuisHellevoetsluisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
