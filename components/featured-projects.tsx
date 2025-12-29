"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProjectModal from "./project-modal"

const projects = [
{
  id: 1,
  title: "Context-Aware Multimodal Question-Answering & FAQ Generation System",
  subtitle: "Generative AI | Multimodal RAG",
  description:
    "A context-aware multimodal Retrieval-Augmented Generation (RAG) system that ingests text, tables, and images to deliver citation-backed question answering and automated FAQ generation with high accuracy and interpretability.",
  image: "/rag3.png",
  tags: ["Generative AI", "RAG", "LLMs", "Semantic Search"],
  badge: "Generative AI",
  highlights: [
    "Designed and implemented a Multimodal Retrieval-Augmented Generation (RAG) system to intelligently ingest and process diverse documents by extracting text, tables, and images using LLMs for downstream question-answering" , 
    "Built a modular pipeline for tokenization, chunking, and dense embedding generation, storing high-dimensional vectors in the Qdrant vector database to enable efficient and scalable semantic search" , 
    "Automated FAQ generation through carefully engineered LLM-driven prompts, integrating structured outputs into the knowledge base to improve retrieval coverage, reduce redundancy, and enhance user experience",
    "Employed a hybrid retrieval mechanism combining vector similarity search with a BM25 fallback (threshold < 0.95), ensuring reliable, citation-backed, and context-rich answers with significantly improved accuracy, recall, and interpretability"
  ],
  techStack: ["Generative AI", "RAG", "LLMs", "Semantic Search",
    "Python",
    "LLMs",
    "Qdrant",
    "Dense Embeddings",
    "BM25",
    "Prompt Engineering"
  ],
  codeUrl: "https://github.com/ShreyaGupta2025/Multimodal-RAG" , 
  outcome:
    "Enabled reliable, scalable, and interpretable question answering with improved retrieval coverage, higher recall, and reduced redundancy across diverse document sources."
  },
  {
  id: 2,
  title: "AI-Driven Lesson Plan Report Generator",
  subtitle: "Generative AI | Multi-Agent Automation",
  description:
    "An AI-assisted system that automates the creation of structured, high-quality lesson plan reports using coordinated multi-agent LLM workflows, enabling educators to generate polished, ready-to-use documents with minimal effort.",
  image: "/lesson2.png",
  tags: ["Generative AI", "LLMs", "Multi-Agent Systems", "Automation"],
  badge: "Generative AI",
  highlights: [
    "Designed an AI-assisted report generation system using Streamlit and OpenAI GPT models to automate structured lesson plan creation",
    "Implemented coordinated Autogen-based multi-agent workflows to generate, refine, and format content with consistency and clarity",
    "Developed template-driven DOCX report generation for instant export of polished, educator-ready lesson plans",
    "Built a modular and extensible web interface supporting customizable inputs and easy addition of new report templates"
  ],
  techStack: [
    "Python",
    "Streamlit",
    "OpenAI API",
    "Autogen",
    "Prompt Engineering",
    "DOCX Automation"
  ],
  codeUrl: "https://github.com/ShreyaGupta2025/Autogen-Streamlit-Application",
  outcome:
    "Reduced manual effort in lesson planning while ensuring consistent structure, clarity, and professional formatting across AI-generated educational reports."
  },
  {
  id: 3,
  title: "Early Warning & Intervention Recommendation System for OTT Show Retention",
  subtitle: "Machine Learning | Predictive Analytics",
  description:
    "A machine learning–driven early warning system that predicts OTT show drop-off risk using early engagement signals and recommends targeted, data-backed interventions to improve viewer retention.",
  image: "/ott2.png",
  tags: ["Machine Learning", "Predictive Analytics", "XGBoost", "User Retention"],
  badge: "Machine Learning",
  highlights: [
    "Built an XGBoost-based early warning model to estimate show drop-off risk using probabilistic scoring and Low / Medium / High risk bucketing to handle class imbalance and uncertainty",
    "Performed diagnostic analysis by benchmarking high-risk shows against successful engagement baselines to identify key underperforming content dimensions",
    "Developed a targeted intervention recommendation framework that prioritizes the most critical engagement gaps and translates them into actionable, content-level insights"
  ],
  techStack: [
    "Python",
    "XGBoost",
    "Scikit-learn",
    "Pandas",
    "Probabilistic Risk Scoring",
    "Data Analysis"
  ],
  codeUrl: "https://github.com/ShreyaGupta2025/Early-Warning-and-Intervention-Recommendation-System-for-OTT-Show-Retention",
  outcome:
    "Enabled proactive identification of at-risk OTT content and provided interpretable, data-driven intervention strategies to improve retention and engagement outcomes."
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    subtitle: "Full-Stack Frontend Engineering",
    description:
      "A high-performance, responsive personal portfolio built to showcase AI/ML projects through clear structure, interactive components, and a modern user experience.",
    image: "/portfolio5.png",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    badge: "Frontend Engineering",
    highlights: [
      "Designed and developed a responsive, high-performance personal portfolio using Next.js and TypeScript with a strong emphasis on visual hierarchy and UX clarity",
      "Built a dynamic project showcase system featuring horizontally scrollable cards, hover-based previews, and detailed modal views with technical highlights, outcomes, and GitHub links",
      "Integrated modern UI enhancements such as background video, animated particle systems, gradient overlays, and smooth transitions to create an immersive yet performant user experience",
      "Architected the codebase using modular, reusable React components and Tailwind CSS to ensure scalability, maintainability, and rapid content updates"
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion"
    ],
    codeUrl: "https://github.com/ShreyaGupta2025/",
    outcome:
      "Delivered a scalable and maintainable portfolio platform that effectively communicates technical depth, system thinking, and project impact through a polished frontend experience."
  }

]

export default function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null)

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 400
    scrollContainerRef.current.scrollTo({
      left:
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount),
      behavior: "smooth",
    })
  }

  return (
    <>
      <section id="featured" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>

          <div className="relative group">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 text-white opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 text-white opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden border border-border bg-card cursor-pointer transition-all hover:scale-105 hover:border-primary"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-50 contrast-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="relative h-full flex flex-col justify-end p-6">
                    <p className="text-xs text-primary uppercase mb-2">
                      {project.badge}
                    </p>
                    <h3 className="text-xl font-bold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.subtitle}
                    </p>

                    <div
                      className={`transition-all overflow-hidden ${
                        hoveredIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-white/80 mb-4">
                        {project.description}
                      </p>
                    </div>

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

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
