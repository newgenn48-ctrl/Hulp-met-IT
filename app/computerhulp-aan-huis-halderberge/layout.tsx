import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Halderberge | Hulp met IT',
  description: 'Computerhulp aan huis in Halderberge door HBO-opgeleide ICT-studenten. Hulp in Oudenbosch, Hoeven, Oud Gastel en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis halderberge',
    'computer reparatie halderberge',
    'laptop reparatie halderberge',
    'ICT student halderberge',
    'pc hulp halderberge',
    'computer student halderberge',
    'halderberge computerhulp avond',
    'halderberge IT hulp weekend',
    'computerhulp halderberge spoed',
    'betaalbare IT hulp halderberge',
    'wifi problemen halderberge',
    'internet hulp halderberge',
    'printer installatie halderberge',
    'virus verwijderen halderberge',
    'computerhulp oudenbosch',
    'ict hulp hoeven',
    'computer reparatie oud gastel',
    'laptop hulp bosschenhoofd',
    'pc hulp stampersgat',
    'it hulp oudenbosch centrum',
    'computerhulp halderberge',
    'it service halderberge',
    'computer problemen halderberge'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Halderberge | Hulp met IT',
    description: 'Computerhulp aan huis in Halderberge door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-halderberge',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Halderberge - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Halderberge | Hulp met IT',
    description: 'Computerhulp aan huis in Halderberge. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-halderberge'
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

export default function ComputerhulpAanHuisHalderbergeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
