import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student aan huis Weesp | Hulp met IT',
  description: 'ICT Student aan huis in Weesp voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
  keywords: 'computerhulp Weesp, IT student aan huis Weesp, laptop hulp Weesp, computer reparatie Weesp, WiFi problemen Weesp, smartphone hulp Muiden, tablet hulp Naarden, Hogeschool Utrecht IT student, UvA student',
  openGraph: {
    title: 'Student aan huis Weesp | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis in Weesp en omgeving door IT-studenten van Hogeschool Utrecht en UvA. Persoonlijke hulp met computer, laptop, tablet en smartphone.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-weesp'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Weesp | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis in Weesp door IT-studenten. Persoonlijke hulp met al uw apparaten.',
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
