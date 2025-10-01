'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils/cn'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Diensten', href: '/diensten' },
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            'relative text-lg font-medium transition-all duration-300 hover:text-primary-300 group',
            pathname === item.href
              ? 'text-secondary-800'
              : 'text-primary-700'
          )}
        >
          {item.name}
          <span
            className={cn(
              'absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full',
              pathname === item.href && 'w-full'
            )}
          />
        </Link>
      ))}
    </nav>
  )
}