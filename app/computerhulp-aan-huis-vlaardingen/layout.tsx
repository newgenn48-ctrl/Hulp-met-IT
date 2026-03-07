import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Vlaardingen | Hulp met IT',
  description: 'Computerhulp aan huis in Vlaardingen door HBO-opgeleide ICT-studenten. Hulp in Vlaardingen Centrum, Vlaardingen Noord, Vlaardingen Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis vlaardingen',
    'computer reparatie vlaardingen',
    'laptop reparatie vlaardingen',
    'ICT student vlaardingen',
    'pc hulp vlaardingen',
    'computer student vlaardingen',
    'vlaardingen computerhulp avond',
    'vlaardingen IT hulp weekend',
    'computerhulp vlaardingen spoed',
    'betaalbare IT hulp vlaardingen',
    'wifi problemen vlaardingen',
    'internet hulp vlaardingen',
    'printer installatie vlaardingen',
    'virus verwijderen vlaardingen',
    'computerhulp vlaardingen centrum',
    'ict hulp vlaardingen noord',
    'computer reparatie vlaardingen oost',
    'laptop hulp vlaardingen west',
    'pc hulp vlaardingen zuid',
    'it hulp westwijk',
    'computerhulp vlaardingen',
    'it service vlaardingen',
    'computer problemen vlaardingen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Vlaardingen | Hulp met IT',
    description: 'Computerhulp aan huis in Vlaardingen door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-vlaardingen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Vlaardingen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Vlaardingen | Hulp met IT',
    description: 'Computerhulp aan huis in Vlaardingen. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-vlaardingen'
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

export default function ComputerhulpAanHuisVlaardingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
