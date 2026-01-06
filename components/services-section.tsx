import { Globe, Layout, Paintbrush, Code } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Websites",
    description: "Full-featured, custom websites built to showcase your business and drive results.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting landing pages designed to turn visitors into customers.",
  },
  {
    icon: Paintbrush,
    title: "Web Design",
    description: "Beautiful, modern designs that capture your brand's essence and engage your audience.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Clean, efficient code that ensures your site performs flawlessly.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Our Services</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">What we create</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We specialize in creating digital experiences that guide your customers from curiosity to conversion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
<div
  key={index}
  className="group relative rounded-2xl bg-card border border-border p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 mx-auto max-w-[300px]"
>

              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <service.icon size={28} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
