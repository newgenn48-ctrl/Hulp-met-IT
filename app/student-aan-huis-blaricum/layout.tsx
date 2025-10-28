import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Blaricum | Hulp Met IT',
  description: 'Student aan huis in Blaricum voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: 'student aan huis Blaricum, computerhulp Blaricum, IT student Blaricum, computer reparatie Blaricum, laptop hulp Blaricum',
  openGraph: {
    title: 'Student aan Huis Blaricum - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Blaricum door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
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
