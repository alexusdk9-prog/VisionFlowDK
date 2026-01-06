import { Palette, Zap, Users, Clock, Banknote, Monitor } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Purposeful Design",
    description: "Every pixel has a job to do. We create designs that are both beautiful and strategically effective.",
  },
  {
    icon: Zap,
    title: "Seamless Performance",
    description: "Fast, responsive, and reliable. Your website will perform flawlessly across all devices.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Your vision is our blueprint. We work closely with you throughout the entire process.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "We prioritize efficiency to ensure your project is completed and launched as quickly as possible.",
  },
  {
    icon: Banknote,
    title: "Affordable Pricing",
    description: "High-quality professional websites at competitive prices. Best value for your investment.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Pixel-perfect on every screen. From mobile to desktop, your site will look stunning.",
  },
]

export function FeaturesSection() {
  return (
    <section id="why-us" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Why Choose Us</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            More than just a digital placeholder
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your website should be a dynamic extension of your brand that moves with purpose.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
