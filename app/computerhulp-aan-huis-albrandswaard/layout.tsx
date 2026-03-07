import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Albrandswaard | Hulp met IT',
  description: 'Computerhulp aan huis in Albrandswaard door HBO-opgeleide ICT-studenten. Hulp in Poortugaal, Rhoon, Portland en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis albrandswaard',
    'computer reparatie albrandswaard',
    'laptop reparatie albrandswaard',
    'ICT student albrandswaard',
    'pc hulp albrandswaard',
    'computer student albrandswaard',
    'albrandswaard computerhulp avond',
    'albrandswaard IT hulp weekend',
    'computerhulp albrandswaard spoed',
    'betaalbare IT hulp albrandswaard',
    'wifi problemen albrandswaard',
    'internet hulp albrandswaard',
    'printer installatie albrandswaard',
    'virus verwijderen albrandswaard',
    'computerhulp poortugaal',
    'ict hulp rhoon',
    'computer reparatie portland',
    'laptop hulp rhoon centrum',
    'pc hulp poortugaal centrum',
    'it hulp albrandswaard-west',
    'computerhulp albrandswaard',
    'it service albrandswaard',
    'computer problemen albrandswaard'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Albrandswaard | Hulp met IT',
    description: 'Computerhulp aan huis in Albrandswaard door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-albrandswaard',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Albrandswaard - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Albrandswaard | Hulp met IT',
    description: 'Computerhulp aan huis in Albrandswaard. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-albrandswaard'
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

export default function ComputerhulpAanHuisAlbrandswaardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
