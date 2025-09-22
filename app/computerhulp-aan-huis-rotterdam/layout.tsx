import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Rotterdam | Specialist komt bij u | Hulp met IT',
  description: 'Computerhulp aan huis in Rotterdam ✓ Ervaren specialisten ✓ Heel Rotterdam ✓ Van Centrum tot Hoogvliet ✓ Transparante tarieven ✓ Bel 06-42827860',
  keywords: [
    'computerhulp aan huis rotterdam',
    'computer reparatie rotterdam',
    'laptop reparatie rotterdam',
    'pc hulp rotterdam',
    'virus verwijdering rotterdam',
    'computerhulp rotterdam centrum',
    'computerhulp rotterdam noord',
    'computerhulp rotterdam zuid',
    'computer specialist rotterdam',
    'IT hulp rotterdam'
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