import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Bussum | Hulp Met IT',
  description: 'Computerhulp aan huis in Bussum voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis bussum',
    'computer reparatie bussum',
    'laptop reparatie bussum',
    'IT specialist bussum',
    'pc hulp bussum',
    'computer specialist bussum',
    'bussum computerhulp avond',
    'bussum IT hulp weekend',
    'computerhulp bussum spoed',
    'betaalbare IT hulp bussum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Bussum | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Bussum door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-bussum',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Bussum | IT-Specialisten',
    description: 'Computerhulp aan huis Bussum. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-bussum',
  },
}

export default function ComputerhulpAanHuisBussumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
