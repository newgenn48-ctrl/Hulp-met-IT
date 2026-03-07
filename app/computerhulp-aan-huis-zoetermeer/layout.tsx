import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zoetermeer | Hulp met IT',
  description: 'Computerhulp aan huis in Zoetermeer door HBO-opgeleide ICT-studenten. Hulp in Zoetermeer Centrum, Zoetermeer Noord, Zoetermeer Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis zoetermeer',
    'computer reparatie zoetermeer',
    'laptop reparatie zoetermeer',
    'ICT student zoetermeer',
    'pc hulp zoetermeer',
    'computer student zoetermeer',
    'zoetermeer computerhulp avond',
    'zoetermeer IT hulp weekend',
    'computerhulp zoetermeer spoed',
    'betaalbare IT hulp zoetermeer',
    'wifi problemen zoetermeer',
    'internet hulp zoetermeer',
    'printer installatie zoetermeer',
    'virus verwijderen zoetermeer',
    'computerhulp zoetermeer centrum',
    'ict hulp zoetermeer noord',
    'computer reparatie zoetermeer oost',
    'laptop hulp zoetermeer west',
    'pc hulp zoetermeer zuid',
    'it hulp oosterheem',
    'computerhulp zoetermeer',
    'it service zoetermeer',
    'computer problemen zoetermeer'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zoetermeer | Hulp met IT',
    description: 'Computerhulp aan huis in Zoetermeer door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-zoetermeer',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Zoetermeer - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zoetermeer | Hulp met IT',
    description: 'Computerhulp aan huis in Zoetermeer. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zoetermeer'
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

export default function ComputerhulpAanHuisZoetermeerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
