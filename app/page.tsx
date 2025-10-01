import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/home/HeroSection'
import { TrustSignals } from '@/components/home/TrustSignals'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { Metadata } from 'next'

// Lazy load below-the-fold components for better initial load
const ServicesGrid = dynamic(() => import('@/components/services/ServicesGrid').then(mod => ({ default: mod.ServicesGrid })), { ssr: true })
const PricingSection = dynamic(() => import('@/components/home/PricingSection').then(mod => ({ default: mod.PricingSection })), { ssr: true })
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })), { ssr: true })
const Windows11UrgentSection = dynamic(() => import('@/components/home/Windows11UrgentSection').then(mod => ({ default: mod.Windows11UrgentSection })), { ssr: true })
const RegionsPreview = dynamic(() => import('@/components/home/RegionsPreview').then(mod => ({ default: mod.RegionsPreview })), { ssr: true })
const AboutPreview = dynamic(() => import('@/components/home/AboutPreview').then(mod => ({ default: mod.AboutPreview })), { ssr: true })
const LazyBackgroundScene = dynamic(() => import('@/components/three/LazyBackgroundScene').then(mod => ({ default: mod.LazyBackgroundScene })), { ssr: false })

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