import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Nijmegen | Hulp Met IT',
  description: 'Computerhulp aan huis in Nijmegen voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis nijmegen',
    'computer reparatie nijmegen',
    'laptop reparatie nijmegen',
    'IT specialist nijmegen',
    'pc hulp nijmegen',
    'computer specialist nijmegen',
    'nijmegen computerhulp avond',
    'nijmegen IT hulp weekend',
    'computerhulp nijmegen spoed',
    'betaalbare IT hulp nijmegen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Nijmegen | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Nijmegen door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-nijmegen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Nijmegen | IT-Specialisten',
    description: 'Computerhulp aan huis Nijmegen. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-nijmegen',
  },
}

export default function ComputerhulpAanHuisNijmegenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
