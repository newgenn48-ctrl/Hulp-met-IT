'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Phone, Calendar, MessageCircle } from 'lucide-react'

export function StickyContactButtons() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showMobileButtons, setShowMobileButtons] = useState(true)
  const pathname = usePathname()

  // Hide on contact and appointment pages
  const hiddenPaths = ['/afspraak', '/contact']
  const shouldHide = hiddenPaths.includes(pathname)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const shouldShow = scrollPosition > 300 // Show after scrolling 300px
      setIsScrolled(shouldShow)

      // Smart mobile button visibility (similar to header logic)
      if (scrollPosition < lastScrollY || scrollPosition < 200) {
        // Show when scrolling up or near top
        setShowMobileButtons(true)
      } else if (scrollPosition > lastScrollY && scrollPosition > 200) {
        // Hide when scrolling down and past 200px for more content visibility
        setShowMobileButtons(false)
      }

      setLastScrollY(scrollPosition)
    }

    if (isMounted) {
      // Throttle scroll events for performance
      let ticking = false
      const throttledScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll()
            ticking = false
          })
          ticking = true
        }
      }

      // Add scroll listener
      window.addEventListener('scroll', throttledScroll)
      // Check initial scroll position
      handleScroll()

      return () => window.removeEventListener('scroll', throttledScroll)
    }

    return undefined
  }, [isMounted, lastScrollY])

  useEffect(() => {
    if (isMounted) {
      setIsVisible(!shouldHide && isScrolled && showMobileButtons)
    }
  }, [shouldHide, isMounted, isScrolled, showMobileButtons])

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) return null

  return (
    <>
      {/* Desktop/Laptop - Modern floating FAB */}
      <div className={`hidden lg:block fixed right-6 bottom-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        <div className="flex flex-col items-end space-y-4">
          {/* Appointment button - PRIMARY ACTION */}
          <Link
            href="/afspraak"
            className="group relative bg-gradient-to-r from-primary-500 to-accent-500 text-white p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Maak een afspraak"
            style={{ minHeight: '60px', minWidth: '60px' }}
          >
            <Calendar className="w-7 h-7" />
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-secondary-800 text-white px-4 py-3 rounded-lg text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              Afspraak maken
            </div>
          </Link>

          {/* Phone button */}
          <a
            href="tel:+31642827860"
            className="group relative bg-secondary-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Bel ons: 06-42827860"
            style={{ minHeight: '56px', minWidth: '56px' }}
          >
            <Phone className="w-6 h-6" />
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-secondary-800 text-white px-4 py-3 rounded-lg text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              Bel ons direct
            </div>
          </a>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/31642827860?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20computer"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp ons"
            style={{ minHeight: '56px', minWidth: '56px' }}
          >
            <MessageCircle className="w-6 h-6" />
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-secondary-800 text-white px-4 py-3 rounded-lg text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              WhatsApp
            </div>
          </a>
        </div>
      </div>

      {/* Tablet - Senior-friendly side buttons */}
      <div className={`hidden md:block lg:hidden fixed right-2 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-8 pointer-events-none'
      }`}>
        <div className="flex flex-col space-y-3">
          <Link
            href="/afspraak"
            className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-2"
            aria-label="Afspraak maken"
            style={{ minHeight: '52px', minWidth: '52px' }}
          >
            <Calendar className="w-6 h-6" />
          </Link>

          <a
            href="tel:+31642827860"
            className="bg-secondary-700 text-white p-4 rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-2"
            aria-label="Bel ons"
            style={{ minHeight: '52px', minWidth: '52px' }}
          >
            <Phone className="w-6 h-6" />
          </a>

          <a
            href="https://wa.me/31642827860?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20computer"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white p-4 rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-2"
            aria-label="WhatsApp"
            style={{ minHeight: '52px', minWidth: '52px' }}
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Mobile - Smart adaptive buttons */}
      <div className={`md:hidden fixed bottom-4 left-3 right-3 z-50 transition-all duration-500 ease-in-out ${
        isVisible && showMobileButtons
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        <div className="bg-white/98 backdrop-blur-sm border-2 border-secondary-300 rounded-2xl shadow-xl p-3">
          <div className="grid grid-cols-3 gap-3">
            <a
              href="https://wa.me/31642827860?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20computer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-green-600 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              aria-label="WhatsApp ons"
              style={{ minHeight: '68px' }}
            >
              <MessageCircle className="w-6 h-6 mb-2" />
              <span className="text-sm font-semibold">WhatsApp</span>
            </a>

            <Link
              href="/afspraak"
              className="flex flex-col items-center justify-center bg-gradient-to-br from-primary-500 to-accent-500 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              aria-label="Afspraak maken"
              style={{ minHeight: '68px' }}
            >
              <Calendar className="w-6 h-6 mb-2" />
              <span className="text-sm font-semibold">Afspraak</span>
            </Link>

            <a
              href="tel:+31642827860"
              className="flex flex-col items-center justify-center bg-secondary-700 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              aria-label="Bel ons nu"
              style={{ minHeight: '68px' }}
            >
              <Phone className="w-6 h-6 mb-2" />
              <span className="text-sm font-semibold">Bellen</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile - Compact FAB when main buttons are hidden */}
      <div className={`md:hidden fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible && !showMobileButtons
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-75 pointer-events-none'
      }`}>
        <Link
          href="tel:+31642827860"
          className="flex items-center justify-center bg-gradient-to-r from-primary-500 to-accent-500 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Bel nu"
        >
          <Phone className="w-6 h-6" />
        </Link>
      </div>
    </>
  )
}