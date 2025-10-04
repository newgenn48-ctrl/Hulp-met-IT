import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Naarden | Hulp Met IT',
  description: 'Computerhulp aan huis in Naarden voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis naarden',
    'computer reparatie naarden',
    'laptop reparatie naarden',
    'IT specialist naarden',
    'pc hulp naarden',
    'computer specialist naarden',
    'naarden computerhulp avond',
    'naarden IT hulp weekend',
    'computerhulp naarden spoed',
    'betaalbare IT hulp naarden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Naarden | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Naarden door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-naarden',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Naarden | IT-Specialisten',
    description: 'Computerhulp aan huis Naarden. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-naarden',
  },
}

export default function ComputerhulpAanHuisNaardenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
