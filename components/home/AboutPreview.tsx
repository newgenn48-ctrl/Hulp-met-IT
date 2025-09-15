'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Users, Award, Clock, Shield } from 'lucide-react'

const stats = [
  { icon: Users, number: '10+', label: 'Jaar ervaring' },
  { icon: Award, number: '4.9/5', label: 'Gemiddelde beoordeling' },
  { icon: Clock, number: '24u', label: 'Response tijd' },
  { icon: Shield, number: '100%', label: 'Verzekerd & veilig' },
]

export function AboutPreview() {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Waarom kiezen voor </span>
              <span className="text-gradient">Hulp met IT</span>
              <span className="text-white">?</span>
            </h2>
            
            <p className="text-xl text-neural-300 leading-relaxed mb-8">
              Al meer dan 10 jaar helpen we mensen met hun computerproblemen. Onze uitgebreide ervaring 
              heeft ons uitgebouwd tot een van de meest betrouwbare computer services 
              voor particulieren in Nederland. Onze ervaren specialisten nemen de tijd voor u.
            </p>

            <Link href="/over-ons">
              <Button size="lg">
                Meer over ons
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={stat.label}>
                  <Card className="text-center p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gradient mb-2">
                      {stat.number}
                    </div>
                    <p className="text-sm text-neural-400">
                      {stat.label}
                    </p>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}