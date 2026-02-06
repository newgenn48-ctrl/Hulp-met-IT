import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Blaricum | Hulp Met IT',
  description: 'Computerhulp aan huis in Blaricum voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis blaricum',
    'computer reparatie blaricum',
    'laptop reparatie blaricum',
    'IT specialist blaricum',
    'pc hulp blaricum',
    'computer specialist blaricum',
    'blaricum computerhulp avond',
    'blaricum IT hulp weekend',
    'computerhulp blaricum spoed',
    'betaalbare IT hulp blaricum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Blaricum | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Blaricum door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Blaricum | Computerhulp specialisten',
    description: 'Computerhulp aan huis Blaricum. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-blaricum',
  },
}

export default function ComputerhulpAanHuisBlaricumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
