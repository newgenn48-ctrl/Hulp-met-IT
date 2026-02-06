import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Arnhem | Hulp Met IT',
  description: 'Computerhulp aan huis in Arnhem voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis arnhem',
    'computer reparatie arnhem',
    'laptop reparatie arnhem',
    'IT specialist arnhem',
    'pc hulp arnhem',
    'computer specialist arnhem',
    'arnhem computerhulp avond',
    'arnhem IT hulp weekend',
    'computerhulp arnhem spoed',
    'betaalbare IT hulp arnhem'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Arnhem | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Arnhem door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Arnhem | Computerhulp specialisten',
    description: 'Computerhulp aan huis Arnhem. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-arnhem',
  },
}

export default function ComputerhulpAanHuisArnhemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
