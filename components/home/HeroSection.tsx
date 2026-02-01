'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Clock, CheckCircle, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100/50 pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">

          {/* Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Urgentie badge */}
            <div className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 md:mb-6">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-700" />
              <span className="text-xs sm:text-sm font-medium text-primary-700">Vandaag nog geholpen</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight mb-3 sm:mb-4">
              Computerproblemen?
              <span className="text-primary-600 block">Wij lossen het op.</span>
            </h1>

            {/* Subtitel */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-600 leading-relaxed mb-4 sm:mb-6 max-w-lg mx-auto md:mx-0">
              Rustige, vriendelijke hulp aan huis voor mensen die vastlopen met hun computer, wifi, printer of telefoon.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-3 sm:gap-x-4 gap-y-2 mb-5 sm:mb-6 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 text-secondary-700">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 flex-shrink-0" />
                <span>Binnen 24 uur</span>
              </div>
              <div className="flex items-center gap-1.5 text-secondary-700">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 flex-shrink-0" />
                <span>Eerlijke prijzen</span>
              </div>
              <div className="flex items-center gap-1.5 text-secondary-700">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 flex-shrink-0" />
                <span>Persoonlijk</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg font-bold text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors shadow-lg shadow-primary-500/30"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Bel direct voor hulp
              </a>
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold text-primary-600 border-2 border-primary-300 hover:bg-primary-50 rounded-xl transition-colors"
              >
                Afspraak inplannen
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-secondary-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500 fill-primary-500" />
                ))}
              </div>
              <span className="font-medium">4.8/5</span>
              <span className="text-secondary-400">•</span>
              <span>2000+ klanten</span>
            </div>
          </div>

          {/* Foto */}
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl sm:rounded-2xl lg:rounded-3xl transform rotate-1 sm:rotate-2 lg:rotate-3" />
            <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl border-2 sm:border-2 lg:border-4 border-white">
              <Image
                src="/hulp-met-it.webp"
                alt="Computerhulp aan huis - wij helpen u met al uw digitale problemen"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
