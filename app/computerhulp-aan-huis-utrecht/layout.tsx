import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Utrecht | Hulp met IT',
  description: 'Computerhulp aan huis in Utrecht door HBO-opgeleide ICT-studenten. Hulp in Utrecht Centrum, Utrecht Noord, Utrecht Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis utrecht',
    'computer reparatie utrecht',
    'laptop reparatie utrecht',
    'ICT student utrecht',
    'pc hulp utrecht',
    'computer student utrecht',
    'utrecht computerhulp avond',
    'utrecht IT hulp weekend',
    'computerhulp utrecht spoed',
    'betaalbare IT hulp utrecht',
    'wifi problemen utrecht',
    'internet hulp utrecht',
    'printer installatie utrecht',
    'virus verwijderen utrecht',
    'computerhulp utrecht centrum',
    'ict hulp utrecht noord',
    'computer reparatie utrecht oost',
    'laptop hulp utrecht west',
    'pc hulp utrecht zuid',
    'it hulp leidsche rijn',
    'computerhulp utrecht',
    'it service utrecht',
    'computer problemen utrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Utrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Utrecht door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-utrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Utrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Utrecht | Hulp met IT',
    description: 'Computerhulp aan huis in Utrecht. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-utrecht'
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

export default function ComputerhulpAanHuisUtrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
