import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerproblemen? Wij Lossen het Op aan Huis | Hulp met IT',
  description: 'Last van computerproblemen? Onze HBO-opgeleide ICT-studenten komen bij u thuis en lossen elk probleem op. Vanaf €14,50 per kwartier. Bel 06-42827860!',
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
    'computer storing'
  ],
  alternates: {
    canonical: '/computerproblemen',
  },
  openGraph: {
    title: 'Computerproblemen? Wij Lossen het Op aan Huis',
    description: 'HBO-opgeleide ICT-studenten lossen uw computerproblemen op bij u thuis. Vanaf €14,50/kwartier.',
    images: ['/og-image.webp'],
    url: 'https://hulpmetit.nl/computerproblemen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerproblemen? Wij Lossen het Op aan Huis',
    description: 'HBO-opgeleide ICT-studenten lossen uw computerproblemen op bij u thuis.',
  },
  robots: { index: true, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
