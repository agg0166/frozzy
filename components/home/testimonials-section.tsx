"use client"

const testimonials = [
  {
    name: "Adrián GG",
    img: "https://i.pinimg.com/avif/736x/54/90/f6/5490f65cc862500828691a9b34003f0f.avf",
    comment: "Todo mu rico",
  },
  {
    name: "Laura Pérez",
    img: "",
    comment:
      "Pedí un helado y terminé pidiendo otro… y otro. Creo que ya tengo acciones en esta tienda 🍦",
  },
  {
    name: "Carlos Gómez",
    img: "https://i.pinimg.com/736x/af/a3/24/afa324dff15091f93624bb470d60a592.jpg",
    comment:
      "El helado estaba tan bueno que se me olvidó que soy intolerante a la lactosa. 10/10, repetiría.",
  },
  {
    name: "Marina López",
    img: "",
    comment:
      "Fui por curiosidad y salí con una relación seria con el sabor pistacho. Mis amigos están preocupados.",
  },
  {
    name: "Javier Ruiz",
    img: "https://i.pinimg.com/avif/736x/f7/bf/3b/f7bf3b501c0622a596a77193ef7296ce.avf",
    comment:
      "El dependiente me sonrió y el helado también. Sospechoso nivel de felicidad, pero lo acepto.",
  },
  {
    name: "Ana Torres",
    img: "",
    comment:
      "El único lugar donde 'solo un heladito' es la mentira más grande que me digo a mí misma.",
  },
  {
    name: "Miguel Sánchez",
    img: "",
    comment:
      "Probé el sabor chocolate intenso… ahora entiendo por qué lo llaman intenso. Me miró fijamente.",
  },
  {
    name: "Sofía Martín",
    img: "https://i.pinimg.com/736x/16/19/42/161942976199769a444a446c1a3ae200.jpg",
    comment:
      "Este helado arregló mi día, mi semana y probablemente mi historial emocional.",
  },
  {
    name: "Diego Navarro",
    img: "",
    comment:
      "Entré por un cono y salí con tres y una nueva filosofía de vida: vivir, reír, helado.",
  }
]

function TestimonialCard({ name, comment }: { name: string; comment: string }) {
  return (
    <div className="shrink-0 w-80 mx-4">
      <div className="rounded-2xl bg-card p-6 shadow-sm border border-border/50 h-full flex flex-col" style={{ alignItems: 'center'}}>
        <p className="font-semibold text-foreground mb-3">{name}</p>
        <div className="w-12 h-0.5 bg-primary mb-4" />
        <p className="text-muted-foreground text-sm leading-relaxed text-center" style={{ textAlignLast: 'center' }}>
          {comment}
        </p>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const firstRow = testimonials.slice(0, 4)
  const secondRow = testimonials.slice(4, 8)

  // Duplicate 4 times for seamless loop (need enough content to fill the screen + animation buffer)
  const firstRowDuplicated = [...firstRow, ...firstRow, ...firstRow, ...firstRow]
  const secondRowDuplicated = [...secondRow, ...secondRow, ...secondRow, ...secondRow]

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl mb-4 text-balance">
            Lo que opinan nuestros clientes
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            No te limites a creer en nuestra palabra. Esto es lo que dice nuestra comunidad sobre su experiencia con Frozzy.
          </p>
        </div>
      </div>

      {/* Row 1 - Scrolls Left */}
      <div className="pause-animation mb-4">
        <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
          {firstRowDuplicated.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolls Right */}
      <div className="pause-animation">
        <div className="flex animate-scroll-right" style={{ width: 'max-content' }}>
          {secondRowDuplicated.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
