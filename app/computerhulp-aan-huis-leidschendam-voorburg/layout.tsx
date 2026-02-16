import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Leidschendam-Voorburg | Hulp Met IT',
  description: 'Computerhulp aan huis in Leidschendam-Voorburg voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis leidschendam-voorburg',
    'computer reparatie leidschendam-voorburg',
    'laptop reparatie leidschendam-voorburg',
    'ICT student leidschendam-voorburg',
    'pc hulp leidschendam-voorburg',
    'computer student leidschendam-voorburg',
    'leidschendam-voorburg computerhulp avond',
    'leidschendam-voorburg IT hulp weekend',
    'computerhulp leidschendam-voorburg spoed',
    'betaalbare IT hulp leidschendam-voorburg'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Leidschendam-Voorburg | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Leidschendam-Voorburg door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Leidschendam-Voorburg | ICT Student aan Huis',
    description: 'Computerhulp aan huis Leidschendam-Voorburg. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-leidschendam-voorburg',
  },
}

export default function ComputerhulpAanHuisLeidschendamVoorburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
