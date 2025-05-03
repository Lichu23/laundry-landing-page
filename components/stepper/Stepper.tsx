import { Home, Phone, Sparkles, Truck } from 'lucide-react'
import React from 'react'

export default function Stepper() {
  return (
    <section id="como-funciona" className="bg-sky-50 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                ¿Cómo <span className="text-sky-600">funciona</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                En cuatro sencillos pasos tendrás tu ropa limpia y lista para usar.
              </p>
            </div>
            <div className="relative mx-auto max-w-4xl">
              {/* Connector Line */}
              <div className="absolute left-1/2 top-24 h-[calc(100%-6rem)] w-1 -translate-x-1/2 bg-sky-200 md:top-32"></div>

              <div className="grid gap-12 md:gap-16">
                <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold">1. Programa tu servicio</h3>
                    <p className="mt-2 text-muted-foreground">
                      Descarga nuestra app, regístrate y programa una recogida en la fecha y hora que mejor te convenga.
                    </p>
                  </div>
                  <div className="relative order-1 flex justify-center md:order-2">
                    <div className="relative z-10 rounded-full bg-white p-4 shadow-lg">
                      <div className="rounded-full bg-sky-600 p-4">
                        <Phone className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
                  <div className="relative flex justify-center">
                    <div className="relative z-10 rounded-full bg-white p-4 shadow-lg">
                      <div className="rounded-full bg-sky-600 p-4">
                        <Home className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">2. Recogemos tu ropa</h3>
                    <p className="mt-2 text-muted-foreground">
                      Nuestro personal capacitado recogerá tu ropa en la dirección indicada. Puedes agregar
                      instrucciones especiales.
                    </p>
                  </div>
                </div>

                <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold">3. Lavamos y planchamos</h3>
                    <p className="mt-2 text-muted-foreground">
                      Procesamos tu ropa con los mejores productos y equipos, siguiendo tus preferencias de lavado.
                    </p>
                  </div>
                  <div className="relative order-1 flex justify-center md:order-2">
                    <div className="relative z-10 rounded-full bg-white p-4 shadow-lg">
                      <div className="rounded-full bg-sky-600 p-4">
                        <Sparkles className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
                  <div className="relative flex justify-center">
                    <div className="relative z-10 rounded-full bg-white p-4 shadow-lg">
                      <div className="rounded-full bg-sky-600 p-4">
                        <Truck className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">4. Entregamos a domicilio</h3>
                    <p className="mt-2 text-muted-foreground">
                      Te entregamos tu ropa limpia, planchada y perfectamente doblada en el horario acordado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
