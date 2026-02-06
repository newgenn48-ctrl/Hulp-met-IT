import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Amersfoort | Hulp Met IT',
  description: 'Computerhulp aan huis in Amersfoort voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis amersfoort',
    'computer reparatie amersfoort',
    'laptop reparatie amersfoort',
    'IT specialist amersfoort',
    'pc hulp amersfoort',
    'computer specialist amersfoort',
    'amersfoort computerhulp avond',
    'amersfoort IT hulp weekend',
    'computerhulp amersfoort spoed',
    'betaalbare IT hulp amersfoort'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Amersfoort | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Amersfoort door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Amersfoort | Computerhulp specialisten',
    description: 'Computerhulp aan huis Amersfoort. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-amersfoort',
  },
}

export default function ComputerhulpAanHuisAmersfoortLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
