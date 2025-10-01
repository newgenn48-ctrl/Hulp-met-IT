import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis | Betaalbare Computerhulp door IT-Studenten ✓',
  description: 'Betaalbare computerhulp door ervaren IT-studenten! ✓ €14,50 per kwartier + €10 voorrijkosten ✓ Studententarieven ✓ Heel Nederland ✓ Alle computerproblemen ✓ Bel ons',
  keywords: [
    'student aan huis',
    'student computerhulp',
    'betaalbare computerhulp',
    'IT student aan huis',
    'betaalbare computer reparatie',
    'student computer service',
    'studenten tarieven',
    'computerhulp studenten',
    'computer student hulp',
    'IT hulp student'
  ],
  openGraph: {
    title: 'Student Aan Huis - Betaalbare Computerhulp door IT-Studenten',
    description: 'Betaalbare computerhulp door ervaren IT-studenten. €14,50 per kwartier + €10 voorrijkosten. Heel Nederland!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis - Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp door IT-studenten vanaf €14,50 per kwartier!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis',
  },
}

export default function StudentAanHuisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}