'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center container-padding">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
            Pagina niet gevonden
          </h2>
          <p className="text-primary-600 mb-8">
            De pagina die u zoekt bestaat niet of is verplaatst.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button>
              <Home className="w-5 h-5 mr-2" />
              Naar homepagina
            </Button>
          </Link>
          
          <Button variant="secondary" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug
          </Button>
        </div>
      </div>
    </div>
  )
}