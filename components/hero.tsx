"use client"

import { Mail, Github, Linkedin, FileText, Volume2, VolumeX } from "lucide-react"
import { useRef, useState } from "react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-start pt-20 px-6 overflow-hidden bg-background">
      
      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover filter brightness-75"
      >
        <source src="/bv4.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 🌫️ Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-b from-transparent to-background" />

      {/* 🔊 Sound Toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-20 right-6 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 transition"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX size={16} className="text-white" />
        ) : (
          <Volume2 size={16} className="text-white" />
        )}
      </button>

      {/* 🧠 Hero Content */}
      <div className="relative z-10 max-w-6xl w-full mt-36 pl-6 md:pl-12 lg:pl-20">
        <div className="space-y-8 max-w-2xl">

          {/* Portfolio + Name */}
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-wider text-white">
              PORTFOLIO
            </p>

            <h1
              className="text-7xl font-bold leading-tight text-red-700"
              style={{ textShadow: "0 0 18px rgba(239,68,68,0.35)" }}
            >
              Shreya Gupta
            </h1>
          </div>

          {/* Role + Skills (WHITE) */}
          <div className="space-y-2">
            <p className="text-2xl font-medium text-white">
            Curious by nature. Intentional by design.
            </p>
            <p className="text-lg text-white/80">
            Systems, intelligence, and ideas — brought to life.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-white/60 text-white rounded font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <FileText size={18} />
              Resume
            </a>

            <a
              href="https://github.com/ShreyaGupta2025"
              className="px-6 py-3 border border-white/60 text-white rounded font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shreyagupta2005/"
              className="px-6 py-3 border border-white/60 text-white rounded font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="mailto:f20230399@hyderabad.bits-pilani.ac.in"
              className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
