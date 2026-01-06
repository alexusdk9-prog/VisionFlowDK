import { Lightbulb, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "We learn about your business, goals, and vision. Your ideas become our blueprint for success.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our team crafts stunning visuals that capture your brand's essence and engage your audience.",
  },
  {
    icon: Code,
    title: "Development",
    description: "We build your website with clean code, ensuring fast performance and seamless functionality.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Your website goes live. We handle everything to ensure a smooth and successful launch.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Our Process</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            From vision to reality
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A streamlined process designed to bring your ideas to life quickly and efficiently.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <step.icon size={28} strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
