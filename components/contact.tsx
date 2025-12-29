"use client"

import ParticlesBackground from "./ParticlesBackground"

export default function Contact() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <ParticlesBackground />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-white text-center space-y-6">
        <h2 className="text-4xl font-bold">Let's Connect</h2>
        <p className="text-white/70 max-w-xl mx-auto">
          Ready to collaborate?
        </p>
      </div>
    </section>
  )
}
