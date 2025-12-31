"use client"

import { Mail, Github, Linkedin, FileText } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background">
      
      {/* 🎥 DESKTOP VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="
          absolute inset-0 w-full h-full object-cover brightness-75
          hidden md:block
        "
      >
        <source src="/bv5.mp4" type="video/mp4" />
      </video>

      {/* 🎥 MOBILE VIDEO */}
      <video

        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="
          absolute inset-0 w-full h-full object-cover brightness-75
          block md:hidden
        "
      >
        <source src="/bv5.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 🌫️ Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-background" />

      {/* 🧠 CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center pt-32 sm:pt-24">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="space-y-6 max-w-2xl">
            
            {/* Portfolio + Name */}
            <div className="space-y-1">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-white/80">
                Portfolio
              </p>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-red-700"
                style={{ textShadow: "0 0 18px rgba(239,68,68,0.35)" }}
              >
                Shreya Gupta
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-white">
                Curious by nature. Intentional by design.
              </p>
              <p className="text-sm sm:text-base text-white/80">
                Systems, intelligence, and ideas — brought to life.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="/resume.pdf"
                className="px-4 sm:px-6 py-3 border border-white/60 text-white rounded font-medium hover:bg-white/10 transition flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </a>

              <a
                href="https://github.com/ShreyaGupta2025"
                className="px-4 sm:px-6 py-3 border border-white/60 text-white rounded font-medium hover:bg-white/10 transition flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shreyagupta2005/"
                className="px-4 sm:px-6 py-3 border border-white/60 text-white rounded font-medium hover:bg-white/10 transition flex items-center gap-2"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <a
                href="mailto:f20230399@hyderabad.bits-pilani.ac.in"
                className="px-4 sm:px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-100 transition flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
