import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Vlaardingen | Hulp Met IT',
  description: 'Computerhulp aan huis in Vlaardingen voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis vlaardingen',
    'computer reparatie vlaardingen',
    'laptop reparatie vlaardingen',
    'ICT student vlaardingen',
    'pc hulp vlaardingen',
    'computer student vlaardingen',
    'vlaardingen computerhulp avond',
    'vlaardingen IT hulp weekend',
    'computerhulp vlaardingen spoed',
    'betaalbare IT hulp vlaardingen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Vlaardingen | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Vlaardingen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Vlaardingen | ICT Student aan Huis',
    description: 'Computerhulp aan huis Vlaardingen. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-vlaardingen',
  },
}

export default function ComputerhulpAanHuisVlaardingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
