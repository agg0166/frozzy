"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visitanos",
    details: ["Calle de los Helados, 12, Madrid"],
  },
  {
    icon: Phone,
    title: "Llamanos",
    details: ["670 06 33 33"],
  },
  {
    icon: Mail,
    title: "Envíanos un correo electrónico",
    details: ["hello@frozzy.com", "info@frozzy.com"],
  },
  {
    icon: Clock,
    title: "Horario de apertura",
    details: ["De lunes a viernes: de 10:00 a 21:00", "Sábado y domingo: de 11:00 a 22:00"],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptedPrivacy) {
      return
    }
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setAcceptedPrivacy(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            <span className="text-balance">Ponte en contacto con nosotros</span>
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            ¿Tienes alguna pregunta, quieres darnos tu opinión o simplemente saludarnos? Nos encantaría saber de ti. Ponte en contacto con nosotros y nuestro equipo te responderá lo antes posible.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 font-serif text-2xl font-bold">Información de contacto</h2>
                <p className="text-muted-foreground">
                  Visítanos en nuestra tienda o ponte en contacto con nosotros a través de cualquiera de los canales que figuran a
                  continuación.
                </p>
              </div>

              <div className="space-y-4 pb-4">
                {contactInfo.map((item) => (
                  <Card key={item.title} className="border-0 bg-muted/50 shadow-none p-0">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        {item.details.map((detail, index) => (
                          <p key={index} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video overflow-hidden rounded-2xl bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12232.364823396794!2d-0.09669340662008488!3d39.96171349867994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6007ac7ce88023%3A0x8c040f70b9c18444!2sClub%20Las%20Palmeras!5e0!3m2!1ses!2ses!4v1775396800836!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store location map"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="rounded-2xl border-0 shadow-lg">
                <CardContent className="p-6 md:p-8 md:px-10">
                  <h2 className="mb-6 font-serif text-2xl font-bold">Envíanos un mensaje</h2>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">¡Mensaje enviado!</h3>
                      <p className="mb-6 text-muted-foreground">
                        Gracias por ponerte en contacto con nosotros. Nos pondremos en contacto contigo en un plazo de 24 horas.
                      </p>
                      <Button
                        variant="outline"
                        className="rounded-full"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Enviar otro mensaje
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo electrónico</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="¿De qué se trata?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="rounded-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Cuentanos..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="min-h-37.5 rounded-lg resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="privacy"
                          checked={acceptedPrivacy}
                          onCheckedChange={(checked) => setAcceptedPrivacy(checked === true)}
                          required
                          className="mt-1"
                        />
                        <Label htmlFor="privacy" className="text-sm font-normal leading-relaxed cursor-pointer">
                          Acepto la{" "}
                          <Link href="/privacy" className="text-primary underline hover:text-primary/80">
                            Política de privacidad
                          </Link>
                          <span className="text-destructive"> *</span>
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-full sm:w-auto"
                        disabled={isLoading || !acceptedPrivacy}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar mensaje
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
