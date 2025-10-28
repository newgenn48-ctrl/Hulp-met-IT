import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zoetermeer | Hulp Met IT',
  description: 'Computerhulp aan huis in Zoetermeer voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis zoetermeer',
    'computer reparatie zoetermeer',
    'laptop reparatie zoetermeer',
    'IT specialist zoetermeer',
    'pc hulp zoetermeer',
    'computer specialist zoetermeer',
    'zoetermeer computerhulp avond',
    'zoetermeer IT hulp weekend',
    'computerhulp zoetermeer spoed',
    'betaalbare IT hulp zoetermeer'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zoetermeer | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Zoetermeer door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zoetermeer | IT-Specialisten',
    description: 'Computerhulp aan huis Zoetermeer. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zoetermeer',
  },
}

export default function ComputerhulpAanHuisZoetermeerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
