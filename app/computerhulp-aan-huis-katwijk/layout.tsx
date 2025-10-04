import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Katwijk | Hulp Met IT',
  description: 'Computerhulp aan huis in Katwijk voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis katwijk',
    'computer reparatie katwijk',
    'laptop reparatie katwijk',
    'IT specialist katwijk',
    'pc hulp katwijk',
    'computer specialist katwijk',
    'katwijk computerhulp avond',
    'katwijk IT hulp weekend',
    'computerhulp katwijk spoed',
    'betaalbare IT hulp katwijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Katwijk | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Katwijk door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-katwijk',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Katwijk | IT-Specialisten',
    description: 'Computerhulp aan huis Katwijk. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-katwijk',
  },
}

export default function ComputerhulpAanHuisKatwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
