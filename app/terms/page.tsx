import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos de servicio | Frozzy",
  description: "Descubre cómo Frozzy recopila, utiliza y protege tus datos personales.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Términos de servicio
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Última actualización: 2 de mayo de 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl font-bold mb-4">1. Objeto del contrato</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            Regula la compra de helados, talleres y productos. Todas las compras se rigen por la legislación española.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">2. Proceso de compra</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Selección de productos/talleres.</li>
              <li>Añadir al carrito.</li>
              <li>Revisar pedido.</li>
              <li>Confirmar datos personales.</li>
              <li>Elegir método de pago.</li>
              <li>Confirmar pedido.</li>
              <li>Seguimiento desde la cuenta de usuario.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            Durante el proceso, el usuario recibe información clara sobre impuestos aplicables, disponibilidad de stock y plazos de recogida, asegurando transparencia y confianza.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">3. Productos y precios</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Helados, talleres y kits.</li>
              <li>Precios con IVA incluido.</li>
              <li>Disponibilidad sujeta a stock.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            Cada producto o taller incluye información sobre alérgenos, ingredientes y recomendaciones de consumo, fomentando la seguridad del cliente y el cumplimiento de normativa alimentaria.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">4. Formas de pago</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            Tarjeta, PayPal, Bizum, transferencia o contrarreembolso. Pagos seguros y cifrados.
            </p>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Cada transacción cuenta con protocolos de cifrado SSL que garantizan la seguridad de la información financiera y confidencial de los usuarios.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">5. Envíos</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Recogida en tienda física.</li>
              <li>Fecha y hora seleccionadas en el proceso de compra.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            Los usuarios reciben confirmación por correo electrónico con todos los detalles de la recogida, incluyendo instrucciones de acceso y recomendaciones de transporte para mantener la calidad de los productos.
            </p>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Para eventos o talleres especiales, se informará sobre materiales incluidos, duración estimada y requisitos de participación, garantizando una experiencia completa y segura.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">6. Derecho de desistimiento</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>14 días desde la compra.</li>
              <li>Excluye productos personalizados o perecederos.</li>
              <li>Solicitud vía email con datos del pedido.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            El usuario también puede solicitar modificación de pedido dentro del plazo permitido, siempre que los productos no hayan sido preparados o personalizados.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">7. Devoluciones y reembolsos</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Productos defectuosos o errores en pedido: sustitución o reembolso.</li>
              <li>Avisar en un plazo máximo de 14 días.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            En caso de incidencias, Frozzy ofrece atención personalizada para buscar soluciones alternativas, manteniendo la satisfacción del cliente como prioridad.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">8. Garantías legales</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>2 años por defectos de fabricación o incumplimiento de características.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">9. Reclamaciones</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Correo: info@frozzy.com.</li>
              <li>Respuesta en un plazo máximo de 30 días.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            Las reclamaciones pueden presentarse también mediante formulario de contacto web, garantizando registro y seguimiento de la incidencia hasta su resolución.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">10. Ley aplicable y jurisdicción</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Legislación española: LSSI-CE, Ley de Consumidores, RGPD.</li>
              <li>Tribunales competentes de Madrid o lugar de residencia del consumidor.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
