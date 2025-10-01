import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Aan Huis | IT-Specialisten | Hulp met IT | Nederland',
  description: 'Computerhulp aan huis door ervaren IT-specialisten! ✓ €14,50 per kwartier + €10 voorrijkosten ✓ Heel Nederland ✓ Binnen 24-48u ✓ Alle computerproblemen ✓ Bel ons',
  keywords: [
    'computerhulp aan huis',
    'computer reparatie aan huis',
    'laptop reparatie thuis',
    'IT specialist aan huis',
    'computerhulp thuis',
    'computer service aan huis',
    'pc hulp thuis',
    'computerhulp specialisten',
    'computer hulp aan huis',
    'IT ondersteuning thuis'
  ],
  openGraph: {
    title: 'Computerhulp Aan Huis Nederland | IT-Specialisten',
    description: 'Computerhulp aan huis door ervaren IT-specialisten. €14,50 per kwartier + €10 voorrijkosten. Heel Nederland!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp Aan Huis - Betaalbare Reparatie',
    description: 'Computerhulp aan huis door IT-specialisten vanaf €14,50 per kwartier!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis',
  },
}

export default function SpecialistAanHuisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}