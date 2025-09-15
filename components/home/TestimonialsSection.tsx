'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Card } from '@/components/ui/Card'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Rose Garden',
    date: '1 september 2024',
    specialist: 'Adam',
    content: 'Rustig, geduldig en duidelijk in uitleggen van het eea. Adam is goed en prettig met tekst en uitleg.'
  },
  {
    name: 'Riet Bloem', 
    date: '30 juni 2024',
    specialist: 'Adam',
    content: 'Verrassend professioneel geholpen met email problemen. Adam loste alles op met alle geduld; een vriendelijk mens. Suuuuuper blij, ik ga weer aan de slag met een goed gevoel. De betere computer hulp ever ....veel succes Adam!'
  },
  {
    name: 'Harold Lensing',
    date: '30 juni 2024',
    specialist: 'Adam',
    content: 'Top service, Adam heeft al mijn computer problemen razend snel opgelost, ik ben er blij mee😎'
  },
  {
    name: 'Weerheijm-Maas',
    date: '29 maart 2024', 
    specialist: 'Ahmad',
    content: 'Ahmad kwam mij vandaag weer helpen met mijn computer. Deze was gecrasht terwijl ik hem nu direct nodig had. Ahmad is rustig, flexibel, betrouwbaar, klantvriendelijk, en een harde werker, kundig in zijn vak, en kan goed uitleggen als dat nodig is.'
  },
  {
    name: 'Anthon Pol',
    date: '23 maart 2024',
    specialist: 'Hulp met IT Team',
    content: 'De computer startte niet meer op. Dankzij Hulp met IT werd het probleem goed en snel opgelost. De Hulp was vriendelijk en deskundig. Ik ben erg blij dat ik deze hulp heb gekozen.'
  },
  {
    name: 'A Blokdijk',
    date: '13 maart 2024', 
    specialist: 'Hulp met IT Team',
    content: 'Ben weer superblij met de snelle hulp bij mijn PC strubbelingen die in een snel tempo waren opgelost door deze vriendelijke en betrouwbare man!'
  },
  {
    name: 'Elsbeth Grievink',
    date: '4 maart 2024',
    specialist: 'Ahmad', 
    content: 'Ik had een heel lijstje met problemen: laptop \'gehackt\', mailprogramma deed niet wat ik wilde, kon geen mails ontvangen op telefoon, had gedoe met Teams, etc etc. Ahmad was op tijd, vriendelijk en rustig en heeft ALLE problemen op dit lijstje in een uur tijd gefikst.'
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    // Set new timeout with cleanup
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    // Set new timeout with cleanup
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    // Set new timeout with cleanup
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-neural-300 max-w-3xl mx-auto leading-relaxed">
            Echte reviews van tevreden klanten. 
            Lees hier wat zij te zeggen hebben over onze service.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
            aria-label="Vorige review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
            aria-label="Volgende review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="card-3d p-8 md:p-12 mx-12">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current mx-1"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-neural-200 leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <div className="font-bold text-white text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-neutral-400">
                    {currentTestimonial.date}
                  </div>
                  <div className="text-primary-400 text-sm font-medium">
                    Geholpen door {currentTestimonial.specialist}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ga naar review ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}