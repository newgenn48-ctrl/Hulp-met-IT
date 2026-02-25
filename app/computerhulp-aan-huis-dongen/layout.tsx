import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Dongen | Hulp met IT',
  description: 'Computerhulp aan huis in Dongen door HBO-opgeleide ICT-studenten. Hulp in Dongen Centrum, Dongen Noord, Dongen Zuid en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis dongen',
    'computer reparatie dongen',
    'laptop reparatie dongen',
    'ICT student dongen',
    'pc hulp dongen',
    'computer student dongen',
    'dongen computerhulp avond',
    'dongen IT hulp weekend',
    'computerhulp dongen spoed',
    'betaalbare IT hulp dongen',
    'wifi problemen dongen',
    'internet hulp dongen',
    'printer installatie dongen',
    'virus verwijderen dongen',
    'computerhulp dongen centrum',
    'ict hulp dongen noord',
    'computer reparatie dongen zuid',
    'laptop hulp \'s gravenmoer',
    'pc hulp klein-dongen',
    'it hulp de biezen',
    'computerhulp dongen',
    'it service dongen',
    'computer problemen dongen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Dongen | Hulp met IT',
    description: 'Computerhulp aan huis in Dongen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-dongen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Dongen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Dongen | Hulp met IT',
    description: 'Computerhulp aan huis in Dongen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-dongen'
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

export default function ComputerhulpAanHuisDongenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
