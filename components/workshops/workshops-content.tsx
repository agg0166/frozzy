"use client"

import { useState, useMemo } from "react"
import { workshops, workshopLevels } from "@/lib/workshops"
import { WorkshopCard } from "@/components/workshops/workshop-card"
import { WorkshopDetailDialog } from "@/components/workshops/workshop-detail-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import type { Workshop } from "@/lib/workshops"

export function WorkshopsContent() {
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null)

  const filteredWorkshops = useMemo(() => {
    return workshops.filter((workshop) => {
      // Level filter
      if (selectedLevel !== "all" && workshop.level !== selectedLevel) {
        return false
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          workshop.title.toLowerCase().includes(query) ||
          workshop.description.toLowerCase().includes(query)
        )
      }

      return true
    })
  }, [selectedLevel, searchQuery])

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Filters Bar */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar talleres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full pl-10"
            />
          </div>

          {/* Level Tabs */}
          <div className="flex flex-wrap gap-2">
            {workshopLevels.map((level) => (
              <Button
                key={level.value}
                variant={selectedLevel === level.value ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedLevel(level.value)}
              >
                {level.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="mb-6 text-sm text-muted-foreground">
          Mostrando {filteredWorkshops.length} de {workshops.length} talleres
        </p>

        {/* Workshops Grid */}
        {filteredWorkshops.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredWorkshops.map((workshop) => (
              <WorkshopCard
                key={workshop.id}
                workshop={workshop}
                onViewDetails={() => setSelectedWorkshop(workshop)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 font-semibold">No se han encontrado talleres</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Prueba a modificar los filtros o la búsqueda
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedLevel("all")
                setSearchQuery("")
              }}
              className="rounded-full"
            >
              Borrar filtros
            </Button>
          </div>
        )}
      </div>

      {/* Workshop Detail Dialog */}
      <WorkshopDetailDialog
        workshop={selectedWorkshop}
        onClose={() => setSelectedWorkshop(null)}
      />
    </section>
  )
}
