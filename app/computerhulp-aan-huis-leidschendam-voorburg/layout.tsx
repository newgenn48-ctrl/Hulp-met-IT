import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Leidschendam-Voorburg | Specialist komt naar u',
  description: 'Computerhulp aan huis in Leidschendam-Voorburg ✓ Ervaren specialisten ✓ Heel Leidschendam-Voorburg ✓ Van Centrum tot Essesteijn ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis leidschendam voorburg',
    'computer reparatie leidschendam voorburg',
    'laptop reparatie leidschendam voorburg',
    'pc hulp leidschendam voorburg',
    'IT hulp leidschendam voorburg',
    'computer specialist leidschendam voorburg',
    'leidschendam voorburg computerhulp avond',
    'leidschendam voorburg IT hulp weekend',
    'computerhulp leidschendam voorburg spoed',
    'betaalbare IT hulp leidschendam voorburg'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Leidschendam-Voorburg | Computer Specialist',
    description: 'Computerhulp aan huis in heel Leidschendam-Voorburg ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Essesteijn ✓ Transparante tarieven',
    images: ['/images/computerhulp-leidschendam-voorburg-og.webp'],
    url: '/computerhulp-aan-huis-leidschendam-voorburg',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Leidschendam-Voorburg | Computer Specialist',
    description: 'Computerhulp aan huis Leidschendam-Voorburg ✓ Specialist komt bij u ✓ Heel Leidschendam-Voorburg ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-leidschendam-voorburg',
  },
}

export default function ComputerhulpAanHuisLeidschendamVoorburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}