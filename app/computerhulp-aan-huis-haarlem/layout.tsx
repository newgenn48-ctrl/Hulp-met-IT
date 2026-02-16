import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Haarlem | Hulp Met IT',
  description: 'Computerhulp aan huis in Haarlem voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis haarlem',
    'computer reparatie haarlem',
    'laptop reparatie haarlem',
    'ICT student haarlem',
    'pc hulp haarlem',
    'computer student haarlem',
    'haarlem computerhulp avond',
    'haarlem IT hulp weekend',
    'computerhulp haarlem spoed',
    'betaalbare IT hulp haarlem'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Haarlem | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Haarlem door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Haarlem | ICT Student aan Huis',
    description: 'Computerhulp aan huis Haarlem. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-haarlem',
  },
}

export default function ComputerhulpAanHuisHaarlemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
