'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Clock, CheckCircle, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100/50 pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Linker kolom - Content */}
          <div>
            {/* Urgentie badge */}
            <div className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-primary-700" />
              <span className="text-sm font-medium text-primary-700">Vandaag nog geholpen</span>
            </div>

            {/* Headline - probleem-gericht */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight mb-6">
              Computerproblemen?
              <span className="text-primary-600 block"> Wij lossen het op.</span>
            </h1>

            {/* Subtitel - emotioneel & duidelijk */}
            <p className="text-xl text-secondary-600 leading-relaxed mb-4 max-w-lg">
              Rustige, vriendelijke hulp aan huis voor mensen die vastlopen met hun computer, wifi, printer of telefoon.
            </p>
            <p className="text-lg text-secondary-500 mb-8">
              Geen technische praat. Geen stress. Geen verrassingen.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-secondary-700">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span>Binnen 24 uur geholpen</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-700">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span>Eerlijke prijzen</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-700">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span>Persoonlijk contact</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors shadow-lg shadow-primary-500/30"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel direct voor hulp
              </a>
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 border-2 border-primary-300 hover:bg-primary-50 rounded-xl transition-colors"
              >
                Afspraak inplannen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2 text-secondary-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-500 fill-primary-500" />
                ))}
              </div>
              <span className="font-medium">4.8/5</span>
              <span className="text-secondary-400">•</span>
              <span>2000+ tevreden klanten</span>
            </div>
          </div>

          {/* Rechter kolom - Foto */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl transform rotate-3" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/hulp-met-it.webp"
                alt="Computerhulp aan huis - wij helpen u met al uw digitale problemen"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
