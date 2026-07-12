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

/* ========================================= */
/* Featured "Best Work" spotlight — Zenoway   */
/* Sits above the grid, does not touch it.    */
/* ========================================= */
function FeaturedProject() {
  return (
    <div
      className="
        group
        relative
        grid
        grid-cols-1
        lg:grid-cols-2
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        mt-14
      "
    >
      {/* Video side */}
      <div className="relative h-64 lg:h-full min-h-[320px] overflow-hidden">
        <video
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
          src="/assets/zenoway/zenoway.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent lg:bg-linear-to-r" />

        <span
          className="
            absolute
            bottom-4
            left-4
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
          Own Project
        </span>


        {/* Glassmorphic tagline */}
        <div
          className="
            absolute
            top-4
            left-4
            right-4
            w-fit
            max-w-[calc(100%-2rem)]
            px-4
            py-2
            rounded-full
            bg-white/10
            border
            border-white/25
            backdrop-blur-xl
            shadow-[0_4px_24px_rgba(0,0,0,0.15)]
            flex
            items-center
            gap-2
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <p className="text-white text-xs md:text-sm font-medium tracking-wide">
            Helping first-time job seekers land their first role
          </p>
        </div>

        {/* Floating button — opens the case study, same pattern as the grid cards */}
        <Link
          href="/projects/zenoway"
          aria-label="View Zenoway case study"
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

      {/* Content side */}
      <div className="flex flex-col justify-center p-8 lg:p-10">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Case Study
        </p>

        <h3 className="text-gray-900 font-bold text-2xl md:text-3xl mt-2">
          Zenoway.com
        </h3>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-md">
          A career portal that skips accounts and application forms in favor
          of one action &mdash; a direct email to HR. Designed and built end
          to end, from job discovery through the admin dashboard.
        </p>

        <div className="flex gap-2 flex-wrap mt-6">
          {["Case Study", "UI/UX", "UI Development"].map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-md
                bg-gray-100
                border
                border-gray-200
                text-xs
                text-gray-700
                tracking-wide
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex gap-2 flex-wrap mt-3">
          {["Figma", "Next.js", "Tailwind CSS", "TypeScript"].map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-md
                bg-blue-50
                border
                border-blue-100
                text-xs
                text-blue-700
                tracking-wide
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 mt-8">
          <Link
            href="/projects/zenoway"
            aria-label="Read the Zenoway case study"
            className="
              group/btn
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-gray-900
              w-fit
            "
          >
            Read the case study
            <MdOutlineArrowOutward className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 duration-300" />
          </Link>

          <Link
            href="https://www.zenoway.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the live Zenoway site"
            className="
              group/live
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-gray-900
              w-fit
            "
          >
            Live Site
            <MdOutlineArrowOutward className="group-hover/live:translate-x-1 group-hover/live:-translate-y-1 duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

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
        {/* Featured — Zenoway (best work spotlight)   */}
        {/* ========================================= */}

        <FeaturedProject />

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