"use client"

import { useEffect, useState } from "react"
import IntroAnimation from "@/components/intro-animation"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Expertise from "@/components/expertise"
import Education from "@/components/edu"
import FeaturedProjects from "@/components/featured-projects"
import AllProjects from "@/components/all-projects"
import Connect from "@/components/connect"
import Footer from "@/components/footer"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false)

  // Show intro once per session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("introShown")

    if (!hasSeenIntro) {
      setShowIntro(true)
      sessionStorage.setItem("introShown", "true")
    }
  }, [])

  // Safety fallback — never allow blank screen
  useEffect(() => {
    if (!showIntro) return

    const timeout = setTimeout(() => {
      setShowIntro(false)
    }, 4000) // max intro duration (adjust if needed)

    return () => clearTimeout(timeout)
  }, [showIntro])

  return (
    <>
      {/* MAIN SITE */}
      <main
        className={`min-h-screen bg-background text-foreground transition-opacity duration-1000 ease-out ${
          showIntro ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
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
