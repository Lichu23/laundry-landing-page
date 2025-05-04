import { Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-sky-600">
            <Sparkles className="h-6 w-6" />
            <span className="text-xl">LavaMóvil</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-sky-600">
              Inicio
            </Link>
            <Link href="#caracteristicas" className="text-sm font-medium hover:text-sky-600">
              Características
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium hover:text-sky-600">
              Cómo Funciona
            </Link>
            
            <Link href="#testimonios" className="text-sm font-medium hover:text-sky-600">
              Testimonios
            </Link>
          
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#contacto"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-sky-600 px-4 py-2 text-sm font-medium text-sky-600 shadow-sm transition-colors hover:bg-sky-50"
            >
              Contáctanos
            </Link>
            <Link
              href="#descargar"
              className="inline-flex h-9 items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-sky-700"
            >
              Descargar App
            </Link>
          </div>
        </div>
      </header>
  )
}
