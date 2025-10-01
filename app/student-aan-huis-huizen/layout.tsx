import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Huizen | Betaalbare computerhulp thuis',
  description: 'Computerhulp aan huis in Huizen door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven. Snel, betaalbaar en betrouwbaar.',
  keywords: 'student aan huis Huizen, computerhulp Huizen, IT student Huizen, computer reparatie Huizen, laptop hulp Huizen',
  openGraph: {
    title: 'Student aan Huis Huizen - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Huizen door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-huizen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan Huis Huizen - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Huizen door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-huizen'
  }
};

export default function HuizenStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
