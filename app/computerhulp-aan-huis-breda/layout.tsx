import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Breda | Hulp Met IT',
  description: 'Computerhulp aan huis in Breda voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis breda',
    'computer reparatie breda',
    'laptop reparatie breda',
    'IT specialist breda',
    'pc hulp breda',
    'computer specialist breda',
    'breda computerhulp avond',
    'breda IT hulp weekend',
    'computerhulp breda spoed',
    'betaalbare IT hulp breda'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Breda | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Breda door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Breda | Computerhulp specialisten',
    description: 'Computerhulp aan huis Breda. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-breda',
  },
}

export default function ComputerhulpAanHuisBredaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
