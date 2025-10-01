import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Eindhoven | Specialist komt naar u',
  description: 'Computerhulp aan huis in Eindhoven ✓ Ervaren specialisten ✓ Heel Eindhoven ✓ Van Centrum tot Veldhoven ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis eindhoven',
    'computer reparatie eindhoven',
    'laptop reparatie eindhoven',
    'pc hulp eindhoven',
    'IT hulp eindhoven',
    'computer specialist eindhoven',
    'eindhoven computerhulp avond',
    'eindhoven IT hulp weekend',
    'computerhulp eindhoven spoed',
    'betaalbare IT hulp eindhoven'
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-eindhoven',
  },
}

export default function ComputerhulpAanHuisEindhovenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}