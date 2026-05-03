import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Workshop, workshops } from "@/lib/workshops"

interface WorkshopCardProps {
  onViewDetails: (workshop: Workshop | null) => void
}

export function WorkshopsPreview({ onViewDetails }: WorkshopCardProps) {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold tracking-tight md:text-4xl">
              <span className="text-balance">Próximos talleres</span>
            </h2>
            <p className="text-pretty text-muted-foreground">
              Participa en nuestros talleres prácticos y aprende el arte de hacer helado.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/workshops">
              Ver todos los talleres
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workshops.filter((_, i) => i < 3).map((workshop) => (
            <Card
              key={workshop.id}
              className="group overflow-hidden rounded-2xl border-0 bg-card shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Quedan {workshop.spotsLeft} plazas
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold transition-colors group-hover:text-primary">
                  {workshop.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {workshop.description}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    {workshop.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {workshop.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {workshop.location}
                  </div>
                </div>
                <Button className="mt-6 w-full rounded-full"
                  onClick={() => onViewDetails(workshop)}>
                    Inscríbete ahora
                  {/* <Link href={`/workshops/${workshop.id}`}>Inscríbete ahora</Link> */}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
