import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Nijmegen | Hulp Met IT',
  description: 'Computerhulp aan huis in Nijmegen voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis nijmegen',
    'computer reparatie nijmegen',
    'laptop reparatie nijmegen',
    'ICT student nijmegen',
    'pc hulp nijmegen',
    'computer student nijmegen',
    'nijmegen computerhulp avond',
    'nijmegen IT hulp weekend',
    'computerhulp nijmegen spoed',
    'betaalbare IT hulp nijmegen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Nijmegen | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Nijmegen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Nijmegen | ICT Student aan Huis',
    description: 'Computerhulp aan huis Nijmegen. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-nijmegen',
  },
}

export default function ComputerhulpAanHuisNijmegenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
