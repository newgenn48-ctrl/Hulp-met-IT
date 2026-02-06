import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Katwijk | Hulp Met IT',
  description: 'Computerhulp aan huis in Katwijk voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis katwijk',
    'computer reparatie katwijk',
    'laptop reparatie katwijk',
    'IT specialist katwijk',
    'pc hulp katwijk',
    'computer specialist katwijk',
    'katwijk computerhulp avond',
    'katwijk IT hulp weekend',
    'computerhulp katwijk spoed',
    'betaalbare IT hulp katwijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Katwijk | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Katwijk door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Katwijk | Computerhulp specialisten',
    description: 'Computerhulp aan huis Katwijk. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-katwijk',
  },
}

export default function ComputerhulpAanHuisKatwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
