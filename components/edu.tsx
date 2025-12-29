"use client"

const edu = [
  {
    id: 1,
    title: "Data Engineer Intern",
    subtitle: "SYSSTRA — Convergence Futuristic Solution Enterprise Pvt. Ltd.",
    badge: "Internship | FinTech",
    description:
      "Worked on a scalable fintech trading platform, building robust data pipelines and analytical workflows to support multi-market algorithmic trading and strategy evaluation.",
    highlights: [
      "Developed end-to-end data pipelines for high-frequency and EOD financial data using Python and MongoDB",
      "Integrated ICICI Direct Breeze API and yfinance for real-time & historical market ingestion",
      "Automated backtesting workflows and implemented quantitative strategy performance analysis",
    ],
    tags: ["Data Engineering", "FinTech", "Python", "MongoDB", "APIs"],
    duration: "May 2025 – Jul 2025",
  },
  {
    id: 2,
    title: "BITS Pilani, Hyderabad Campus",
    subtitle: "B.E. – Electrical & Electronics Engineering ( Minor in Computing and Intelligence )",
    badge: "Undergraduate",
    description:
      "Pursuing a Bachelor of Engineering with a strong focus on analytical thinking, core engineering fundamentals, and interdisciplinary applications of computing and intelligence.",
    highlights: [
      "Minor in Computing and Intelligence",
      "Current CGPA: 9.1 (as of 5th semester)",
      "Strong foundation in mathematics and electronics",
    ],
    tags: ["EEE", "Computing & Intelligence", "Engineering"],
    duration: "Jul 2023 – Jul 2027",
  },
  {
    id: 3,
    title: "Delhi Public School, India",
    subtitle: "CBSE – Grade 12",
    badge: "Higher Secondary",
    description:
      "Completed senior secondary education with a strong academic record emphasizing science, mathematics, and analytical reasoning.",
    highlights: [
      "Secured 95.6% in CBSE Grade 12",
      "Awarded Scholar Trophy for Outstanding Academic Performance for 6 consecutive years"
      ,
    ],
    tags: ["CBSE", "Science", "Mathematics"],
    duration: "2022 – 2023",
  },
  {
    id: 4,
    title: "Delhi Public School, India",
    subtitle: "CBSE – Grade 10",
    badge: "Secondary",
    description:
      "Built a strong academic foundation across core subjects, setting the base for advanced studies in science and engineering.",
    highlights: [
      "Secured 97.4% in CBSE Grade 10",
      "Awarded Scholar Gown and Badge for Outstanding Academic Performance for 4 consecutive years",
      "Consistent academic excellence across subjects",
    ],
    tags: ["CBSE", "Academics", "Foundations"],
    duration: "2020 – 2021",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">
          Experience & Education
        </h2>

        <div className="flex gap-10 overflow-x-auto pb-8">
          {edu.map((item) => (
            <div
              key={item.id}
              className="group [perspective:1200px]"
            >
              {/* FLIP CARD */}
              <div
                className="
                  relative
                  w-[440px] h-[580px]
                  transition-transform duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >
                {/* FRONT */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl
                    border border-border
                    bg-card
                    p-10
                    flex flex-col
                    items-center
                    justify-center
                    text-center
                    gap-4
                    [backface-visibility:hidden]
                  "
                >
                  <p className="text-xs text-red-500 uppercase tracking-widest">
                    {item.badge}
                  </p>

                  <h3 className="text-2xl font-bold leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground max-w-sm">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-muted-foreground mt-2">
                    {item.duration}
                  </p>
                </div>

                {/* BACK */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl
                    border border-border
                    bg-black
                    p-8
                    flex flex-col justify-between
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  "
                >
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                
                    </h4>

                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <ul className="space-y-2">
                      {item.highlights.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-white/70 flex gap-2"
                        >
                          <span className="text-red-500">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded bg-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
