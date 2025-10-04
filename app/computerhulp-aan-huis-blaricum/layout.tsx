import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Blaricum | Hulp Met IT',
  description: 'Computerhulp aan huis in Blaricum voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis blaricum',
    'computer reparatie blaricum',
    'laptop reparatie blaricum',
    'IT specialist blaricum',
    'pc hulp blaricum',
    'computer specialist blaricum',
    'blaricum computerhulp avond',
    'blaricum IT hulp weekend',
    'computerhulp blaricum spoed',
    'betaalbare IT hulp blaricum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Blaricum | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Blaricum door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-blaricum',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Blaricum | IT-Specialisten',
    description: 'Computerhulp aan huis Blaricum. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-blaricum',
  },
}

export default function ComputerhulpAanHuisBlaricumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
