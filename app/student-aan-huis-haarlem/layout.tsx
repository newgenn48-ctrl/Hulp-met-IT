import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Haarlem | IT-Student Haarlem | Computerhulp Thuis',
  description: 'Computerproblemen in Haarlem? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Haarlem',
    'IT service Haarlem',
    'laptop reparatie Haarlem',
    'student aan huis Haarlem',
    'IT hulp aan huis Haarlem',
    'computer problemen Haarlem',
    'technische ondersteuning Haarlem'
  ],
  openGraph: {
    title: 'Student Aan Huis Haarlem | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Haarlem. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-haarlem'
  }
}

export default function StudentAanHuisHaarlemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}