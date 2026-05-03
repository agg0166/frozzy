export interface Workshop {
  id: string
  title: string
  description: string
  longDescription: string
  date: string
  time: string
  location: string
  price: number
  spotsTotal: number
  spotsLeft: number
  rating: number
  reviews: number
  image: string
  instructor: string
  level: "beginner" | "intermediate" | "advanced"
  includes: string[]
}

export const workshops: Workshop[] = [
  {
    id: "1",
    title: "Elaboración de Gelato Clásico",
    description:
      "Aprende las técnicas auténticas italianas para preparar un gelato cremoso y suave desde cero.",
    longDescription:
      "Sumérgete en el arte del gelato italiano en este taller práctico. Aprenderás la ciencia detrás de una base perfecta, cómo equilibrar el dulzor y la intensidad de los sabores, y dominarás el proceso de mantecado. Trabajaremos sabores clásicos como vainilla, chocolate y stracciatella, para que puedas recrearlos en casa.",
    date: "15 de abril de 2026",
    time: "14:00 - 17:00",
    location: "Cocina Principal",
    price: 85,
    spotsTotal: 12,
    spotsLeft: 8,
    rating: 4.9,
    reviews: 47,
    image: "/images/workshops/gelato-making.jpg",
    instructor: "Chef Marco Rossi",
    level: "beginner",
    includes: [
      "Todos los ingredientes y utensilios",
      "Recetario para llevar a casa",
      "500 ml de tu propia creación",
      "Refrescos incluidos",
    ],
  },
  {
    id: "2",
    title: "Secretos del Helado Vegano",
    description:
      "Descubre cómo crear helados sin lácteos deliciosos que no tienen nada que envidiar a los tradicionales.",
    longDescription:
      "El helado vegetal no tiene por qué renunciar al sabor ni a la textura. En este taller explorarás alternativas como coco, avena y anacardos. Aprenderás técnicas profesionales para lograr una textura cremosa y crear sabores intensos sin usar lácteos.",
    date: "22 de abril de 2026",
    time: "10:00 - 13:00",
    location: "Estudio B",
    price: 95,
    spotsTotal: 10,
    spotsLeft: 5,
    rating: 4.8,
    reviews: 32,
    image: "/images/workshops/vegan-icecream.jpg",
    instructor: "Chef Sarah Chen",
    level: "beginner",
    includes: [
      "Todos los ingredientes y utensilios",
      "Recetario vegano",
      "2 tarrinas para llevar",
      "Degustación de sabores vegetales",
    ],
  },
  {
    id: "3",
    title: "Toppings y Salsas Artesanales",
    description:
      "Domina el arte de crear toppings gourmet, desde caramelo hasta pralinés crujientes.",
    longDescription:
      "Lleva tus helados al siguiente nivel con toppings y salsas profesionales. Aprenderás a preparar fudge caliente, caramelo salado, frutos secos caramelizados, compotas y cucuruchos caseros. Ideal para perfeccionar tus postres.",
    date: "29 de abril de 2026",
    time: "15:00 - 18:00",
    location: "Cocina Principal",
    price: 75,
    spotsTotal: 14,
    spotsLeft: 10,
    rating: 4.7,
    reviews: 28,
    image: "/images/workshops/toppings.jpg",
    instructor: "Chef Maria Santos",
    level: "intermediate",
    includes: [
      "Todos los ingredientes y utensilios",
      "Recetario de salsas y toppings",
      "Un tarro de cada elaboración",
      "Degustación de helados",
    ],
  },
  {
    id: "4",
    title: "Desarrollo Avanzado de Sabores",
    description: "Explora combinaciones únicas y lleva el helado a otro nivel.",
    longDescription:
      "Para quienes quieren ir más allá de lo clásico, este taller avanzado explora la innovación en heladería. Aprenderás a infusionar hierbas, especias e ingredientes poco convencionales. También trabajarás técnicas como nitrógeno líquido, capas de sabor y presentaciones visuales impactantes.",
    date: "6 de mayo de 2026",
    time: "13:00 - 17:00",
    location: "Laboratorio de Innovación",
    price: 125,
    spotsTotal: 8,
    spotsLeft: 3,
    rating: 4.9,
    reviews: 19,
    image: "/images/workshops/advanced.jpg",
    instructor: "Chef Marco Rossi",
    level: "advanced",
    includes: [
      "Ingredientes premium y equipamiento especializado",
      "Guía de técnicas avanzadas",
      "3 creaciones para llevar",
      "Certificado de finalización",
    ],
  },
  {
    id: "5",
    title: "Fiesta de Helados para Niños",
    description:
      "Una experiencia divertida y práctica pensada especialmente para los más pequeños.",
    longDescription:
      "¡Deja que los peques descubran la magia de hacer su propio helado! Taller familiar para niños de 6 a 12 años (con supervisión adulta). Aprenderán conceptos básicos, crearán sus propios sabores y decorarán con toppings y sprinkles.",
    date: "13 de mayo de 2026",
    time: "10:00 - 12:00",
    location: "Cocina Familiar",
    price: 45,
    spotsTotal: 16,
    spotsLeft: 12,
    rating: 4.8,
    reviews: 56,
    image: "/images/workshops/kids.jpg",
    instructor: "Chef Emma Thompson",
    level: "beginner",
    includes: [
      "Ingredientes y utensilios adaptados para niños",
      "Tarjetas de recetas divertidas",
      "Helado para disfrutar",
      "Delantal y gorro de chef para llevar",
    ],
  },
  {
    id: "6",
    title: "Taller de Sorbetes y Granizados",
    description:
      "Aprende a preparar postres helados ligeros y refrescantes con fruta.",
    longDescription:
      "Descubre el lado más ligero de los postres helados. Aprenderás a preparar sorbetes suaves y granizados tradicionales italianos con fruta fresca de temporada. Ideal para opciones sin lácteos o más ligeras.",
    date: "20 de mayo de 2026",
    time: "11:00 - 14:00",
    location: "Estudio B",
    price: 70,
    spotsTotal: 12,
    spotsLeft: 7,
    rating: 4.6,
    reviews: 23,
    image: "/images/workshops/sorbet.jpg",
    instructor: "Chef Sarah Chen",
    level: "beginner",
    includes: [
      "Fruta fresca y utensilios",
      "Recetario de sorbetes",
      "2 tarrinas para llevar",
      "Degustación de fruta de temporada",
    ],
  },
]

export const workshopLevels = [
  { value: "all", label: "Todos los niveles" },
  { value: "beginner", label: "Principiante" },
  { value: "intermediate", label: "Intermedio" },
  { value: "advanced", label: "Avanzado" },
]
