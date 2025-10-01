import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Bussum | Betaalbare computerhulp thuis',
  description: 'Computerhulp aan huis in Bussum door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven. Snel, betaalbaar en betrouwbaar.',
  keywords: 'student aan huis Bussum, computerhulp Bussum, IT student Bussum, computer reparatie Bussum, laptop hulp Bussum',
  openGraph: {
    title: 'Student aan Huis Bussum - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Bussum door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-bussum',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan Huis Bussum - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Bussum door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-bussum'
  }
};

export default function BussumStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
