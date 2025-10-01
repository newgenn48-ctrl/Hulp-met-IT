import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Rotterdam | Specialist komt naar u',
  description: 'Computerhulp aan huis in Rotterdam ✓ Ervaren specialisten ✓ Heel Rotterdam ✓ Van Centrum tot Hoogvliet ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis rotterdam',
    'computer reparatie rotterdam',
    'laptop reparatie rotterdam',
    'pc hulp rotterdam',
    'IT hulp rotterdam',
    'computer specialist rotterdam',
    'rotterdam computerhulp avond',
    'rotterdam IT hulp weekend',
    'computerhulp rotterdam spoed',
    'betaalbare IT hulp rotterdam'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Rotterdam | Computer Specialist',
    description: 'Computerhulp aan huis in heel Rotterdam ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Hoogvliet ✓ Transparante tarieven',
    url: '/computerhulp-aan-huis-rotterdam',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-rotterdam',
  },
}

export default function ComputerhulpAanHuisRotterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}