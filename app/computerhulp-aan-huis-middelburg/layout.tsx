import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Middelburg | Hulp Met IT',
  description: 'Computerhulp aan huis in Middelburg voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis middelburg',
    'computer reparatie middelburg',
    'laptop reparatie middelburg',
    'IT specialist middelburg',
    'pc hulp middelburg',
    'computer specialist middelburg',
    'middelburg computerhulp avond',
    'middelburg IT hulp weekend',
    'computerhulp middelburg spoed',
    'betaalbare IT hulp middelburg'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Middelburg | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Middelburg door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Middelburg | Computerhulp specialisten',
    description: 'Computerhulp aan huis Middelburg. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-middelburg',
  },
}

export default function ComputerhulpAanHuisMiddelburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
