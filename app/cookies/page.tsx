import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de cookies | Frozzy",
  description: "Descubre cómo Frozzy recopila, utiliza y protege tus datos personales.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Política de cookies
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Última actualización: 2 de mayo de 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl font-bold mb-4">¿Qué son las cookies?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Archivos que recuerdan preferencias y mejoran la experiencia de usuario. Las cookies permiten también recordar preferencias del usuario en futuras visitas, agilizando la navegación y optimizando el rendimiento del sitio.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">Tabla de cookies</h2>
            <table className="tabla w-full border text-muted-foreground mb-6 leading-relaxed">
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Finalidad</th>
                  <th>Duración</th>
                  <th>Gestión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Session ID</b></td>
                  <td>Mantener sesión</td>
                  <td>Sesión</td>
                  <td>Cookie propia</td>
                </tr>
                <tr>
                  <td><b>Language</b></td>
                  <td>Idioma</td>
                  <td>1 año</td>
                  <td>Cookie propia</td>
                </tr>
                <tr>
                  <td><b>Cart</b></td>
                  <td>Carrito</td>
                  <td>Sesión</td>
                  <td>Cookie propia</td>
                </tr>
                <tr>
                  <td><b>_ga (Google Analytics)</b></td>
                  <td>Estadísticas</td>
                  <td>2 años</td>
                  <td>Terceros (Google)</td>
                </tr>
                <tr>
                  <td><b>_gid (Google Analytics)</b></td>
                  <td>Análisis</td>
                  <td>24 horas</td>
                  <td>Terceros (Google)</td>
                </tr>
                   
              </tbody>
            </table>

            <h2 className="font-serif text-2xl font-bold mb-4">Gestión de cookies</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li><b>Banner de cookies al entrar:</b> aceptar, rechazar o configurar.</li>
              <li><b>Configuración desde navegador:</b> bloquear, eliminar o limitar.</li>
              <li>Desactivar cookies técnicas puede afectar funcionalidades.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Frozzy recomienda a los usuarios revisar periódicamente la configuración de cookies, ya que cambios en el navegador o actualizaciones del sistema pueden restablecer la aceptación de cookies.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Frozzy recomienda que los usuarios actualicen su consentimiento tras cambios en la política de cookies o al limpiar el historial del navegador, asegurando que las preferencias siempre se respeten.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
