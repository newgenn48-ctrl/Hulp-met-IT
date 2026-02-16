import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Baarn | Hulp met IT',
  description: 'ICT Student aan huis in Baarn voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'student aan huis baarn',
    'computerhulp baarn',
    'IT student baarn',
    'computer reparatie baarn',
    'laptop hulp baarn',
    'ict hulp baarn',
    'computerhulp baarn centrum',
    'computerhulp lage vuursche',
    'computerhulp soestdijk',
    'thuishulp computer baarn',
    'hogeschool utrecht student baarn',
    'betaalbare computerhulp baarn',
    'computer hulp aan huis baarn'
  ],
  openGraph: {
    title: 'Student aan huis Baarn | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis in Baarn door IT-studenten van Hogeschool Utrecht. Hulp in Baarn Centrum, Lage Vuursche, Soestdijk en omgeving.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-baarn'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Baarn | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis in Baarn door IT-studenten van Hogeschool Utrecht. Hulp in Baarn Centrum, Lage Vuursche, Soestdijk en omgeving.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-baarn'
  },
};

export default function BaarnStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
