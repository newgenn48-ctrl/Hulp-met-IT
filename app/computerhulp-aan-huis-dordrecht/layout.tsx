import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Dordrecht | Hulp Met IT',
  description: 'Computerhulp aan huis in Dordrecht voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis dordrecht',
    'computer reparatie dordrecht',
    'laptop reparatie dordrecht',
    'ICT student dordrecht',
    'pc hulp dordrecht',
    'computer student dordrecht',
    'dordrecht computerhulp avond',
    'dordrecht IT hulp weekend',
    'computerhulp dordrecht spoed',
    'betaalbare IT hulp dordrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Dordrecht | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Dordrecht door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Dordrecht | ICT Student aan Huis',
    description: 'Computerhulp aan huis Dordrecht. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-dordrecht',
  },
}

export default function ComputerhulpAanHuisDordrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
