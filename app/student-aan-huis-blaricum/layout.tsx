import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Blaricum | Hulp met IT',
  description: 'ICT Student aan huis in Blaricum voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
  keywords: 'computerhulp Blaricum, IT student aan huis Blaricum, laptop hulp Blaricum, computer reparatie Gooi, WiFi problemen Blaricum, smartphone hulp Laren, tablet hulp Huizen, Hogeschool Utrecht IT student',
  openGraph: {
    title: 'Student aan huis Blaricum | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis in Blaricum en omgeving door IT-studenten van Hogeschool Utrecht. Persoonlijke hulp met computer, laptop, tablet en smartphone.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-blaricum'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Blaricum | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis in Blaricum door IT-studenten. Persoonlijke hulp met al uw apparaten.',
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
