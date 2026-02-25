import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Houten | Hulp met IT',
  description: 'Computerhulp aan huis in Houten door HBO-opgeleide ICT-studenten. Hulp in Houten Centrum, Houten Noord, Houten Zuid en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis houten',
    'computer reparatie houten',
    'laptop reparatie houten',
    'ICT student houten',
    'pc hulp houten',
    'computer student houten',
    'houten computerhulp avond',
    'houten IT hulp weekend',
    'computerhulp houten spoed',
    'betaalbare IT hulp houten',
    'wifi problemen houten',
    'internet hulp houten',
    'printer installatie houten',
    'virus verwijderen houten',
    'computerhulp houten centrum',
    'ict hulp houten noord',
    'computer reparatie houten zuid',
    'laptop hulp het oude dorp',
    'pc hulp castellum',
    'it hulp schalkwijk',
    'computerhulp houten',
    'it service houten',
    'computer problemen houten'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Houten | Hulp met IT',
    description: 'Computerhulp aan huis in Houten door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-houten',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Houten - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Houten | Hulp met IT',
    description: 'Computerhulp aan huis in Houten. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-houten'
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

export default function ComputerhulpAanHuisHoutenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
