import Image from "next/image";
import Link from "next/link";

import React from 'react'

export default function DownloadSection() {
  return (
    <section id="descargar" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Descarga nuestra <span className="text-sky-600">app</span> y comienza hoy
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Disponible para iOS y Android. Gestiona tus pedidos, programa recogidas y realiza pagos desde tu
                  smartphone.
                </p>
                <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="#" className="inline-block">
                    <Image
                      src="/app-store-icon.png"
                      width={200}
                      height={60}
                      alt="Descargar en App Store"
                      className="h-[60px] w-auto"
                    />
                  </Link>
                  <Link href="#" className="inline-block">
                    <Image
                      src="/playstore.png"
                      width={200}
                      height={60}
                      alt="Descargar en Google Play"
                      className="h-[60px] w-auto"
                    />
                  </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-medium">Descarga</h3>
                    <p className="text-sm text-muted-foreground">Instala la app gratis</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-medium">Regístrate</h3>
                    <p className="text-sm text-muted-foreground">Crea tu cuenta en segundos</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-lg font-medium">¡Listo!</h3>
                    <p className="text-sm text-muted-foreground">Programa tu primera recogida</p>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <Image
                  src="/app-view-1.png"
                  width={400}
                  height={600}
                  alt="App de LavaMóvil en smartphone"
                  className="mx-auto h-full rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
  )
}
