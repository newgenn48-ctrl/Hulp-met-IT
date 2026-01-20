import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Delft | Hulp Met IT',
  description: 'Computerhulp aan huis in Delft voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis delft',
    'computer reparatie delft',
    'laptop reparatie delft',
    'IT specialist delft',
    'pc hulp delft',
    'computer specialist delft',
    'delft computerhulp avond',
    'delft IT hulp weekend',
    'computerhulp delft spoed',
    'betaalbare IT hulp delft'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Delft | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Delft door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Delft | Computerhulp specialisten',
    description: 'Computerhulp aan huis Delft. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-delft',
  },
}

export default function ComputerhulpAanHuisDelftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
