import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Katwijk | Specialist komt naar u',
  description: 'Computerhulp aan huis in Katwijk ✓ Ervaren specialisten ✓ Heel Katwijk ✓ Van Centrum tot Rijnsburg ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis katwijk',
    'computer reparatie katwijk',
    'laptop reparatie katwijk',
    'pc hulp katwijk',
    'IT hulp katwijk',
    'computer specialist katwijk',
    'katwijk computerhulp avond',
    'katwijk IT hulp weekend',
    'computerhulp katwijk spoed',
    'betaalbare IT hulp katwijk'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Katwijk | Computer Specialist',
    description: 'Computerhulp aan huis in heel Katwijk ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Rijnsburg ✓ Transparante tarieven',
    images: ['/images/computerhulp-katwijk-og.webp'],
    url: '/computerhulp-aan-huis-katwijk',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Katwijk | Computer Specialist',
    description: 'Computerhulp aan huis Katwijk ✓ Specialist komt bij u ✓ Heel Katwijk ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-katwijk',
  },
}

export default function ComputerhulpAanHuisKatwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}