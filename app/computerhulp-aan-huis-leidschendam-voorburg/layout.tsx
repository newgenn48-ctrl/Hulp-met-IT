import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Leidschendam-Voorburg | Hulp Met IT',
  description: 'Computerhulp aan huis in Leidschendam-Voorburg voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis leidschendam-voorburg',
    'computer reparatie leidschendam-voorburg',
    'laptop reparatie leidschendam-voorburg',
    'IT specialist leidschendam-voorburg',
    'pc hulp leidschendam-voorburg',
    'computer specialist leidschendam-voorburg',
    'leidschendam-voorburg computerhulp avond',
    'leidschendam-voorburg IT hulp weekend',
    'computerhulp leidschendam-voorburg spoed',
    'betaalbare IT hulp leidschendam-voorburg'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Leidschendam-Voorburg | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Leidschendam-Voorburg door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Leidschendam-Voorburg | Computerhulp specialisten',
    description: 'Computerhulp aan huis Leidschendam-Voorburg. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-leidschendam-voorburg',
  },
}

export default function ComputerhulpAanHuisLeidschendamVoorburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
