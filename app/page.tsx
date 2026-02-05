import { HeroSection } from '@/components/home/HeroSection'
import { ProblemsSection } from '@/components/home/ProblemsSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { PricingSection } from '@/components/home/PricingSection'
import { TrustSignals } from '@/components/home/TrustSignals'
import { RegionsPreview } from '@/components/home/RegionsPreview'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis | Hulp met IT - Direct geholpen',
  description: 'Computerproblemen? Wij komen bij u thuis en lossen het op. Rustige, vriendelijke hulp zonder technische praat. Binnen 24 uur geholpen. Bel nu!',
  keywords: [
    'computerhulp aan huis',
    'computer hulp',
    'laptop hulp thuis',
    'wifi problemen oplossen',
    'printer installeren',
    'computer reparatie thuis',
    'IT hulp aan huis',
  ],
  openGraph: {
    title: 'Computerhulp aan huis | Hulp met IT',
    description: 'Computerproblemen? Wij komen bij u thuis en lossen het op. Rustige, vriendelijke hulp. Binnen 24 uur geholpen.',
    images: ['/og-image.webp'],
  },
}

export default function HomePage() {
  return (
    <main>
      {/* Hero - Urgentie & duidelijke actie */}
      <HeroSection />

      {/* Herkenbare problemen - Emotionele connectie */}
      <ProblemsSection />

      {/* Hoe het werkt - Simpele stappen */}
      <HowItWorks />

      {/* Prijzen - Eenvoudig en duidelijk */}
      <PricingSection />

      {/* Waarom wij - Vertrouwen */}
      <TrustSignals />

      {/* Reviews - Social proof */}
      {/* Regio's - Lokaal */}
      <RegionsPreview />
    </main>
  )
}
