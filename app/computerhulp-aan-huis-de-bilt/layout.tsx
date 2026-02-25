import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis De Bilt | Hulp met IT',
  description: 'Computerhulp aan huis in De Bilt door HBO-opgeleide ICT-studenten. Hulp in De Bilt Centrum, Bilthoven, Groenekan en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis de bilt',
    'computer reparatie de bilt',
    'laptop reparatie de bilt',
    'ICT student de bilt',
    'pc hulp de bilt',
    'computer student de bilt',
    'de bilt computerhulp avond',
    'de bilt IT hulp weekend',
    'computerhulp de bilt spoed',
    'betaalbare IT hulp de bilt',
    'wifi problemen de bilt',
    'internet hulp de bilt',
    'printer installatie de bilt',
    'virus verwijderen de bilt',
    'computerhulp de bilt centrum',
    'ict hulp bilthoven',
    'computer reparatie groenekan',
    'laptop hulp westbroek',
    'pc hulp hollandsche rading',
    'it hulp maartensdijk',
    'computerhulp de bilt',
    'it service de bilt',
    'computer problemen de bilt'
  ],
  openGraph: {
    title: 'Computerhulp aan huis De Bilt | Hulp met IT',
    description: 'Computerhulp aan huis in De Bilt door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-de-bilt',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis De Bilt - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis De Bilt | Hulp met IT',
    description: 'Computerhulp aan huis in De Bilt. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-de-bilt'
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

export default function ComputerhulpAanHuisDeBiltLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
