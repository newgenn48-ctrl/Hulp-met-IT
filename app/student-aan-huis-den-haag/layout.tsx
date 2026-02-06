import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan huis Den Haag | Computerhulp €14,50 per kwartier',
  description: 'ICT Student aan huis in Den Haag voor computerhulp. Betaalbare IT-studenten van de Haagse Hogeschool komen bij u thuis. Snel, vakkundig en vriendelijk. Bel nu!',
  keywords: [
    'ICT student aan huis Den Haag',
    'computerhulp Den Haag',
    'laptop reparatie Den Haag',
    'computer hulp aan huis Den Haag',
    'IT student Den Haag',
    'betaalbare computerhulp Den Haag'
  ],
  openGraph: {
    title: 'ICT Student aan huis Den Haag | Computerhulp aan Huis',
    description: 'Betaalbare computerhulp door IT-studenten in Den Haag. €14,50 per kwartier. Snel ter plaatse!',
    url: 'https://hulpmetit.nl/student-aan-huis-den-haag',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-den-haag',
  },
}

export default function StudentAanHuisDenHaagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
