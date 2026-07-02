type CurriculumLevel = {
  title: string;
  topics: string[];
};

export default function UIDevelopmentTraining() {
  const curriculum: CurriculumLevel[] = [
    {
      title: "UI Development Fundamentals",
      topics: [
        "HTML5 Fundamentals",
        "CSS3 Styling",
        "Flexbox & CSS Grid",
        "Responsive Design",
        "Web Accessibility Basics",
        "Landing Page Project",
      ],
    },
    {
      title: "Modern UI Development",
      topics: [
        "Bootstrap 5",
        "Tailwind CSS",
        "Component-Based UI",
        "Figma to HTML/CSS",
        "Responsive Website Development",
        "Real-World UI Project",
      ],
    },
    {
      title: "React UI & Portfolio",
      topics: [
        "React Fundamentals",
        "Props & State",
        "Reusable Components",
        "Figma to React",
        "Portfolio Development",
        "Deployment & Best Practices",
      ],
    },
  ];

  const freeBootcamp: string[] = [
    "Introduction to UI Development",
    "HTML Essentials",
    "CSS Fundamentals",
    "Flexbox & Grid Layouts",
    "Responsive Design",
    "Build a Landing Page",
    "Mini Project & Career Roadmap",
  ];

  const audience: string[] = [
    "Students starting their UI Development journey",
    "Freshers preparing for frontend roles",
    "UI/UX Designers who want to learn coding",
    "Developers improving frontend implementation skills",
  ];

  return (
    <section className="relative bg-[#0a0a0f] py-24 text-white pt-40 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glowing Orbs */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#ff6b35]/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-32 h-96 w-96 rounded-full bg-[#ffd700]/10 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35]/5 blur-[120px]" />

      <div className="container relative mx-auto px-6">
        {/* Header - Minimalist */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b35] animate-pulse" />
            Mentorship & Training
          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-7xl">
  Learn, Build, Launch
  <br />
  <span className="bg-gradient-to-r from-[#ff6b35] to-[#ffd700] bg-clip-text text-transparent">
    Your UI Development Career
  </span>
</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            A structured learning path covering HTML, CSS, Bootstrap,
            Tailwind CSS, React, responsive design, and Figma-to-code
            workflows.
          </p>
        </div>

        {/* Free Bootcamp - Dark Card with Accent */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all hover:border-[#ff6b35]/50 hover:shadow-2xl hover:shadow-[#ff6b35]/10">
            <div className="absolute right-0 top-0 h-1 w-1/3 bg-gradient-to-l from-[#ff6b35] to-transparent" />
            
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff6b35]/30 bg-[#ff6b35]/10 text-3xl">
                  ⚡
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-light">
                  Free <span className="font-bold text-[#ff6b35]">7-Day</span> UI Development Bootcamp
                </h3>
                <p className="mt-1 text-white/60">
                  Start with a beginner-friendly bootcamp and build your first responsive website.
                </p>
              </div>

              <button className="group relative overflow-hidden rounded-full border border-[#ff6b35] bg-[#ff6b35] px-8 py-3 font-medium text-white transition-all hover:bg-transparent hover:text-[#ff6b35]">
                <span className="relative z-10">Enroll Free</span>
              </button>
            </div>

            <div className="mt-8 grid gap-3 border-t border-white/5 pt-8 md:grid-cols-4">
              {freeBootcamp.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all hover:border-[#ff6b35]/30 hover:bg-[#ff6b35]/5"
                >
                  <span className="text-xs font-bold text-[#ff6b35]">0{index + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curriculum - Horizontal Scroll Design */}
        <div className="mx-auto mt-24 max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-light">
                Curriculum <span className="font-bold text-[#ff6b35]">Path</span>
              </h2>
              <p className="mt-2 text-white/50">Progressive learning from fundamentals to advanced</p>
            </div>
            {/* <div className="hidden gap-2 md:flex">
              <button className="rounded-full border border-white/10 p-2 text-white/40 transition hover:border-[#ff6b35]/50 hover:text-[#ff6b35]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="rounded-full border border-white/10 p-2 text-white/40 transition hover:border-[#ff6b35]/50 hover:text-[#ff6b35]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div> */}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {curriculum.map((level, index) => (
              <div
                key={level.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-[#ff6b35]/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#ff6b35]/5"
              >
                {/* Progress Bar */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-light text-white/40">Level {index + 1}</span>
                  <span className="text-4xl font-bold text-white/5 transition group-hover:text-[#ff6b35]/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-light leading-tight">
                  {level.title}
                </h3>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#ff6b35]/20 to-transparent" />

                <ul className="mt-6 space-y-2">
                  {level.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white/90"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#ff6b35]" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-8">
                  <span className="inline-flex items-center gap-2 text-sm text-[#ff6b35] opacity-0 transition-all group-hover:opacity-100">
                    Explore curriculum
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Audience - Modern Testimonial Style */}
        <div className="mx-auto mt-24 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-light">
                Who Is This <br />
                <span className="font-bold text-[#ff6b35]">Training For?</span>
              </h3>
              <p className="mt-4 text-white/50">
                Designed for various skill levels and career goals
              </p>
              <div className="mt-6 flex -space-x-2">
                {['👨‍🎓', '👩‍💻', '🎨', '⚡'].map((emoji, i) => (
                  <div key={i} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0a0a0f] bg-white/10 text-sm backdrop-blur-sm">
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="grid gap-4">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-[#ff6b35]/30 hover:bg-[#ff6b35]/5"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#ff6b35]/30 bg-[#ff6b35]/10 text-[#ff6b35]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 transition-colors group-hover:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Bold Minimalist */}
        <div className="mx-auto mt-24 max-w-7xl text-center">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-16 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ff6b35]/5 to-[#ffd700]/5" />
            
            <div className="relative">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 text-3xl">
                🚀
              </div>

              <h3 className="text-3xl font-light">
                Start Your UI Development <span className="font-bold text-[#ff6b35]">Journey</span>
              </h3>

              <p className="mx-auto mt-4 text-white/50">
                Learn industry-standard UI development practices, build
                real-world projects, and create modern, responsive web interfaces.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button className="group relative overflow-hidden rounded-full bg-[#ff6b35] px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#ff6b35]/30">
                  <span className="relative z-10 flex items-center gap-2">
                    Join the Free Bootcamp
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                
                <button className="rounded-full border border-white/10 px-8 py-4 font-medium text-white/60 transition hover:border-white/30 hover:text-white">
                  View Syllabus
                </button>
              </div>
              
              <p className="mt-6 text-sm text-white/30">
                ✦ Start learning today ✦
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}