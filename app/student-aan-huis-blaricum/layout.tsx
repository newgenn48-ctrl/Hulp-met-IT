import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Blaricum | Betaalbare computerhulp thuis',
  description: 'Computerhulp aan huis in Blaricum door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven. Snel, betaalbaar en betrouwbaar.',
  keywords: 'student aan huis Blaricum, computerhulp Blaricum, IT student Blaricum, computer reparatie Blaricum, laptop hulp Blaricum',
  openGraph: {
    title: 'Student aan Huis Blaricum - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Blaricum door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-blaricum',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan Huis Blaricum - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Blaricum door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-blaricum'
  }
};

export default function BlaricumStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
