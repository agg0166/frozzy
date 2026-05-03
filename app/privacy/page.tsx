import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de privacidad | Frozzy",
  description: "Descubre cómo Frozzy recopila, utiliza y protege tus datos personales.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Política de privacidad
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Última actualización: 2 de mayo de 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl font-bold mb-4">1. Responsable del tratamiento</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Frozzy S.L., Calle de los Helados, 12, Madrid.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <b>Email:</b> info@frozzy.com. <br></br> Datos tratados con confidencialidad según RGPD y LOPDGDD.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">2. Finalidad del tratamiento</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Gestionar pedidos y compras.</li>
              <li>Registro de usuarios y perfiles.</li>
              <li>Atención al cliente.</li>
              <li>Envío de comunicaciones (solo con consentimiento).</li>
              <li>Cumplimiento legal y análisis de uso del sitio.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Los datos también se usan para mejorar la interacción con los usuarios, adaptar el contenido según preferencias y optimizar la navegación, siempre respetando los derechos de privacidad.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">3. Base jurídica</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Ejecución de contrato/precontrato.</li>
              <li>Consentimiento explícito.</li>
              <li>Cumplimiento legal.</li>
              <li>Interés legítimo (mejora del sitio).</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">4. Datos recogidos</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li><b>Identificación:</b> nombre y apellidos.</li>
              <li><b>Contacto:</b> email, teléfono y dirección.</li>
              <li><b>Navegación:</b> páginas visitadas, dispositivo, tiempo.</li>
              <li><b>Perfil:</b> historial de pedidos y talleres.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              No se recaban datos sensibles.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Se puede registrar también información sobre preferencias de comunicación y suscripciones a eventos, con el fin de enviar únicamente información relevante y ajustada al interés del usuario.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">5. Plazo de conservación</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li><b>Pedidos:</b> 5 años.</li>
              <li><b>Newsletter:</b> hasta baja voluntaria.</li>
              <li><b>Datos de navegación:</b> 2 años, anonimizados después.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">6. Destinatarios</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Solo proveedores de servicios o cumplimiento legal.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">7. Derechos de usuario</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Acceso, rectificación, supresión, limitación, portabilidad, oposición y retirada de consentimiento. Solicitudes a info@frozzy.com
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              El usuario puede además solicitar información sobre medidas de seguridad implementadas y recibir asesoramiento sobre cómo proteger sus datos personales, fomentando transparencia y confianza en el uso de la plataforma.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">8. Tratamiento por formularios</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li><b>Contacto:</b> consultas.</li>
              <li><b>Registro:</b> gestión de perfil.</li>
              <li><b>Compra:</b> pedidos y reservas.</li>
              <li><b>Newsletter:</b> promociones y novedades.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Para cada formulario se proporciona un aviso de privacidad claro, donde se explica qué datos se recogen, con qué finalidad y cómo ejercer los derechos, garantizando transparencia y control al usuario.
            </p>
          </div>
          
          {/* <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, sign up for our newsletter, enroll in a workshop, or contact us. 
              This information may include your name, email address, phone number, shipping address, 
              and payment information.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We use the information we collect to process transactions, send you order confirmations 
              and updates, respond to your comments and questions, send you marketing communications 
              (with your consent), and improve our services.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information with service providers who assist us in operating our website, conducting 
              our business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">4. Cookies and Tracking</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and 
              hold certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, 
              no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have the right to access, update, or delete your personal information at any time. 
              You can also opt out of receiving marketing communications by clicking the unsubscribe 
              link in any email we send.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@dolcegelato.com or through our contact form.
            </p>
          </div> */}
        </div>
      </section>
    </div>
  )
}
