import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Gouda | Specialist komt naar u',
  description: 'Computerhulp aan huis in Gouda ✓ Ervaren specialisten ✓ Heel Gouda ✓ Van Centrum tot Goverwelle ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis gouda',
    'computer reparatie gouda',
    'laptop reparatie gouda',
    'pc hulp gouda',
    'IT hulp gouda',
    'computer specialist gouda',
    'gouda computerhulp avond',
    'gouda IT hulp weekend',
    'computerhulp gouda spoed',
    'betaalbare IT hulp gouda'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Gouda | Computer Specialist',
    description: 'Computerhulp aan huis in heel Gouda ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Goverwelle ✓ Transparante tarieven',
    images: ['/images/computerhulp-gouda-og.webp'],
    url: '/computerhulp-aan-huis-gouda',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Gouda | Computer Specialist',
    description: 'Computerhulp aan huis Gouda ✓ Specialist komt bij u ✓ Heel Gouda ✓ Transparante tarieven',
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