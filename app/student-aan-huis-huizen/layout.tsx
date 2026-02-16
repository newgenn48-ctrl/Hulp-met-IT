import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Huizen | Hulp met IT',
  description: 'ICT Student aan huis in Huizen voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
  keywords: 'computerhulp Huizen, IT student aan huis Huizen, laptop hulp Huizen, computer reparatie Gooi, WiFi problemen Huizen, smartphone hulp Bussum, tablet hulp Naarden, Hogeschool Utrecht IT student',
  openGraph: {
    title: 'Student aan huis Huizen | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis in Huizen en omgeving door IT-studenten van Hogeschool Utrecht. Persoonlijke hulp met computer, laptop, tablet en smartphone.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-huizen'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Huizen | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis in Huizen door IT-studenten. Persoonlijke hulp met al uw apparaten.',
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
