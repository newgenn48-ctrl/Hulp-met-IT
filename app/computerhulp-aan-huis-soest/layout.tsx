import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Soest | Hulp Met IT',
  description: 'Computerhulp aan huis in Soest voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis soest',
    'computer reparatie soest',
    'laptop reparatie soest',
    'IT specialist soest',
    'pc hulp soest',
    'computer specialist soest',
    'soest computerhulp avond',
    'soest IT hulp weekend',
    'computerhulp soest spoed',
    'betaalbare IT hulp soest'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Soest | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Soest door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Soest | Computerhulp specialisten',
    description: 'Computerhulp aan huis Soest. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-soest',
  },
}

export default function ComputerhulpAanHuisSoestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
