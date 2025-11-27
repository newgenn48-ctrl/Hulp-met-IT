'use client'

import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight, Zap, Shield, Clock, Monitor, Wifi, Mail, Printer, Smartphone, GraduationCap, Calendar } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: "Computerhulp",
    desc: "Problemen oplossen, onderhoud en installatie",
    href: "/diensten/computerhulp"
  },
  {
    icon: Printer,
    title: "Printerhulp",
    desc: "Installatie, draadloos printen en storingen",
    href: "/diensten/printerhulp"
  },
  {
    icon: Mail,
    title: "E-mail Problemen",
    desc: "Instellen, synchroniseren en beveiligen",
    href: "/diensten/email-problemen"
  },
  {
    icon: Wifi,
    title: "Internet & WiFi",
    desc: "Router installatie en netwerk optimalisatie",
    href: "/diensten/internet-wifi"
  },
  {
    icon: Smartphone,
    title: "Tablet & Smartphone",
    desc: "Apps, WhatsApp, foto's en instellingen",
    href: "/diensten/tablet-smartphone"
  },
  {
    icon: GraduationCap,
    title: "Uitleg & Les",
    desc: "Persoonlijke computerles op uw tempo",
    href: "/diensten/uitleg-les"
  },
]

export default function ComputerhulpPage() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Beschikbaar voor afspraken
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Computerhulp
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                aan huis
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Professionele IT-hulp bij u thuis. Snel, vakkundig en tegen een eerlijke prijs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/afspraak"
                className="group inline-flex items-center justify-center bg-white text-slate-900 text-lg font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-all shadow-lg shadow-white/10"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Afspraak Maken
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+31642827860"
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-emerald-500/20"
              >
                <Phone className="w-5 h-5 mr-3" />
                Direct Bellen
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Waar kunnen we mee helpen?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Van kleine problemen tot complete installaties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                  <span className="inline-flex items-center text-blue-600 text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Meer info <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hoe werkt het?
            </h2>
            <p className="text-lg text-slate-600">
              In drie stappen naar een werkende computer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-6xl font-bold text-slate-200 mb-4">01</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Neem contact op</h3>
              <p className="text-slate-600">Bel of stuur een WhatsApp. Beschrijf kort uw probleem.</p>
            </div>

            <div className="relative">
              <div className="text-6xl font-bold text-slate-200 mb-4">02</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Plan een afspraak</h3>
              <p className="text-slate-600">Wij komen op een moment dat u uitkomt. Vaak al binnen 24-48 uur.</p>
            </div>

            <div className="relative">
              <div className="text-6xl font-bold text-slate-200 mb-4">03</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Probleem opgelost</h3>
              <p className="text-slate-600">Onze specialist lost het ter plaatse op. U betaalt alleen voor de tijd.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Waarom klanten voor ons kiezen
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Wij geloven in persoonlijke service, transparante prijzen en vakmanschap. Geen gedoe, gewoon goede hulp.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Snel geholpen</h3>
                    <p className="text-slate-600">Meestal binnen 24-48 uur bij u thuis</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Vaste tarieven</h3>
                    <p className="text-slate-600">U weet vooraf wat het kost, geen verrassingen</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">10+ jaar ervaring</h3>
                    <p className="text-slate-600">Alle merken en problemen, wij kennen ze</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white">
              <div className="text-sm text-slate-400 mb-2 uppercase tracking-wider">Tarieven</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl md:text-6xl font-bold">€14,50</span>
                <span className="text-slate-400">/ kwartier</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-300">Voorrijkosten €10 (eenmalig)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-300">Minimale afname: 3 kwartier</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-300">Inclusief 21% BTW</span>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6 mb-8">
                <div className="text-sm text-slate-400 mb-1">Eerste afspraak vanaf</div>
                <div className="text-2xl font-semibold">€53,50 <span className="text-base font-normal text-slate-400">voor 45 min</span></div>
              </div>

              <a
                href="tel:+31642827860"
                className="block w-full text-center bg-white text-slate-900 font-semibold py-4 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Bel voor een afspraak
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hulp nodig?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Neem vrijblijvend contact op. We helpen u graag verder.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31642827860"
              className="inline-flex items-center justify-center bg-white text-blue-600 text-lg font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5 mr-3" />
              06 42 82 78 60
            </a>

            <a
              href="https://wa.me/31642827860?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20computerhulp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp ons
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
