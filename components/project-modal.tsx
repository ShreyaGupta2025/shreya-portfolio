"use client"

import { X } from "lucide-react"

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  badge?: string
  highlights: string[]
  techStack: string[]
  outcome: string
  codeUrl?: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= Header / Image ================= */}
        <div className="relative h-64 overflow-hidden">
          {/* Background Image */}
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover filter brightness-50"
          />

          {/* Bottom fade (ONLY ONE gradient) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Title */}
          <div className="absolute top-9 left-0 right-0 px-6 pb-6 pt-20">
            {project.badge && (
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {project.badge}
              </p>
            )}
            <h1 className="text-4xl font-bold text-white mb-1">
              {project.title}
            </h1>
            <p className="text-lg text-white/80">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* ================= Content ================= */}
        <div className="p-8 space-y-8">
          {/* Overview */}
          <div>
            <h2 className="text-xl font-bold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-xl font-bold mb-3">
              Key Technical Highlights
            </h2>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="text-muted-foreground flex items-start gap-3"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-xl font-bold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div>
            <h2 className="text-xl font-bold mb-3">Outcome & Impact</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.outcome}
            </p>
          </div>

          {/* Actions */}
          {project.codeUrl && (
            <div className="flex gap-3 pt-4">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                View Code
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
