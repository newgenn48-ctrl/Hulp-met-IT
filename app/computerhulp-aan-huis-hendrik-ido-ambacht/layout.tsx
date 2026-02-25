import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hendrik-Ido-Ambacht | Hulp met IT',
  description: 'Computerhulp aan huis in Hendrik-Ido-Ambacht door HBO-opgeleide ICT-studenten. Hulp in Hendrik-Ido-Ambacht Centrum, Volgerlanden, Sandelingen-Ambacht en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis hendrik-ido-ambacht',
    'computer reparatie hendrik-ido-ambacht',
    'laptop reparatie hendrik-ido-ambacht',
    'ICT student hendrik-ido-ambacht',
    'pc hulp hendrik-ido-ambacht',
    'computer student hendrik-ido-ambacht',
    'hendrik-ido-ambacht computerhulp avond',
    'hendrik-ido-ambacht IT hulp weekend',
    'computerhulp hendrik-ido-ambacht spoed',
    'betaalbare IT hulp hendrik-ido-ambacht',
    'wifi problemen hendrik-ido-ambacht',
    'internet hulp hendrik-ido-ambacht',
    'printer installatie hendrik-ido-ambacht',
    'virus verwijderen hendrik-ido-ambacht',
    'computerhulp hendrik-ido-ambacht centrum',
    'ict hulp volgerlanden',
    'computer reparatie sandelingen-ambacht',
    'laptop hulp boveneind',
    'pc hulp oostendam',
    'it hulp de volgerlanden-west',
    'computerhulp hendrik-ido-ambacht',
    'it service hendrik-ido-ambacht',
    'computer problemen hendrik-ido-ambacht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hendrik-Ido-Ambacht | Hulp met IT',
    description: 'Computerhulp aan huis in Hendrik-Ido-Ambacht door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-hendrik-ido-ambacht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Hendrik-Ido-Ambacht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hendrik-Ido-Ambacht | Hulp met IT',
    description: 'Computerhulp aan huis in Hendrik-Ido-Ambacht. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hendrik-ido-ambacht'
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

export default function ComputerhulpAanHuisHendrikIdoAmbachtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
