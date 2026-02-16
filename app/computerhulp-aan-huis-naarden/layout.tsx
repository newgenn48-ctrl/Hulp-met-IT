import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Naarden | Hulp Met IT',
  description: 'Computerhulp aan huis in Naarden voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis naarden',
    'computer reparatie naarden',
    'laptop reparatie naarden',
    'ICT student naarden',
    'pc hulp naarden',
    'computer student naarden',
    'naarden computerhulp avond',
    'naarden IT hulp weekend',
    'computerhulp naarden spoed',
    'betaalbare IT hulp naarden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Naarden | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Naarden door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Naarden | ICT Student aan Huis',
    description: 'Computerhulp aan huis Naarden. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-naarden',
  },
}

export default function ComputerhulpAanHuisNaardenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
