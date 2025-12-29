"use client"

import { useState } from "react"
import ProjectModal from "./project-modal"

const allProjects = [
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
    codeUrl: "https://github.com/ShreyaGupta2025/shreya-portfolio",
    outcome:
      "Delivered a scalable and maintainable portfolio platform that effectively communicates technical depth, system thinking, and project impact through a polished frontend experience."
  },
  {
    id: 5,
    title: "AeroSwift Drone Logistics Management System",
    subtitle: "Drone-Based Logistics Automation",
    description:
      "A full-stack drone logistics automation platform managing orders, drones, pilots, and compliance workflows.",
    image: "/drone2.png",
    tags: ["Systems Engineering", "Database Design", "Automation"],
    badge: "Database & Systems",
    highlights: [
      "Designed and deployed a full-stack drone logistics automation system featuring a normalized MySQL database for managing customers, orders, drones, pilots, airspace zones, and deliveries.",
      "Implemented advanced stored procedures, triggers, and validation rules to automate drone assignment, pilot licensing checks, route approvals, and compliance generation.",
      "Built a fully interactive Streamlit web application enabling order placement, workflow visualization, system monitoring, and analytics dashboards."
    ],
    techStack: [
      "Python",
      "MySQL",
      "SQL Triggers",
      "Streamlit"
    ],
    codeUrl: "https://github.com/ShreyaGupta2025/AeroSwift-Drone-Delivery-Database",
    outcome:
      "Improved operational reliability through automated backend logic."
  },
  {
    id: 6,
    title: "AdventureGuard – Adventure Sports Safety Management System",
    subtitle: "Database Systems | Safety Automation",
    description:
      "A database-centric system for managing adventure sports safety, equipment, and injury workflows.",
    image: "/adv3.png",
    tags: ["Database Systems", "Safety Automation"],
    badge: "Database & Systems",
    highlights: [
      "Architected a relational database system to model real-world adventure sports operations, capturing participants, activities, instructors, injuries, equipment dependencies, and maintenance history with strong entity and weak entity relationships.",
      "Implemented data integrity and business rules directly at the database layer using triggers, stored procedures, and user-defined functions for injury validation, participant tracking, equipment status control, and instructor performance evaluation.",
      "Developed a Streamlit-based management interface to insert live data, visualize safety metrics, execute complex SQL queries (nested, GROUP BY, HAVING, joins), and demonstrate backend logic execution in real time."
    ],
    techStack: [
      "Python",
      "MySQL",
      "PL/SQL",
      "Streamlit"
    ],
    codeUrl: "https://github.com/ShreyaGupta2025/AdventureGuard-DBMS",
    outcome:
      "Enabled structured safety monitoring with strong data integrity guarantees."
  }
]

export default function AllProjects() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof allProjects)[number] | null>(null)

  return (
    <>
      <section id="projects" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">All Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="relative h-80 rounded-xl overflow-hidden border border-border cursor-pointer transition-all hover:scale-[1.02] hover:border-primary"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-55 contrast-110"
                />

                {/* Fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {project.badge && (
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      {project.badge}
                    </p>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-3">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-white/10 text-white"
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
