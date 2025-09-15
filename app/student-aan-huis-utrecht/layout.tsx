import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Utrecht | Betaalbare Computerhulp door IT-Studenten ✓',
  description: 'Betaalbare computerhulp in Utrecht door ervaren IT-studenten! ✓ Vanaf €13,99 per kwartier ✓ Geen reiskosten ✓ Ook avonden/weekenden ✓ Snel ter plaatse ✓ Bel nu!',
  keywords: [
    'student aan huis utrecht',
    'student computerhulp utrecht',
    'betaalbare computerhulp utrecht',
    'IT student utrecht',
    'computer reparatie utrecht student',
    'betaalbare computer hulp utrecht',
    'studenten computer service utrecht',
    'utrecht student IT hulp',
    'computer student utrecht',
    'laptop reparatie utrecht student'
  ],
  openGraph: {
    title: 'Student Aan Huis Utrecht - Betaalbare Computerhulp door IT-Studenten',
    description: 'Betaalbare computerhulp in Utrecht door IT-studenten vanaf €13,99 per kwartier!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-utrecht',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Utrecht - Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp in Utrecht door IT-studenten!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-utrecht',
  },
}

export default function StudentAanHuisUtrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}