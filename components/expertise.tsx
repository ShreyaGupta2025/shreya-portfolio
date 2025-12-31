"use client"

import ParticlesBackground from "./ParticlesBackground"

export default function Expertise() {
  const areas = [
    {
      title: "Generative AI",
      description:
        "Building context-aware Generative AI systems using multimodal RAG, prompt engineering, and LLM-driven automation.",
    },
    {
      title: "Applied AI Systems",
      description:
        "Applying machine learning and AI techniques within structured, real-world systems.",
    },
    {
      title: "Machine Learning",
      description:
        "Developing machine learning models for prediction, risk assessment, and data-driven decision making.",
    },
    {
      title: "NLP",
      description:
        "Working on language understanding systems involving semantic analysis, retrieval, and text generation.",
    },
    {
      title: "Backend Systems & Databases",
      description:
        "Building backend components with structured data models, SQL-based logic, and automation workflows.",
    },
    {
      title: "Prompt Engineering",
      description:
        "Designing and refining structured prompts to guide LLM behavior for reliable and task-specific outputs.",
    },
  ]

  return (
    <section
      id="expertise"
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-black overflow-hidden"
    >
      {/* 🌐 Particles */}
      <ParticlesBackground />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 🧠 Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 md:mb-16 text-white">
          Areas of Expertise
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="
                group p-5 sm:p-6 rounded-xl
                border border-white/10
                bg-white/5 backdrop-blur
                transition-all duration-300
                hover:border-red-500
                hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]
                active:border-red-500
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                {area.title}
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
