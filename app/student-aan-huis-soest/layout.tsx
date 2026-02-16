import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Soest | Hulp met IT',
  description: 'ICT Student aan huis in Soest voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'student aan huis soest',
    'computerhulp soest',
    'IT student soest',
    'computer reparatie soest',
    'laptop hulp soest',
    'ict hulp soest',
    'computerhulp soest centrum',
    'computerhulp soestdijk',
    'computerhulp soesterberg',
    'thuishulp computer soest',
    'hogeschool utrecht student soest',
    'betaalbare computerhulp soest',
    'computer hulp aan huis soest'
  ],
  openGraph: {
    title: 'Student aan huis Soest | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis in Soest door IT-studenten van Hogeschool Utrecht. Hulp in Soest Centrum, Soestdijk, Soesterberg en omgeving.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-soest'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Soest | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis in Soest door IT-studenten van Hogeschool Utrecht. Hulp in Soest Centrum, Soestdijk, Soesterberg en omgeving.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-soest'
  },
};

export default function SoestStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
