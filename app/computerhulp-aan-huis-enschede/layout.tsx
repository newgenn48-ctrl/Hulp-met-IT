import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Enschede | Hulp met IT',
  description: 'Computerhulp aan huis in Enschede door HBO-opgeleide ICT-studenten. Hulp in Enschede Centrum, Enschede Noord, Enschede Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis enschede',
    'computer reparatie enschede',
    'laptop reparatie enschede',
    'ICT student enschede',
    'pc hulp enschede',
    'computer student enschede',
    'enschede computerhulp avond',
    'enschede IT hulp weekend',
    'computerhulp enschede spoed',
    'betaalbare IT hulp enschede',
    'wifi problemen enschede',
    'internet hulp enschede',
    'printer installatie enschede',
    'virus verwijderen enschede',
    'computerhulp enschede centrum',
    'ict hulp enschede noord',
    'computer reparatie enschede oost',
    'laptop hulp enschede west',
    'pc hulp enschede zuid',
    'it hulp boddenkamp',
    'computerhulp enschede',
    'it service enschede',
    'computer problemen enschede'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Enschede | Hulp met IT',
    description: 'Computerhulp aan huis in Enschede door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-enschede',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Enschede - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Enschede | Hulp met IT',
    description: 'Computerhulp aan huis in Enschede. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-enschede'
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

export default function ComputerhulpAanHuisEnschedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
