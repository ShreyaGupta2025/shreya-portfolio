"use client"

import { Mail, Linkedin, Github } from "lucide-react"

const connectItems = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Connect • linkedin",
    href: "https://www.linkedin.com/in/shreyagupta2005/",
    gradient: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
  },
  {
    icon: Github,
    title: "GitHub",
    subtitle: "Connect • github",
    href: "https://github.com/ShreyaGupta2025",
    gradient: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
  },
  {
    icon: Mail,
    title: "Email",
    subtitle: "Connect • email",
    href: "mailto:f20230399@hyderabad.bits-pilani.ac.in",
    gradient: "linear-gradient(135deg, #0369a1 0%, #0c4a6e 100%)",
  },
  
]

export default function Connect() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Contact with me</h2>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {connectItems.map((item, idx) => {
            const Icon = item.icon

            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative overflow-hidden rounded-xl
                  border border-border bg-card/50
                  h-64 flex flex-col items-center justify-center p-6
                  transition-all duration-300
                  hover:border-red-600
                  hover:shadow-[0_0_0_1px_rgba(229,9,20,0.9),0_0_28px_rgba(229,9,20,0.35)]
                "
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0 opacity-80"
                  style={{ background: item.gradient }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <Icon size={56} className="text-white" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* LOWER SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-start pt-12 border-t border-border">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Let’s Connect</h3>
            <p className="text-muted-foreground leading-relaxed">
              Open to collaborations, internships, and meaningful conversations
              around data, systems, and AI.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:f20230399@hyderabad.bits-pilani.ac.in"
              className="
                flex items-center gap-3 p-3 rounded
                border border-border
                hover:border-red-600
                hover:shadow-[0_0_0_1px_rgba(229,9,20,0.9),0_0_20px_rgba(229,9,20,0.25)]
                transition-all
              "
            >
              <Mail size={20} className="text-primary" />
              <span>Email me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shreyagupta2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3 p-3 rounded
                border border-border
                hover:border-red-600
                hover:shadow-[0_0_0_1px_rgba(229,9,20,0.9),0_0_20px_rgba(229,9,20,0.25)]
                transition-all
              "
            >
              <Linkedin size={20} className="text-primary" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/ShreyaGupta2025"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3 p-3 rounded
                border border-border
                hover:border-red-600
                hover:shadow-[0_0_0_1px_rgba(229,9,20,0.9),0_0_20px_rgba(229,9,20,0.25)]
                transition-all
              "
            >
              <Github size={20} className="text-primary" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
