import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computerhulp Huizen | IT Student aan Huis in het Gooi | Hulp met IT',
  description: 'Computerhulp aan huis in Huizen door ervaren IT-studenten van Hogeschool Utrecht. Hulp met laptop, tablet, smartphone en WiFi. Vanaf €53,50. Ook in Bussum, Naarden en Blaricum.',
  keywords: 'computerhulp Huizen, IT student aan huis Huizen, laptop hulp Huizen, computer reparatie Gooi, WiFi problemen Huizen, smartphone hulp Bussum, tablet hulp Naarden, Hogeschool Utrecht IT student',
  openGraph: {
    title: 'Computerhulp Huizen | IT Student aan Huis in het Gooi',
    description: 'Betaalbare computerhulp aan huis in Huizen en omgeving door IT-studenten van Hogeschool Utrecht. Persoonlijke hulp met computer, laptop, tablet en smartphone.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-huizen'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp Huizen | IT Student aan Huis in het Gooi',
    description: 'Betaalbare computerhulp aan huis in Huizen door IT-studenten. Persoonlijke hulp met al uw apparaten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/student-aan-huis-huizen'
  }
};

export default function HuizenStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
