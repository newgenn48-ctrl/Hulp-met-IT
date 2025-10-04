import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Soest | Hulp Met IT',
  description: 'Computerhulp aan huis in Soest voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
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
    title: 'Computerhulp aan huis Soest | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Soest door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-soest',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Soest | IT-Specialisten',
    description: 'Computerhulp aan huis Soest. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
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
