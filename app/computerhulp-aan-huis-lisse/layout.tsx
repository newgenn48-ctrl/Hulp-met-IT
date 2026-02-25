import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Lisse | Hulp met IT',
  description: 'Computerhulp aan huis in Lisse door HBO-opgeleide ICT-studenten. Hulp in Lisse Centrum, Poelpolder, Meer en Dorp en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis lisse',
    'computer reparatie lisse',
    'laptop reparatie lisse',
    'ICT student lisse',
    'pc hulp lisse',
    'computer student lisse',
    'lisse computerhulp avond',
    'lisse IT hulp weekend',
    'computerhulp lisse spoed',
    'betaalbare IT hulp lisse',
    'wifi problemen lisse',
    'internet hulp lisse',
    'printer installatie lisse',
    'virus verwijderen lisse',
    'computerhulp lisse centrum',
    'ict hulp poelpolder',
    'computer reparatie meer en dorp',
    'laptop hulp keukenhof-omgeving',
    'pc hulp lisserbroek',
    'it hulp heereweg-gebied',
    'computerhulp lisse',
    'it service lisse',
    'computer problemen lisse'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Lisse | Hulp met IT',
    description: 'Computerhulp aan huis in Lisse door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-lisse',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Lisse - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Lisse | Hulp met IT',
    description: 'Computerhulp aan huis in Lisse. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-lisse'
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

export default function ComputerhulpAanHuisLisseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
