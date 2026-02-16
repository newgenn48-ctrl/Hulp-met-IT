'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Banknote, GraduationCap, CalendarDays } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/student-aan-huis.webp"
        alt="ICT-student helpt klant met computer aan huis"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/75 to-secondary-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-secondary-900/30" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-primary-300 font-semibold tracking-wide uppercase text-sm mb-4">
              ICT Student aan huis
            </p>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Computerhulp{' '}
              <span className="text-accent-400">aan huis</span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
              Een HBO-opgeleide student komt bij u aan de deur, lost het probleem op en legt alles uit in gewone taal. Zo kunt u er weer tegenaan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-accent"
              >
                Afspraak maken
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                Bel ons<span className="hidden sm:inline"> - 06-42827860</span>
              </a>
            </div>

            <p className="text-accent-400 text-sm font-medium mb-8">
              Meestal binnen 24 uur geholpen
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/15 rounded-full px-3 py-1 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-primary-300" />
                HBO-opgeleide studenten
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/15 rounded-full px-3 py-1 font-medium">
                <Banknote className="w-3.5 h-3.5 text-primary-300" />
                Betaalbare tarieven
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/15 rounded-full px-3 py-1 font-medium">
                <CalendarDays className="w-3.5 h-3.5 text-primary-300" />
                7 dagen per week
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
