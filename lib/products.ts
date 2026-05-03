export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  flavors: string[]
  dietary: string[]
  sizes: { name: string; price: number }[]
  toppings: { name: string; price: number }[]
  rating: number
  reviews: number
}

export const products: Product[] = [
  {
    id: "1",
    name: "Vainilla Clásica",
    description:
      "Helado cremoso de vainilla elaborado con auténtica vainilla de Madagascar. Un clásico atemporal que nunca falla.",
    price: 6.99,
    image: "/images/products/vanilla.png",
    category: "classics",
    flavors: ["vanilla"],
    dietary: [],
    sizes: [
      { name: "Pequeño", price: 4.99 },
      { name: "Mediano", price: 6.99 },
      { name: "Grande", price: 8.99 },
    ],
    toppings: [
      { name: "Pepitas de chocolate", price: 0.75 },
      { name: "Sirope de caramelo", price: 0.5 },
      { name: "Nata montada", price: 0.5 },
      { name: "Fideos de colores", price: 0.25 },
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Chocolate Belga",
    description:
      "Helado intenso de chocolate negro elaborado con cacao belga premium. Rico, suave y lleno de sabor.",
    price: 7.49,
    image: "/images/products/chocolate.png",
    category: "classics",
    flavors: ["chocolate"],
    dietary: [],
    sizes: [
      { name: "Pequeño", price: 5.49 },
      { name: "Mediano", price: 7.49 },
      { name: "Grande", price: 9.49 },
    ],
    toppings: [
      { name: "Pepitas de chocolate", price: 0.75 },
      { name: "Chocolate caliente (fudge)", price: 0.75 },
      { name: "Nata montada", price: 0.5 },
      { name: "Trozos de brownie", price: 1.0 },
    ],
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "3",
    name: "Fresa Natural",
    description:
      "Helado de fresa dulce y refrescante elaborado con fruta fresca. Sabor auténtico y natural.",
    price: 6.99,
    image: "/images/products/strawberry.png",
    category: "classics",
    flavors: ["strawberry", "fruity"],
    dietary: [],
    sizes: [
      { name: "Pequeño", price: 4.99 },
      { name: "Mediano", price: 6.99 },
      { name: "Grande", price: 8.99 },
    ],
    toppings: [
      { name: "Fruta fresca", price: 1.0 },
      { name: "Nata montada", price: 0.5 },
      { name: "Sirope de fresa", price: 0.5 },
    ],
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "4",
    name: "Caramelo Salado",
    description:
      "Helado de caramelo con un equilibrio perfecto entre dulce y salado, con vetas de caramelo casero.",
    price: 7.99,
    image: "/images/products/caramel.png",
    category: "signature",
    flavors: ["caramel"],
    dietary: [],
    sizes: [
      { name: "Pequeño", price: 5.99 },
      { name: "Mediano", price: 7.99 },
      { name: "Grande", price: 9.99 },
    ],
    toppings: [
      { name: "Sirope de caramelo", price: 0.5 },
      { name: "Escamas de sal marina", price: 0.25 },
      { name: "Trozos de pretzel", price: 0.75 },
    ],
    rating: 4.9,
    reviews: 201,
  },
  {
    id: "5",
    name: "Sueño de Pistacho",
    description:
      "Auténtico gelato de pistacho siciliano elaborado con frutos secos premium. Cremoso e irresistible.",
    price: 8.49,
    image: "/images/products/pistachio.png",
    category: "signature",
    flavors: ["pistachio", "nutty"],
    dietary: [],
    sizes: [
      { name: "Pequeño", price: 6.49 },
      { name: "Mediano", price: 8.49 },
      { name: "Grande", price: 10.49 },
    ],
    toppings: [
      { name: "Pistachos triturados", price: 1.0 },
      { name: "Sirope de miel", price: 0.5 },
      { name: "Virutas de chocolate negro", price: 0.75 },
    ],
    rating: 4.8,
    reviews: 87,
  },
  {
    id: "6",
    name: "Coco y Mango Tropical",
    description:
      "Helado de coco con remolino de puré de mango fresco. Un sabor exótico en cada cucharada.",
    price: 7.99,
    image: "/images/products/mango.png",
    category: "signature",
    flavors: ["coconut", "mango", "fruity"],
    dietary: ["vegan", "dairy-free"],
    sizes: [
      { name: "Pequeño", price: 5.99 },
      { name: "Mediano", price: 7.99 },
      { name: "Grande", price: 9.99 },
    ],
    toppings: [
      { name: "Coco tostado", price: 0.5 },
      { name: "Trozos de mango fresco", price: 1.0 },
      { name: "Ralladura de lima", price: 0.25 },
    ],
    rating: 4.6,
    reviews: 65,
  },
  {
    id: "7",
    name: "Menta con Chocolate",
    description:
      "Helado refrescante de menta con trozos de chocolate negro. Una combinación clásica.",
    price: 6.99,
    image: "/images/products/mint.png",
    category: "classics",
    flavors: ["mint", "chocolate"],
    dietary: [],
    sizes: [
      { name: "Pequeño", price: 4.99 },
      { name: "Mediano", price: 6.99 },
      { name: "Grande", price: 8.99 },
    ],
    toppings: [
      { name: "Extra de chocolate", price: 0.75 },
      { name: "Chocolate caliente (fudge)", price: 0.75 },
      { name: "Nata montada", price: 0.5 },
    ],
    rating: 4.7,
    reviews: 112,
  },
  {
    id: "8",
    name: "Galleta con Leche de Avena",
    description:
      "Base cremosa de avena con trozos de masa de galleta vegana. Delicioso y 100% vegetal.",
    price: 8.99,
    image: "/images/products/cookie-dough.png",
    category: "signature",
    flavors: ["cookie dough"],
    dietary: ["vegan", "dairy-free"],
    sizes: [
      { name: "Pequeño", price: 6.99 },
      { name: "Mediano", price: 8.99 },
      { name: "Grande", price: 10.99 },
    ],
    toppings: [
      { name: "Extra de masa de galleta", price: 1.25 },
      { name: "Pepitas de chocolate", price: 0.75 },
      { name: "Crumble de avena", price: 0.5 },
    ],
    rating: 4.8,
    reviews: 76,
  },
  {
    id: "9",
    name: "Lavanda y Miel",
    description:
      "Suave crema infusionada con lavanda y remolinos de miel. Un sabor delicado y sofisticado.",
    price: 8.49,
    image: "/images/products/lavender.png",
    category: "seasonal",
    flavors: ["lavender", "honey"],
    dietary: [],
    sizes: [
      { name: "Pequeño", price: 6.49 },
      { name: "Mediano", price: 8.49 },
      { name: "Grande", price: 10.49 },
    ],
    toppings: [
      { name: "Sirope de miel", price: 0.5 },
      { name: "Flores de lavanda", price: 0.25 },
      { name: "Galleta crumble", price: 0.75 },
    ],
    rating: 4.5,
    reviews: 43,
  },
  {
    id: "10",
    name: "Vainilla Sin Azúcar",
    description:
      "Todo el sabor de la vainilla cremosa sin azúcar. Ideal para quienes quieren cuidarse.",
    price: 7.49,
    image: "/images/products/sugar-free.png",
    category: "classics",
    flavors: ["vanilla"],
    dietary: ["sugar-free"],
    sizes: [
      { name: "Pequeño", price: 5.49 },
      { name: "Mediano", price: 7.49 },
      { name: "Grande", price: 9.49 },
    ],
    toppings: [
      { name: "Caramelo sin azúcar", price: 0.75 },
      { name: "Fruta fresca", price: 1.0 },
      { name: "Frutos secos", price: 0.75 },
    ],
    rating: 4.4,
    reviews: 52,
  },
  {
    id: "11",
    name: "Espresso Crunch",
    description:
      "Helado de café espresso con granos de café cubiertos de chocolate crujiente. Perfecto para amantes del café.",
    price: 7.99,
    image: "/images/products/espresso.png",
    category: "signature",
    flavors: ["coffee", "chocolate"],
    dietary: [],
    sizes: [
      { name: "Pequeño", price: 5.99 },
      { name: "Mediano", price: 7.99 },
      { name: "Grande", price: 9.99 },
    ],
    toppings: [
      { name: "Granos de café con chocolate", price: 1.0 },
      { name: "Cacao en polvo", price: 0.25 },
      { name: "Nata montada", price: 0.5 },
    ],
    rating: 4.9,
    reviews: 134,
  },
  {
    id: "12",
    name: "Trío de Sorbetes de Frutos Rojos",
    description:
      "Mezcla de sorbetes de frambuesa, arándano y mora. Ligero, refrescante y lleno de sabor.",
    price: 6.99,
    image: "/images/products/berry-sorbet.png",
    category: "seasonal",
    flavors: ["berry", "fruity"],
    dietary: ["vegan", "dairy-free", "fat-free"],
    sizes: [
      { name: "Pequeño", price: 4.99 },
      { name: "Mediano", price: 6.99 },
      { name: "Grande", price: 8.99 },
    ],
    toppings: [
      { name: "Fruta fresca", price: 1.0 },
      { name: "Hojas de menta", price: 0.25 },
      { name: "Ralladura de lima", price: 0.25 },
    ],
    rating: 4.7,
    reviews: 89,
  },
]

export const categories = [
  { value: "all", label: "Todos los sabores" },
  { value: "classics", label: "Clásicos" },
  { value: "signature", label: "Especialidades" },
  { value: "seasonal", label: "De temporada" },
]

export const dietaryOptions = [
  { value: "vegan", label: "Vegano" },
  { value: "dairy-free", label: "Sin lácteos" },
  { value: "sugar-free", label: "Sin azúcar" },
  { value: "fat-free", label: "Sin grasa" },
]

export const flavorOptions = [
  { value: "vanilla", label: "Vainilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Fresa" },
  { value: "caramel", label: "Caramelo" },
  { value: "fruity", label: "Frutal" },
  { value: "nutty", label: "Frutos secos" },
  { value: "coffee", label: "Café" },
]
