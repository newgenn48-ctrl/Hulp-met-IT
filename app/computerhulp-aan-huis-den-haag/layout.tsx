import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Aan Huis Den Haag | IT-Specialist Den Haag | Computer Reparatie',
  description: 'Computerhulp aan huis in Den Haag ✓ Ervaren specialisten ✓ Heel Den Haag ✓ Van Centrum tot Scheveningen ✓ Transparante tarieven ✓ Bel 06-42827860',
  keywords: [
    'computerhulp aan huis den haag',
    'computer reparatie den haag',
    'laptop reparatie den haag',
    'pc hulp den haag',
    'virus verwijdering den haag',
    'computerhulp den haag centrum',
    'computerhulp scheveningen',
    'computerhulp wassenaar',
    'computer specialist den haag',
    'IT hulp den haag'
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