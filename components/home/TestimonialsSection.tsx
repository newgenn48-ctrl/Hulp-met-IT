'use client'

import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Meneer Henk',
    text: 'Mijn laptop was zo traag geworden. Alles is nu schoongemaakt en ik heb uitleg gekregen. Super vriendelijk!'
  },
  {
    name: 'Mevrouw Maria',
    text: 'Eindelijk WiFi in de hele woning! We hadden al maanden problemen. Binnen een uur was alles opgelost.'
  },
  {
    name: 'Meneer Jan',
    text: 'Mijn printer deed het niet meer. Fijn dat ze aan huis komen, dat scheelt gedoe. Snel opgelost!'
  },
  {
    name: 'Mevrouw Ans',
    text: 'Ik snapte niks van mijn nieuwe telefoon. Nu kan ik foto\'s maken en versturen. Heel geduldig uitgelegd!'
  },
  {
    name: 'Meneer Peter',
    text: 'Computer zat vol met virussen. Alles is opgeschoond en werkt weer als nieuw. Aanrader!'
  },
  {
    name: 'Mevrouw Joke',
    text: 'E-mail deed het niet meer na een update. Binnen een half uur weer werkend. Heel blij mee!'
  },
  {
    name: 'Meneer Kees',
    text: 'Nieuwe laptop gekocht maar kwam er niet uit. Alles is nu ingesteld en overgezet. Top service!'
  },
  {
    name: 'Mevrouw Lia',
    text: 'Bankieren op de computer vond ik eng. Nu doe ik het zelf, dankzij de duidelijke uitleg. Dankjewel!'
  }
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-12">
          <p className="text-primary-700 font-semibold mb-3">Klanten aan het woord</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Dit zeggen onze klanten
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary-400 fill-primary-400" />
            ))}
            <div className="relative w-5 h-5">
              <Star className="absolute w-5 h-5 text-primary-200 fill-primary-200" />
              <div className="absolute overflow-hidden" style={{ width: '80%' }}>
                <Star className="w-5 h-5 text-primary-400 fill-primary-400" />
              </div>
            </div>
          </div>
          <p className="text-secondary-600">Gemiddeld 4.8/5 sterren</p>
        </div>

        {/* Scroll buttons */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-secondary-200 flex items-center justify-center hover:bg-secondary-50 transition-colors hidden md:flex"
            aria-label="Scroll naar links"
          >
            <ChevronLeft className="w-5 h-5 text-secondary-600" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-secondary-200 flex items-center justify-center hover:bg-secondary-50 transition-colors hidden md:flex"
            aria-label="Scroll naar rechts"
          >
            <ChevronRight className="w-5 h-5 text-secondary-600" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] bg-secondary-50 rounded-xl p-6 border border-secondary-200 snap-start"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary-400 fill-primary-400" />
                  ))}
                </div>
                <p className="text-secondary-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">
                      {testimonial.name.split(' ')[1]?.charAt(0) || testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-medium text-secondary-900">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        <p className="text-center text-sm text-secondary-500 mt-4 md:hidden">
          ← Swipe voor meer reviews →
        </p>

      </div>
    </section>
  )
}
