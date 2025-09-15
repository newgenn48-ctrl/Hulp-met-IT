'use client'

import { CheckCircle, Star } from 'lucide-react'

interface PricingCardProps {
  title: string
  price: string
  period: string
  features: string[]
  popular?: boolean
  className?: string
}

export function PricingCard({ title, price, period, features, popular, className = "" }: PricingCardProps) {
  return (
    <div className={`card-3d relative ${className} ${popular ? 'border-2 border-primary-400' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Meest gekozen
          </div>
        </div>
      )}
      
      <div className="text-center p-8">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        
        <div className="mb-6">
          <div className="text-4xl font-bold text-gradient mb-1">{price}</div>
          <div className="text-neural-400">{period}</div>
        </div>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-neural-300 text-left">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}