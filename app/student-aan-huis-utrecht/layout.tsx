import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Utrecht | IT-Student Utrecht | Computerhulp Thuis',
  description: 'Student aan huis Utrecht: betaalbare computerhulp door IT-studenten! €13,99 per kwartier + €10 voorrijkosten. Ook avonden/weekenden. Bel 06-42827860!',
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
    title: 'Student Aan Huis Utrecht - €13,99 per kwartier + €10 voorrijkosten',
    description: 'Student aan huis Utrecht: betaalbare computerhulp door IT-studenten! €13,99 per kwartier + €10 voorrijkosten. Bel 06-42827860!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-utrecht',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Utrecht - €13,99 per kwartier + €10 voorrijkosten',
    description: 'Student aan huis Utrecht: betaalbare computerhulp! €13,99 per kwartier + €10 voorrijkosten. Bel 06-42827860!',
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