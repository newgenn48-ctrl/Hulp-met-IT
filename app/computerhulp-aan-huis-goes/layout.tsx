import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Goes | Hulp met IT',
  description: 'Computerhulp aan huis in Goes door HBO-opgeleide ICT-studenten. Hulp in Goes Centrum, Goes Noord, Goes Oost en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis goes',
    'computer reparatie goes',
    'laptop reparatie goes',
    'ICT student goes',
    'pc hulp goes',
    'computer student goes',
    'goes computerhulp avond',
    'goes IT hulp weekend',
    'computerhulp goes spoed',
    'betaalbare IT hulp goes',
    'wifi problemen goes',
    'internet hulp goes',
    'printer installatie goes',
    'virus verwijderen goes',
    'computerhulp goes centrum',
    'ict hulp goes noord',
    'computer reparatie goes oost',
    'laptop hulp goes west',
    'pc hulp goes zuid',
    'it hulp kloetinge',
    'computerhulp goes',
    'it service goes',
    'computer problemen goes'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Goes | Hulp met IT',
    description: 'Computerhulp aan huis in Goes door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-goes',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Goes - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Goes | Hulp met IT',
    description: 'Computerhulp aan huis in Goes. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-goes'
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

export default function ComputerhulpAanHuisGoesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
