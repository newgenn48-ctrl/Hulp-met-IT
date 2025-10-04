import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Gouda | Hulp Met IT',
  description: 'Computerhulp aan huis in Gouda voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis gouda',
    'computer reparatie gouda',
    'laptop reparatie gouda',
    'IT specialist gouda',
    'pc hulp gouda',
    'computer specialist gouda',
    'gouda computerhulp avond',
    'gouda IT hulp weekend',
    'computerhulp gouda spoed',
    'betaalbare IT hulp gouda'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Gouda | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Gouda door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-gouda',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Gouda | IT-Specialisten',
    description: 'Computerhulp aan huis Gouda. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-gouda',
  },
}

export default function ComputerhulpAanHuisGoudaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
