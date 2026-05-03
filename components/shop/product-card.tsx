"use client"

import Image from "next/image"
import { Star, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { dietaryOptions, type Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  onViewDetails: () => void
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <Card className="pt-0 group overflow-hidden rounded-2xl border-0 bg-card shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[2/2.6] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dietary Badges */}
        {product.dietary.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1">
            {product.dietary.slice(0, 2).map((diet) => (
              <Badge
                key={diet}
                variant="secondary"
                className="rounded-full bg-background/90 text-xs backdrop-blur-sm"
              >
                {dietaryOptions.find((d) => d.value === diet)?.label}
              </Badge>
            ))}
          </div>
        )}
        {/* Quick Add Button */}
        <Button
          size="icon"
          className="absolute bottom-3 right-3 h-10 w-10 rounded-full opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
          onClick={onViewDetails}
        >
          <Plus className="h-5 w-5" />
          <span className="sr-only">Añadir al carrito</span>
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
        <h3 className="mb-1 font-semibold transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">
            Desde {product.sizes[0].price.toFixed(2)}€
          </span>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={onViewDetails}
          >
            Ver detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
