import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Tilburg | IT-Student Tilburg | Computerhulp Thuis',
  description: 'Computerproblemen in Tilburg? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Tilburg',
    'IT service Tilburg',
    'laptop reparatie Tilburg',
    'student aan huis Tilburg',
    'IT hulp aan huis Tilburg',
    'computer problemen Tilburg',
    'technische ondersteuning Tilburg'
  ],
  openGraph: {
    title: 'Student Aan Huis Tilburg | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Tilburg. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-tilburg'
  }
}

export default function StudentAanHuisTilburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}