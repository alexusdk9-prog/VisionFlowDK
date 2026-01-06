"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Gift } from "lucide-react"

interface CTASectionProps {
  onGetQuote: () => void
  onNewsletter: () => void
}

export function CTASection({ onGetQuote, onNewsletter }: CTASectionProps) {
  const handleViewWork = () => {
    const element = document.querySelector("#services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative rounded-3xl bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl text-balance">
              Ready to bring your vision to life?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              Let's create a website that truly represents your brand and drives results for your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={onGetQuote}
              >
                <Mail size={18} />
                Order a Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent gap-2"
                onClick={onNewsletter}
              >
                <Gift size={18} />
                Get 15% Off
                <ArrowRight size={18} />
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/60">
              MobilePay is currently our only supported payment method
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
