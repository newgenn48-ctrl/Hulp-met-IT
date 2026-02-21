import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Afspraak Bevestigd - Hulp met IT',
  description: 'Uw afspraak bij Hulp met IT is succesvol aangevraagd.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function BevestigingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
