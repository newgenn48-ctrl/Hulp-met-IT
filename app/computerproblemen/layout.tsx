import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerproblemen? Wij Lossen het Op aan Huis | Hulp met IT',
  description: 'Last van computerproblemen? Onze HBO-opgeleide ICT-studenten komen bij u thuis en lossen elk probleem op. Vanaf €15,50 per kwartier. Bel 085-8005006!',
  keywords: [
    'computerproblemen',
    'computer problemen oplossen',
    'computerproblemen hulp',
    'computer doet het niet',
    'computer is traag',
    'computer vastgelopen',
    'computerproblemen aan huis',
    'pc problemen',
    'laptop problemen',
    'computer storing',
    'computer loopt vast',
    'computer crasht steeds',
    'trage computer oplossen',
    'virus op computer',
    'blauwe scherm computer',
    'computer start niet op',
    'computerproblemen thuis oplossen',
    'hulp bij computerproblemen'
  ],
  alternates: {
    canonical: '/computerproblemen',
  },
  openGraph: {
    title: 'Computerproblemen? Wij Lossen het Op aan Huis',
    description: 'HBO-opgeleide ICT-studenten lossen uw computerproblemen op bij u thuis. Vanaf €15,50/kwartier.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerproblemen oplossen aan huis - Hulp met IT'
      }
    ],
    url: 'https://hulpmetit.nl/computerproblemen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerproblemen? Wij Lossen het Op aan Huis',
    description: 'HBO-opgeleide ICT-studenten lossen uw computerproblemen op bij u thuis.',
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
