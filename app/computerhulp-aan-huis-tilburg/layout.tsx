import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Tilburg | Hulp Met IT',
  description: 'Computerhulp aan huis in Tilburg voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis tilburg',
    'computer reparatie tilburg',
    'laptop reparatie tilburg',
    'IT specialist tilburg',
    'pc hulp tilburg',
    'computer specialist tilburg',
    'tilburg computerhulp avond',
    'tilburg IT hulp weekend',
    'computerhulp tilburg spoed',
    'betaalbare IT hulp tilburg'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Tilburg | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Tilburg door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Tilburg | IT-Specialisten',
    description: 'Computerhulp aan huis Tilburg. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-tilburg',
  },
}

export default function ComputerhulpAanHuisTilburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
