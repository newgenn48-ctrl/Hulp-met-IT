import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Weesp | Hulp Met IT',
  description: 'Computerhulp aan huis in Weesp voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis weesp',
    'computer reparatie weesp',
    'laptop reparatie weesp',
    'ICT student weesp',
    'pc hulp weesp',
    'computer student weesp',
    'weesp computerhulp avond',
    'weesp IT hulp weekend',
    'computerhulp weesp spoed',
    'betaalbare IT hulp weesp'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Weesp | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Weesp door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Weesp | ICT Student aan Huis',
    description: 'Computerhulp aan huis Weesp. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-weesp',
  },
}

export default function ComputerhulpAanHuisWeespLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
