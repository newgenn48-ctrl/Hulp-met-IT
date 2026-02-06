import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Huizen | Hulp Met IT',
  description: 'Computerhulp aan huis in Huizen voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis huizen',
    'computer reparatie huizen',
    'laptop reparatie huizen',
    'IT specialist huizen',
    'pc hulp huizen',
    'computer specialist huizen',
    'huizen computerhulp avond',
    'huizen IT hulp weekend',
    'computerhulp huizen spoed',
    'betaalbare IT hulp huizen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Huizen | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Huizen door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Huizen | Computerhulp specialisten',
    description: 'Computerhulp aan huis Huizen. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-huizen',
  },
}

export default function ComputerhulpAanHuisHuizenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
