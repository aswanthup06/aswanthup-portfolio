"use client";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

const projects = [
  {
    title: "Happy ERP",
    description:
      "A complete ERP dashboard system designed for managing business operations with clean UI architecture, scalable layouts, and responsive data-driven interfaces.",
    image: "/images/projects/happy-erp/happy2.webp",
    link: "/projects/happy-erp",
    tech: ["React", "ERP", "Dashboard"],
    type: "Dashboard & Website",
    role: "UI Design & UI Development",
  },
  {
    title: "ENVOCC",
    description:
      "A modern logistics and shipping management platform focused on improving operational workflows, dashboard usability, and enterprise-level user experience.",
    image: "/images/projects/nvocc/nvo.webp",
    link: "/projects/nvocc",
    tech: ["React", "Next.js", "Tailwind"],
    type: "Dashboard",
    role: "UI Development",
  },
  {
    title: "Doctor One",
    description:
      "A healthcare-focused digital platform built to simplify patient interactions, appointment management, and medical service accessibility through intuitive design.",
    image: "/images/projects/doctor-one/dr1.webp",
    link: "/projects/doctor-one",
    tech: ["Healthcare", "Next.js", "UI UX"],
    type: "Dashboard & Website",
    role: "UI Design & UI Development",
  },
];

function FeaturedProject() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="
        group
        relative
        grid
        grid-cols-1
        lg:grid-cols-2
        overflow-hidden
        rounded-2xl
        border
        border-border-default
        bg-surface-card
        mt-14
      "
    >
      <div className="relative h-64 lg:h-full min-h-[320px] overflow-hidden">
        <Link
          href="/projects/zenoway"
          aria-label="View Zenoway case study"
          className="block w-full h-full cursor-pointer"
        >
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
        </Link>

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
            pointer-events-none
          "
        >
          Own Project
        </span>

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
            rounded-md
            bg-white/10
            border
            border-white/25
            backdrop-blur-xl
            shadow-[0_4px_24px_rgba(0,0,0,0.15)]
            flex
            items-center
            gap-2
            pointer-events-none
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />

          <p className="text-white text-xs md:text-sm font-medium tracking-wide">
            Helping first-time job seekers land their first role
          </p>
        </div>

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
            z-10
          "
        >
          <MdOutlineArrowOutward aria-hidden="true" className="text-lg" />
        </Link>
      </div>

      <div className="flex flex-col justify-center p-8 lg:p-10">
        <p className="text-xs uppercase tracking-widest text-text-muted font-medium">
          Case Study
        </p>

        <Link
          href="/projects/zenoway"
          className="inline-block w-fit mt-2 group-hover:text-primary transition-colors"
        >
          <h3 className="text-text-primary group-hover:text-primary font-bold text-2xl md:text-3xl transition-colors">
            zenoway.online
          </h3>
        </Link>

        <p className="text-text-body text-sm md:text-base leading-relaxed mt-4 max-w-md">
          A career portal that skips accounts and application forms in favor of
          one action &mdash; a direct email to HR. Designed and built end to
          end, from job discovery through the admin dashboard.
        </p>

        <div className="flex gap-2 flex-wrap mt-6">
          {["Case Study", "UI/UX", "UI Development"].map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-md
                bg-surface-muted
                border
                border-border-default
                text-xs
                text-text-secondary
                tracking-wide
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap mt-3">
          {["Figma", "Next.js", "Tailwind CSS", "TypeScript"].map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-md
                bg-primary-subtle
                border
                border-blue-100
                text-xs
                text-primary
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
            href="https://www.zenoway.online/"
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
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" aria-label="Featured Projects" className="w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="font-bold text-sm md:text-base text-primary">
              Projects
            </h2>

            <p className="text-3xl md:text-4xl text-text-primary font-semibold leading-tight mt-2">
              Featured Work
              <span className="text-text-muted font-medium">
                Built With Modern UI Thinking
              </span>
            </p>

            <p className="text-text-body text-sm md:text-base leading-relaxed mt-4 max-w-xl">
              A collection of selected projects focused on frontend development,
              UI engineering, responsive experiences, and scalable product
              design across multiple industries.
            </p>
          </div>

          <Link
            href="/projects"
            aria-label="View all projects"
            className="
              group
              btn-primary
              rounded-md
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
              shadow-md shadow-blue-500/20
              transition-all
              duration-300
            "
          >
            Explore All Projects
            <MdOutlineArrowOutward className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
          </Link>
        </motion.div>

        <FeaturedProject />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-14 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
                group
                overflow-hidden
                transition-all
                duration-500
              "
            >
              <div className="relative overflow-hidden">
                <motion.div
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="overflow-hidden rounded-xl relative border border-border-default"
                >
                  <Link
                    href={project.link}
                    aria-label={`View ${project.title} project`}
                    className="block relative cursor-pointer"
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

                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                  </Link>

                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap pointer-events-none">
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
                      z-10
                    "
                  >
                    <MdOutlineArrowOutward className="text-lg" />
                  </Link>
                </motion.div>
              </div>

              <div className="pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link
                      href={project.link}
                      className="inline-block group-hover:text-primary transition-colors"
                    >
                      <h3 className="text-text-primary group-hover:text-primary font-bold text-xl transition-colors">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-text-body text-sm leading-relaxed mt-2.5">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-muted font-medium">
                      {project.type}
                    </p>

                    <p className="text-sm font-semibold text-text-primary mt-1">
                      {project.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
