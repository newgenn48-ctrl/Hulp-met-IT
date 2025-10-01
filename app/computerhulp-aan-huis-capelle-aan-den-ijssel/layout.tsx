import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Capelle aan den IJssel | Specialist komt naar u',
  description: 'Computerhulp aan huis in Capelle aan den IJssel ✓ Ervaren specialisten ✓ Heel Capelle aan den IJssel ✓ Van Centrum tot Fascinatio ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis capelle aan den ijssel',
    'computer reparatie capelle aan den ijssel',
    'laptop reparatie capelle aan den ijssel',
    'pc hulp capelle aan den ijssel',
    'IT hulp capelle aan den ijssel',
    'computer specialist capelle aan den ijssel',
    'capelle aan den ijssel computerhulp avond',
    'capelle aan den ijssel IT hulp weekend',
    'computerhulp capelle aan den ijssel spoed',
    'betaalbare IT hulp capelle aan den ijssel'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Capelle aan den IJssel | Computer Specialist',
    description: 'Computerhulp aan huis in heel Capelle aan den IJssel ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Fascinatio ✓ Transparante tarieven',
    images: ['/images/computerhulp-capelle-aan-den-ijssel-og.webp'],
    url: '/computerhulp-aan-huis-capelle-aan-den-ijssel',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Capelle aan den IJssel | Computer Specialist',
    description: 'Computerhulp aan huis Capelle aan den IJssel ✓ Specialist komt bij u ✓ Heel Capelle aan den IJssel ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-capelle-aan-den-ijssel',
  },
}

export default function ComputerhulpAanHuisCapelleAanDenIJsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}