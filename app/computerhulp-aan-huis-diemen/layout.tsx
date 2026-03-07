import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Diemen | Hulp met IT',
  description: 'Computerhulp aan huis in Diemen door HBO-opgeleide ICT-studenten. Hulp in Diemen-Noord, Diemen-Zuid, Diemen-Centrum en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis diemen',
    'computer reparatie diemen',
    'laptop reparatie diemen',
    'ICT student diemen',
    'pc hulp diemen',
    'computer student diemen',
    'diemen computerhulp avond',
    'diemen IT hulp weekend',
    'computerhulp diemen spoed',
    'betaalbare IT hulp diemen',
    'wifi problemen diemen',
    'internet hulp diemen',
    'printer installatie diemen',
    'virus verwijderen diemen',
    'computerhulp diemen-noord',
    'ict hulp diemen-zuid',
    'computer reparatie diemen-centrum',
    'laptop hulp holland park',
    'pc hulp plantage de sniep',
    'it hulp buitenlust',
    'computerhulp diemen',
    'it service diemen',
    'computer problemen diemen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Diemen | Hulp met IT',
    description: 'Computerhulp aan huis in Diemen door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-diemen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Diemen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Diemen | Hulp met IT',
    description: 'Computerhulp aan huis in Diemen. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-diemen'
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

export default function ComputerhulpAanHuisDiemenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
