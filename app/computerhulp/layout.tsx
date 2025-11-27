import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis | Hulp Met IT',
  description: 'Computerhulp aan huis. Wij lossen uw probleem snel op. €14,50 per kwartier + €10 voorrijkosten. Binnen 24-48u bij u thuis.',
  keywords: [
    'computerhulp',
    'computerhulp aan huis',
    'computer hulp',
    'pc hulp',
    'laptop hulp',
    'computer probleem oplossen',
  ],
  openGraph: {
    title: 'Computerhulp aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis. Wij lossen uw probleem snel op. €14,50 per kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://hulpmetit.nl/computerhulp',
  },
}

export default function ComputerhulpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
