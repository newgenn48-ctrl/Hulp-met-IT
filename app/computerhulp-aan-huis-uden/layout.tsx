import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Uden | Hulp Met IT',
  description: 'Computerhulp aan huis in Uden voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis uden',
    'computer reparatie uden',
    'laptop reparatie uden',
    'ICT student uden',
    'pc hulp uden',
    'computer student uden',
    'uden computerhulp avond',
    'uden IT hulp weekend',
    'computerhulp uden spoed',
    'betaalbare IT hulp uden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Uden | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Uden door HBO-opgeleide ICT-studenten. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Uden | ICT Student aan Huis',
    description: 'Computerhulp aan huis Uden. Student komt bij u. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-uden',
  },
}

export default function ComputerhulpAanHuisUdenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
