"use client"

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-10">

          {/* BRAND */}
          <div>
            <h3 className="font-bold mb-3 text-2xl text-primary">SG</h3>
            <p className="text-sm text-muted-foreground">
              Building thoughtful systems at the intersection of AI, data, and design.
            </p>
          </div>

          {/* FOLLOW */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Follow
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/ShreyaGupta2025"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shreyagupta2005/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:f20230399@hyderabad.bits-pilani.ac.in"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="text-left md:text-right flex items-end">
            <p className="text-sm text-muted-foreground">
              © 2025 Shreya Gupta
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
