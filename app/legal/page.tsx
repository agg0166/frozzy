import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso legal | Frozzy",
  description: "Descubre cómo Frozzy recopila, utiliza y protege tus datos personales.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Aviso legal
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Última actualización: 2 de mayo de 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl font-bold mb-4">1. Disclaimer académico</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Esta plataforma de comercio electrónico constituye un PROYECTO ACADÉMICO desarrollado por estudiantes de primer curso del Grado Superior en Desarrollo de Aplicaciones Multiplataforma y Marketing y Publicidad para el curso
              2025/2026.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              DECLARACIÓN DE CARÁCTER FICTICIO: La marca Frozzy, los productos, servicios y contenidos presentados en este sitio web son completamente ficticios y han sido creados con fines exclusivamente educativos. Esta web no representa una empresa real ni realiza actividad comercial alguna. No se efectúan transacciones económicas reales ni se recopilan datos personales con fines comerciales.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              PROPIEDAD INTELECTUAL: Los contenidos visuales, textuales y audiovisuales utilizados tienen un propósito exclusivamente académico y didáctico. En caso de que algún titular de derechos considere que se ha utilizado contenido de su propiedad, puede solicitar su retirada inmediata a través del email de contacto
              indicado.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              EXENCIÓN DE RESPONSABILIDAD: Ni los estudiantes creadores, ni el profesorado ni la institución educativa asumen responsabilidad alguna por el uso indebido del contenido del sitio.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">2. Datos identificativos</h2>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li><b>Marca:</b> Frozzy</li>
              <li><b>Razón Social:</b> Frozzy S.L.</li>
              <li><b>Dirección:</b> Calle de los Helados, 12, 28000 Valencia, España</li>
              <li><b>Email de contacto:</b> info@frozzy.com</li>
              <li><b>Sitio web:</b> www.frozzy.com</li>
              <li><b>CIF:</b> B12345678</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">3. Objeto del sitio web</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Frozzy ofrece helados, talleres y productos relacionados. La web permite comprar, registrarse, gestionar pedidos y recibir información sobre novedades. El objetivo es ofrecer una experiencia de compra segura y cumplir la normativa española de comercio electrónico y protección de datos.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Este sitio web también permite a los usuarios informarse sobre nuevos sabores, talleres especiales y promociones estacionales, fomentando la interacción entre la marca y los clientes, además de servir como caso práctico para aplicar estrategias de marketing digital y comercio electrónico.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Además de permitir la compra de productos y talleres, el sitio web ofrece recursos informativos sobre técnicas de heladería artesanal, recetas y consejos de seguridad alimentaria, contribuyendo a la formación de los usuarios y al valor educativo del
              proyecto.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">4. Condiciones de uso</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              El acceso al sitio implica aceptar:
            </p>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Uso responsable y conforme a la ley.</li>
              <li>No introducir virus o software malicioso.</li>
              <li>No usar contenidos con fines comerciales sin permiso.</li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Frozzy puede modificar, suspender o eliminar contenidos sin previo aviso.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              El usuario se compromete a respetar la propiedad intelectual de los contenidos y a no utilizar los recursos de la web para actividades ilegales o dañinas. Frozzy se reserva el derecho de bloquear usuarios que incumplan estas condiciones.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">5. Propiedad intelectual</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            Todos los contenidos (textos, imágenes, vídeos, software, logo) son propiedad de Frozzy o de terceros licenciados. Se prohíbe reproducir o distribuir sin autorización.
            </p>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>Se permite el uso personal y educativo de los contenidos, siempre que no se alteren ni se distribuyan públicamente con fines comerciales.</li>
              <li>Los usuarios que deseen usar material con fines académicos o de investigación deberán citar la fuente correctamente.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">6. Exclusión de responsabilidad</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            Frozzy no se hace responsable de errores en la información, interrupciones del servicio, virus o fallos de dispositivos. Tampoco responde por enlaces a sitios externos. El usuario usa el sitio bajo su propia responsabilidad.
            </p>
            <ul className="lista text-muted-foreground mb-6 leading-relaxed">
              <li>No se responsabiliza de decisiones comerciales basadas en la información del sitio.</li>
              <li>No se responsabiliza de decisiones dietéticas o de seguridad alimentaria.</li>
              <li>Todo uso de los contenidos se realiza bajo la responsabilidad del usuario.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">7. Ley aplicable</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            La relación se rige por la legislación española (LSSI-CE, Ley de Consumidores, RGPD). Los tribunales competentes serán los de Madrid, salvo que el usuario sea consumidor, en cuyo caso se aplicará su jurisdicción habitual.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
