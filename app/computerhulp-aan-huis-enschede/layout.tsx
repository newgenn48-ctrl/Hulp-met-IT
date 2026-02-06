import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Enschede | Hulp Met IT',
  description: 'Computerhulp aan huis in Enschede voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis enschede',
    'computer reparatie enschede',
    'laptop reparatie enschede',
    'IT specialist enschede',
    'pc hulp enschede',
    'computer specialist enschede',
    'enschede computerhulp avond',
    'enschede IT hulp weekend',
    'computerhulp enschede spoed',
    'betaalbare IT hulp enschede'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Enschede | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Enschede door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Enschede | Computerhulp specialisten',
    description: 'Computerhulp aan huis Enschede. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-enschede',
  },
}

export default function ComputerhulpAanHuisEnschedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
