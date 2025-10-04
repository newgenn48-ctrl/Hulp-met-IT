import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Utrecht | Hulp Met IT',
  description: 'Computerhulp aan huis in Utrecht voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis utrecht',
    'computer reparatie utrecht',
    'laptop reparatie utrecht',
    'IT specialist utrecht',
    'pc hulp utrecht',
    'computer specialist utrecht',
    'utrecht computerhulp avond',
    'utrecht IT hulp weekend',
    'computerhulp utrecht spoed',
    'betaalbare IT hulp utrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Utrecht | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Utrecht door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-utrecht',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Utrecht | IT-Specialisten',
    description: 'Computerhulp aan huis Utrecht. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-utrecht',
  },
}

export default function ComputerhulpAanHuisUtrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
