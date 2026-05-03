"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

const footerLinks = {
  shop: [
    { href: "/shop", label: "Todos los productos" },
    { href: "/shop?category=classics", label: "Sabores clásicos" },
    { href: "/shop?category=signature", label: "Creaciones exclusivas" },
    { href: "/shop?category=seasonal", label: "Ofertas de temporada" },
  ],
  company: [
    { href: "/about", label: "Sobre Frozzy" },
    { href: "/shop", label: "Tienda" },
    { href: "/create", label: "Creador de helados" },
    { href: "/workshops", label: "Talleres" },
    { href: "/contact?", label: "Preguntas frecuentes" },
    { href: "/contact", label: "Atención al cliente" },
    /* { href: "/sitemap", label: "Sitemap" }, */
    /* { href: "/careers", label: "Empleo" }, */
  ],
  allergens: [
    { href: "/info", label: "Información Nutricional" },
    { href: "/allergens", label: "Alérgenos" },
  ],
  legal: [
    { href: "/legal", label: "Aviso legal" },
    { href: "/privacy", label: "Política de privacidad" },
    { href: "/cookies", label: "Política de cookies" },
    { href: "/terms", label: "Términos de servicio" },
  ],
}

const socialLinks = [
  { href: "https://www.instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://www.twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://www.facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://www.youtube.com", icon: Youtube, label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-navbar-scrolled text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-white/70">
              Heladería artesanal que combina sabores naturales con talleres creativos para grupos.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Sobre nosotros</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Allergens Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Información Nutricional y Alérgenos</h3>
            <ul className="space-y-2">
              {footerLinks.allergens.map((link) => (
                <li key={link.href} className="text-sm text-white/70 transition-colors">
                  {link.label}
                  {/* <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link> */}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 font-semibold text-white">Newsletter</h3>
              <p className="mb-3 text-sm text-white/70">
                Suscríbete para recibir ofertas exclusivas y conocer los nuevos sabores.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Introduce tu correo electrónico"
                  className="rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/50"
                />
                <Button type="submit" className="rounded-full">
                  Suscribirse
                </Button>
              </form>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Contacto</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Calle de los Helados, 12, Madrid
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  670 06 33 33
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  info@frozzy.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Frozzy S.L. Todos los derechos reservados.
          </p>
          <ul className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
