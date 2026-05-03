"use client"

import { useState } from "react"
import { Check, IceCream } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/components/cart/cart-context"

const bases = [
  { id: "vanilla", name: "Vainilla", price: 4.50, color: "bg-amber-100" },
  { id: "chocolate", name: "Chocolate", price: 4.50, color: "bg-amber-800" },
  { id: "strawberry", name: "Fresa", price: 4.50, color: "bg-pink-300" },
]

const sizes = [
  { id: "small", name: "Pequeño", price: 0, description: "1 bola" },
  { id: "medium", name: "Mediano", price: 1.50, description: "2 bolas" },
  { id: "large", name: "Grande", price: 3.00, description: "3 bolas" },
]

const toppings = [
  { id: "nuts", name: "Frutos secos", price: 0.75 },
  { id: "chocolate-chips", name: "Chips de chocolate", price: 0.75 },
  { id: "caramel", name: "Caramelo", price: 0.50 },
  { id: "fruit", name: "Fruta fresca", price: 1.00 },
]

const extras = [
  { id: "whipped-cream", name: "Nata montada", price: 0.50 },
  { id: "syrup", name: "Sirope de chocolate", price: 0.50 },
]

export default function CreatePage() {
  const { addItem, setIsCartOpen } = useCart()
  const [selectedBase, setSelectedBase] = useState("vanilla")
  const [selectedSize, setSelectedSize] = useState("small")
  const [selectedToppings, setSelectedToppings] = useState<string[]>([])
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [isAdded, setIsAdded] = useState(false)

  const handleToppingToggle = (toppingId: string) => {
    setSelectedToppings(prev =>
      prev.includes(toppingId)
        ? prev.filter(t => t !== toppingId)
        : [...prev, toppingId]
    )
  }

  const handleExtraToggle = (extraId: string) => {
    setSelectedExtras(prev =>
      prev.includes(extraId)
        ? prev.filter(e => e !== extraId)
        : [...prev, extraId]
    )
  }

  const calculateTotal = () => {
    const base = bases.find(b => b.id === selectedBase)
    const size = sizes.find(s => s.id === selectedSize)
    const toppingsTotal = selectedToppings.reduce((sum, t) => {
      const topping = toppings.find(tp => tp.id === t)
      return sum + (topping?.price || 0)
    }, 0)
    const extrasTotal = selectedExtras.reduce((sum, e) => {
      const extra = extras.find(ex => ex.id === e)
      return sum + (extra?.price || 0)
    }, 0)
    return (base?.price || 0) + (size?.price || 0) + toppingsTotal + extrasTotal
  }

  const handleAddToCart = () => {
    const base = bases.find(b => b.id === selectedBase)
    const size = sizes.find(s => s.id === selectedSize)
    const toppingNames = selectedToppings.map(t => toppings.find(tp => tp.id === t)?.name || "")
    const extraNames = selectedExtras.map(e => extras.find(ex => ex.id === e)?.name || "")

    addItem({
      id: `custom-${selectedBase}-${selectedSize}-${Date.now()}`,
      name: `Helado personalizado de ${base?.name}`,
      price: calculateTotal(),
      quantity: 1,
      size: size?.name || "Pequeño",
      image: "/images/create-feature.jpg",
      toppings: [...toppingNames, ...extraNames].filter(Boolean),
    })

    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
      setIsCartOpen(true)
    }, 1000)
  }

  const base = bases.find(b => b.id === selectedBase)
  const size = sizes.find(s => s.id === selectedSize)

  return (
    <div className="min-h-screen bg-background pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <IceCream className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Crea tu helado
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Diseña tu helado perfecto. Elige base, tamaño, toppings y extras.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Builder */}
          <div className="space-y-6 lg:col-span-2">

            {/* Base */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. Elige la base</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedBase}
                  onValueChange={setSelectedBase}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  {bases.map((baseOption) => (
                    <div key={baseOption.id}>
                      <RadioGroupItem
                        value={baseOption.id}
                        id={`base-${baseOption.id}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`base-${baseOption.id}`}
                        className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-muted p-4 transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                      >
                        <div className={`h-12 w-12 rounded-full ${baseOption.color}`} />
                        <span className="font-medium">{baseOption.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {baseOption.price.toFixed(2)} €
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Size */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. Elige tamaño</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  {sizes.map((sizeOption) => (
                    <div key={sizeOption.id}>
                      <RadioGroupItem
                        value={sizeOption.id}
                        id={`size-${sizeOption.id}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`size-${sizeOption.id}`}
                        className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-muted p-4 transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                      >
                        <span className="font-medium">{sizeOption.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {sizeOption.description}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {sizeOption.price > 0 ? `+${sizeOption.price.toFixed(2)} €` : "Incluido"}
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Toppings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3. Añade toppings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {toppings.map((topping) => (
                    <div
                      key={topping.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                        selectedToppings.includes(topping.id)
                          ? "border-primary bg-primary/5"
                          : "border-muted"
                      }`}
                      onClick={() => handleToppingToggle(topping.id)}
                    >
                      <Checkbox
                        id={`topping-${topping.id}`}
                        checked={selectedToppings.includes(topping.id)}
                        onCheckedChange={() => handleToppingToggle(topping.id)}
                      />
                      <Label className="flex flex-1 cursor-pointer flex-col">
                        <span className="text-sm font-medium">{topping.name}</span>
                        <span className="text-xs text-muted-foreground">
                          +{topping.price.toFixed(2)} €
                        </span>
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Extras */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">4. Extras (Opcional)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {extras.map((extra) => (
                    <div
                      key={extra.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                        selectedExtras.includes(extra.id)
                          ? "border-primary bg-primary/5"
                          : "border-muted"
                      }`}
                      onClick={() => handleExtraToggle(extra.id)}
                    >
                      <Checkbox
                        id={`extra-${extra.id}`}
                        checked={selectedExtras.includes(extra.id)}
                        onCheckedChange={() => handleExtraToggle(extra.id)}
                      />
                      <Label className="flex flex-1 cursor-pointer flex-col">
                        <span className="text-sm font-medium">{extra.name}</span>
                        <span className="text-xs text-muted-foreground">
                          +{extra.price.toFixed(2)} €
                        </span>
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Tu creación</CardTitle>
                </CardHeader>
                <CardContent className="p-6">

                  <div className="mb-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{base?.name}</span>
                      <span>{base?.price.toFixed(2)} €</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>{size?.name}</span>
                      <span>
                        {(size?.price || 0) > 0 ? `+${size?.price.toFixed(2)} €` : "—"}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 border-t pt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold">
                      {calculateTotal().toFixed(2)} €
                    </span>
                  </div>

                  <Button
                    className="w-full rounded-full"
                    onClick={handleAddToCart}
                    disabled={isAdded}
                  >
                    {isAdded ? (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        Añadido
                      </>
                    ) : (
                      "Añadir al carrito"
                    )}
                  </Button>

                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}