import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Huizen | Hulp Met IT',
  description: 'Student aan huis in Huizen voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 (€10 voorrijkosten + 3 x €14,50). Snel en vakkundig!',
  keywords: 'student aan huis Huizen, computerhulp Huizen, IT student Huizen, computer reparatie Huizen, laptop hulp Huizen',
  openGraph: {
    title: 'Student aan Huis Huizen - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Huizen door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
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
