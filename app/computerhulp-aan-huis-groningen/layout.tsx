import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Groningen | Specialist komt naar u',
  description: 'Computerhulp aan huis in Groningen ✓ Ervaren specialisten ✓ Heel Groningen ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis groningen',
    'computer reparatie groningen',
    'laptop reparatie groningen',
    'pc hulp groningen',
    'IT hulp groningen',
    'computer specialist groningen',
    'groningen computerhulp avond',
    'groningen IT hulp weekend',
    'computerhulp groningen spoed',
    'betaalbare IT hulp groningen'
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