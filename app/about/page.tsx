import Image from "next/image"
import { Heart, Leaf, Award, Users } from "lucide-react"

export const metadata = {
  title: "Sobre nosotros | Frozzy",
  description: "Descubre nuestra historia, nuestra misión y al apasionado equipo que hay detrás de Frozzy. Helados artesanales elaborados a mano desde 2026.",
}

const values = [
  {
    icon: Heart,
    title: "Hecho con amor",
    description: "Cada cucharada está elaborada con pasión y atención al detalle, tal como las hacía la abuela.",
  },
  {
    icon: Leaf,
    title: "De origen local",
    description: "Colaboramos con granjas locales y productores artesanales para ofrecerte los ingredientes más frescos.",
  },
  {
    icon: Award,
    title: "La calidad es lo primero",
    description: "Sin atajos, sin aromas artificiales. Solo sabor puro y auténtico en cada bocado.",
  },
  {
    icon: Users,
    title: "Orientado a la comunidad",
    description: "Creemos en unir a las personas a través de la alegría de las experiencias compartidas.",
  },
]

const team = [
  {
    name: "Marco Rossi",
    role: "Fundador y Jefe de Helados",
    image: "/images/team/marco.jpg",
    bio: "Cada cucharada está elaborada con pasión y atención al detalle, tal como las hacía la abuela.",
  },
  {
    name: "Sarah Chen",
    role: "Director creativo y chef",
    image: "/images/team/sarah.jpg",
    bio: "Sarah combina su formación en artes culinarias con el desarrollo de sabores innovadores para crear nuestras creaciones exclusivas.",
  },
  {
    name: "Emma Thompson",
    role: "Director del taller",
    image: "/images/team/emma.jpg",
    bio: "Apasionada por la enseñanza, Emma diseña e imparte nuestros talleres prácticos para todos los niveles.",
  },
  {
    name: "Maria Santos",
    role: "Chef pastelero",
    image: "/images/team/maria.jpg",
    bio: "La experiencia de María en el arte de la repostería aporta el equilibrio perfecto a nuestros ingredientes, salsas y creaciones en forma de cono.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight md:text-5xl">
                <span className="text-balance">Nuestra dulce historia</span>
              </h1>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-pretty">
                  Frozzy nació en 2026 con un sueño sencillo: llevar el
                  auténtico sabor del helado italiano a nuestra comunidad. Lo
                  que comenzó como un pequeño carrito en el mercado local de
                  agricultores se ha convertido en un lugar muy apreciado por
                  los amantes del helado.
                </p>
                <p className="text-pretty">
                  Nuestro fundador, Marco Rossi, creció en Florencia viendo a su
                  abuela elaborar helado con recetas transmitidas de generación
                  en generación. Esa misma dedicación a la calidad y la
                  tradición perdura en cada lote que elaboramos.
                </p>
                <p className="text-pretty">
                  Hoy en día, seguimos honrando esas tradiciones al tiempo que
                  apostamos por la innovación. Desde sabores clásicos hasta
                  creativas especialidades de temporada, cada creación se
                  elabora a diario en nuestra cocina utilizando los mejores
                  ingredientes que podemos conseguir.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl aspect-[4/2.6]">
              <Image
                src="/images/about-hero.png"
                alt="Our gelato shop interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl">
              <span className="text-balance">Nuestros valores</span>
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Estos principios guían todo lo que hacemos, desde la selección de
              los ingredientes hasta el servicio a nuestros clientes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl bg-card p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl">
              <span className="text-balance">Conoce a nuestro equipo</span>
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Las personas apasionadas que hay detrás de cada bola de Dolce Gelato.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative mx-auto mb-4 aspect-square w-full max-w-50 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="mb-2 text-sm text-primary">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-2 font-serif text-4xl font-bold md:text-5xl">15+</p>
              <p className="text-primary-foreground/80">Años de excelencia</p>
            </div>
            <div>
              <p className="mb-2 font-serif text-4xl font-bold md:text-5xl">50+</p>
              <p className="text-primary-foreground/80">Sabores únicos</p>
            </div>
            <div>
              <p className="mb-2 font-serif text-4xl font-bold md:text-5xl">10K+</p>
              <p className="text-primary-foreground/80">Clientes satisfechos</p>
            </div>
            <div>
              <p className="mb-2 font-serif text-4xl font-bold md:text-5xl">500+</p>
              <p className="text-primary-foreground/80">Graduados del taller</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
