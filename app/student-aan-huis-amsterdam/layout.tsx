import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Aan Huis Amsterdam | IT-Student Amsterdam | Computerhulp Thuis','
  description: 'Student aan huis Amsterdam: betaalbare computerhulp door IT-studenten! €13,99 per kwartier + €10 voorrijkosten. Ook avonden/weekenden. Bel 06-42827860!','
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
    title: 'Student Aan Huis Amsterdam | IT-Student Computerhulp',
    description: 'Student aan huis Amsterdam: betaalbare computerhulp door IT-studenten! €13,99 per kwartier + €10 voorrijkosten. Bel 06-42827860!',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-amsterdam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Aan Huis Amsterdam | IT-Student Computerhulp',
    description: 'Student aan huis Amsterdam: betaalbare computerhulp! €13,99 per kwartier + €10 voorrijkosten. Bel 06-42827860!',
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