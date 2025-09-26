import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Arnhem | IT-Student Arnhem | Computerhulp Thuis',
  description: 'Computerproblemen in Arnhem? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Arnhem',
    'IT service Arnhem',
    'laptop reparatie Arnhem',
    'student aan huis Arnhem',
    'IT hulp aan huis Arnhem',
    'computer problemen Arnhem',
    'technische ondersteuning Arnhem'
  ],
  openGraph: {
    title: 'Student Aan Huis Arnhem | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Arnhem. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-arnhem'
  }
}

export default function StudentAanHuisArnhemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}