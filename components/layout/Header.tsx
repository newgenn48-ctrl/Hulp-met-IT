'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Monitor } from 'lucide-react'

export const Header = React.memo(function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Diensten', href: '/diensten' },
    { name: 'Regio\'s', href: '/regios' },
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY

      // Show header when:
      // 1. Scrolling up
      // 2. At the very top (0-100px)
      // 3. Mobile menu is open
      if (currentScrollY < lastScrollY || currentScrollY < 100 || isMobileMenuOpen) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide header when scrolling down and past 100px
        setIsVisible(false)
        // Close mobile menu when header hides
        setIsMobileMenuOpen(false)
      }

      setLastScrollY(currentScrollY)

      // Track if user has scrolled for styling changes
      setIsScrolled(currentScrollY > 50)
    }

    // Throttle scroll events for performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlHeader()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMobileMenuOpen])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled
        ? 'glass-effect shadow-lg backdrop-blur-md'
        : 'bg-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gradient">Hulp met IT</span>
              <div className="text-xs text-primary-600 leading-none">Computerhulp aan huis</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-secondary-700 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/afspraak" className="btn-cta text-sm px-4 py-2.5">
              Afspraak maken
            </Link>
            <a
              href="tel:+31642827860"
              className="flex items-center gap-2 bg-secondary-100 hover:bg-secondary-200 border border-secondary-300 text-secondary-800 font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-base">Bel direct</span>
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden text-secondary-700 hover:text-primary-600 p-2 rounded-lg hover:bg-primary-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Sluit menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-effect border-t border-primary-200">
          <div className="container-padding py-6">
            <nav className="flex flex-col space-y-4 mb-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-secondary-700 hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col space-y-3">
              <Link href="/afspraak" onClick={() => setIsMobileMenuOpen(false)} className="btn-cta">
                Afspraak maken
              </Link>
              <a href="tel:+31642827860" onClick={() => setIsMobileMenuOpen(false)} className="btn-secondary">
                <Phone className="w-5 h-5 mr-2" />
                Bel direct
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
})