import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Amsterdam | Betaalbare Computerhulp door IT-Studenten ✓',
  description: 'Betaalbare computerhulp in Amsterdam door ervaren IT-studenten! ✓ Vanaf €13,99 per kwartier ✓ Geen reiskosten ✓ Ook avonden/weekenden ✓ Snel ter plaatse ✓ Bel nu!',
  keywords: [
    'student aan huis amsterdam',
    'student computerhulp amsterdam',
    'betaalbare computerhulp amsterdam',
    'IT student amsterdam',
    'computer reparatie amsterdam student',
    'betaalbare computer hulp amsterdam',
    'studenten computer service amsterdam',
    'amsterdam student IT hulp',
    'computer student amsterdam',
    'laptop reparatie amsterdam student'
  ],
  openGraph: {
    title: 'Student Aan Huis Amsterdam - Betaalbare Computerhulp door IT-Studenten',
    description: 'Betaalbare computerhulp in Amsterdam door IT-studenten vanaf €13,99 per kwartier!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-amsterdam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Amsterdam - Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp in Amsterdam door IT-studenten!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-amsterdam',
  },
}

export default function StudentAanHuisAmsterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}