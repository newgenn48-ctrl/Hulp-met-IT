import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zwolle | Hulp Met IT',
  description: 'Computerhulp aan huis in Zwolle voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis zwolle',
    'computer reparatie zwolle',
    'laptop reparatie zwolle',
    'IT specialist zwolle',
    'pc hulp zwolle',
    'computer specialist zwolle',
    'zwolle computerhulp avond',
    'zwolle IT hulp weekend',
    'computerhulp zwolle spoed',
    'betaalbare IT hulp zwolle'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zwolle | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Zwolle door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zwolle | Computerhulp specialisten',
    description: 'Computerhulp aan huis Zwolle. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zwolle',
  },
}

export default function ComputerhulpAanHuisZwolleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
