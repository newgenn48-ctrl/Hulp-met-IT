import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Baarn | Hulp Met IT',
  description: 'Computerhulp aan huis in Baarn voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis baarn',
    'computer reparatie baarn',
    'laptop reparatie baarn',
    'IT specialist baarn',
    'pc hulp baarn',
    'computer specialist baarn',
    'baarn computerhulp avond',
    'baarn IT hulp weekend',
    'computerhulp baarn spoed',
    'betaalbare IT hulp baarn'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Baarn | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Baarn door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-baarn',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Baarn | IT-Specialisten',
    description: 'Computerhulp aan huis Baarn. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-baarn',
  },
}

export default function ComputerhulpAanHuisBaarnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
