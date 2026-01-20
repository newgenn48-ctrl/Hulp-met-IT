import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Haarlem | Hulp Met IT',
  description: 'Computerhulp aan huis in Haarlem voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis haarlem',
    'computer reparatie haarlem',
    'laptop reparatie haarlem',
    'IT specialist haarlem',
    'pc hulp haarlem',
    'computer specialist haarlem',
    'haarlem computerhulp avond',
    'haarlem IT hulp weekend',
    'computerhulp haarlem spoed',
    'betaalbare IT hulp haarlem'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Haarlem | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Haarlem door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Haarlem | Computerhulp specialisten',
    description: 'Computerhulp aan huis Haarlem. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-haarlem',
  },
}

export default function ComputerhulpAanHuisHaarlemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
