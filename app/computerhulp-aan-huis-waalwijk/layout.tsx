import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Waalwijk | Hulp Met IT',
  description: 'Computerhulp aan huis in Waalwijk voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis waalwijk',
    'computer reparatie waalwijk',
    'laptop reparatie waalwijk',
    'ICT student waalwijk',
    'pc hulp waalwijk',
    'computer student waalwijk',
    'waalwijk computerhulp avond',
    'waalwijk IT hulp weekend',
    'computerhulp waalwijk spoed',
    'betaalbare IT hulp waalwijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Waalwijk | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Waalwijk door HBO-opgeleide ICT-studenten. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Waalwijk | ICT Student aan Huis',
    description: 'Computerhulp aan huis Waalwijk. Student komt bij u. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-waalwijk',
  },
}

export default function ComputerhulpAanHuisWaalwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
