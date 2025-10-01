import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Soest | Betaalbare computerhulp thuis',
  description: 'Betaalbare computerhulp aan huis in Soest door studenten. Deskundige IT-hulp voor particulieren en bedrijven. Snel en betrouwbaar.',
  keywords: 'student aan huis Soest, computerhulp Soest, IT student Soest, computer reparatie Soest, laptop hulp Soest',
  openGraph: {
    title: 'Student aan Huis Soest - Computerhulp door Studenten',
    description: 'Betaalbare computerhulp aan huis in Soest door studenten. Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-soest',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan Huis Soest - Computerhulp door Studenten',
    description: 'Betaalbare computerhulp aan huis in Soest door studenten. Deskundige IT-hulp voor particulieren en bedrijven.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-soest'
  }
};

export default function SoestStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
