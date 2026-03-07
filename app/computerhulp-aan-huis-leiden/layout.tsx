import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Leiden | Hulp met IT',
  description: 'Computerhulp aan huis in Leiden door HBO-opgeleide ICT-studenten. Hulp in Leiden Centrum, Leiden Noord, Leiden Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis leiden',
    'computer reparatie leiden',
    'laptop reparatie leiden',
    'ICT student leiden',
    'pc hulp leiden',
    'computer student leiden',
    'leiden computerhulp avond',
    'leiden IT hulp weekend',
    'computerhulp leiden spoed',
    'betaalbare IT hulp leiden',
    'wifi problemen leiden',
    'internet hulp leiden',
    'printer installatie leiden',
    'virus verwijderen leiden',
    'computerhulp leiden centrum',
    'ict hulp leiden noord',
    'computer reparatie leiden oost',
    'laptop hulp leiden west',
    'pc hulp leiden zuid',
    'it hulp leidse hout',
    'computerhulp leiden',
    'it service leiden',
    'computer problemen leiden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Leiden | Hulp met IT',
    description: 'Computerhulp aan huis in Leiden door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-leiden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Leiden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Leiden | Hulp met IT',
    description: 'Computerhulp aan huis in Leiden. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-leiden'
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

export default function ComputerhulpAanHuisLeidenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
