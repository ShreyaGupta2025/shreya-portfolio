import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SoundProvider } from "@/components/sound-context"
import GlobalParticles from "@/components/GlobalParticles"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shreya Gupta",
  description: "Portfolio of Shreya Gupta - Generative AI, MLOps, and NLP expert",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="relative font-sans antialiased bg-background text-foreground">
        
        {/* 🌌 GLOBAL BACKGROUND ANIMATION */}
        <GlobalParticles />

        {/* 🔊 SOUND CONTEXT + APP */}
        <SoundProvider>
          {children}
        </SoundProvider>

        <Analytics />
      </body>
    </html>
  )
}
