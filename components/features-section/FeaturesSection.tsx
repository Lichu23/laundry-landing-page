import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Clock, MessageSquare, ShieldCheck, Sparkles, Truck, Wallet } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Servicio de lavandería <span className="text-sky-600">premium</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Ofrecemos un servicio completo de lavandería a domicilio con la mejor calidad y atención al detalle.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-sky-100">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="rounded-full bg-sky-100 p-3">
                    <Sparkles className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold">Cuidado Premium</h3>
                  <p className="text-center text-muted-foreground">
                    Tratamos cada prenda con el cuidado que merece, siguiendo las instrucciones específicas de lavado.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-sky-100">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="rounded-full bg-sky-100 p-3">
                    <Clock className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold">Ahorra Tiempo</h3>
                  <p className="text-center text-muted-foreground">
                    Dedica tu tiempo a lo que realmente importa mientras nosotros nos encargamos de tu ropa.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-sky-100">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="rounded-full bg-sky-100 p-3">
                    <Truck className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold">Recogida y Entrega</h3>
                  <p className="text-center text-muted-foreground">
                    Servicio a domicilio. Recogemos y entregamos tu ropa en la puerta de tu casa u oficina.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-sky-100">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="rounded-full bg-sky-100 p-3">
                    <ShieldCheck className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold">Seguridad Garantizada</h3>
                  <p className="text-center text-muted-foreground">
                    Tu ropa está asegurada desde el momento de la recogida hasta la entrega.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-sky-100">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="rounded-full bg-sky-100 p-3">
                    <Wallet className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold">Precios Transparentes</h3>
                  <p className="text-center text-muted-foreground">
                    Sin sorpresas. Conoce el precio exacto antes de confirmar tu pedido.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-sky-100">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="rounded-full bg-sky-100 p-3">
                    <MessageSquare className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold">Soporte 24/7</h3>
                  <p className="text-center text-muted-foreground">
                    Estamos disponibles para atender tus dudas y solicitudes en cualquier momento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}
