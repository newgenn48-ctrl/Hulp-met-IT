import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Amersfoort | Hulp met IT',
  description: 'Computerhulp aan huis in Amersfoort door HBO-opgeleide ICT-studenten. Hulp in Amersfoort Centrum, Amersfoort Noord, Amersfoort Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis amersfoort',
    'computer reparatie amersfoort',
    'laptop reparatie amersfoort',
    'ICT student amersfoort',
    'pc hulp amersfoort',
    'computer student amersfoort',
    'amersfoort computerhulp avond',
    'amersfoort IT hulp weekend',
    'computerhulp amersfoort spoed',
    'betaalbare IT hulp amersfoort',
    'wifi problemen amersfoort',
    'internet hulp amersfoort',
    'printer installatie amersfoort',
    'virus verwijderen amersfoort',
    'computerhulp amersfoort centrum',
    'ict hulp amersfoort noord',
    'computer reparatie amersfoort oost',
    'laptop hulp amersfoort west',
    'pc hulp amersfoort zuid',
    'it hulp vathorst',
    'computerhulp amersfoort',
    'it service amersfoort',
    'computer problemen amersfoort'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Amersfoort | Hulp met IT',
    description: 'Computerhulp aan huis in Amersfoort door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-amersfoort',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Amersfoort - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Amersfoort | Hulp met IT',
    description: 'Computerhulp aan huis in Amersfoort. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-amersfoort'
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

export default function ComputerhulpAanHuisAmersfoortLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
