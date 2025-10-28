import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hilversum | Hulp Met IT',
  description: 'Computerhulp aan huis in Hilversum voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis hilversum',
    'computer reparatie hilversum',
    'laptop reparatie hilversum',
    'IT specialist hilversum',
    'pc hulp hilversum',
    'computer specialist hilversum',
    'hilversum computerhulp avond',
    'hilversum IT hulp weekend',
    'computerhulp hilversum spoed',
    'betaalbare IT hulp hilversum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hilversum | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Hilversum door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hilversum | IT-Specialisten',
    description: 'Computerhulp aan huis Hilversum. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hilversum',
  },
}

export default function ComputerhulpAanHuisHilversumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
