import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computer Reparatie aan Huis - Snel & Betaalbaar | Hulp met IT',
  description: 'Computer reparatie aan huis door HBO-opgeleide ICT-studenten. PC kapot, traag of vastgelopen? Wij komen langs en repareren het. Vanaf €14,50 per kwartier.',
  keywords: [
    'computer reparatie',
    'computer reparatie aan huis',
    'computer laten repareren',
    'pc reparatie',
    'pc reparatie aan huis',
    'computer kapot',
    'computer reparateur',
    'desktop reparatie',
    'pc laten maken',
    'computer herstellen',
    'pc problemen oplossen',
    'computer reparatie service',
    'pc reparatie thuis'
  ],
  openGraph: {
    title: 'Computer Reparatie aan Huis | Hulp met IT',
    description: 'Computer reparatie aan huis door HBO-opgeleide ICT-studenten. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
    url: 'https://hulpmetit.nl/computer-reparatie',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    images: ['/og-image.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computer Reparatie aan Huis | Hulp met IT',
    description: 'Computer reparatie aan huis door HBO-opgeleide ICT-studenten. Vanaf €14,50 per kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computer-reparatie',
  },
}

export default function ComputerReparatieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
