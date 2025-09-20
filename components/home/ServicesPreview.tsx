'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ServicesPreview() {
  return (
    <section className="section-spacing">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center">
          <Link href="/diensten" className="btn-cta">
            Alle diensten bekijken
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}