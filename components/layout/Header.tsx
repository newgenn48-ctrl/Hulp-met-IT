'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Monitor } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Diensten', href: '/diensten' },
    { name: 'Regio\'s', href: '/regios' },
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gradient">Hulp met IT</span>
              <div className="text-xs text-neural-400 leading-none">Computer Specialist aan huis</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-neural-300 hover:text-primary-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+31642827860" className="text-sm text-neural-300 hover:text-white inline-flex items-center px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              06-42827860
            </a>
            <Link href="/afspraak" className="btn-cta text-sm px-4 py-2">
              Afspraak maken
            </Link>
          </div>

          <button
            className="lg:hidden text-neutral-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-effect border-t border-white/10">
          <div className="container-padding py-6">
            <nav className="flex flex-col space-y-4 mb-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-neural-300 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col space-y-3">
              <a href="tel:+31642827860" onClick={() => setIsMobileMenuOpen(false)} className="btn-secondary">
                <Phone className="w-5 h-5 mr-2" />
                Direct bellen
              </a>
              <Link href="/afspraak" onClick={() => setIsMobileMenuOpen(false)} className="btn-cta">
                Afspraak maken
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}