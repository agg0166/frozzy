import { Suspense } from "react"
import { WorkshopsContent } from "@/components/workshops/workshops-content"

export const metadata = {
  title: "Telleres | Frozzy",
  description: "Participa en nuestros talleres prácticos de elaboración de helados. Aprende de chefs expertos y crea tus propios y deliciosos helados.",
}

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            <span className="text-balance">Talleres de helados</span>
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Aprende el arte de elaborar helados de la mano de nuestros chefs expertos. Tanto si eres principiante como si quieres perfeccionar técnicas avanzadas, tenemos un taller ideal para ti.
          </p>
        </div>
      </section>

      {/* Workshops Content */}
      <Suspense fallback={<WorkshopsSkeleton />}>
        <WorkshopsContent />
      </Suspense>
    </div>
  )
}

function WorkshopsSkeleton() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-2xl bg-muted p-4">
              <div className="aspect-video rounded-xl bg-muted-foreground/20" />
              <div className="mt-4 h-4 w-3/4 rounded bg-muted-foreground/20" />
              <div className="mt-2 h-3 w-full rounded bg-muted-foreground/20" />
              <div className="mt-2 h-3 w-1/2 rounded bg-muted-foreground/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
