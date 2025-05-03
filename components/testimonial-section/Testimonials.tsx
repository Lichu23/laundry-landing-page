import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-sky-50 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Lo que dicen nuestros <span className="text-sky-600">clientes</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Miles de personas confían en nosotros para el cuidado de su ropa.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-sky-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="mb-4 italic text-muted-foreground">
                    "Increíble servicio. Mi ropa nunca había estado tan limpia y bien cuidada. La app es súper fácil de
                    usar y el personal muy amable."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-sky-200">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        width={48}
                        height={48}
                        alt="Cliente"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">María García</p>
                      <p className="text-sm text-muted-foreground">Madrid</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="mb-4 italic text-muted-foreground">
                    "Como padre soltero, este servicio me ha cambiado la vida. Ahorro horas cada semana y la ropa de mis
                    hijos siempre está impecable."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-sky-200">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        width={48}
                        height={48}
                        alt="Cliente"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Carlos Rodríguez</p>
                      <p className="text-sm text-muted-foreground">Barcelona</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="mb-4 italic text-muted-foreground">
                    "Uso LavaMóvil para mi pequeño negocio y ha sido una excelente inversión. Servicio puntual, precios
                    justos y atención personalizada."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-sky-200">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        width={48}
                        height={48}
                        alt="Cliente"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Laura Martínez</p>
                      <p className="text-sm text-muted-foreground">Valencia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

  )
}
