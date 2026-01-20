import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Utrecht | Hulp Met IT',
  description: 'Computerhulp aan huis in Utrecht voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
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
    title: 'Computerhulp aan huis Utrecht | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Utrecht door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Utrecht | Computerhulp specialisten',
    description: 'Computerhulp aan huis Utrecht. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
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
