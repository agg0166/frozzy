"use client"

import { useAuth } from "@/components/auth/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, Lock, LogIn } from "lucide-react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const { user, isAuthenticated, setIsLoginOpen } = useAuth()
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
          Necesitas iniciar sesión para ver tu perfil.
        </p>
        <Button onClick={() => setIsLoginOpen(true)} className="rounded-full">
          Iniciar sesión
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 pt-28 md:py-16 md:pt-32">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        <h1 className="mb-8 font-serif text-3xl font-bold">Mi perfil</h1>

        <div className="space-y-6">
          {/* Profile Card */}
          <Card className="rounded-2xl border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Información personal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </div>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    defaultValue={user?.name}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user?.email}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <Button className="rounded-full">Guardar cambios</Button>
            </CardContent>
          </Card>

          {/* Security Card */}
          <Card className="rounded-2xl border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Seguridad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Contraseña actual</Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="Introduce la contraseña actual"
                  className="rounded-lg"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nueva contraseña</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Introduce la nueva contraseña"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirma la nueva contraseña"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <Button variant="outline" className="rounded-full">
                Actualizar contraseña
              </Button>
            </CardContent>
          </Card>

          {/* Preferences Card */}
          <Card className="rounded-2xl border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Preferencias de correo electrónico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Boletín</p>
                    <p className="text-sm text-muted-foreground">
                      Recibe novedades sobre nuevos sabores y ofertas
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Suscrito
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Recordatorios de talleres</p>
                    <p className="text-sm text-muted-foreground">
                      Recibe notificaciones sobre próximas fechas de talleres
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Activado
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}