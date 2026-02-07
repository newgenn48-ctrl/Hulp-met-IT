import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp in heel Nederland | Onze Regio\'s | Hulp met IT',
  description: 'Hulp met IT is actief in 30+ Nederlandse steden. Vind computerhulp aan huis in uw stad. ✓ Amsterdam ✓ Rotterdam ✓ Den Haag ✓ Utrecht ✓ Eindhoven en meer! €14,50 per kwartier.',
  keywords: [
    'computerhulp Nederland',
    'IT hulp alle steden',
    'landelijke IT service',
    'computer reparatie Nederland',
    'IT hulp aan huis overal',
    'technische ondersteuning Nederland',
    'lokale IT specialist',
    'computerhulp aan huis',
    'IT service landelijk'
  ],
  openGraph: {
    title: 'Computerhulp in heel Nederland | Hulp met IT',
    description: 'Ontdek onze IT-service in uw stad. Lokale experts, snelle service, vaste tarieven. 30+ steden in Nederland.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/regios'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp in heel Nederland | Hulp met IT',
    description: 'IT-service in 30+ Nederlandse steden. Lokale experts, snelle service.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/regios',
  },
}

export default function RegiosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
