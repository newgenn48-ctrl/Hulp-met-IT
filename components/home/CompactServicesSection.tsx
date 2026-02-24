'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import services from '@/lib/data/services.json'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const imageMap: Record<string, string> = {
  'computerhulp': '/images/diensten/computerhulp.webp',
  'printerhulp': '/images/diensten/printerhulp.webp',
  'email-problemen': '/images/diensten/email-problemen.webp',
  'internet-wifi': '/images/diensten/internet-wifi.webp',
  'tablet-smartphone': '/images/diensten/tablet-smartphone.webp',
  'smart-tv': '/images/diensten/smart-tv.webp',
  'smart-home': '/images/diensten/smart-home.webp',
  'computerles': '/images/diensten/computerles.webp',
}

// Korte, schone namen zonder "hulp" / "problemen"
const shortNames: Record<string, string> = {
  'computerhulp': 'Computer',
  'printerhulp': 'Printer',
  'email-problemen': 'E-mail',
  'internet-wifi': 'Internet & WiFi',
  'tablet-smartphone': 'Tablet & Smartphone',
  'smart-tv': 'Smart TV',
  'smart-home': 'Smart Home',
  'computerles': 'Computerles',
  'virusverwijdering': 'Virusverwijdering',
  'data-backup': 'Data & Backup',
}

export function CompactServicesSection() {
  const displayServices = services.slice(0, 6)

  return (
    <section className="relative py-20 lg:py-28 bg-secondary-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-15" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Onze diensten</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Computerhulp en IT-diensten aan huis
            </h2>
            <p className="text-secondary-500 max-w-2xl mx-auto text-lg">
              Of het nu gaat om uw computer, printer of internet — wij komen bij u thuis en helpen u rustig verder.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
          {displayServices.map((service, index) => {
            const imageSrc = imageMap[service.slug]
            return (
              <ScrollReveal key={service.slug} delay={index * 60}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-square overflow-hidden">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={shortNames[service.slug] || service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary-50 flex items-center justify-center">
                        <span className="text-4xl">{service.emoji}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {shortNames[service.slug] || service.name}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-10">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              Bekijk alle diensten
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
