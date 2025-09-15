import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Nijmegen | Betaalbare Computerhulp door IT-Studenten',
  description: 'Computerproblemen in Nijmegen? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Nijmegen',
    'IT service Nijmegen',
    'laptop reparatie Nijmegen',
    'student aan huis Nijmegen',
    'IT hulp aan huis Nijmegen',
    'computer problemen Nijmegen',
    'technische ondersteuning Nijmegen'
  ],
  openGraph: {
    title: 'Student Aan Huis Nijmegen | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Nijmegen. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-nijmegen'
  }
}

export default function StudentAanHuisNijmegenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}