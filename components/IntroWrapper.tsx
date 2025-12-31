"use client"

import { useState } from "react"
import IntroAnimation from "@/components/intro-animation"
import Home from "@/app/page"

export default function IntroWrapper() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {/* HOME — mounted but hidden initially */}
      <div className={showIntro ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Home />
      </div>

      {/* INTRO — absolute overlay */}
      {showIntro && (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      )}
    </>
  )
}
