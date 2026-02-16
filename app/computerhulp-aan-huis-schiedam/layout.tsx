import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Schiedam | Hulp Met IT',
  description: 'Computerhulp aan huis in Schiedam voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis schiedam',
    'computer reparatie schiedam',
    'laptop reparatie schiedam',
    'ICT student schiedam',
    'pc hulp schiedam',
    'computer student schiedam',
    'schiedam computerhulp avond',
    'schiedam IT hulp weekend',
    'computerhulp schiedam spoed',
    'betaalbare IT hulp schiedam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Schiedam | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Schiedam door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Schiedam | ICT Student aan Huis',
    description: 'Computerhulp aan huis Schiedam. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-schiedam',
  },
}

export default function ComputerhulpAanHuisSchiedamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
