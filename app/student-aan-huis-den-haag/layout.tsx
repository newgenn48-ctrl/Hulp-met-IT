import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Den Haag | Betaalbare Computerhulp door IT-Studenten',
  description: 'Computerproblemen in Den Haag? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Den Haag',
    'IT service Den Haag',
    'laptop reparatie Den Haag',
    'student aan huis Den Haag',
    'IT hulp aan huis Den Haag',
    'computer problemen Den Haag',
    'technische ondersteuning Den Haag'
  ],
  openGraph: {
    title: 'Student Aan Huis Den Haag | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Den Haag. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-den-haag'
  }
}

export default function StudentAanHuisDenHaagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}