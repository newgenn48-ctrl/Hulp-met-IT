import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Arnhem | Hulp Met IT',
  description: 'Computerhulp aan huis in Arnhem voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis arnhem',
    'computer reparatie arnhem',
    'laptop reparatie arnhem',
    'ICT student arnhem',
    'pc hulp arnhem',
    'computer student arnhem',
    'arnhem computerhulp avond',
    'arnhem IT hulp weekend',
    'computerhulp arnhem spoed',
    'betaalbare IT hulp arnhem'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Arnhem | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Arnhem door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Arnhem | ICT Student aan Huis',
    description: 'Computerhulp aan huis Arnhem. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-arnhem',
  },
}

export default function ComputerhulpAanHuisArnhemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
