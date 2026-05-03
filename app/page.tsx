"use client"

import { HeroSection } from "@/components/home/hero-section"
import { FeaturedSection } from "@/components/home/featured-section"
import { LocalFarmsSection } from "@/components/home/local-farms-section"
import { WorkshopsPreview } from "@/components/home/workshops-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { NewsletterSection } from "@/components/home/newsletter-section"
import { useState } from "react"
import { Workshop } from "@/lib/workshops"
import { WorkshopDetailDialog } from "@/components/workshops/workshop-detail-dialog"

export default function HomePage() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null)

  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <LocalFarmsSection />
      <WorkshopsPreview onViewDetails={(workshop) => setSelectedWorkshop(workshop)} />
      <TestimonialsSection />
      <NewsletterSection />

      {/* Workshop Detail Dialog */}
      <WorkshopDetailDialog
        workshop={selectedWorkshop}
        onClose={() => setSelectedWorkshop(null)}
      />
    </>
  )
}
