import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Weesp | Hulp Met IT',
  description: 'Computerhulp aan huis in Weesp voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis weesp',
    'computer reparatie weesp',
    'laptop reparatie weesp',
    'IT specialist weesp',
    'pc hulp weesp',
    'computer specialist weesp',
    'weesp computerhulp avond',
    'weesp IT hulp weekend',
    'computerhulp weesp spoed',
    'betaalbare IT hulp weesp'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Weesp | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Weesp door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-weesp',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Weesp | IT-Specialisten',
    description: 'Computerhulp aan huis Weesp. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
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
