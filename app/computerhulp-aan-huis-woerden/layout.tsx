import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Woerden | Hulp met IT',
  description: 'Computerhulp aan huis in Woerden door HBO-opgeleide ICT-studenten. Hulp in Woerden Centrum, Snel en Polanen, Molenvliet en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis woerden',
    'computer reparatie woerden',
    'laptop reparatie woerden',
    'ICT student woerden',
    'pc hulp woerden',
    'computer student woerden',
    'woerden computerhulp avond',
    'woerden IT hulp weekend',
    'computerhulp woerden spoed',
    'betaalbare IT hulp woerden',
    'wifi problemen woerden',
    'internet hulp woerden',
    'printer installatie woerden',
    'virus verwijderen woerden',
    'computerhulp woerden centrum',
    'ict hulp snel en polanen',
    'computer reparatie molenvliet',
    'laptop hulp staatsliedenkwartier',
    'pc hulp harmelen',
    'it hulp kamerik',
    'computerhulp woerden',
    'it service woerden',
    'computer problemen woerden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Woerden | Hulp met IT',
    description: 'Computerhulp aan huis in Woerden door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-woerden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Woerden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Woerden | Hulp met IT',
    description: 'Computerhulp aan huis in Woerden. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-woerden'
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

export default function ComputerhulpAanHuisWoerdenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
