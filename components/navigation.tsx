"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Linkedin, Github, FileText } from "lucide-react"

const NAV_ITEMS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "education", label: "Experience & Education" },
  { id: "featured", label: "Featured Projects" },
  { id: "projects", label: "All Projects" },
  { id: "contact", label: "Connect" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("top")

  /* 🔁 SECTION OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    )

    NAV_ITEMS.forEach((item) => {
      if (item.id === "top") return
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  /* ⬆️ TOP DETECTION */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection("top")
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-3 md:py-4 flex items-center">

        {/* LEFT */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary">
            SG
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={item.id === "top" ? "#" : `#${item.id}`}
                  onClick={(e) => {
                    if (item.id === "top") {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: "smooth" })
                      setActiveSection("top")
                    }
                  }}
                  className="relative text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}

                  {/* Active underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] w-full bg-primary
                      transition-transform transition-opacity duration-300
                      ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
                    `}
                    style={{ transformOrigin: "left" }}
                  />
                </a>
              )
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/ShreyaGupta2025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/shreyagupta2005/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="/resume.pdf"
            className="px-3 sm:px-4 py-2 border border-primary text-primary text-sm font-medium rounded hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            <FileText size={16} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
