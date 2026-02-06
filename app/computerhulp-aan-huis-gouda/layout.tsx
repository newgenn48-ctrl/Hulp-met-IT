import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Gouda | Hulp Met IT',
  description: 'Computerhulp aan huis in Gouda voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis gouda',
    'computer reparatie gouda',
    'laptop reparatie gouda',
    'IT specialist gouda',
    'pc hulp gouda',
    'computer specialist gouda',
    'gouda computerhulp avond',
    'gouda IT hulp weekend',
    'computerhulp gouda spoed',
    'betaalbare IT hulp gouda'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Gouda | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Gouda door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Gouda | Computerhulp specialisten',
    description: 'Computerhulp aan huis Gouda. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-gouda',
  },
}

export default function ComputerhulpAanHuisGoudaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
