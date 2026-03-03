'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Clock, Shield, CreditCard } from 'lucide-react'

interface CityHeroSectionProps {
  cityName: string
}

export function CityHeroSection({ cityName }: CityHeroSectionProps) {
  return (
    <section className="relative bg-white pt-24 sm:pt-28 md:pt-32 pb-0 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary-50/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">

          <div className="lg:col-span-6 xl:col-span-5 pt-8 pb-12 lg:pb-20">
            <p className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-4">
              Computerhulp aan huis in {cityName}
            </p>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-secondary-900 leading-[1.1] mb-6">
              Computerhulp aan huis in{' '}
              <span className="text-primary-600">{cityName}</span>
            </h1>

            <p className="text-lg text-secondary-600 leading-relaxed mb-8 max-w-lg">
              Loopt er iets niet lekker met uw computer, internet of printer? Onze student in {cityName} komt bij u thuis en helpt u rustig verder.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-accent"
              >
                Afspraak maken
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+31858005006"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                Bel 085-8005006
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 border border-primary-200 rounded-full px-3 py-1 font-medium">
                <Clock className="w-3.5 h-3.5" />
                Binnen 24 uur aan huis
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 border border-primary-200 rounded-full px-3 py-1 font-medium">
                <Shield className="w-3.5 h-3.5" />
                &euro;14,50 per kwartier
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 border border-primary-200 rounded-full px-3 py-1 font-medium">
                <CreditCard className="w-3.5 h-3.5" />
                Betaling achteraf
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[480px] xl:h-[540px] rounded-t-2xl lg:rounded-tl-2xl overflow-hidden shadow-card">
              <Image
                src="/hulp-met-it.webp"
                alt={`ICT-student helpt klant thuis in ${cityName}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-secondary-200" />
    </section>
  )
}
