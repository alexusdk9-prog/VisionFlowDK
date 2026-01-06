"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  onGetQuote: () => void
}

export function Navbar({ onGetQuote }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="flex items-center justify-between rounded-2xl px-6 py-3 bg-card/60 backdrop-blur-xl border border-border/40 shadow-lg shadow-primary/5">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Vision Flow" width={36} height={36} className="h-9 w-9 rounded-lg" />
            <span className="text-lg font-semibold text-foreground">Vision Flow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={onGetQuote}>
              Order Service
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-card/90 backdrop-blur-xl border border-border/50 p-6 shadow-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button
                  className="w-full bg-primary text-primary-foreground"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onGetQuote()
                  }}
                >
                  Order Service
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
