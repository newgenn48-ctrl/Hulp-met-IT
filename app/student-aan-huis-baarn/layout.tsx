import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Baarn | Hulp Met IT',
  description: 'Student aan huis in Baarn voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
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
