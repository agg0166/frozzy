"use client"

import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isTransparent ? "bg-white/20 backdrop-blur-sm" : "bg-primary"}`}>
        <span className={`font-serif text-lg font-bold ${isTransparent ? "text-white" : "text-primary-foreground"}`}>D</span>
      </div> */}
      <span className="font-serif text-xl font-semibold text-white">Frozzy</span>
      {/* <div className="h-10 w-30 relative">
        <Image
          src="/logo-horizontal-claro.png"
          alt="Fresh ingredients from local farms"
          fill
          className="object-contain relative inline-block"
        />  
      </div> */}
    </Link>
  )
}