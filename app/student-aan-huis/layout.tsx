import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan Huis - Betaalbare IT Hulp | Hulp met IT',
  description: 'ICT-student aan huis voor computerhulp in heel Nederland. HBO-opgeleide studenten bij u thuis. Vanaf €14,50 per kwartier. 7 dagen per week.',
  keywords: [
    'ICT student aan huis',
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
    title: 'ICT Student Aan Huis - Betaalbare Computerhulp door IT-Studenten',
    description: 'Betaalbare computerhulp door ervaren IT-studenten. €14,50 per kwartier + €10 voorrijkosten. Heel Nederland!',
    url: 'https://hulpmetit.nl/student-aan-huis',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    images: ['/og-image.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Student Aan Huis - Betaalbare Computerhulp',
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