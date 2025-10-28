import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Alphen aan den Rijn | Hulp Met IT',
  description: 'Computerhulp aan huis in Alphen aan den Rijn voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis alphen aan den rijn',
    'computer reparatie alphen aan den rijn',
    'laptop reparatie alphen aan den rijn',
    'IT specialist alphen aan den rijn',
    'pc hulp alphen aan den rijn',
    'computer specialist alphen aan den rijn',
    'alphen aan den rijn computerhulp avond',
    'alphen aan den rijn IT hulp weekend',
    'computerhulp alphen aan den rijn spoed',
    'betaalbare IT hulp alphen aan den rijn'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Alphen aan den Rijn | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Alphen aan den Rijn door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Alphen aan den Rijn | IT-Specialisten',
    description: 'Computerhulp aan huis Alphen aan den Rijn. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-alphen-aan-den-rijn',
  },
}

export default function ComputerhulpAanHuisAlphenaandenRijnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
