import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Alphen aan den Rijn | Specialist komt naar u',
  description: 'Computerhulp aan huis in Alphen aan den Rijn ✓ Ervaren specialisten ✓ Heel Alphen aan den Rijn ✓ Van Centrum tot Kerk en Zanen ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis alphen aan den rijn',
    'computer reparatie alphen aan den rijn',
    'laptop reparatie alphen aan den rijn',
    'pc hulp alphen aan den rijn',
    'IT hulp alphen aan den rijn',
    'computer specialist alphen aan den rijn',
    'alphen aan den rijn computerhulp avond',
    'alphen aan den rijn IT hulp weekend',
    'computerhulp alphen aan den rijn spoed',
    'betaalbare IT hulp alphen aan den rijn'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Alphen aan den Rijn | Computer Specialist',
    description: 'Computerhulp aan huis in heel Alphen aan den Rijn ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Kerk en Zanen ✓ Transparante tarieven',
    images: ['/images/computerhulp-alphen-aan-den-rijn-og.webp'],
    url: '/computerhulp-aan-huis-alphen-aan-den-rijn',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Alphen aan den Rijn | Computer Specialist',
    description: 'Computerhulp aan huis Alphen aan den Rijn ✓ Specialist komt bij u ✓ Heel Alphen aan den Rijn ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-alphen-aan-den-rijn',
  },
}

export default function ComputerhulpAanHuisAlphenAanDenRijnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}