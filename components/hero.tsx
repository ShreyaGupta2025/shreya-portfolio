"use client"

import { Mail, Github, Linkedin, FileText } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-background">
      
      {/* 🎥 VIDEO LAYER */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover brightness-75"
        >
          <source src="/bv5.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🌑 DARK OVERLAY (Sits right on top of video) */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* 🌫️ RIGHT SIDE FADE (Identical style to your bottom fade) */}
      <div 
        className="absolute inset-y-0 right-0 w-1/3 z-[2] pointer-events-none bg-gradient-to-r from-transparent to-background"
        style={{ marginRight: "-1px" }} 
      />

      {/* 🌫️ BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[2] bg-gradient-to-b from-transparent to-background" />

      {/* 🧠 CONTENT LAYER */}
      <div className="relative z-10 h-full flex items-center pt-20 sm:pt-0">
        
        <div className="w-full px-6 md:px-10 lg:px-16">
          
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
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-3 border border-white/60 text-white rounded font-medium hover:bg-white/10 transition flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </a>

              <a
                href="https://github.com/ShreyaGupta2025"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-3 border border-white/60 text-white rounded font-medium hover:bg-white/10 transition flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shreyagupta2005/"
                target="_blank"
                rel="noopener noreferrer"
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