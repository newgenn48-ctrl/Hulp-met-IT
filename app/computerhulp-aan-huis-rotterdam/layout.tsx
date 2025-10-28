import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Rotterdam | Hulp Met IT',
  description: 'Computerhulp aan huis in Rotterdam voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis rotterdam',
    'computer reparatie rotterdam',
    'laptop reparatie rotterdam',
    'IT specialist rotterdam',
    'pc hulp rotterdam',
    'computer specialist rotterdam',
    'rotterdam computerhulp avond',
    'rotterdam IT hulp weekend',
    'computerhulp rotterdam spoed',
    'betaalbare IT hulp rotterdam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Rotterdam | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Rotterdam door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Rotterdam | IT-Specialisten',
    description: 'Computerhulp aan huis Rotterdam. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-rotterdam',
  },
}

export default function ComputerhulpAanHuisRotterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
