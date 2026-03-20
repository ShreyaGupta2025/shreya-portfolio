"use client"

import { useEffect, useState } from "react"
import GlobalParticles from "@/components/GlobalParticles"

export default function IntroAnimation({
  onFinish,
}: {
  onFinish: () => void
}) {
  const [showName, setShowName] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [drawLine, setDrawLine] = useState(false)
  const [fadeText, setFadeText] = useState(false)
  const [fadeBg, setFadeBg] = useState(false)

  /* ───────── SEQUENCE ───────── */
  useEffect(() => {
    const t0 = setTimeout(() => setShowName(true), 300)
    const t1 = setTimeout(() => setShowPortfolio(true), 1700)
    const t2 = setTimeout(() => setDrawLine(true), 2100)

    const t3 = setTimeout(() => setFadeText(true), 4200)
    const t4 = setTimeout(() => setFadeBg(true), 4700)
    const t5 = setTimeout(() => onFinish(), 5100)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      
      {/* 🖤 BLACK BACKGROUND */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-[1400ms] z-0
          ${fadeBg ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* 🌌 PARTICLES */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-[1400ms] ease-out
          ${fadeBg ? "opacity-0" : "opacity-100"}
        `}
      >
        <GlobalParticles />
      </div>

      {/* 🎬 INTRO CONTENT */}
      <div
        className={`relative z-20 h-[100dvh] flex items-center justify-center px-4
          transition-opacity duration-[900ms]
          ${fadeText ? "opacity-0" : "opacity-100"}
        `}
      >
        <div className="flex flex-col items-center gap-8 sm:gap-12">

          {/* NAME */}
          <div className="relative overflow-hidden max-w-[90vw]">
            <h1
              className="text-[clamp(2.2rem,10vw,6rem)] tracking-[0.08em] text-center"
              style={{
                color: "#e50914",
                fontFamily:
                  "'Bebas Neue','Anton','Netflix Sans',system-ui,sans-serif",
                textShadow:
                  "0 0 18px rgba(229,9,20,0.45), 0 0 42px rgba(229,9,20,0.25)",
              }}
            >
              SHREYA&nbsp;GUPTA
            </h1>

            {/* Reveal mask */}
            <div
              className={`absolute inset-0 bg-black transition-transform duration-[1400ms] ease-out
                ${showName ? "translate-x-full" : "translate-x-0"}
              `}
            />
          </div>

          {/* RED LINE */}
          <div className="relative w-[80vw] max-w-[520px] h-[28px] flex items-center justify-center">
            
            {/* Glow */}
            <div
              className={`absolute h-[6px] transition-all duration-[900ms]
                ${drawLine ? "w-full opacity-60" : "w-0 opacity-0"}
              `}
              style={{
                background:
                  "linear-gradient(to right, transparent, #e50914 20%, #e50914 80%, transparent)",
                filter: "blur(16px)",
              }}
            />

            {/* Core */}
            <div
              className={`absolute h-[2px] transition-all duration-[900ms]
                ${drawLine ? "w-full opacity-100" : "w-0 opacity-0"}
              `}
              style={{
                background:
                  "linear-gradient(to right, transparent, #e50914 18%, #e50914 82%, transparent)",
              }}
            />

            {/* Light sweep */}
            {drawLine && (
              <div className="absolute left-[-30%] h-[22px] w-[180px] netflix-flare-once" />
            )}
          </div>

          {/* PORTFOLIO */}
          <p
            className={`text-[clamp(1rem,5vw,2rem)] tracking-[0.35em] text-center transition-all duration-[900ms]
              ${showPortfolio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[3vh]"}
            `}
            style={{
              color: "#ffffff",
              fontFamily:
                "'Bebas Neue','Anton','Netflix Sans',system-ui,sans-serif",
            }}
          >
            PORTFOLIO
          </p>
        </div>
      </div>

      {/* FLARE CSS */}
      <style jsx>{`
        .netflix-flare-once {
          top: 50%;
          transform: translateY(-50%);
          background: radial-gradient(
            ellipse at center,
            rgba(255,255,255,1) 0%,
            rgba(255,120,120,0.95) 22%,
            rgba(229,9,20,0.75) 42%,
            rgba(229,9,20,0.45) 55%,
            rgba(229,9,20,0.2) 65%,
            transparent 75%
          );
          filter: blur(4px);
          animation: sweepOnce 2.3s ease-out forwards;
        }

        @keyframes sweepOnce {
          from {
            left: -30%;
            opacity: 0.5;
          }
          to {
            left: 110%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}