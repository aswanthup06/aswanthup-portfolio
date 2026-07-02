import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Happy ERP",
    description:
      "A complete ERP dashboard system designed for managing business operations with clean UI architecture, scalable layouts, and responsive data-driven interfaces.",
    image: "/happy2.webp",
    link: "/projects/happy-erp",
    tech: ["React", "ERP", "Dashboard"],
    type: "Dashboard & Website",
    role: "UI Design & UI Development",
  },
  {
    title: "ENVOCC",
    description:
      "A modern logistics and shipping management platform focused on improving operational workflows, dashboard usability, and enterprise-level user experience.",
    image: "/nvo.webp",
    link: "/projects/nvocc",
    tech: ["React", "Next.js", "Tailwind"],
    type: "Dashboard",
    role: "UI Development",
  },

  {
    title: "Doctor One",
    description:
      "A healthcare-focused digital platform built to simplify patient interactions, appointment management, and medical service accessibility through intuitive design.",
    image: "/dr1.webp",
    link: "/projects/doctor-one",
    tech: ["Healthcare", "Next.js", "UI UX"],
    type: "Dashboard & Website",
    role: "UI Design & UI Development",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" aria-label="Featured Projects" className="w-full">
      <div className="max-w-6xl mx-auto">
        {/* ========================================= */}
        {/* Header */}
        {/* ========================================= */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-bold text-sm md:text-base text-gray-900">
              Projects
            </h2>

            <p className="text-3xl md:text-4xl text-black/85 font-semibold leading-tight mt-3">
              Featured Work
              <span className="text-slate-400 font-medium">
                {" "}
                Built With Modern UI Thinking
              </span>
            </p>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-5 max-w-xl">
              A collection of selected projects focused on frontend development,
              UI engineering, responsive experiences, and scalable product
              design across multiple industries.
            </p>
          </div>

          {/* Button */}

          <Link
            href="/projects"
            aria-label="View all projects"
            className="
              group
              bg-gradient-to-b
              from-blue-400
              to-blue-600
              rounded-lg
              text-white
              h-11
              px-6
              font-medium
              text-sm
              flex
              items-center
              gap-2
              w-fit
              justify-center
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
              hover:from-blue-500
              hover:to-blue-700
              active:translate-y-px
              transition-all
              duration-300
            "
          >
            Explore All Projects
            <MdOutlineArrowOutward className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
          </Link>
        </div>

        {/* ========================================= */}
        {/* Cards */}
        {/* ========================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-14 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="
                group

              
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-1
                
              "
            >
              <div className="relative overflow-hidden">
                <div
                  className="overflow-hidden rounded-xl relative border
                      border-gray-200"
                >
                  <Image
                    className="
                      w-full
                      h-64
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                      
                    "
                    src={project.image}
                    alt={`${project.title} UI Project Preview`}
                    width={600}
                    height={400}
                    loading="lazy"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Tech Stack */}

                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="
                          px-3
                          py-1
                          rounded-md
                          bg-black
                          border
                          border-white/10
                          backdrop-blur-md
                          text-xs
                          text-white
                          tracking-wide
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Floating Button */}

                  <Link
                    href={project.link}
                    aria-label={`View ${project.title} project`}
                    className="
                      absolute
                      bottom-4
                      right-4
                      w-11
                      h-11
                      rounded-full
                      bg-white
                      text-black
                      flex
                      items-center
                      justify-center
                      hover:scale-110
                      duration-300
                    "
                  >
                    <MdOutlineArrowOutward className="text-lg" />
                  </Link>
                </div>
              </div>

              <div className="pt-5">
                {/* Top */}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-gray-900 font-bold text-xl">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mt-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom */}

                <div className=" flex items-center justify-between  pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400">
                      {project.type}
                    </p>

                    <h1 className="text-sm font-semibold text-gray-900 mt-1">
                      {project.role}
                    </h1>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
