export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

        <div className="space-y-12">
          {/* Profile section with image and description */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative z-10 w-[440px] h-[440px] rounded-full bg-black overflow-hidden shadow-2xl">
                <img
                  src="/placeholder-user.png"
                  alt="Shreya Gupta"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m a pre-final year Electrical and Electronics student at BITS Pilani (Hyderabad) 
                  who enjoys turning open-ended questions into concrete, end-to-end systems using 
                  data, machine learning, and AI.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’ve worked across domains like OTT retention, multi-market trading platforms, 
                  multimodal RAG, and AI-assisted tooling—treating each project as a small product, 
                  from understanding the problem to building something usable and reliable.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  What draws me to this work is the process of bringing clarity to messy problems—
                  figuring out what actually matters, what can be measured, and what should be built.
                  I’ve focused on designing clean data models, building dependable pipelines, and 
                  applying ML and retrieval techniques where they add real value, not just novelty.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I enjoy collaborating with others, learning continuously, and exploring the 
                  intersection of traditional data systems and modern AI—especially where good 
                  engineering makes complex ideas easier to trust and use.
                </p>
              </div>


          </div>

          {/* Core Expertise & Technologies */}
          <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-border">
            {/* Core Expertise (indented to align under image) */}
            <div className="md:pl-20">
              <h3 className="text-2xl font-bold text-primary mb-6">
                CORE EXPERTISE
              </h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li>• Generative AI, Retrieval-Augmented Systems & LLMs</li>
                <li>• Machine Learning & Predictive Modeling </li>
                <li>• Natural Language Processing & Semantic Retrieval  </li>
                <li>• Applied AI Systems  </li>
                <li>• Backend Systems & Relational Databases  </li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                TECHNOLOGIES
              </h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li>• Python & SQL  </li>
                <li>• PyTorch & Scikit-learn</li>
                <li>• LLM Frameworks & APIs</li>
                <li>• Qdrant & Vector Databases</li>
                <li>• Streamlit & Web-based Dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
