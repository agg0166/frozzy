"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Calendar, Clock, MapPin, Users, Check, LogIn } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth/auth-context"
import { workshopLevels, type Workshop } from "@/lib/workshops"

interface WorkshopDetailDialogProps {
  workshop: Workshop | null
  onClose: () => void
}

const levelColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800",
}

export function WorkshopDetailDialog({ workshop, onClose }: WorkshopDetailDialogProps) {
  const { isAuthenticated, setIsLoginOpen } = useAuth()
  const [isEnrolled, setIsEnrolled] = useState(false)

  if (!workshop) return null

  const handleEnroll = () => {
    if (!isAuthenticated) {
      setIsLoginOpen(true)
      return
    }
    setIsEnrolled(true)
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
      setIsEnrolled(false)
    }
  }

  return (
    <Dialog open={!!workshop} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader className="sr-only">
          <DialogTitle>{workshop.title}</DialogTitle>
        </DialogHeader>

        {/* Hero Image */}
        <div className="relative -mx-6 -mt-6 mb-70 aspect-video overflow-hidden">
          <Image
            src={workshop.image}
            alt={workshop.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className={`mb-2 rounded-full ${levelColors[workshop.level]}`}>
              {workshopLevels.find((l) => l.value === workshop.level)?.label}
            </Badge>
            <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
              {workshop.title}
            </h2>
          </div>
        </div>

        <div className="relative space-y-6 pt-2">
          {/* Rating and Instructor */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{workshop.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({workshop.reviews} comentarios)
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Instructor: <span className="font-medium text-foreground">{workshop.instructor}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-2 font-semibold">Acerca de este taller</h3>
            <p className="text-muted-foreground">{workshop.longDescription}</p>
          </div>

          {/* Details Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-muted/50 p-4">
              <div className="mb-3 flex items-center gap-2 font-medium">
                <Calendar className="h-5 w-5 text-primary" />
                Fecha y hora
              </div>
              <p className="text-sm text-muted-foreground">{workshop.date}</p>
              <p className="text-sm text-muted-foreground">{workshop.time}</p>
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              <div className="mb-3 flex items-center gap-2 font-medium">
                <MapPin className="h-5 w-5 text-primary" />
                Ubicación
              </div>
              <p className="text-sm text-muted-foreground">{workshop.location}</p>
              {/* <p className="text-sm text-muted-foreground">Estudio Frozzy</p> */}
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="mb-3 font-semibold">¿Qué incluye?</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {workshop.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Spots Available */}
          <div className="rounded-xl border p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                {workshop.spotsLeft} de {workshop.spotsTotal} plazas disponibles
              </div>
              {workshop.spotsLeft <= 3 && (
                <Badge variant="destructive" className="rounded-full">
                  ¡Casi lleno!
                </Badge>
              )}
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${(workshop.spotsLeft / workshop.spotsTotal) * 100}%` }}
              />
            </div>
          </div>

          {/* Enrollment */}
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-primary/5 p-4 sm:flex-row">
            <div>
              <span className="text-3xl font-bold">{workshop.price}€</span>
              <span className="text-muted-foreground">/persona</span>
            </div>

            {isEnrolled ? (
              <div className="flex items-center gap-2 rounded-full bg-green-100 px-6 py-3 font-medium text-green-800">
                <Check className="h-5 w-5" />
                ¡Te has inscrito!
              </div>
            ) : (
              <Button
                size="lg"
                className="w-full rounded-full sm:w-auto"
                onClick={handleEnroll}
                disabled={workshop.spotsLeft === 0}
              >
                {!isAuthenticated && <LogIn className="mr-2 h-4 w-4" />}
                {workshop.spotsLeft === 0 ? "Agotado" : isAuthenticated ? "Inscríbete ahora" : "Inicia sesión para inscribirte"}
              </Button>
            )}
          </div>

          {!isAuthenticated && (
            <p className="text-center text-sm text-muted-foreground">
              Debes iniciar sesión para inscribirte en los talleres.{" "}
              <button
                onClick={() => setIsLoginOpen(true)}
                className="font-medium text-primary hover:underline"
              >
                Inicia sesión aquí
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
