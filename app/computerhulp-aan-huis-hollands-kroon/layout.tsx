import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hollands Kroon | Hulp met IT',
  description: 'Computerhulp aan huis in Hollands Kroon door HBO-opgeleide ICT-studenten. Hulp in Anna Paulowna, Wieringerwerf, Hippolytushoef en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis hollands kroon',
    'computer reparatie hollands kroon',
    'laptop reparatie hollands kroon',
    'ICT student hollands kroon',
    'pc hulp hollands kroon',
    'computer student hollands kroon',
    'hollands kroon computerhulp avond',
    'hollands kroon IT hulp weekend',
    'computerhulp hollands kroon spoed',
    'betaalbare IT hulp hollands kroon',
    'wifi problemen hollands kroon',
    'internet hulp hollands kroon',
    'printer installatie hollands kroon',
    'virus verwijderen hollands kroon',
    'computerhulp anna paulowna',
    'ict hulp wieringerwerf',
    'computer reparatie hippolytushoef',
    'laptop hulp breezand',
    'pc hulp nieuwe niedorp',
    'it hulp wieringen',
    'computerhulp hollands kroon',
    'it service hollands kroon',
    'computer problemen hollands kroon'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hollands Kroon | Hulp met IT',
    description: 'Computerhulp aan huis in Hollands Kroon door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-hollands-kroon',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Hollands Kroon - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hollands Kroon | Hulp met IT',
    description: 'Computerhulp aan huis in Hollands Kroon. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hollands-kroon'
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

export default function ComputerhulpAanHuisHollandsKroonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
