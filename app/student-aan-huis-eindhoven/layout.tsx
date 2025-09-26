import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Eindhoven | IT-Student Eindhoven | Computerhulp Thuis',
  description: 'Computerproblemen in Eindhoven? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Eindhoven',
    'IT service Eindhoven',
    'laptop reparatie Eindhoven',
    'student aan huis Eindhoven',
    'IT hulp aan huis Eindhoven',
    'computer problemen Eindhoven',
    'technische ondersteuning Eindhoven'
  ],
  openGraph: {
    title: 'Student Aan Huis Eindhoven | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Eindhoven. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-eindhoven'
  }
}

export default function StudentAanHuisEindhovenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}