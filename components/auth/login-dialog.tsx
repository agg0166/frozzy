"use client"

import { useEffect, useState } from "react"
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
import { Checkbox } from "../ui/checkbox"

export function LoginDialog() {
  const { isLoginOpen, setIsLoginOpen, setIsSignupOpen, login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await login(email, password)

      if (rememberMe) {
        localStorage.setItem("credentials", JSON.stringify({ email, password }))
      } else {
        localStorage.removeItem("credentials")
      }

      setEmail("")
      setPassword("")
    } catch {
      // Handle error
    } finally {
      setIsLoading(false)
    }
  }

  const switchToSignup = () => {
    setIsLoginOpen(false)
    setIsSignupOpen(true)
  }

  return (
    <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
      <DialogContent className="bg-background sm:max-w-sm px-10">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center">Iniciar sesión</DialogTitle>
          <DialogDescription>
            {/* Inicia sesión en tu cuenta para seguir comprando */}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="usuario@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-lg"
            />
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="privacy"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(!!checked)}
              className="mt-1"
            />
            <Label htmlFor="privacy" className="text-sm font-normal leading-relaxed cursor-pointer">
              Recordar este dispositivo
            </Label>
          </div>
          <Button type="submit" className="w-full rounded-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Iniciar sesión
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          {"¿Aún no tienes una cuenta? "}
          <button
            onClick={switchToSignup}
            className="font-medium text-primary hover:underline"
          >
            Registrarse
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
