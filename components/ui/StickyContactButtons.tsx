'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Phone, Calendar, MessageCircle } from 'lucide-react'

export function StickyContactButtons() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [showMobileButtons, setShowMobileButtons] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  const hiddenPaths = ['/afspraak', '/contact']
  const shouldHide = hiddenPaths.includes(pathname)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const scrolledEnough = scrollY > 300

          if (scrollY < lastScrollY || scrollY < 200) {
            setShowMobileButtons(true)
          } else if (scrollY > lastScrollY && scrollY > 200) {
            setShowMobileButtons(false)
          }

          setIsVisible(!shouldHide && scrolledEnough)
          setLastScrollY(scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMounted, lastScrollY, shouldHide])

  if (!isMounted) return null

  return (
    <>
      {/* Desktop + Tablet (md+): pill container */}
      <div className={`hidden md:block fixed right-6 bottom-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-professional p-2 flex flex-col items-center gap-2">
          <Link
            href="/afspraak"
            className="group relative bg-accent-500 hover:bg-accent-600 text-white p-4 rounded-xl shadow-accent transition-all duration-300 hover:scale-110"
            aria-label="Maak een afspraak"
          >
            <Calendar className="w-6 h-6" />
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-accent-600 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              Afspraak maken
            </div>
          </Link>

          <a
            href="tel:+31858005006"
            className="group relative bg-primary-600 hover:bg-primary-700 text-white p-3.5 rounded-xl shadow-primary transition-all duration-300 hover:scale-110"
            aria-label="Bel ons: 085-8005006"
          >
            <Phone className="w-5 h-5" />
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary-700 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              Bel ons direct
            </div>
          </a>

          <a
            href="https://wa.me/31642827860?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20computer"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-success-600 text-white p-3.5 rounded-xl transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp ons"
          >
            <MessageCircle className="w-5 h-5" />
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-success-600 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              WhatsApp
            </div>
          </a>
        </div>
      </div>

      {/* Mobile: bottom bar */}
      <div className={`md:hidden fixed bottom-4 left-3 right-3 z-50 transition-all duration-500 ease-in-out ${
        isVisible && showMobileButtons
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-sm border border-secondary-200 rounded-2xl shadow-professional-hover p-3">
          <div className="grid grid-cols-3 gap-3">
            <a
              href="https://wa.me/31642827860?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20computer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-success-500 hover:bg-success-600 text-white p-3 rounded-xl shadow-md transition-all duration-200 active:scale-95"
              aria-label="WhatsApp ons"
              style={{ minHeight: '60px' }}
            >
              <MessageCircle className="w-5 h-5 mb-1" />
              <span className="text-xs font-semibold">WhatsApp</span>
            </a>

            <Link
              href="/afspraak"
              className="flex flex-col items-center justify-center bg-accent-500 hover:bg-accent-600 text-white p-3 rounded-xl shadow-accent transition-all duration-200 active:scale-95"
              aria-label="Afspraak maken"
              style={{ minHeight: '60px' }}
            >
              <Calendar className="w-5 h-5 mb-1" />
              <span className="text-xs font-semibold">Afspraak</span>
            </Link>

            <a
              href="tel:+31858005006"
              className="flex flex-col items-center justify-center bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-xl shadow-primary transition-all duration-200 active:scale-95"
              aria-label="Bel ons nu"
              style={{ minHeight: '60px' }}
            >
              <Phone className="w-5 h-5 mb-1" />
              <span className="text-xs font-semibold">085-8005006</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: compact FAB when scrolling down */}
      <div className={`md:hidden fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible && !showMobileButtons
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-75 pointer-events-none'
      }`}>
        <a
          href="tel:+31858005006"
          className="flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white w-14 h-14 rounded-full shadow-primary transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Bel nu"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  )
}
