import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Breda | IT-Student Breda | Computerhulp Thuis',
  description: 'Computerproblemen in Breda? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Breda',
    'IT service Breda',
    'laptop reparatie Breda',
    'student aan huis Breda',
    'IT hulp aan huis Breda',
    'computer problemen Breda',
    'technische ondersteuning Breda'
  ],
  openGraph: {
    title: 'Student Aan Huis Breda | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Breda. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-breda'
  }
}

export default function StudentAanHuisBredaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}