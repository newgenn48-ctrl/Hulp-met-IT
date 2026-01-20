'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100/50 pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Linker kolom - Content */}
          <div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-700 fill-primary-500" />
                ))}
                <div className="relative w-5 h-5">
                  <Star className="absolute w-5 h-5 text-primary-200 fill-primary-200" />
                  <div className="absolute overflow-hidden" style={{ width: '80%' }}>
                    <Star className="w-5 h-5 text-primary-700 fill-primary-500" />
                  </div>
                </div>
              </div>
              <span className="text-secondary-600">4.8/5 · 2000+ klanten</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight mb-6">
              Computerhulp specialist
              <span className="text-primary-700"> aan huis</span>
            </h1>

            {/* Subtitel */}
            <p className="text-xl text-secondary-600 leading-relaxed mb-4 max-w-lg">
              Uw persoonlijke IT-expert voor computer, laptop, wifi en meer. Snel, vakkundig en bij u thuis.
            </p>
            <p className="text-lg text-secondary-500 mb-8 max-w-lg">
              Ook senioren begeleiden wij met geduld en heldere uitleg.
            </p>

            {/* USPs - compact, benefit-focused */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="bg-primary-100 border border-primary-200 rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-primary-700">Transparante tarieven</p>
              </div>
              <div className="bg-primary-100 border border-primary-200 rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-primary-700">Snel ter plaatse</p>
              </div>
              <div className="bg-primary-100 border border-primary-200 rounded-lg px-4 py-2">
                <p className="text-sm font-medium text-primary-700">10+ jaar ervaring</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary-500 hover:bg-primary-600 rounded-xl transition-colors shadow-lg shadow-primary-500/30"
              >
                Afspraak maken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 border-2 border-primary-300 hover:bg-primary-50 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel direct
              </a>
            </div>

          </div>

          {/* Rechter kolom - Gestylede foto */}
          <div className="relative">
            {/* Decoratieve achtergrond */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl transform rotate-3" />

            {/* Foto container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/hulp-met-it.webp"
                alt="IT-specialist aan huis helpt klant met computerproblemen in de woonkamer"
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
