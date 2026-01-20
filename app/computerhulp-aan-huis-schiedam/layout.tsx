import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Schiedam | Hulp Met IT',
  description: 'Computerhulp aan huis in Schiedam voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
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
    title: 'Computerhulp aan huis Schiedam | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Schiedam door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Schiedam | Computerhulp specialisten',
    description: 'Computerhulp aan huis Schiedam. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
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
