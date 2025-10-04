import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Enschede | Hulp Met IT',
  description: 'Computerhulp aan huis in Enschede voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis enschede',
    'computer reparatie enschede',
    'laptop reparatie enschede',
    'IT specialist enschede',
    'pc hulp enschede',
    'computer specialist enschede',
    'enschede computerhulp avond',
    'enschede IT hulp weekend',
    'computerhulp enschede spoed',
    'betaalbare IT hulp enschede'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Enschede | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Enschede door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-enschede',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Enschede | IT-Specialisten',
    description: 'Computerhulp aan huis Enschede. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-enschede',
  },
}

export default function ComputerhulpAanHuisEnschedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
