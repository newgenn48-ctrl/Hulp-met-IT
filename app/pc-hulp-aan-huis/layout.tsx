import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PC Hulp aan Huis - Computer Hulp bij U Thuis | Hulp met IT',
  description: 'PC hulp aan huis nodig? HBO-opgeleide ICT-studenten komen bij u thuis voor alle computerproblemen. Vanaf €14,50/kwartier. 7 dagen per week. Bel 06-42827860!',
  keywords: [
    'pc hulp aan huis',
    'computer hulp aan huis',
    'pc hulp thuis',
    'computer hulp thuis',
    'hulp met pc',
    'pc ondersteuning aan huis',
    'pc service aan huis',
    'computer service thuis',
    'pc hulp nodig',
    'hulp bij pc problemen'
  ],
  alternates: { canonical: '/pc-hulp-aan-huis' },
  openGraph: {
    title: 'PC Hulp aan Huis - Computer Hulp bij U Thuis',
    description: 'HBO-opgeleide studenten lossen uw PC problemen op bij u thuis. Snel, betaalbaar.',
    images: ['/og-image.webp'],
    url: 'https://hulpmetit.nl/pc-hulp-aan-huis',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PC Hulp aan Huis',
    description: 'Computer hulp bij u thuis. Snel, betaalbaar, 7 dagen per week.',
  },
  robots: { index: true, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
