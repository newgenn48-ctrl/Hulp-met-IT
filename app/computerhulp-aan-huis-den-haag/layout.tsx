import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Den Haag | Hulp Met IT',
  description: 'Computerhulp aan huis in Den Haag voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis den haag',
    'computer reparatie den haag',
    'laptop reparatie den haag',
    'IT specialist den haag',
    'pc hulp den haag',
    'computer specialist den haag',
    'den haag computerhulp avond',
    'den haag IT hulp weekend',
    'computerhulp den haag spoed',
    'betaalbare IT hulp den haag'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Den Haag | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Den Haag door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-den-haag',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Den Haag | IT-Specialisten',
    description: 'Computerhulp aan huis Den Haag. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-den-haag',
  },
}

export default function ComputerhulpAanHuisDenHaagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
