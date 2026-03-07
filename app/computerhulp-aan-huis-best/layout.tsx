import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Best | Hulp met IT',
  description: 'Computerhulp aan huis in Best door HBO-opgeleide ICT-studenten. Hulp in Best Centrum, Best Noord, Best Zuid en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis best',
    'computer reparatie best',
    'laptop reparatie best',
    'ICT student best',
    'pc hulp best',
    'computer student best',
    'best computerhulp avond',
    'best IT hulp weekend',
    'computerhulp best spoed',
    'betaalbare IT hulp best',
    'wifi problemen best',
    'internet hulp best',
    'printer installatie best',
    'virus verwijderen best',
    'computerhulp best centrum',
    'ict hulp best noord',
    'computer reparatie best zuid',
    'laptop hulp aarle',
    'pc hulp naastenbest',
    'it hulp de vleut',
    'computerhulp best',
    'it service best',
    'computer problemen best'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Best | Hulp met IT',
    description: 'Computerhulp aan huis in Best door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-best',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Best - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Best | Hulp met IT',
    description: 'Computerhulp aan huis in Best. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-best'
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

export default function ComputerhulpAanHuisBestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
