"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user has already seen the intro in this session
    const hasSeenIntro = sessionStorage.getItem("introShown")

    if (hasSeenIntro) {
      // Skip intro and go straight to home
      router.push("/home")
    } else {
      // Show intro animation
      router.push("/intro")
      // Mark intro as shown for this session
      sessionStorage.setItem("introShown", "true")
    }
  }, [router])

  return null
}
