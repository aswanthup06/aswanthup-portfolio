import { IoStar } from "react-icons/io5";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center pt-36 px-6">
      <div className="absolute inset-0 -z-10 grid-bg" />

      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute left-30 inset-0 rounded-full bg-blue-400 h-8 w-8 z-50 text-white  flex justify-center items-center">
              <IoStar />
            </div>
            <img
              src="/me2.png"
              alt="Aswanth"
              className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-2 border-white  scale-110 "
            />
          </div>
        </div>

        <h1 className="text-center text-lg font-semibold text-gray-800 mb-2">
          Aswanth Up
        </h1>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          I'm Aswanth, a UI Developer and Designer focused on building
          user-centric, high-performance web applications. I combine design
          thinking with clean code to create seamless digital experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Who I Am</h2>
              <p className="text-gray-500 text-sm mt-2">
                A passionate UI Engineer with 3+ years of experience designing
                and developing web applications. I specialize in React-based
                architectures and modern UI systems.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">What I Do</h2>
              <p className="text-gray-500 text-sm mt-2">
                I design intuitive user interfaces, build scalable frontend
                systems, and optimize user experiences with performance-focused
                development.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Experience
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                3+ years working as a UI Developer & Designer, handling complete
                UI development for real-world applications including healthcare
                platforms and web systems.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Skills & Tools
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind",
                "Figma",
                "UI/UX Design",
              ].map((skill, index) => (
                <span
                  key={index}
                  className=" hover:bg-blue-100 hover:text-blue-600 transition flex items-center gap-2 text-gray-700 text-sm bg-gray-50 px-4 py-2 rounded-lg border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* JOURNEY SECTION START */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-16">
            My Journey
          </h2>

          <p className="text-center text-gray-500 max-w-2xl mx-auto -mt-10 mb-16 leading-relaxed">
  From creative beginnings in art and craftsmanship to building modern
  digital experiences, my journey has been shaped by design, curiosity,
  and continuous learning.
</p>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

            <div className="space-y-16">
              {[
                {
                  date: "June 2023 – Present",
                  title: "Chaavie Solutions",
                  location: "Kozhikode, Kerala",
                  desc: "Worked across UI/UX design, frontend development, and branding. Led UI development for healthcare platforms and mentored junior developers.",
                },
                {
                  date: "Jan 2025 – Aug 2025",
                  title: "6solve IT Services (Contract through Chaavie)",
                  location: "Tirunelveli, Tamil Nadu",
                  desc: "Collaborated on Next.js projects, improving performance and scalability. Strengthened modern frontend architecture skills.",
                },
                {
                  date: "Nov 2022 – Mar 2023",
                  title: "Futura Labs",
                  location: "Kozhikode, Kerala",
                  desc: "Started journey in UI/UX design and frontend basics including HTML, CSS, and Figma.",
                },
                {
                  date: "July 2016 – March 2019",
                  title: "BSc Computer Science",
                  location:
                    "Hi-Tech Arts and Science College, Kallachi, Kerala",
                  desc: "I completed my BSc in Computer Science from Hi-Tech Arts and Science College. During my studies, I also worked on academic projects to enhance my practical skills alongside theoretical knowledge.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-md">
                    <span className="text-sm text-blue-500 font-medium">
                      {item.date}
                    </span>
                    <h3 className="text-lg font-semibold mt-1 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2">
                      {item.location}
                    </p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
      </div>

      <section className="w-full min-h-screen pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Header - Minimal & Airy */}
          <div className="text-center max-w-2xl mx-auto mb-2">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-medium text-stone-600 tracking-wide">
                From Workshop to Pixels
              </span>
            </div>
          </div>

          <div className="md:flex items-center mb-6 justify-between">
            <h1 className="text-xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
              Craftsmanship<span className="text-amber-500">_</span>
              <br />
              Meets Code
            </h1>
            <div>
              <p className="text-stone-500 md:text-lg max-w-lg mx-auto md:text-end">
                Wood grain, pencil strokes, and chisel marks — the foundation of
                my design philosophy.
              </p>
       
            </div>
          </div>

          {/* Masonry Grid Layout - No big box, just cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
            {/* Card 1: Wood Carving Hero - Large feature card */}
            <div className="lg:row-span-2 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 group">
              <div className="relative h-64 overflow-hidden bg-amber-900/5">
                <img
                  src="/wood.jpeg"
                  alt="Wood carving detail"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    ✦ Primary Craft
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🪚</span>
                  <h3 className="font-bold text-xl text-stone-800">
                    Wood Carving
                  </h3>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  Started my creative journey with chisel and wood — learning
                  patience, grain direction, and the beauty of subtracting to
                  reveal form.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                    Hand-carved
                  </span>
                  <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                    Detail-oriented
                  </span>
                </div>
              </div>
            </div>

           {/* Card 2: Kerala State School Kalolsavam Achievement */}
<div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-stone-100">
  <div className="flex items-start justify-between mb-4">
    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">
      🏅
    </div>

    <span className="text-xs font-mono bg-stone-100 px-2 py-1 rounded text-stone-500">
      5×
    </span>
  </div>

  <h3 className="font-bold text-lg text-stone-800 mb-1">
    Kerala State Achievement
  </h3>

  <p className="text-stone-500 text-sm leading-relaxed mb-3">
    <span className="font-semibold text-emerald-600">
      5 Times A Grade
    </span>{" "}
    in Wood Carving at Kerala State School Sasthrolsavam
    (Work Experience Category)
  </p>

  <p className="text-xs text-stone-400">
    Achieved during School, +1, and +2 years through state-level.
  </p>
</div>

            {/* Card 3: District Level Dominance */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-stone-100">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                  🏆
                </div>
                <span className="text-xs font-mono bg-stone-100 px-2 py-1 rounded text-stone-500">
                  4+1
                </span>
              </div>
              <h3 className="font-bold text-lg text-stone-800 mb-1">
                District Level
              </h3>
              <p className="text-stone-600 text-sm">
                <span className="font-semibold text-blue-600">
                  4× First Prize
                </span>{" "}
                · 1× Second Prize
              </p>
              <p className="text-xs text-stone-400 mt-2">
                Wood carving & creative arts competitions
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-stone-100">
              <div className="flex gap-3 items-start mb-3">
                <span className="text-2xl">✏️</span>
                <div>
                  <h3 className="font-bold text-stone-800">
                    Pencil Drawing & Painting
                  </h3>
                  <p className="text-xs text-amber-600 font-medium">
                    Sub-District Level Winner
                  </p>
                </div>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">
                Recognized for realistic pencil sketches and watercolor
                compositions — visual storytelling before digital tools.
              </p>
              <div className="mt-3 flex gap-1">
                <span className="text-xs text-stone-400">✧ Sketching</span>
                <span className="text-xs text-stone-400">✧ Watercolor</span>
              </div>
            </div>

            <div className="row-span-2 bg-stone-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="/wood1.jpeg"
                  alt="Carpentry workbench with tools — replace with your image"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/20 transition"></div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">
                    2019 - 2022
                  </span>
                </div>
              </div>
              <div className="p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-400 text-xl">🔨</span>
                  <h3 className="font-bold text-lg">Carpenter · Few Years</h3>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Hands-on experience in joinery, furniture making, and
                  precision woodworking. Translated workshop discipline into
                  digital product thinking.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full">
                    Joinery
                  </span>
                  <span className="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full">
                    Furniture
                  </span>
                  <span className="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full">
                    Restoration
                  </span>
                </div>
              </div>
            </div>

            <div className="relative bg-stone-100 rounded-2xl overflow-hidden h-48 group">
              <img
                src="/wood3.png"
                alt="Carpenter at work — replace with your image"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent flex items-end p-4">
                <span className="text-white text-sm font-medium drop-shadow">
                  carpentry works
                </span>
              </div>
              {/* <div className="absolute top-2 right-2 bg-black/40 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
                your image
              </div> */}
            </div>

            {/* Card 4: Pencil Drawing & Painting - Sub District Wins */}

            <div className="bg-amber-50/40 rounded-2xl p-6 flex flex-col justify-center border border-amber-100/50">
              <span className="text-4xl mb-2 opacity-60">“</span>
              <p className="text-stone-600 italic text-sm leading-relaxed">
                Every UI component is like a well-cut joint — invisible when
                perfect, but essential for structure.
              </p>
              <p className="text-xs text-stone-400 mt-3 tracking-wide">
                — from carpenter to designer
              </p>
            </div>

            {/* Card 5: Carpenter Experience - with image placeholder */}

            {/* Card 6: Quote / Philosophy - Minimal */}

            {/* Card 7: Stats Summary - Clean */}

            {/* Card 8: Image placeholder for your carpenter photo */}

            {/* Card 9: Pencil Drawing detail */}
          </div>

          {/* Footer / extra context */}
          <div className="mt-12 text-center">
            <p className="text-xs text-stone-400 flex items-center justify-center gap-2 flex-wrap">
              <span>🪵 wood carving</span>
              <span className="w-1 h-1 rounded-full bg-stone-300"></span>
              <span>🔨 carpentry</span>
              <span className="w-1 h-1 rounded-full bg-stone-300"></span>
              <span>✏️ pencil drawing</span>
              <span className="w-1 h-1 rounded-full bg-stone-300"></span>
              <span>🎨 painting</span>
              <span className="w-1 h-1 rounded-full bg-stone-300"></span>
              <span>💻 ui design</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
