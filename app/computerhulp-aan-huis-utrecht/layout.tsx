import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Utrecht | Specialist komt bij u | Hulp met IT',
  description: 'Computerhulp aan huis in Utrecht ✓ Ervaren specialisten ✓ Heel Utrecht ✓ Van Centrum tot Nieuwegein ✓ Transparante tarieven ✓ Bel 06-42827860',
  keywords: [
    'computerhulp aan huis utrecht',
    'computer reparatie utrecht',
    'laptop reparatie utrecht',
    'pc hulp utrecht',
    'virus verwijdering utrecht',
    'computerhulp utrecht centrum',
    'computerhulp nieuwegein',
    'computerhulp zeist',
    'computer specialist utrecht',
    'IT hulp utrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Utrecht | Computer Specialist',
    description: 'Computerhulp aan huis in heel Utrecht ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Nieuwegein ✓ Transparante tarieven',
    url: '/computerhulp-aan-huis-utrecht',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-utrecht',
  },
}

export default function ComputerhulpAanHuisUtrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}