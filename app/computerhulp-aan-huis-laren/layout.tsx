import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Laren | Hulp Met IT',
  description: 'Computerhulp aan huis in Laren voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis laren',
    'computer reparatie laren',
    'laptop reparatie laren',
    'IT specialist laren',
    'pc hulp laren',
    'computer specialist laren',
    'laren computerhulp avond',
    'laren IT hulp weekend',
    'computerhulp laren spoed',
    'betaalbare IT hulp laren'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Laren | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Laren door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Laren | Computerhulp specialisten',
    description: 'Computerhulp aan huis Laren. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-laren',
  },
}

export default function ComputerhulpAanHuisLarenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
