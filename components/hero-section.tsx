"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Mail } from "lucide-react"

interface HeroSectionProps {
  onGetQuote: () => void
  onNewsletter: () => void
}

export function HeroSection({ onGetQuote, onNewsletter }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
            <Sparkles size={16} className="text-primary" />
            Web Design & Development Agency
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Websites that move with purpose
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed text-pretty">
            We bridge the gap between bold imagination and technical precision. Creating digital experiences that aren't
            just visually stunning, but intuitively functional.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8"
              onClick={onGetQuote}
            >
              Order a Service
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-border text-foreground hover:bg-secondary hover:text-foreground bg-transparent"
              onClick={onNewsletter}
            >
              <Mail size={18} />
              Get 15% Off
            </Button>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">From curiosity to conversion</p>
            <div className="flex items-center gap-8 text-muted-foreground">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground">Fast</span>
                <span className="text-xs">Delivery</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground">Affordable</span>
                <span className="text-xs">Pricing</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground">Quality</span>
                <span className="text-xs">Design</span>
              </div>
            </div>
          </div>

          {/* Hero Image - Web Design Showcase */}
<div className="mt-16 w-full max-w-5xl">
  <div className="relative rounded-2xl bg-gradient-to-b from-primary/10 to-accent/10 p-1">
    <div className="rounded-xl bg-card border border-border overflow-hidden shadow-2xl shadow-primary/10">
      <img
        src="/portfolio-juiced.png"
        alt="JUICED - Portfolio Work by Vision Flow"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}
