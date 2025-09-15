import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Leiden | Betaalbare Computerhulp door IT-Studenten',
  description: 'Computerproblemen in Leiden? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Leiden',
    'IT service Leiden',
    'laptop reparatie Leiden',
    'student aan huis Leiden',
    'IT hulp aan huis Leiden',
    'computer problemen Leiden',
    'technische ondersteuning Leiden'
  ],
  openGraph: {
    title: 'Student Aan Huis Leiden | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Leiden. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-leiden'
  }
}

export default function StudentAanHuisLeidenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}