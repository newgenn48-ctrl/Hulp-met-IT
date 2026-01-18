import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computerhulp Weesp | IT Student aan Huis | Hulp met IT',
  description: 'Computerhulp aan huis in Weesp door ervaren IT-studenten van Hogeschool Utrecht en UvA. Hulp met laptop, tablet, smartphone en WiFi. Vanaf €53,50. Ook in Muiden, Naarden en Diemen.',
  keywords: 'computerhulp Weesp, IT student aan huis Weesp, laptop hulp Weesp, computer reparatie Weesp, WiFi problemen Weesp, smartphone hulp Muiden, tablet hulp Naarden, Hogeschool Utrecht IT student, UvA student',
  openGraph: {
    title: 'Computerhulp Weesp | IT Student aan Huis',
    description: 'Betaalbare computerhulp aan huis in Weesp en omgeving door IT-studenten van Hogeschool Utrecht en UvA. Persoonlijke hulp met computer, laptop, tablet en smartphone.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-weesp'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp Weesp | IT Student aan Huis',
    description: 'Betaalbare computerhulp aan huis in Weesp door IT-studenten. Persoonlijke hulp met al uw apparaten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-weesp'
  }
};

export default function WeespStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
