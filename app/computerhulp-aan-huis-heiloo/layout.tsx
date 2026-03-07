import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Heiloo | Hulp met IT',
  description: 'Computerhulp aan huis in Heiloo door HBO-opgeleide ICT-studenten. Hulp in Heiloo, Ypestein, Zuiderloo en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis heiloo',
    'computer reparatie heiloo',
    'laptop reparatie heiloo',
    'ICT student heiloo',
    'pc hulp heiloo',
    'computer student heiloo',
    'heiloo computerhulp avond',
    'heiloo IT hulp weekend',
    'computerhulp heiloo spoed',
    'betaalbare IT hulp heiloo',
    'wifi problemen heiloo',
    'internet hulp heiloo',
    'printer installatie heiloo',
    'virus verwijderen heiloo',
    'computerhulp heiloo',
    'ict hulp ypestein',
    'computer reparatie zuiderloo',
    'laptop hulp heiloo-centrum',
    'pc hulp heiloo-oost',
    'it hulp heiloo-west',
    'it service heiloo',
    'computer problemen heiloo',
    'it hulp aan huis heiloo'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Heiloo | Hulp met IT',
    description: 'Computerhulp aan huis in Heiloo door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-heiloo',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Heiloo - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Heiloo | Hulp met IT',
    description: 'Computerhulp aan huis in Heiloo. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-heiloo'
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

export default function ComputerhulpAanHuisHeilooLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
