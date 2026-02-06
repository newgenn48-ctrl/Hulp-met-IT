'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-white pt-24 sm:pt-28 md:pt-32 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-end">

          <div className="lg:col-span-6 xl:col-span-5 pt-8 pb-12 lg:pb-20">
            <p className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-4">
              Computerhulp aan huis
            </p>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-secondary-900 leading-[1.1] mb-6">
              Wij komen naar{' '}
              <span className="text-primary-600">u toe</span>
            </h1>

            <p className="text-lg text-secondary-600 leading-relaxed mb-8 max-w-lg">
              Vastgelopen met uw computer, wifi of printer? Onze medewerker komt bij u thuis langs en lost het rustig samen met u op. Geen technisch jargon, gewoon duidelijke hulp.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                Afspraak maken
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-secondary-700 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Bel ons
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-secondary-500">
              <span>10+ jaar ervaring</span>
              <span className="w-1 h-1 rounded-full bg-secondary-300" />
              <span>Veilig en verzekerd</span>
              <span className="w-1 h-1 rounded-full bg-secondary-300" />
              <span>Betaling achteraf</span>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[480px] xl:h-[540px] rounded-t-2xl lg:rounded-tl-2xl overflow-hidden">
              <Image
                src="/student-aan-huis.webp"
                alt="Computerhulp aan huis door onze medewerker"
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
