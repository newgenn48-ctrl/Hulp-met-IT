import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Blaricum | Hulp Met IT',
  description: 'Computerhulp aan huis in Blaricum voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis blaricum',
    'computer reparatie blaricum',
    'laptop reparatie blaricum',
    'ICT student blaricum',
    'pc hulp blaricum',
    'computer student blaricum',
    'blaricum computerhulp avond',
    'blaricum IT hulp weekend',
    'computerhulp blaricum spoed',
    'betaalbare IT hulp blaricum'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Blaricum | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Blaricum door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Blaricum | ICT Student aan Huis',
    description: 'Computerhulp aan huis Blaricum. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-blaricum',
  },
}

export default function ComputerhulpAanHuisBlaricumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
