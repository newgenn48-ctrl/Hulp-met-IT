import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Bussum | Hulp Met IT',
  description: 'Computerhulp aan huis in Bussum voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis bussum',
    'computer reparatie bussum',
    'laptop reparatie bussum',
    'ICT student bussum',
    'pc hulp bussum',
    'computer student bussum',
    'bussum computerhulp avond',
    'bussum IT hulp weekend',
    'computerhulp bussum spoed',
    'betaalbare IT hulp bussum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Bussum | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Bussum door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Bussum | ICT Student aan Huis',
    description: 'Computerhulp aan huis Bussum. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-bussum',
  },
}

export default function ComputerhulpAanHuisBussumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
