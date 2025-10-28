import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Eindhoven | Hulp Met IT',
  description: 'Computerhulp aan huis in Eindhoven voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis eindhoven',
    'computer reparatie eindhoven',
    'laptop reparatie eindhoven',
    'IT specialist eindhoven',
    'pc hulp eindhoven',
    'computer specialist eindhoven',
    'eindhoven computerhulp avond',
    'eindhoven IT hulp weekend',
    'computerhulp eindhoven spoed',
    'betaalbare IT hulp eindhoven'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Eindhoven | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Eindhoven door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Eindhoven | IT-Specialisten',
    description: 'Computerhulp aan huis Eindhoven. Specialist komt bij u. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50).',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-eindhoven',
  },
}

export default function ComputerhulpAanHuisEindhovenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
