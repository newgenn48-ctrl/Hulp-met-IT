import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Baarn | Betaalbare computerhulp thuis',
  description: 'Betaalbare computerhulp aan huis in Baarn door studenten. Deskundige IT-hulp voor particulieren en bedrijven. Snel en betrouwbaar.',
  keywords: [
    'student aan huis baarn',
    'student computerhulp baarn',
    'betaalbare computerhulp baarn',
    'IT student baarn',
    'computer reparatie baarn student',
    'betaalbare computer hulp baarn',
    'studenten computer service baarn',
    'baarn student IT hulp',
    'baarn computerhulp avond',
    'baarn IT hulp weekend'
  ],
  openGraph: {
    title: 'Student aan Huis Baarn - Computerhulp door Studenten',
    description: 'Betaalbare computerhulp aan huis in Baarn door studenten. Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-baarn',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan Huis Baarn - Computerhulp door Studenten',
    description: 'Betaalbare computerhulp aan huis in Baarn door studenten. Deskundige IT-hulp voor particulieren en bedrijven.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-baarn'
  },
};

export default function BaarnStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
