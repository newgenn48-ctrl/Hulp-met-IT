'use client'

import Link from 'next/link'
import { Monitor, Wifi, Printer, Mail, Smartphone, HelpCircle, ArrowRight } from 'lucide-react'

const problems = [
  { icon: Monitor, text: 'Computer is ineens traag' },
  { icon: Wifi, text: 'Internet of WiFi valt steeds uit' },
  { icon: Printer, text: 'Printer werkt niet' },
  { icon: Mail, text: 'E-mail doet het niet meer' },
  { icon: Smartphone, text: 'Nieuwe laptop of telefoon, geen idee hoe het werkt' },
  { icon: HelpCircle, text: 'Bang om iets verkeerd te doen' },
]

export function ProblemsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Herkenbaar?
          </h2>
          <p className="text-lg text-secondary-600">
            U bent niet de enige. Wij helpen dit elke dag op.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-secondary-50 rounded-xl p-4 border border-secondary-100"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-primary-700" />
                </div>
                <p className="text-secondary-700 font-medium">{problem.text}</p>
              </div>
            )
          })}
        </div>

        {/* Alle diensten knop */}
        <div className="text-center">
          <Link
            href="/diensten"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-700 border-2 border-primary-400 hover:bg-primary-50 rounded-xl transition-colors"
          >
            Alle diensten bekijken
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  )
}
