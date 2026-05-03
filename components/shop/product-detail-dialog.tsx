"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Minus, Plus, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/components/cart/cart-context"
import type { Product } from "@/lib/products"

interface ProductDetailDialogProps {
  product: Product | null
  onClose: () => void
}

export function ProductDetailDialog({ product, onClose }: ProductDetailDialogProps) {
  const { addItem, setIsCartOpen } = useCart()
  const [selectedSize, setSelectedSize] = useState(0)
  const [selectedToppings, setSelectedToppings] = useState<string[]>([])
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  if (!product) return null

  const handleToppingChange = (topping: string) => {
    setSelectedToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((t) => t !== topping)
        : [...prev, topping]
    )
  }

  const calculateTotal = () => {
    const sizePrice = product.sizes[selectedSize].price
    const toppingsPrice = selectedToppings.reduce((sum, topping) => {
      const toppingData = product.toppings.find((t) => t.name === topping)
      return sum + (toppingData?.price || 0)
    }, 0)
    return (sizePrice + toppingsPrice) * quantity
  }

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedSize}-${selectedToppings.join("-")}`,
      name: product.name,
      price: product.sizes[selectedSize].price + selectedToppings.reduce((sum, t) => {
        const toppingData = product.toppings.find((tp) => tp.name === t)
        return sum + (toppingData?.price || 0)
      }, 0),
      quantity,
      size: product.sizes[selectedSize].name,
      image: product.image,
      toppings: selectedToppings,
    })
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
      onClose()
      setIsCartOpen(true)
    }, 1000)
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
      // Reset state
      setSelectedSize(0)
      setSelectedToppings([])
      setQuantity(1)
      setIsAdded(false)
    }
  }

  return (
    <Dialog open={!!product} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] w-[95vw] max-w-3xl sm:max-w-4xl overflow-y-auto p-4 sm:p-8 sm:pb-16">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="md:grid gap-6 grid-cols-2 md:grid-cols-3">
          {/* Image */}
          <div className="relative aspect-[2/2.6] w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col md:col-span-2">
            {/* Dietary Badges */}
            {product.dietary.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {product.dietary.map((diet) => (
                  <Badge key={diet} variant="secondary" className="rounded-full">
                    {diet}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title and Rating */}
            <h2 className="mb-2 font-serif text-2xl font-bold">{product.name}</h2>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} comentarios)
              </span>
            </div>

            <p className="mb-6 text-muted-foreground">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="mb-3 font-medium">Tamaño</h3>
              <RadioGroup
                value={selectedSize.toString()}
                onValueChange={(value) => setSelectedSize(parseInt(value))}
                className="flex gap-3"
              >
                {product.sizes.map((size, index) => (
                  <div key={size.name} className="flex-1">
                    <RadioGroupItem
                      value={index.toString()}
                      id={`size-${index}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`size-${index}`}
                      className="flex cursor-pointer flex-col items-center rounded-xl border-2 border-muted p-3 transition-colors peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                    >
                      <span className="text-sm font-medium">{size.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {size.price.toFixed(2)}€
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Toppings */}
            <div className="mb-6">
              <h3 className="mb-3 font-medium">Añadir ingredientes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.toppings.map((topping) => (
                  <div
                    key={topping.name}
                    className="flex items-center gap-2 rounded-lg border p-3"
                  >
                    <Checkbox
                      id={`topping-${topping.name}`}
                      checked={selectedToppings.includes(topping.name)}
                      onCheckedChange={() => handleToppingChange(topping.name)}
                    />
                    <Label
                      htmlFor={`topping-${topping.name}`}
                      className="flex flex-1 cursor-pointer items-center justify-between text-sm"
                    >
                      <span>{topping.name}</span>
                      <span className="text-muted-foreground">
                        +{topping.price.toFixed(2)}€
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6 flex items-center justify-between">
              <span className="font-medium">Cantidad</span>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left min-w-30">
                <span className="text-sm text-muted-foreground">Total</span>
                <p className="text-2xl font-bold">{calculateTotal().toFixed(2)}€</p>
              </div>
              <Button
                size="lg"
                className="w-full sm:w-auto sm:flex-1 rounded-full"
                onClick={handleAddToCart}
                disabled={isAdded}
              >
                {isAdded ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Añadido!
                  </>
                ) : (
                  "Añadir al carrito"
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
