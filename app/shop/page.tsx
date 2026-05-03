import { Suspense } from "react"
import { ShopContent } from "@/components/shop/shop-content"

export const metadata = {
  title: "Catálogo | Frozzy",
  description: "Descubre nuestra selección de helados artesanales. Desde sabores clásicos hasta innovadoras especialidades de temporada.",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            <span className="text-balance">Nuestra colección de helados</span>
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Cada sabor se elabora con esmero utilizando ingredientes de primera calidad. Descubre tu nuevo sabor favorito o  atrévete a probar algo nuevo.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <Suspense fallback={<ShopSkeleton />}>
        <ShopContent />
      </Suspense>
    </div>
  )
}

function ShopSkeleton() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-2xl bg-muted p-4">
              <div className="aspect-square rounded-xl bg-muted-foreground/20" />
              <div className="mt-4 h-4 w-3/4 rounded bg-muted-foreground/20" />
              <div className="mt-2 h-3 w-1/2 rounded bg-muted-foreground/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
