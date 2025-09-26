import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Amersfoort | IT-Student Amersfoort | Computerhulp Thuis',
  description: 'Computerproblemen in Amersfoort? Onze IT-studenten komen naar je toe! Betaalbare hulp vanaf €13,99 per kwartier. Snel, vakkundig en lokaal.',
  keywords: [
    'computerhulp Amersfoort',
    'IT service Amersfoort',
    'laptop reparatie Amersfoort',
    'student aan huis Amersfoort',
    'IT hulp aan huis Amersfoort',
    'computer problemen Amersfoort',
    'technische ondersteuning Amersfoort'
  ],
  openGraph: {
    title: 'Student Aan Huis Amersfoort | Betaalbare Computerhulp',
    description: 'IT-studenten komen naar je toe in Amersfoort. Betaalbare tarieven, vakkundige hulp.',
    type: 'website',
    locale: 'nl_NL',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-amersfoort'
  }
}

export default function StudentAanHuisAmersfoortLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}