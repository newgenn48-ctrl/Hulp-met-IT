import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hilversum | Hulp Met IT',
  description: 'Computerhulp aan huis in Hilversum voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis hilversum',
    'computer reparatie hilversum',
    'laptop reparatie hilversum',
    'ICT student hilversum',
    'pc hulp hilversum',
    'computer student hilversum',
    'hilversum computerhulp avond',
    'hilversum IT hulp weekend',
    'computerhulp hilversum spoed',
    'betaalbare IT hulp hilversum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hilversum | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Hilversum door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hilversum | ICT Student aan Huis',
    description: 'Computerhulp aan huis Hilversum. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hilversum',
  },
}

export default function ComputerhulpAanHuisHilversumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
