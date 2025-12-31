"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProjectModal from "./project-modal"

const projects = [
  /* 🔒 PROJECT DATA UNCHANGED (keep exactly as you sent) */
]

export default function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null)

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 420
    scrollContainerRef.current.scrollTo({
      left:
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount),
      behavior: "smooth",
    })
  }

  return (
    <>
      <section
        id="featured"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
            Featured Projects
          </h2>

          <div className="relative group">
            {/* ⬅️➡️ DESKTOP ARROWS ONLY */}
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 text-white opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 text-white opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronRight size={22} />
            </button>

            {/* 🧠 SCROLL CONTAINER */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 pr-4 snap-x snap-mandatory"
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="
                    relative flex-shrink-0
                    w-72 sm:w-80
                    h-96
                    rounded-xl overflow-hidden
                    border border-border bg-card
                    cursor-pointer
                    transition-all
                    md:hover:scale-105 md:hover:border-primary
                    snap-start
                  "
                >
                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* CONTENT */}
                  <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
                    <p className="text-xs text-primary uppercase mb-2">
                      {project.badge}
                    </p>

                    <h3 className="text-lg sm:text-xl font-bold mb-1 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3">
                      {project.subtitle}
                    </p>

                    {/* HOVER DETAILS (DESKTOP ONLY) */}
                    <div
                      className={`
                        hidden md:block transition-all overflow-hidden
                        ${
                          hoveredIndex === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }
                      `}
                    >
                      <p className="text-sm text-white/80 mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔍 MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
