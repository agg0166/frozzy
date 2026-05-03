"use client"

import { useState, useEffect } from "react"
import { X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem("frozzy-discount-popup")
    
    if (!hasSeenPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("frozzy-discount-popup", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md rounded-2xl [&>button]:hidden" aria-describedby="discount-description">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 rounded-full p-1.5 hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader className="text-center pt-4">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Gift className="h-8 w-8" />
          </div>
          <DialogTitle className="font-serif text-2xl font-bold">
            ¡Una oferta especial para ti!
          </DialogTitle>
          <DialogDescription id="discount-description" className="text-base pt-2">
            ¡Bienvenido a Frozzy! Disfruta de un <span className="font-semibold text-primary">15% de descuento</span> en tu primer pedido al suscribirte a nuestro boletín.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 pt-4">
          <Button 
            className="w-full rounded-full"
            onClick={() => {
              setIsOpen(false)
              // Scroll to newsletter section
              const newsletterSection = document.querySelector('#newsletter')
              if (newsletterSection) {
                newsletterSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Reclamar mi descuento
          </Button>
          <Button 
            variant="ghost" 
            className="w-full rounded-full text-muted-foreground"
            onClick={() => setIsOpen(false)}
          >
            Tal vez más tarde
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground pt-2">
          Usa el código <span className="font-semibold">BIENVENIDO42</span> al finalizar la compra
        </p>
      </DialogContent>
    </Dialog>
  )
}
