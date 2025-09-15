import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis | Specialist komt binnen 24u naar u toe ✓',
  description: 'Computerproblemen? Onze ervaren specialisten komen binnen 24-48u aan huis! ✓ Transparante tarieven €51,97 ✓ 10+ jaar ervaring ✓ Ruime expertise ✓ Bel nu!',
  keywords: [
    'computerhulp aan huis',
    'computer specialist aan huis',
    'computer reparatie thuis',
    'PC hulp aan huis',
    'laptop reparatie aan huis',
    'computer service Nederland',
    'thuisservice computer',
    'computerhulp specialist',
    'computer problemen oplossen',
    'IT hulp aan huis'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis - Specialist binnen 24u',
    description: 'Computerproblemen? Specialist komt binnen 24-48u naar u toe! Transparante tarieven, 10+ jaar ervaring.',
    images: ['/images/computerhulp-landing-og.webp'],
    url: '/computerhulp-aan-huis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis - Specialist binnen 24u',
    description: 'Computerproblemen? Specialist komt binnen 24-48u naar u toe!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis',
  },
}

export default function ComputerhulpAanHuisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}