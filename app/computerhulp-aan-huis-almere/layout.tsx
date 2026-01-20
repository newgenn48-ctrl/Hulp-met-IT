import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Almere | Hulp Met IT',
  description: 'Computerhulp aan huis in Almere voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis almere',
    'computer reparatie almere',
    'laptop reparatie almere',
    'IT specialist almere',
    'pc hulp almere',
    'computer specialist almere',
    'almere computerhulp avond',
    'almere IT hulp weekend',
    'computerhulp almere spoed',
    'betaalbare IT hulp almere'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Almere | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Almere door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Almere | Computerhulp specialisten',
    description: 'Computerhulp aan huis Almere. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-almere',
  },
}

export default function ComputerhulpAanHuisAlmereLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
