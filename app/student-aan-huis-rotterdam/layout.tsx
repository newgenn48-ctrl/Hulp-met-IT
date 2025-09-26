import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Rotterdam | IT-Student Rotterdam | Computerhulp Thuis',
  description: 'Student aan huis Rotterdam: betaalbare computerhulp door IT-studenten! €13,99 per kwartier + €10 voorrijkosten. Ook avonden/weekenden. Bel 06-42827860!',
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
    title: 'Student Aan Huis Rotterdam - €13,99 per kwartier + €10 voorrijkosten',
    description: 'Student aan huis Rotterdam: betaalbare computerhulp door IT-studenten! €13,99 per kwartier + €10 voorrijkosten. Bel 06-42827860!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-rotterdam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Rotterdam - €13,99 per kwartier + €10 voorrijkosten',
    description: 'Student aan huis Rotterdam: betaalbare computerhulp! €13,99 per kwartier + €10 voorrijkosten. Bel 06-42827860!',
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