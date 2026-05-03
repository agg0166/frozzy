"use client"

import { useState, useMemo } from "react"
import { products, categories, dietaryOptions } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"
import { ProductDetailDialog } from "@/components/shop/product-detail-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type { Product } from "@/lib/products"

export function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDietary, setSelectedDietary] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false
      }

      // Dietary filter
      if (selectedDietary.length > 0) {
        const hasDietary = selectedDietary.some((diet) =>
          product.dietary.includes(diet)
        )
        if (!hasDietary) return false
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        )
      }

      return true
    })
  }, [selectedCategory, selectedDietary, searchQuery])

  const handleDietaryChange = (value: string) => {
    setSelectedDietary((prev) =>
      prev.includes(value)
        ? prev.filter((d) => d !== value)
        : [...prev, value]
    )
  }

  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedDietary([])
    setSearchQuery("")
  }

  const hasActiveFilters =
    selectedCategory !== "all" || selectedDietary.length > 0 || searchQuery

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
              placeholder="Buscar sabores..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full pl-10"
            />
          </div>

          <div className="flex items-center gap-4">
            {/* Category Tabs */}
            <div className="hidden flex-wrap gap-2 md:flex">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Mobile Filters */}
            <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filtros
                  {hasActiveFilters && (
                    <Badge className="ml-2 h-5 w-5 rounded-full p-0 text-xs">
                      !
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-8 pt-2">
                <SheetHeader className="px-0">
                  <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="mb-3 font-medium">Categoría</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category.value}
                          variant={selectedCategory === category.value ? "default" : "outline"}
                          size="sm"
                          className="rounded-full"
                          onClick={() => setSelectedCategory(category.value)}
                        >
                          {category.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Dietary */}
                  <div>
                    <h3 className="mb-3 font-medium">Preferencias alimentarias</h3>
                    <div className="space-y-3">
                      {dietaryOptions.map((option) => (
                        <div key={option.value} className="flex items-center gap-2">
                          <Checkbox
                            id={`mobile-${option.value}`}
                            checked={selectedDietary.includes(option.value)}
                            onCheckedChange={() => handleDietaryChange(option.value)}
                          />
                          <Label htmlFor={`mobile-${option.value}`}>{option.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={clearFilters}
                    >
                      Borrar todos los filtros
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Dietary Filter */}
            <div className="hidden items-center gap-2 md:flex">
              {dietaryOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={selectedDietary.includes(option.value) ? "secondary" : "ghost"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => handleDietaryChange(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Filtros activos:</span>
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="gap-1 rounded-full">
                {categories.find((c) => c.value === selectedCategory)?.label}
                <button onClick={() => setSelectedCategory("all")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedDietary.map((diet) => (
              <Badge key={diet} variant="secondary" className="gap-1 rounded-full">
                {dietaryOptions.find((d) => d.value === diet)?.label}
                <button onClick={() => handleDietaryChange(diet)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {searchQuery && (
              <Badge variant="secondary" className="gap-1 rounded-full">
                Busqueda: {searchQuery}
                <button onClick={() => setSearchQuery("")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              onClick={clearFilters}
            >
              Borrar todo 
            </Button>
          </div>
        )}

        {/* Results Count */}
        <p className="mb-6 text-sm text-muted-foreground">
          Mostrando {filteredProducts.length} de {products.length} productos
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 font-semibold">No se han encontrado productos</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Prueba a modificar los filtros o la búsqueda
            </p>
            <Button variant="outline" onClick={clearFilters} className="rounded-full">
              Borrar filtros
            </Button>
          </div>
        )}
      </div>

      {/* Product Detail Dialog */}
      <ProductDetailDialog
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
