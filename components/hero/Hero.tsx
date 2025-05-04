import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function Hero() {
    return (
        <section id="inicio" className="relative overflow-hidden bg-sky-50 py-16 md:py-24">
            <div className="container grid gap-8 md:grid-cols-2 md:items-center">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Tu lavandería a <span className="text-sky-600">domicilio</span>
                    </h1>
                    <p className="text-lg text-muted-foreground md:text-xl">
                        Recogemos, lavamos y entregamos tu ropa limpia y planchada en menos de 48 horas. ¡Ahorra tiempo y
                        disfruta de la vida!
                    </p>
                   
                </div>
                <div className="relative mx-auto w-full max-w-md">
                    <Image
                        src="/image-hero.jpg"
                        width={400}
                        height={600}
                        alt="App de LavaMóvil"
                        className="mx-auto rounded-xl shadow-xl"
                        priority
                    />
                </div>
            </div>
        </section>

    )
}
