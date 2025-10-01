import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Amersfoort | Specialist komt naar u',
  description: 'Computerhulp aan huis in Amersfoort ✓ Ervaren specialisten ✓ Heel Amersfoort ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis amersfoort',
    'computer reparatie amersfoort',
    'laptop reparatie amersfoort',
    'pc hulp amersfoort',
    'IT hulp amersfoort',
    'computer specialist amersfoort',
    'amersfoort computerhulp avond',
    'amersfoort IT hulp weekend',
    'computerhulp amersfoort spoed',
    'betaalbare IT hulp amersfoort'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Amersfoort | Computer Specialist',
    description: 'Computerhulp aan huis in heel Amersfoort ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Noord ✓ Transparante tarieven',
    images: ['/images/computerhulp-amersfoort-og.webp'],
    url: '/computerhulp-aan-huis-amersfoort',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Amersfoort | Computer Specialist',
    description: 'Computerhulp aan huis Amersfoort ✓ Specialist komt bij u ✓ Heel Amersfoort ✓ Transparante tarieven',
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