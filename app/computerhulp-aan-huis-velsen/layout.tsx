import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Velsen | Hulp met IT',
  description: 'Computerhulp aan huis in Velsen door HBO-opgeleide ICT-studenten. Hulp in IJmuiden, Velserbroek, Santpoort-Noord en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis velsen',
    'computer reparatie velsen',
    'laptop reparatie velsen',
    'ICT student velsen',
    'pc hulp velsen',
    'computer student velsen',
    'velsen computerhulp avond',
    'velsen IT hulp weekend',
    'computerhulp velsen spoed',
    'betaalbare IT hulp velsen',
    'wifi problemen velsen',
    'internet hulp velsen',
    'printer installatie velsen',
    'virus verwijderen velsen',
    'computerhulp ijmuiden',
    'ict hulp velserbroek',
    'computer reparatie santpoort-noord',
    'laptop hulp santpoort-zuid',
    'pc hulp velsen-noord',
    'it hulp velsen-zuid',
    'computerhulp velsen',
    'it service velsen',
    'computer problemen velsen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Velsen | Hulp met IT',
    description: 'Computerhulp aan huis in Velsen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-velsen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Velsen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Velsen | Hulp met IT',
    description: 'Computerhulp aan huis in Velsen. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-velsen'
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

export default function ComputerhulpAanHuisVelsenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
