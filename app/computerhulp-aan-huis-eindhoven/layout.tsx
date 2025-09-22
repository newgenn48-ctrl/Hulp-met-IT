import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Eindhoven | Specialist komt bij u | Hulp met IT',
  description: 'Computerhulp aan huis in Eindhoven ✓ Ervaren specialisten ✓ Heel Eindhoven ✓ Van Centrum tot Veldhoven ✓ Transparante tarieven ✓ Bel 06-42827860',
  keywords: [
    'computerhulp aan huis eindhoven',
    'computer reparatie eindhoven',
    'laptop reparatie eindhoven',
    'pc hulp eindhoven',
    'virus verwijdering eindhoven',
    'computerhulp eindhoven centrum',
    'computerhulp veldhoven',
    'computerhulp helmond',
    'computer specialist eindhoven',
    'IT hulp eindhoven'
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