"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/auth/auth-context"
import { Loader2 } from "lucide-react"

export function SignupDialog() {
  const { isSignupOpen, setIsSignupOpen, setIsLoginOpen, signup } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signup(name, email, password)
      setName("")
      setEmail("")
      setPassword("")
    } catch {
      // Handle error
    } finally {
      setIsLoading(false)
    }
  }

  const switchToLogin = () => {
    setIsSignupOpen(false)
    setIsLoginOpen(true)
  }

  return (
    <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
      <DialogContent className="sm:max-w-sm px-10">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center">Registrarse</DialogTitle>
          <DialogDescription>
            {/* Acompáñanos a descubrir deliciosos helados artesanales */}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-name">Nombre</Label>
            <Input
              id="signup-name"
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Correo electrónico</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="usuario@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Contraseña</Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-lg"
            />
          </div>
          <Button type="submit" className="w-full rounded-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Crear cuenta
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          {"¿Ya tienes una cuenta? "}
          <button
            onClick={switchToLogin}
            className="font-medium text-primary hover:underline"
          >
            Iniciar sesión
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
