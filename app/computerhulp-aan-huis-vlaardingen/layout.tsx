import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Vlaardingen | Hulp Met IT',
  description: 'Computerhulp aan huis in Vlaardingen voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis vlaardingen',
    'computer reparatie vlaardingen',
    'laptop reparatie vlaardingen',
    'IT specialist vlaardingen',
    'pc hulp vlaardingen',
    'computer specialist vlaardingen',
    'vlaardingen computerhulp avond',
    'vlaardingen IT hulp weekend',
    'computerhulp vlaardingen spoed',
    'betaalbare IT hulp vlaardingen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Vlaardingen | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Vlaardingen door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-vlaardingen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Vlaardingen | IT-Specialisten',
    description: 'Computerhulp aan huis Vlaardingen. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
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
