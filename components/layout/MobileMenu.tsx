'use client'

import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils/cn'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Diensten', href: '/diensten' },
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <div className="lg:hidden glass-effect border-t border-white/10">
      <div className="container-padding py-6">
        <nav className="flex flex-col space-y-4 mb-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={cn(
                'text-lg font-medium transition-colors duration-300',
                pathname === item.href
                  ? 'text-primary-300'
                  : 'text-neural-300 hover:text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex flex-col space-y-3">
          <a href="tel:+31642827860" onClick={onClose} className="btn-secondary">
            <Phone className="w-5 h-5 mr-2" />
            Direct bellen
          </a>
          <Link href="/afspraak" onClick={onClose} className="btn-cta">
            <Calendar className="w-5 h-5 mr-2" />
            Afspraak maken
          </Link>
        </div>
      </div>
    </div>
  )
}