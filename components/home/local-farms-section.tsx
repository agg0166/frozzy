"use client"

import Image from "next/image"
import { Leaf, Droplets, Heart } from "lucide-react"

export function LocalFarmsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
              <Image
                src="/images/local-farms.jpg"
                alt="Fresh ingredients from local farms"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl">
                <p className="text-3xl font-bold font-serif">100%</p>
                <p className="text-sm">de origen local</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
              De las granjas locales a tu helado
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cada bola de Frozzy cuenta una historia que comienza en los campos bañados por el sol de nuestras granjas asociadas.
              Creemos que un helado excepcional empieza por unos ingredientes excepcionales, por eso trabajamos directamente con ganaderos lecheros, huertos frutales y productores artesanales locales situados en un radio de 80 kilómetros de nuestra heladería.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desde la rica nata de vacas alimentadas con pasto que constituye nuestra base hasta las fresas recogidas a mano y los frutos secos recién tostados, cada ingrediente se selecciona cuidadosamente por su calidad y sostenibilidad. Esta filosofía «de la granja al cucurucho» no solo da lugar a sabores inolvidables, sino que también apoya a nuestra comunidad local y reduce nuestra huella medioambiental.
            </p>

            {/* Features */}
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Organico</h3>
                  <p className="text-sm text-muted-foreground">Ingredientes con certificación ecológica</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Droplets className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Fresco todos los días</h3>
                  <p className="text-sm text-muted-foreground">Elaborado en pequeñas cantidades</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Sostenible</h3>
                  <p className="text-sm text-muted-foreground">Prácticas respetuosas con el medio ambiente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
