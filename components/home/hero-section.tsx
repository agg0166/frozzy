"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Pause, ArrowRight } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative h-[90vh] min-h-100 max-h-screen w-full overflow-hidden bg-primary">
      {/* Video Background with Mask */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          maskImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.3) 100%)",
          WebkitMaskImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.3) 100%)"
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/images/video-home-poster.png"
        >
          <source src="/video-home.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center" style={{ filter: "drop-shadow(0 3px 10px rgba(0, 0, 0, 0.2))"}}>
        <h1 className="mb-4 max-w-4xl font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-balance">Artesanía helada,</span>
          <span className="block text-balance">creatividad sin límites</span>
        </h1>
        <p className="mb-8 max-w-2xl text-pretty text-lg text-white/90 font-sans sm:text-xl">
          Descubre nuestros sabores artesanales, elaborados a diario con los mejores ingredientes procedentes de granjas locales y productores artesanales.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" variant="tertiary" className="rounded-full px-8 text-base">
            <Link href="/shop">
              Comprar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white bg-white/0 px-8 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
          >
            <Link href="/workshops">Apuntarse a un taller</Link>
          </Button>
        </div>
      </div>

      {/* Video Control */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  )
}
