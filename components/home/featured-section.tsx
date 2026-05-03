import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, IceCream, Sparkles } from "lucide-react"

const features = [
  {
    title: "Descubre nuestros sabore",
    description: "Descubre nuestra selección de helados artesanales, desde clásicos atemporales hasta innovadoras especialidades de temporada.",
    image: "/images/shop-feature.png",
    href: "/shop",
    icon: IceCream,
    buttonText: "Explorar la tienda",
  },
  {
    title: "Crea el tuyo propio",
    description: "Crea tu helado perfecto con nuestra herramienta de personalización. Elige la base, los ingredientes y losaderezos.",
    image: "/images/create-feature.png",
    href: "/create",
    icon: Sparkles,
    buttonText: "Empezar a crear",
  },
]

export function FeaturedSection() {
  return (
    <section className="bg-linear-to-t from-muted to-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-balance">Te esperan dulces experiencias</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Tanto si buscas un diseño clásico como si quieres dar rienda suelta a tu creatividad, tenemos algo especial para todos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/85 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8" style={{ filter: "drop-shadow(0 3px 10px rgba(0, 0, 0, 0.2))"}}>
                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <feature.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold md:text-2xl">
                    {feature.title}
                  </h3>
                </div>
                <p className="mb-4 mt-2 text-sm text-white/90 md:text-base">
                  {feature.description}
                </p>
                <Button
                  asChild
                  className="w-fit rounded-full"
                  variant="secondary"
                >
                  <Link href={feature.href}>
                    {feature.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
