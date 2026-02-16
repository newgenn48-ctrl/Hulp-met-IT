import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Tilburg | Hulp Met IT',
  description: 'Computerhulp aan huis in Tilburg voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis tilburg',
    'computer reparatie tilburg',
    'laptop reparatie tilburg',
    'ICT student tilburg',
    'pc hulp tilburg',
    'computer student tilburg',
    'tilburg computerhulp avond',
    'tilburg IT hulp weekend',
    'computerhulp tilburg spoed',
    'betaalbare IT hulp tilburg'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Tilburg | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Tilburg door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Tilburg | ICT Student aan Huis',
    description: 'Computerhulp aan huis Tilburg. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-tilburg',
  },
}

export default function ComputerhulpAanHuisTilburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
