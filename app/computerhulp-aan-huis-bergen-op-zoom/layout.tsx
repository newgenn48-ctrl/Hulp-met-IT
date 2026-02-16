import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Bergen op Zoom | Hulp Met IT',
  description: 'Computerhulp aan huis in Bergen op Zoom voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis bergen-op-zoom',
    'computer reparatie bergen-op-zoom',
    'laptop reparatie bergen-op-zoom',
    'ICT student bergen-op-zoom',
    'pc hulp bergen-op-zoom',
    'computer student bergen-op-zoom',
    'bergen-op-zoom computerhulp avond',
    'bergen-op-zoom IT hulp weekend',
    'computerhulp bergen-op-zoom spoed',
    'betaalbare IT hulp bergen-op-zoom'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Bergen op Zoom | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Bergen op Zoom door HBO-opgeleide ICT-studenten. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Bergen op Zoom | ICT Student aan Huis',
    description: 'Computerhulp aan huis Bergen op Zoom. Student komt bij u. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-bergen-op-zoom',
  },
}

export default function ComputerhulpAanHuisBergenOpZoomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
