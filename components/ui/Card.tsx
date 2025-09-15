'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

const Card = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('card-3d', className)}
    {...props}
  />
))
Card.displayName = 'Card'

export { Card }