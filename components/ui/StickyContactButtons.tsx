'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Phone, Calendar, MessageCircle } from 'lucide-react'

export function StickyContactButtons() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  // Hide on contact and appointment pages
  const hiddenPaths = ['/afspraak', '/contact']
  const shouldHide = hiddenPaths.includes(pathname)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      setIsVisible(!shouldHide)
    }
  }, [shouldHide, isMounted])

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted || !isVisible) return null

  return (
    <>
      {/* Desktop - Right side floating buttons */}
      <div className="hidden md:block fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        <div className="group flex items-center bg-primary-600 text-white px-4 py-3 rounded-l-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1">
          <Link href="/afspraak" className="flex items-center" aria-label="Maak een afspraak">
            <Calendar className="w-5 h-5 mr-3" />
            <span className="whitespace-nowrap">Afspraak Maken</span>
          </Link>
        </div>

        <div className="group flex items-center bg-green-600 text-white px-4 py-3 rounded-l-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1">
          <a href="tel:+31642827860" className="flex items-center" aria-label="Bel ons: 06-42827860">
            <Phone className="w-5 h-5 mr-3" />
            <span className="whitespace-nowrap">06-42827860</span>
          </a>
        </div>

        <div className="group flex items-center bg-[#25D366] text-white px-4 py-3 rounded-l-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1">
          <a
            href="https://wa.me/31642827860?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20computer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            aria-label="WhatsApp ons"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Mobile - Bottom floating bar */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="glass-effect border border-white/20 rounded-2xl shadow-2xl p-3">
          <div className="grid grid-cols-3 gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/31642827860?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20computer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-gradient-to-br from-[#25D366] to-[#20b358] text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="WhatsApp ons"
            >
              <MessageCircle className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">WhatsApp</span>
            </a>

            {/* Afspraak maken */}
            <Link
              href="/afspraak"
              className="flex flex-col items-center justify-center bg-gradient-to-br from-primary-600 to-accent-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Maak een afspraak"
            >
              <Calendar className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Afspraak</span>
            </Link>

            {/* Bellen */}
            <a
              href="tel:+31642827860"
              className="flex flex-col items-center justify-center bg-gradient-to-br from-green-600 to-green-500 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Bel ons: 06-42827860"
            >
              <Phone className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Bellen</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}