import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Alphen aan den Rijn | Hulp Met IT',
  description: 'Computerhulp aan huis in Alphen aan den Rijn voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis alphen aan den rijn',
    'computer reparatie alphen aan den rijn',
    'laptop reparatie alphen aan den rijn',
    'IT specialist alphen aan den rijn',
    'pc hulp alphen aan den rijn',
    'computer specialist alphen aan den rijn',
    'alphen aan den rijn computerhulp avond',
    'alphen aan den rijn IT hulp weekend',
    'computerhulp alphen aan den rijn spoed',
    'betaalbare IT hulp alphen aan den rijn'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Alphen aan den Rijn | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Alphen aan den Rijn door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Alphen aan den Rijn | Computerhulp specialisten',
    description: 'Computerhulp aan huis Alphen aan den Rijn. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-alphen-aan-den-rijn',
  },
}

export default function ComputerhulpAanHuisAlphenaandenRijnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
