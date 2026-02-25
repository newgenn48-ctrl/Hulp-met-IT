import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Nuenen | Hulp met IT',
  description: 'Computerhulp aan huis in Nuenen door HBO-opgeleide ICT-studenten. Hulp in Nuenen Centrum, Gerwen, Nederwetten en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis nuenen',
    'computer reparatie nuenen',
    'laptop reparatie nuenen',
    'ICT student nuenen',
    'pc hulp nuenen',
    'computer student nuenen',
    'nuenen computerhulp avond',
    'nuenen IT hulp weekend',
    'computerhulp nuenen spoed',
    'betaalbare IT hulp nuenen',
    'wifi problemen nuenen',
    'internet hulp nuenen',
    'printer installatie nuenen',
    'virus verwijderen nuenen',
    'computerhulp nuenen centrum',
    'ict hulp gerwen',
    'computer reparatie nederwetten',
    'laptop hulp nuenen zuid',
    'pc hulp nuenen west',
    'it hulp eeneind',
    'computerhulp nuenen',
    'it service nuenen',
    'computer problemen nuenen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Nuenen | Hulp met IT',
    description: 'Computerhulp aan huis in Nuenen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-nuenen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Nuenen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Nuenen | Hulp met IT',
    description: 'Computerhulp aan huis in Nuenen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-nuenen'
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

export default function ComputerhulpAanHuisNuenenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
