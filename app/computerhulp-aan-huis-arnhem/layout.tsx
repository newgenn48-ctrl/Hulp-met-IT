import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Arnhem | Hulp Met IT',
  description: 'Computerhulp aan huis in Arnhem voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis arnhem',
    'computer reparatie arnhem',
    'laptop reparatie arnhem',
    'IT specialist arnhem',
    'pc hulp arnhem',
    'computer specialist arnhem',
    'arnhem computerhulp avond',
    'arnhem IT hulp weekend',
    'computerhulp arnhem spoed',
    'betaalbare IT hulp arnhem'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Arnhem | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Arnhem door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Arnhem | IT-Specialisten',
    description: 'Computerhulp aan huis Arnhem. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-arnhem',
  },
}

export default function ComputerhulpAanHuisArnhemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
