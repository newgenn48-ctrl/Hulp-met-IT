import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Weesp | Hulp Met IT',
  description: 'Student aan huis in Weesp voor computerhulp. Betaalbare IT-studenten komen naar je toe. Vanaf €53,50 voor 3 kwartier. Snel en vakkundig!',
  keywords: 'student aan huis Weesp, computerhulp Weesp, IT student Weesp, computer reparatie Weesp, laptop hulp Weesp',
  openGraph: {
    title: 'Student aan Huis Weesp - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Weesp door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
    images: ['/og-image.webp'],
    url: '/student-aan-huis-weesp',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan Huis Weesp - Computerhulp door Studenten',
    description: 'Computerhulp aan huis in Weesp door studenten. Betaalbare Deskundige IT-hulp voor particulieren en bedrijven.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-weesp'
  }
};

export default function WeespStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
