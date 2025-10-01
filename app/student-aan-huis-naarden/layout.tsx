import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Naarden | Betaalbare computerhulp thuis',
  description: 'Computerhulp aan huis in Naarden door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven. Snel, betaalbaar en betrouwbaar.',
  keywords: 'student aan huis Naarden, computerhulp Naarden, IT student Naarden, computer reparatie Naarden, laptop hulp Naarden',
  openGraph: {
    title: 'Student aan Huis Naarden - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Naarden door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-naarden',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan Huis Naarden - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Naarden door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-naarden'
  }
};

export default function NaardenStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
