"use client"

import { useAuth } from "@/components/auth/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, LogIn, ShoppingBag, ArrowRight } from "lucide-react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const mockOrders = [
  {
    id: "ORD-001",
    date: "15 de marzo de 2026",
    status: "entregado",
    total: 28.97,
    items: [
      { name: "Caramelo salado", size: "Mediano", quantity: 2, image: "/images/products/caramel-1.png" },
      { name: "Chocolate belga", size: "Pequeño", quantity: 1, image: "/images/products/chocolate-1.png" },
    ],
  },
  {
    id: "ORD-002",
    date: "8 de marzo de 2026",
    status: "entregado",
    total: 45.96,
    items: [
      { name: "Sueño de pistacho", size: "Grande", quantity: 2, image: "/images/products/pistachio-1.png" },
      { name: "Vainilla clásica", size: "Mediano", quantity: 3, image: "/images/products/vanilla-1.png" },
    ],
  },
]

const statusColors = {
  pendiente: "bg-yellow-100 text-yellow-800",
  procesando: "bg-blue-100 text-blue-800",
  enviado: "bg-purple-100 text-purple-800",
  entregado: "bg-green-100 text-green-800",
}

export default function OrdersPage() {
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
          Necesitas iniciar sesión para ver tus pedidos.
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
          <h1 className="font-serif text-3xl font-bold">Mis pedidos</h1>
          <Button asChild className="rounded-full">
            <Link href="/shop">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Seguir comprando
            </Link>
          </Button>
        </div>

        {mockOrders.length > 0 ? (
          <div className="space-y-6">
            {mockOrders.map((order) => (
              <Card key={order.id} className="rounded-2xl border-0 shadow-md">
                <CardContent className="p-6">
                  {/* Order Header */}
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                    </div>
                    <Badge className={`rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}>
                      {order.status}
                    </Badge>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-muted">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.size} x {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Footer */}
                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Total: </span>
                      <span className="font-bold">${order.total.toFixed(2)}</span>
                    </div>
                    {/* <Button variant="outline" size="sm" className="rounded-full">
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 font-semibold">Aún no hay pedidos</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Empieza a comprar para ver aquí tus pedidos
            </p>
            <Button asChild className="rounded-full">
              <Link href="/shop">Ver productos</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}