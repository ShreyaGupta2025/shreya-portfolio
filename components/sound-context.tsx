"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface SoundContextType {
  isMuted: boolean
  toggleMute: () => void
}

const SoundContext = createContext<SoundContextType | undefined>(undefined)

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return <SoundContext.Provider value={{ isMuted, toggleMute }}>{children}</SoundContext.Provider>
}

export function useSound() {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error("useSound must be used within SoundProvider")
  }
  return context
}
