import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis De Ronde Venen | Hulp met IT',
  description: 'Computerhulp aan huis in De Ronde Venen door HBO-opgeleide ICT-studenten. Hulp in Mijdrecht, Vinkeveen, Wilnis en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis de ronde venen',
    'computer reparatie de ronde venen',
    'laptop reparatie de ronde venen',
    'ICT student de ronde venen',
    'pc hulp de ronde venen',
    'computer student de ronde venen',
    'de ronde venen computerhulp avond',
    'de ronde venen IT hulp weekend',
    'computerhulp de ronde venen spoed',
    'betaalbare IT hulp de ronde venen',
    'wifi problemen de ronde venen',
    'internet hulp de ronde venen',
    'printer installatie de ronde venen',
    'virus verwijderen de ronde venen',
    'computerhulp mijdrecht',
    'ict hulp vinkeveen',
    'computer reparatie wilnis',
    'laptop hulp abcoude',
    'pc hulp de hoef',
    'it hulp waverveen',
    'computerhulp de ronde venen',
    'it service de ronde venen',
    'computer problemen de ronde venen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis De Ronde Venen | Hulp met IT',
    description: 'Computerhulp aan huis in De Ronde Venen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-de-ronde-venen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis De Ronde Venen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis De Ronde Venen | Hulp met IT',
    description: 'Computerhulp aan huis in De Ronde Venen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-de-ronde-venen'
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

export default function ComputerhulpAanHuisDeRondeVenenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
