'use client'

import Link from 'next/link'
import { AlertTriangle, Calendar, Shield, Clock } from 'lucide-react'

export function Windows11UrgentSection() {
  return (
    <section className="section-spacing bg-gradient-to-r from-red-500/10 to-orange-500/10 border-t border-red-500/20">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="glass-effect rounded-lg p-8 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-600/20 to-yellow-500/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-orange-500/20 text-orange-800 px-6 py-3 rounded-full text-lg font-bold mb-4 animate-pulse border-2 border-orange-400/40">
                <AlertTriangle className="w-5 h-5 mr-3" />
                LET OP: Windows 10 Support Eindigt Binnenkort
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
                Windows 10 stopt op <span className="text-red-400">14 oktober 2025</span>
                <br />
                <span className="text-gradient">Al klaar voor de overstap?</span>
              </h2>
              
              <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed mb-6">
                Microsoft stopt binnenkort met beveiligingsupdates voor Windows 10. 
                <span className="text-secondary-800 font-semibold"> Onze Windows 11 Overstap Service</span> zorgt 
                voor een zorgeloze upgrade - <strong className="text-primary-700">inclusief backup en nazorg!</strong>
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center text-center">
                <div className="mr-4">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-secondary-800">Geen Updates Meer</div>
                  <div className="text-sm text-primary-700">Kwetsbaar voor virussen</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center text-center">
                <div className="mr-4">
                  <Clock className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-secondary-800">Beperkte Tijd</div>
                  <div className="text-sm text-primary-700">Plan nu je overstap</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center text-center">
                <div className="mr-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-secondary-800">Veiligheidsrisico</div>
                  <div className="text-sm text-primary-700">Onbeveiligde computer</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/windows-11-overstap" 
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 inline-flex items-center justify-center group shadow-lg"
              >
                <Calendar className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Windows 11 Overstap Boeken
              </Link>
              
              <Link 
                href="/windows-11-overstap" 
                className="border-2 border-red-400 text-red-400 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-red-400 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                Meer Info & Prijzen
              </Link>
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-block bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2">
                <p className="text-green-800 text-sm font-medium">
                  ✅ Boek voor eind december 2025 en ontvang <span className="text-green-900 font-semibold">20% korting</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}