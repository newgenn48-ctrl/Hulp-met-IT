import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Aan Huis Groningen | IT-Specialist Groningen | Computer Reparatie',
  description: 'Computerhulp aan huis in Groningen ✓ Ervaren specialisten ✓ Heel Groningen ✓ Transparante tarieven ✓ Bel 06-42827860',
  keywords: [
    'computerhulp aan huis groningen',
    'computer reparatie groningen',
    'laptop reparatie groningen',
    'pc hulp groningen',
    'virus verwijdering groningen',
    'computer specialist groningen',
    'IT hulp groningen'
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-groningen',
  },
}

export default function ComputerhulpAanHuisGroningenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}