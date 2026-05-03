"use client"

import Image from "next/image"
import { Star, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { workshopLevels, type Workshop } from "@/lib/workshops"

interface WorkshopCardProps {
  workshop: Workshop
  onViewDetails: () => void
}

const levelColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800",
}

export function WorkshopCard({ workshop, onViewDetails }: WorkshopCardProps) {
  const spotsPercentage = (workshop.spotsLeft / workshop.spotsTotal) * 100

  return (
    <Card className="pt-0 group overflow-hidden rounded-2xl border-0 bg-card shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={workshop.image}
          alt={workshop.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Level Badge */}
        <Badge
          className={`absolute left-3 top-3 rounded-full ${levelColors[workshop.level]}`}
        >
          {workshopLevels.find((l) => l.value === workshop.level)?.label}
        </Badge>
        {/* Spots Badge */}
        {workshop.spotsLeft <= 3 && (
          <Badge
            variant="destructive"
            className="absolute right-3 top-3 rounded-full"
          >
            ¡Solo quedan {workshop.spotsLeft} plazas!
          </Badge>
        )}
      </div>
      <CardContent className="p-5">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{workshop.rating}</span>
          <span className="text-xs text-muted-foreground">
            ({workshop.reviews} comentarios)
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 font-serif text-xl font-semibold transition-colors group-hover:text-primary">
          {workshop.title}
        </h3>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {workshop.description}
        </p>

        {/* Details */}
        <div className="mb-4 space-y-2 text-sm text-muted-foreground">
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

        {/* Spots Progress */}
        <div className="mb-4">
          <div className="mb-1 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-3 w-3" />
              {workshop.spotsLeft} de {workshop.spotsTotal} plazas disponibles
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${spotsPercentage}%` }}
            />
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">{workshop.price}€</span>
            <span className="text-sm text-muted-foreground">/persona</span>
          </div>
          <Button onClick={onViewDetails} className="rounded-full">
            Inscríbete ahora
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
