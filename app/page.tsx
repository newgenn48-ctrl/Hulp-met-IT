import { HeroSection } from '@/components/home/HeroSection'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { Windows11UrgentSection } from '@/components/home/Windows11UrgentSection'
import { PricingSection } from '@/components/home/PricingSection'
import { RegionsPreview } from '@/components/home/RegionsPreview'
import { AboutPreview } from '@/components/home/AboutPreview'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { TrustSignals } from '@/components/home/TrustSignals'
import { BackgroundScene } from '@/components/three/BackgroundScene'
import { NoSSR } from '@/components/NoSSR'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hulp met IT - Vriendelijke Computerhulp aan Huis | Hulp binnen 24-48u',
  description: 'Computer problemen? Onze vriendelijke specialisten komen binnen 24-48u aan huis voor persoonlijke computerhulp! ✓ Transparante tarieven ✓ Rustige uitleg ✓ Alle apparaten ✓ Direct afspraak maken',
  keywords: [
    'computerhulp aan huis',
    'computer hulp Nederland',
    'laptop hulp',
    'computer problemen oplossen',
    'vriendelijke hulp aan huis',
    'computer ondersteuning',
    'persoonlijke computerhulp',
    'computer uitleg'
  ],
  openGraph: {
    title: 'Hulp met IT - Vriendelijke Computerhulp aan Huis',
    description: 'Computer problemen? Onze vriendelijke specialisten komen aan huis voor persoonlijke computerhulp en uitleg!',
    images: ['/og-image.webp'],
  },
}

export default function HomePage() {
  return (
    <>
      <NoSSR fallback={<div className="fixed inset-0 pointer-events-none z-0" />}>
        <BackgroundScene />
      </NoSSR>
      <div className="relative z-10">
        <HeroSection />
        <ServicesPreview />
        <Windows11UrgentSection />
        <PricingSection />
        <NoSSR>
          <TestimonialsSection />
        </NoSSR>
        <TrustSignals />
        <RegionsPreview />
        <AboutPreview />
      </div>
    </>
  )
}