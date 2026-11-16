"use client";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";
import { PROJECTS } from "../../data/projects";

const caseStudyGrid = PROJECTS.filter(
  (p) => p.slug !== "/projects/zenoway" && p.featured
);

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
        mt-10 md:mt-12
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
            src="/images/projects/zenoway/zenoway.mp4"
            poster="/images/projects/zenoway/zenoway-mock.webp"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            aria-label="Zenoway platform demonstration preview"
          >
            <track kind="captions" srcLang="en" label="No audio" default={false} />
          </video>

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
            px-3
            py-1.5
            sm:px-4
            sm:py-2
            rounded-md
            bg-white/10
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

      <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
        <p className="text-xs uppercase tracking-wider text-text-muted font-semibold">
          Case Study
        </p>

        <Link
          href="/projects/zenoway"
          className="inline-block w-fit mt-2 group-hover:text-primary transition-colors"
        >
          <h3 className="text-text-primary group-hover:text-primary font-semibold text-2xl md:text-3xl tracking-tight transition-colors">
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
              text-text-primary
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
              text-text-primary
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
              Projects
            </p>

            <h2 className="text-3xl md:text-4xl text-text-primary font-semibold tracking-tight leading-tight mt-2">
              Featured Work{" "}
              <span className="text-text-muted font-medium">
                From Sketch to Production
              </span>
            </h2>

            <p className="text-text-body text-sm md:text-base leading-relaxed mt-4 max-w-xl">
              Selected case studies spanning SaaS dashboards, healthcare
              portals, and production client websites—designed in Figma and
              shipped in React.
            </p>
          </div>

          <Link
            href="/projects"
            aria-label="View all projects"
            className="
              group
              btn-primary
              rounded-md
              h-11
              px-6
              font-semibold
              text-sm
              flex
              items-center
              gap-2
              w-fit
              justify-center
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 md:mt-12 gap-6"
        >
          {caseStudyGrid.map((project) => (
            <motion.article
              key={project.slug}
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
                    href={project.slug}
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
                    href={project.slug}
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
                      href={project.slug}
                      className="inline-block group-hover:text-primary transition-colors"
                    >
                      <h3 className="text-text-primary group-hover:text-primary font-semibold text-lg sm:text-xl tracking-tight transition-colors">
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
                    <p className="text-xs uppercase tracking-wider text-text-muted font-semibold">
                      {project.type}
                    </p>

                    <p className="text-sm font-medium text-text-primary mt-1">
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
