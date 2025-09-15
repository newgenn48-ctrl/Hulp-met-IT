import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Den Bosch | Betaalbare Computerhulp door IT-Studenten',
  description: 'Computerproblemen in Den Bosch? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Den Bosch',
    'IT service Den Bosch',
    'laptop reparatie Den Bosch',
    'student aan huis Den Bosch',
    'IT hulp aan huis Den Bosch',
    'computer problemen Den Bosch',
    'technische ondersteuning Den Bosch'
  ],
  openGraph: {
    title: 'Student Aan Huis Den Bosch | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Den Bosch. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-den-bosch'
  }
}

export default function StudentAanHuisDenBoschLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}