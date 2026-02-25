import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Wijk bij Duurstede | Hulp met IT',
  description: 'Computerhulp aan huis in Wijk bij Duurstede door HBO-opgeleide ICT-studenten. Hulp in Wijk bij Duurstede Centrum, De Horden, De Geer en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis wijk bij duurstede',
    'computer reparatie wijk bij duurstede',
    'laptop reparatie wijk bij duurstede',
    'ICT student wijk bij duurstede',
    'pc hulp wijk bij duurstede',
    'computer student wijk bij duurstede',
    'wijk bij duurstede computerhulp avond',
    'wijk bij duurstede IT hulp weekend',
    'computerhulp wijk bij duurstede spoed',
    'betaalbare IT hulp wijk bij duurstede',
    'wifi problemen wijk bij duurstede',
    'internet hulp wijk bij duurstede',
    'printer installatie wijk bij duurstede',
    'virus verwijderen wijk bij duurstede',
    'computerhulp wijk bij duurstede centrum',
    'ict hulp de horden',
    'computer reparatie de geer',
    'laptop hulp langbroek',
    'pc hulp cothen',
    'it hulp leersum',
    'computerhulp wijk bij duurstede',
    'it service wijk bij duurstede',
    'computer problemen wijk bij duurstede'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Wijk bij Duurstede | Hulp met IT',
    description: 'Computerhulp aan huis in Wijk bij Duurstede door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-wijk-bij-duurstede',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Wijk bij Duurstede - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Wijk bij Duurstede | Hulp met IT',
    description: 'Computerhulp aan huis in Wijk bij Duurstede. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-wijk-bij-duurstede'
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

export default function ComputerhulpAanHuisWijkBijDuurstedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
