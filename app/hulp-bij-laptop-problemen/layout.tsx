import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hulp bij Laptop Problemen - Reparatie aan Huis | Hulp met IT',
  description: 'Hulp bij laptop problemen? Onze ICT-studenten komen bij u thuis. Trage laptop, wifi-problemen, scherm kapot, batterij leeg. Vanaf €15,50/kwartier. Bel 085-8005006!',
  keywords: [
    'hulp bij laptop problemen',
    'laptop problemen oplossen',
    'laptop hulp aan huis',
    'laptop reparatie aan huis',
    'laptop is traag',
    'laptop doet het niet',
    'laptop hulp thuis',
    'laptop problemen',
    'laptop laten repareren',
    'laptop scherm problemen',
    'laptop wifi problemen',
    'laptop vastgelopen',
    'laptop batterij leeg',
    'laptop start niet op hulp',
    'laptop crasht steeds',
    'laptop oververhitting'
  ],
  alternates: { canonical: '/hulp-bij-laptop-problemen' },
  openGraph: {
    title: 'Hulp bij Laptop Problemen - Reparatie aan Huis',
    description: 'Laptop problemen? Onze studenten komen bij u thuis en lossen het op. Snel en betaalbaar.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Hulp bij laptop problemen aan huis - Hulp met IT'
      }
    ],
    url: 'https://hulpmetit.nl/hulp-bij-laptop-problemen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hulp bij Laptop Problemen',
    description: 'Laptop reparatie aan huis door HBO-opgeleide studenten.',
    images: ['/og-image.webp']
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
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
