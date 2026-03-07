import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Koggenland | Hulp met IT',
  description: 'Computerhulp aan huis in Koggenland door HBO-opgeleide ICT-studenten. Hulp in Obdam, De Goorn, Berkhout en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis koggenland',
    'computer reparatie koggenland',
    'laptop reparatie koggenland',
    'ICT student koggenland',
    'pc hulp koggenland',
    'computer student koggenland',
    'koggenland computerhulp avond',
    'koggenland IT hulp weekend',
    'computerhulp koggenland spoed',
    'betaalbare IT hulp koggenland',
    'wifi problemen koggenland',
    'internet hulp koggenland',
    'printer installatie koggenland',
    'virus verwijderen koggenland',
    'computerhulp obdam',
    'ict hulp de goorn',
    'computer reparatie berkhout',
    'laptop hulp ursem',
    'pc hulp spierdijk',
    'it hulp hensbroek',
    'computerhulp koggenland',
    'it service koggenland',
    'computer problemen koggenland'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Koggenland | Hulp met IT',
    description: 'Computerhulp aan huis in Koggenland door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-koggenland',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Koggenland - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Koggenland | Hulp met IT',
    description: 'Computerhulp aan huis in Koggenland. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-koggenland'
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

export default function ComputerhulpAanHuisKoggenlandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
