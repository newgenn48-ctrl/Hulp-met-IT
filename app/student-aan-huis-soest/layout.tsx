import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Soest | Hulp Met IT',
  description: 'Student aan huis in Soest voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: 'student aan huis Soest, computerhulp Soest, IT student Soest, computer reparatie Soest, laptop hulp Soest',
  openGraph: {
    title: 'Student aan Huis Soest - Computerhulp door Studenten',
    description: 'Betaalbare computerhulp aan huis in Soest door studenten. Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
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
