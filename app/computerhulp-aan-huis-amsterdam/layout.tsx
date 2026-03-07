import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Amsterdam | Hulp met IT',
  description: 'Computerhulp aan huis in Amsterdam door HBO-opgeleide ICT-studenten. Hulp in Amsterdam Centrum, Amsterdam Noord, Amsterdam Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis amsterdam',
    'computer reparatie amsterdam',
    'laptop reparatie amsterdam',
    'ICT student amsterdam',
    'pc hulp amsterdam',
    'computer student amsterdam',
    'amsterdam computerhulp avond',
    'amsterdam IT hulp weekend',
    'computerhulp amsterdam spoed',
    'betaalbare IT hulp amsterdam',
    'wifi problemen amsterdam',
    'internet hulp amsterdam',
    'printer installatie amsterdam',
    'virus verwijderen amsterdam',
    'computerhulp amsterdam centrum',
    'ict hulp amsterdam noord',
    'computer reparatie amsterdam oost',
    'laptop hulp amsterdam west',
    'pc hulp amsterdam zuid',
    'it hulp amsterdam zuidoost',
    'computerhulp amsterdam',
    'it service amsterdam',
    'computer problemen amsterdam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Amsterdam | Hulp met IT',
    description: 'Computerhulp aan huis in Amsterdam door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-amsterdam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Amsterdam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Amsterdam | Hulp met IT',
    description: 'Computerhulp aan huis in Amsterdam. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-amsterdam'
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

export default function ComputerhulpAanHuisAmsterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
