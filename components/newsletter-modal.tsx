"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Mail, CheckCircle } from "lucide-react"

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
const response = await fetch("/api/newsletter", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
})

const text = await response.text()
console.log("RAW RESPONSE:", text)

const data = JSON.parse(text)

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setEmail("")
    setError("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-card border border-border shadow-2xl p-8">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-4">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Check Your Email!</h3>
            <p className="text-muted-foreground mb-4">We've sent your unique 15% discount code to:</p>
            <p className="font-medium text-foreground mb-6">{email}</p>
            <p className="text-sm text-muted-foreground mb-6">
              Use this code when ordering a service to get 15% off your first project.
            </p>
            <Button onClick={handleClose} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Got it!
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Mail size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Get 15% Off</h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter and receive a unique discount code sent directly to your email.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {error && <p className="text-sm text-red-500 text-center">{error}</p>}

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send My Discount Code"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Your unique code will be emailed to you. No spam, ever.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
