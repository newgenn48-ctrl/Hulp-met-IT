import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Gouda | Hulp met IT',
  description: 'Computerhulp aan huis in Gouda door HBO-opgeleide ICT-studenten. Hulp in Gouda Centrum, Gouda Noord, Gouda Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis gouda',
    'computer reparatie gouda',
    'laptop reparatie gouda',
    'ICT student gouda',
    'pc hulp gouda',
    'computer student gouda',
    'gouda computerhulp avond',
    'gouda IT hulp weekend',
    'computerhulp gouda spoed',
    'betaalbare IT hulp gouda',
    'wifi problemen gouda',
    'internet hulp gouda',
    'printer installatie gouda',
    'virus verwijderen gouda',
    'computerhulp gouda centrum',
    'ict hulp gouda noord',
    'computer reparatie gouda oost',
    'laptop hulp gouda west',
    'pc hulp gouda zuid',
    'it hulp korte akkeren',
    'computerhulp gouda',
    'it service gouda',
    'computer problemen gouda'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Gouda | Hulp met IT',
    description: 'Computerhulp aan huis in Gouda door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-gouda',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Gouda - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Gouda | Hulp met IT',
    description: 'Computerhulp aan huis in Gouda. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-gouda'
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

export default function ComputerhulpAanHuisGoudaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
