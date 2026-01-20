import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Den Haag | Hulp Met IT',
  description: 'Computerhulp aan huis in Den Haag voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
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
    title: 'Computerhulp aan huis Den Haag | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Den Haag door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Den Haag | Computerhulp specialisten',
    description: 'Computerhulp aan huis Den Haag. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
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
