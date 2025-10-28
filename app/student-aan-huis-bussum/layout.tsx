import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Bussum | Hulp Met IT',
  description: 'Student aan huis in Bussum voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: 'student aan huis Bussum, computerhulp Bussum, IT student Bussum, computer reparatie Bussum, laptop hulp Bussum',
  openGraph: {
    title: 'Student aan Huis Bussum - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Bussum door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
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
