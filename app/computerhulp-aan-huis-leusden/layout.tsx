import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Leusden | Hulp met IT',
  description: 'Computerhulp aan huis in Leusden door HBO-opgeleide ICT-studenten. Hulp in Leusden Centrum, Leusden-Zuid, Hamersveld en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis leusden',
    'computer reparatie leusden',
    'laptop reparatie leusden',
    'ICT student leusden',
    'pc hulp leusden',
    'computer student leusden',
    'leusden computerhulp avond',
    'leusden IT hulp weekend',
    'computerhulp leusden spoed',
    'betaalbare IT hulp leusden',
    'wifi problemen leusden',
    'internet hulp leusden',
    'printer installatie leusden',
    'virus verwijderen leusden',
    'computerhulp leusden centrum',
    'ict hulp leusden-zuid',
    'computer reparatie hamersveld',
    'laptop hulp achterveld',
    'pc hulp stoutenburg',
    'it hulp de glind',
    'computerhulp leusden',
    'it service leusden',
    'computer problemen leusden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Leusden | Hulp met IT',
    description: 'Computerhulp aan huis in Leusden door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-leusden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Leusden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Leusden | Hulp met IT',
    description: 'Computerhulp aan huis in Leusden. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-leusden'
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

export default function ComputerhulpAanHuisLeusdenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
