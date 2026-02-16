import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Middelburg | Hulp Met IT',
  description: 'Computerhulp aan huis in Middelburg voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis middelburg',
    'computer reparatie middelburg',
    'laptop reparatie middelburg',
    'ICT student middelburg',
    'pc hulp middelburg',
    'computer student middelburg',
    'middelburg computerhulp avond',
    'middelburg IT hulp weekend',
    'computerhulp middelburg spoed',
    'betaalbare IT hulp middelburg'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Middelburg | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Middelburg door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Middelburg | ICT Student aan Huis',
    description: 'Computerhulp aan huis Middelburg. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-middelburg',
  },
}

export default function ComputerhulpAanHuisMiddelburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
