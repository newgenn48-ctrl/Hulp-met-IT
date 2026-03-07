import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Capelle aan den IJssel | Hulp met IT',
  description: 'Computerhulp aan huis in Capelle aan den IJssel door HBO-opgeleide ICT-studenten. Hulp in Capelle Centrum, Capelle Noord, Capelle Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis capelle aan den ijssel',
    'computer reparatie capelle aan den ijssel',
    'laptop reparatie capelle aan den ijssel',
    'ICT student capelle aan den ijssel',
    'pc hulp capelle aan den ijssel',
    'computer student capelle aan den ijssel',
    'capelle aan den ijssel computerhulp avond',
    'capelle aan den ijssel IT hulp weekend',
    'computerhulp capelle aan den ijssel spoed',
    'betaalbare IT hulp capelle aan den ijssel',
    'wifi problemen capelle aan den ijssel',
    'internet hulp capelle aan den ijssel',
    'printer installatie capelle aan den ijssel',
    'virus verwijderen capelle aan den ijssel',
    'computerhulp capelle centrum',
    'ict hulp capelle noord',
    'computer reparatie capelle oost',
    'laptop hulp capelle west',
    'pc hulp capelle zuid',
    'it hulp capelsebrug',
    'computerhulp capelle aan den ijssel',
    'it service capelle',
    'laptop reparatie capelle'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Capelle aan den IJssel | Hulp met IT',
    description: 'Computerhulp aan huis in Capelle aan den IJssel door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-capelle-aan-den-ijssel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Capelle aan den IJssel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Capelle aan den IJssel | Hulp met IT',
    description: 'Computerhulp aan huis in Capelle aan den IJssel. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-capelle-aan-den-ijssel'
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

export default function ComputerhulpAanHuisCapelleAanDenIjsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
