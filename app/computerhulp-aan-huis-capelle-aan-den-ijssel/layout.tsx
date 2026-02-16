import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Capelle aan den IJssel | Hulp Met IT',
  description: 'Computerhulp aan huis in Capelle aan den IJssel voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis capelle aan den ijssel',
    'computer reparatie capelle aan den ijssel',
    'laptop reparatie capelle aan den ijssel',
    'ICT student capelle aan den ijssel',
    'pc hulp capelle aan den ijssel',
    'computer student capelle aan den ijssel',
    'capelle aan den ijssel computerhulp avond',
    'capelle aan den ijssel IT hulp weekend',
    'computerhulp capelle aan den ijssel spoed',
    'betaalbare IT hulp capelle aan den ijssel'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Capelle aan den IJssel | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Capelle aan den IJssel door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Capelle aan den IJssel | ICT Student aan Huis',
    description: 'Computerhulp aan huis Capelle aan den IJssel. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-capelle-aan-den-ijssel',
  },
}

export default function ComputerhulpAanHuisCapelleaandenIJsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
