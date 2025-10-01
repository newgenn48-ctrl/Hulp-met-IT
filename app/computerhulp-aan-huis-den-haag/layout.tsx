import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Den Haag | Specialist komt naar u',
  description: 'Computerhulp aan huis in Den Haag ✓ Ervaren specialisten ✓ Heel Den Haag ✓ Van Centrum tot Scheveningen ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis den haag',
    'computer reparatie den haag',
    'laptop reparatie den haag',
    'pc hulp den haag',
    'IT hulp den haag',
    'computer specialist den haag',
    'den haag computerhulp avond',
    'den haag IT hulp weekend',
    'computerhulp den haag spoed',
    'betaalbare IT hulp den haag'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Den Haag | Computer Specialist',
    description: 'Computerhulp aan huis in heel Den Haag ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Scheveningen ✓ Transparante tarieven',
    url: '/computerhulp-aan-huis-den-haag',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-den-haag',
  },
}

export default function ComputerhulpAanHuisDenHaagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}