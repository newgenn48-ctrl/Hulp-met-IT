import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computer Installeren aan Huis - Nieuwe PC? Wij Helpen | Hulp met IT',
  description: 'Nieuwe computer of laptop? Wij komen aan huis installeren en instellen. Windows, programma\'s, e-mail, printer en meer. Vanaf €14,50 per kwartier.',
  keywords: [
    'computer installeren',
    'computer installeren aan huis',
    'nieuwe computer instellen',
    'laptop installeren',
    'pc installatie aan huis',
    'computer opzetten',
    'nieuwe laptop instellen',
    'windows installeren',
    'computer installatie service',
    'pc instellen',
    'nieuwe computer hulp',
    'data overzetten nieuwe computer',
    'programma installeren'
  ],
  openGraph: {
    title: 'Computer Installeren aan Huis | Hulp met IT',
    description: 'Nieuwe computer? Wij installeren en stellen alles in bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
    url: 'https://hulpmetit.nl/computer-installeren-aan-huis',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    images: ['/og-image.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computer Installeren aan Huis | Hulp met IT',
    description: 'Nieuwe computer? Wij installeren en stellen alles in bij u thuis. Vanaf €14,50 per kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computer-installeren-aan-huis',
  },
}

export default function ComputerInstallerenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
