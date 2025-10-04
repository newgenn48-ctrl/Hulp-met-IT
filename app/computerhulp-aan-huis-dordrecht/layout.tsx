import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Dordrecht | Hulp Met IT',
  description: 'Computerhulp aan huis in Dordrecht voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis dordrecht',
    'computer reparatie dordrecht',
    'laptop reparatie dordrecht',
    'IT specialist dordrecht',
    'pc hulp dordrecht',
    'computer specialist dordrecht',
    'dordrecht computerhulp avond',
    'dordrecht IT hulp weekend',
    'computerhulp dordrecht spoed',
    'betaalbare IT hulp dordrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Dordrecht | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Dordrecht door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-dordrecht',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Dordrecht | IT-Specialisten',
    description: 'Computerhulp aan huis Dordrecht. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-dordrecht',
  },
}

export default function ComputerhulpAanHuisDordrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
