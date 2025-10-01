import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Laren | Betaalbare computerhulp thuis',
  description: 'Computerhulp aan huis in Laren door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven. Snel, betaalbaar en betrouwbaar.',
  keywords: 'student aan huis Laren, computerhulp Laren, IT student Laren, computer reparatie Laren, laptop hulp Laren',
  openGraph: {
    title: 'Student aan Huis Laren - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Laren door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-laren',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan Huis Laren - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Laren door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-laren'
  }
};

export default function LarenStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
