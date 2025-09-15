import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Middelburg | Betaalbare Computerhulp door IT-Studenten',
  description: 'Computerproblemen in Middelburg? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Middelburg',
    'IT service Middelburg',
    'laptop reparatie Middelburg',
    'student aan huis Middelburg',
    'IT hulp aan huis Middelburg',
    'computer problemen Middelburg',
    'technische ondersteuning Middelburg'
  ],
  openGraph: {
    title: 'Student Aan Huis Middelburg | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Middelburg. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-middelburg'
  }
}

export default function StudentAanHuisMiddelburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}