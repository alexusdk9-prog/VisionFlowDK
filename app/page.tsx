"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import { NewsletterModal } from "@/components/newsletter-modal"

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)

  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar onGetQuote={() => setIsContactOpen(true)} />
      <HeroSection onGetQuote={() => setIsContactOpen(true)} onNewsletter={() => setIsNewsletterOpen(true)} />
      <ServicesSection />
      <FeaturesSection />
      <ProcessSection />
      <CTASection onGetQuote={() => setIsContactOpen(true)} onNewsletter={() => setIsNewsletterOpen(true)} />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </main>
  )
}
