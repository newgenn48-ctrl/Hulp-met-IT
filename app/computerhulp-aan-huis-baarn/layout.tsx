import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Baarn | Hulp Met IT',
  description: 'Computerhulp aan huis in Baarn voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis baarn',
    'computer reparatie baarn',
    'laptop reparatie baarn',
    'IT specialist baarn',
    'pc hulp baarn',
    'computer specialist baarn',
    'baarn computerhulp avond',
    'baarn IT hulp weekend',
    'computerhulp baarn spoed',
    'betaalbare IT hulp baarn'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Baarn | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Baarn door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Baarn | Computerhulp specialisten',
    description: 'Computerhulp aan huis Baarn. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-baarn',
  },
}

export default function ComputerhulpAanHuisBaarnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
