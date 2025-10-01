import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Den Bosch | Specialist komt naar u',
  description: 'Computerhulp aan huis in Den Bosch ✓ Ervaren specialisten ✓ Heel Den Bosch ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis den bosch',
    'computer reparatie den bosch',
    'laptop reparatie den bosch',
    'pc hulp den bosch',
    'IT hulp den bosch',
    'computer specialist den bosch',
    'den bosch computerhulp avond',
    'den bosch IT hulp weekend',
    'computerhulp den bosch spoed',
    'betaalbare IT hulp den bosch'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Den Bosch | Computer Specialist',
    description: 'Computerhulp aan huis in heel Den Bosch ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Noord ✓ Transparante tarieven',
    images: ['/images/computerhulp-den-bosch-og.webp'],
    url: '/computerhulp-aan-huis-den-bosch',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Den Bosch | Computer Specialist',
    description: 'Computerhulp aan huis Den Bosch ✓ Specialist komt bij u ✓ Heel Den Bosch ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-den-bosch',
  },
}

export default function ComputerhulpAanHuisDenBoschLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}