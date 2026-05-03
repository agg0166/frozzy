"use client"

import { useAuth } from "@/components/auth/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, LogIn, Clock, MapPin, ArrowRight } from "lucide-react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const mockEnrollments = [
  {
    id: "ENR-001",
    workshop: {
      title: "Elaboración clásica de gelato",
      date: "15 de abril de 2026",
      time: "14:00 - 17:00",
      location: "Cocina principal",
      image: "/images/workshops/gelato-making.jpg",
    },
    status: "próximo",
    enrolledDate: "10 de marzo de 2026",
  },
  {
    id: "ENR-002",
    workshop: {
      title: "Toppings y salsas artesanales",
      date: "20 de febrero de 2026",
      time: "15:00 - 18:00",
      location: "Cocina principal",
      image: "/images/workshops/toppings.jpg",
    },
    status: "completado",
    enrolledDate: "1 de febrero de 2026",
  },
]

const statusColors = {
  próximo: "bg-blue-100 text-blue-800",
  completado: "bg-green-100 text-green-800",
  cancelado: "bg-red-100 text-red-800",
}

export default function EnrollmentsPage() {
  const { isAuthenticated, setIsLoginOpen } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-16">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <LogIn className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="mb-2 text-2xl font-bold">Inicio de sesión requerido</h1>
        <p className="mb-6 text-center text-muted-foreground">
          Necesitas iniciar sesión para ver tus inscripciones a talleres.
        </p>
        <Button onClick={() => setIsLoginOpen(true)} className="rounded-full">
          Iniciar sesión
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 pt-28 md:py-16 md:pt-32">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-serif text-3xl font-bold">Mis talleres</h1>
          <Button asChild className="rounded-full">
            <Link href="/workshops">
              <Calendar className="mr-2 h-4 w-4" />
              Ver talleres
            </Link>
          </Button>
        </div>

        {mockEnrollments.length > 0 ? (
          <div className="space-y-6">
            {mockEnrollments.map((enrollment) => (
              <Card key={enrollment.id} className="py-0 overflow-hidden rounded-2xl border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="relative aspect-video h-auto w-full sm:aspect-square sm:w-48">
                      <Image
                        src={enrollment.workshop.image}
                        alt={enrollment.workshop.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <h3 className="font-serif text-lg font-semibold">
                          {enrollment.workshop.title}
                        </h3>
                        <Badge className={`rounded-full ${statusColors[enrollment.status as keyof typeof statusColors]}`}>
                          {enrollment.status}
                        </Badge>
                      </div>

                      <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          {enrollment.workshop.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          {enrollment.workshop.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          {enrollment.workshop.location}
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          Inscrito el {enrollment.enrolledDate}
                        </p>
                        {/* <Button variant="outline" size="sm" className="rounded-full">
                          Ver detalles
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Calendar className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 font-semibold">Aún no hay inscripciones a talleres</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Apúntate a un taller para comenzar tu experiencia con el helado
            </p>
            <Button asChild className="rounded-full">
              <Link href="/workshops">Ver talleres</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}