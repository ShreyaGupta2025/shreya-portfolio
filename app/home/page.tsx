"use client"

import { useState } from "react"
import IntroAnimation from "@/components/intro-animation"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Expertise from "@/components/expertise"
import FeaturedProjects from "@/components/featured-projects"
import AllProjects from "@/components/all-projects"
import Connect from "@/components/connect"
import Footer from "@/components/footer"
import Education from "@/components/edu"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {/* MAIN SITE */}
      <main
        className={`
          min-h-screen bg-background text-foreground
          transition-opacity duration-[1000ms] ease-out
          ${showIntro ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <Navigation />
        <Hero />
        <About />
        <Expertise />
        <Education />
        <FeaturedProjects />
        <AllProjects />
        <Connect />
        <Footer />
      </main>

      {/* INTRO OVERLAY */}
      {showIntro && (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      )}
    </>
  )
}
