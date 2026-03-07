import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Etten-Leur | Hulp met IT',
  description: 'Computerhulp aan huis in Etten-Leur door HBO-opgeleide ICT-studenten. Hulp in Etten-Leur Centrum, De Keen, Attelaken en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis etten-leur',
    'computer reparatie etten-leur',
    'laptop reparatie etten-leur',
    'ICT student etten-leur',
    'pc hulp etten-leur',
    'computer student etten-leur',
    'etten-leur computerhulp avond',
    'etten-leur IT hulp weekend',
    'computerhulp etten-leur spoed',
    'betaalbare IT hulp etten-leur',
    'wifi problemen etten-leur',
    'internet hulp etten-leur',
    'printer installatie etten-leur',
    'virus verwijderen etten-leur',
    'computerhulp etten-leur centrum',
    'ict hulp de keen',
    'computer reparatie attelaken',
    'laptop hulp grauwe polder',
    'pc hulp bankenhoef',
    'it hulp schoenmakershoek',
    'computerhulp etten-leur',
    'it service etten-leur',
    'computer problemen etten-leur'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Etten-Leur | Hulp met IT',
    description: 'Computerhulp aan huis in Etten-Leur door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-etten-leur',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Etten-Leur - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Etten-Leur | Hulp met IT',
    description: 'Computerhulp aan huis in Etten-Leur. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-etten-leur'
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

export default function ComputerhulpAanHuisEttenLeurLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
