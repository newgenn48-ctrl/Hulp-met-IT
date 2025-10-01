import { HeroSection } from '@/components/home/HeroSection'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { Windows11UrgentSection } from '@/components/home/Windows11UrgentSection'
import { PricingSection } from '@/components/home/PricingSection'
import { RegionsPreview } from '@/components/home/RegionsPreview'
import { AboutPreview } from '@/components/home/AboutPreview'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { TrustSignals } from '@/components/home/TrustSignals'
import { LazyBackgroundScene } from '@/components/three/LazyBackgroundScene'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hulp Met IT | Computerhulp aan Huis',
  description: 'Vriendelijke IT-specialist komt naar u toe! ✓ €14,50/kwartier + €10 voorrijkosten ✓ Binnen 24u ✓ 10+ jaar ervaring ✓ Heel Nederland ✓ Bel ons',
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
    title: 'Computerhulp Aan Huis Nederland | Vriendelijke IT-Specialisten',
    description: 'Vriendelijke IT-specialisten komen aan huis! €14,50 per kwartier + €10 voorrijkosten. Bel ons',
    images: ['/og-image.webp'],
  },
}

export default function HomePage() {
  return (
    <>
      {/* SEO Structured Data */}
      <LocalBusinessSchema />

      {/* Critical content loads first - no 3D blocking */}
      <div className="relative z-10">
        <HeroSection />
        <TrustSignals />        {/* Build trust immediately after hero */}
        <ServicesGrid maxItems={6} />
        <PricingSection />      {/* Show value early in funnel */}
        <TestimonialsSection /> {/* Social proof after pricing */}
        <Windows11UrgentSection /> {/* Urgency after trust is built */}
        <RegionsPreview />
        <AboutPreview />
      </div>

      {/* 3D background loads intelligently - only when needed */}
      <LazyBackgroundScene />
    </>
  )
}