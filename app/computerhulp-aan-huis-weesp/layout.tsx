import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Weesp | Hulp Met IT',
  description: 'Computerhulp aan huis in Weesp voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis weesp',
    'computer reparatie weesp',
    'laptop reparatie weesp',
    'IT specialist weesp',
    'pc hulp weesp',
    'computer specialist weesp',
    'weesp computerhulp avond',
    'weesp IT hulp weekend',
    'computerhulp weesp spoed',
    'betaalbare IT hulp weesp'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Weesp | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Weesp door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Weesp | Computerhulp specialisten',
    description: 'Computerhulp aan huis Weesp. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-weesp',
  },
}

export default function ComputerhulpAanHuisWeespLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
