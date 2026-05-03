"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Loader2 } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section id="newsletter" className="bg-primary py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-primary p-8 text-center md:p-12">
          <h2 className="mb-4 font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
            <span className="text-balance">Mantente al tanto de todo</span>
          </h2>
          <p className="mb-8 text-pretty text-primary-foreground/80">
            Suscríbete a nuestro boletín para descubrir sabores exclusivos, ofertas especiales y ser el primero en conocer nuestros lanzamientos de temporada.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 text-primary-foreground">
              <CheckCircle2 className="h-6 w-6" />
              <span className="font-medium">¡Gracias por suscribirte!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Introduce tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-full border-primary-foreground/80 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/80 focus-visible:ring-primary-foreground"
              />
              <Button
                type="submit"
                variant="secondary"
                className="rounded-full px-8"
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Suscribirse
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-primary-foreground/60">
            Al suscribirte, aceptas recibir correos electrónicos promocionales. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}
