import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Schiedam | Hulp Met IT',
  description: 'Computerhulp aan huis in Schiedam voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis schiedam',
    'computer reparatie schiedam',
    'laptop reparatie schiedam',
    'IT specialist schiedam',
    'pc hulp schiedam',
    'computer specialist schiedam',
    'schiedam computerhulp avond',
    'schiedam IT hulp weekend',
    'computerhulp schiedam spoed',
    'betaalbare IT hulp schiedam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Schiedam | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Schiedam door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-schiedam',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Schiedam | IT-Specialisten',
    description: 'Computerhulp aan huis Schiedam. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-schiedam',
  },
}

export default function ComputerhulpAanHuisSchiedamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
