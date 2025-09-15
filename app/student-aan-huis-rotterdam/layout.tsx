import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Rotterdam | Betaalbare Computerhulp door IT-Studenten ✓',
  description: 'Betaalbare computerhulp in Rotterdam door ervaren IT-studenten! ✓ Vanaf €13,99 per kwartier ✓ Geen reiskosten ✓ Ook avonden/weekenden ✓ Snel ter plaatse ✓ Bel nu!',
  keywords: [
    'student aan huis rotterdam',
    'student computerhulp rotterdam',
    'betaalbare computerhulp rotterdam',
    'IT student rotterdam',
    'computer reparatie rotterdam student',
    'betaalbare computer hulp rotterdam',
    'studenten computer service rotterdam',
    'rotterdam student IT hulp',
    'computer student rotterdam',
    'laptop reparatie rotterdam student'
  ],
  openGraph: {
    title: 'Student Aan Huis Rotterdam - Betaalbare Computerhulp door IT-Studenten',
    description: 'Betaalbare computerhulp in Rotterdam door IT-studenten vanaf €13,99 per kwartier!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-rotterdam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Rotterdam - Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp in Rotterdam door IT-studenten!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-rotterdam',
  },
}

export default function StudentAanHuisRotterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}