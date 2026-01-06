"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  services: [
    { label: "Websites", href: "#services" },
    { label: "Landing Pages", href: "#services" },
    { label: "Web Design", href: "#services" },
    { label: "Development", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#why-us" },
    { label: "Our Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Vision Flow" width={36} height={36} className="h-9 w-9 rounded-lg" />
              <span className="text-lg font-semibold text-foreground">Vision Flow</span>
            </Link>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              We don't just build pages; we build the "flow" that guides your customers from curiosity to conversion.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Best regards,
              <br />
              <span className="font-medium text-foreground">Vision Flow</span>
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vision Flow. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">MobilePay is currently our only supported payment method</p>
        </div>
      </div>
    </footer>
  )
}
