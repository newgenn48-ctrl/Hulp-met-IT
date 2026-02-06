import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Hilversum | Hulp Met IT',
  description: 'Computerhulp aan huis in Hilversum voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis hilversum',
    'computer reparatie hilversum',
    'laptop reparatie hilversum',
    'IT specialist hilversum',
    'pc hulp hilversum',
    'computer specialist hilversum',
    'hilversum computerhulp avond',
    'hilversum IT hulp weekend',
    'computerhulp hilversum spoed',
    'betaalbare IT hulp hilversum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Hilversum | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Hilversum door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Hilversum | Computerhulp specialisten',
    description: 'Computerhulp aan huis Hilversum. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hilversum',
  },
}

export default function ComputerhulpAanHuisHilversumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
