import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Bladel | Hulp met IT',
  description: 'Computerhulp aan huis in Bladel door HBO-opgeleide ICT-studenten. Hulp in Bladel Centrum, Hapert, Hoogeloon en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis bladel',
    'computer reparatie bladel',
    'laptop reparatie bladel',
    'ICT student bladel',
    'pc hulp bladel',
    'computer student bladel',
    'bladel computerhulp avond',
    'bladel IT hulp weekend',
    'computerhulp bladel spoed',
    'betaalbare IT hulp bladel',
    'wifi problemen bladel',
    'internet hulp bladel',
    'printer installatie bladel',
    'virus verwijderen bladel',
    'computerhulp bladel centrum',
    'ict hulp hapert',
    'computer reparatie hoogeloon',
    'laptop hulp netersel',
    'pc hulp casteren',
    'it hulp bladel noord',
    'computerhulp bladel',
    'it service bladel',
    'computer problemen bladel'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Bladel | Hulp met IT',
    description: 'Computerhulp aan huis in Bladel door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-bladel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Bladel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Bladel | Hulp met IT',
    description: 'Computerhulp aan huis in Bladel. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-bladel'
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

export default function ComputerhulpAanHuisBladelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
