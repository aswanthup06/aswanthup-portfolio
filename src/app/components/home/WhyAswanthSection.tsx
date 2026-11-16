"use client";

import { LuCircleArrowRight } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, PREMIUM_EASE } from "../../lib/animations";

const smoothHover = {
  y: -5,
  transition: {
    duration: 0.28,
    ease: PREMIUM_EASE,
  },
};

const strengths: string[] = [
  "Pixel-Perfect UI Development",
  "Figma Dev Mode to Clean React",
  "Clean & Scalable Code",
  "Detail-Oriented Execution",
];

export default function WhyAswanthSection() {
  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            Why Aswanth?
          </p>

          <h2 className="text-3xl md:text-4xl text-text-primary font-semibold tracking-tight leading-tight mt-2">
            Where UI Design{" "}
            <span className="text-text-muted font-medium">
              Meets Clean Engineering
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-gray-600/10 w-full mt-10 md:mt-12 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 rounded-xl"
        >
          {/* Column 1: Work Approach */}
          <motion.div
            variants={fadeUp}
            whileHover={smoothHover}
            className="bg-surface-card rounded-xl overflow-hidden relative min-h-[580px] sm:min-h-[620px] lg:h-full group border border-border-default flex flex-col"
          >
            <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full min-h-[580px] sm:min-h-[620px] lg:min-h-0 bg-gradient-to-b from-black/35 via-black/25 to-black/75 text-white transition-colors duration-300">
              <div>
                <div className="w-fit px-3 py-1 rounded-sm bg-white/10 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider uppercase text-white/90">
                  Work Approach
                </div>

                <div className="max-w-sm">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight leading-snug mt-6">
                    Designing Interfaces
                    <br />
                    That Feel Natural
                  </h3>

                  <p className="text-sm leading-relaxed text-white/75 mt-2">
                    I turn Figma specs into production frontend code—delivering
                    responsive layouts, clear hierarchy, and maintainable
                    components.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <motion.div
                  variants={stagger}
                  className="flex flex-col gap-2.5 sm:gap-3"
                >
                  {strengths.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-3.5 sm:px-4 py-2.5 sm:py-3"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full bg-primary/15 border border-primary-light/30 flex items-center justify-center">
                        <LuCircleArrowRight className="text-primary-light text-sm" />
                      </div>

                      <p className="text-xs sm:text-sm text-white/90 font-medium">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold leading-snug">
                      UI Developer &amp; Designer
                    </h4>

                    <p className="text-xs text-white/60 mt-1">
                      Focused on fast, accessible frontend UI.
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/about"
                      aria-label="Learn more about Aswanth UP on the About page"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-white text-black flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                    >
                      <MdOutlineArrowOutward aria-hidden="true" className="text-lg" />
                      <span className="sr-only">Learn more about Aswanth UP</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            <Image
              src="/images/home/bg2.webp"
              alt="UI Development Workspace"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
            />
          </motion.div>

          {/* Column 2: Token-Driven UI & Design to Dev */}
          <div className="min-h-[580px] sm:min-h-[620px] lg:h-full flex flex-col gap-2">
            <motion.div
              variants={fadeUp}
              whileHover={smoothHover}
              className="p-5 sm:p-6 bg-surface-card rounded-xl border border-border-default flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs tracking-wider uppercase text-primary font-semibold">
                    Figma To Code
                  </p>

                  <span className="px-2.5 py-0.5 rounded-md bg-primary-subtle text-primary text-xs font-semibold">
                    Dev Mode
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mt-3 tracking-tight leading-snug">
                  Token-Driven UI
                </h3>
              </div>

              <p className="text-sm text-text-body leading-relaxed mt-3">
                Clean frontend implementation using Figma Dev Mode, Auto Layout,
                reusable components, and responsive UI systems.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={smoothHover}
              className="rounded-xl overflow-hidden relative flex-1 min-h-[380px] sm:min-h-[420px] border border-border-default group p-4 sm:p-5 flex flex-col justify-between"
            >
              <Image
                src="/images/home/Dashboard.webp"
                alt="Figma to Frontend Development"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/75 pointer-events-none" />

              <div className="relative z-10 w-fit px-3 py-1 rounded-sm bg-white/10 backdrop-blur-md text-white text-xs tracking-wider uppercase font-semibold">
                Design To Development
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="relative z-10 rounded-xl overflow-hidden shadow-lg border border-white/10 my-3 max-h-36 sm:max-h-44"
              >
                <Image
                  src="/images/home/Home.webp"
                  alt="Design to live product dashboard showcase"
                  width={480}
                  height={308}
                  className="w-full h-full max-h-36 sm:max-h-44 object-cover object-top rounded-xl"
                />
              </motion.div>

              <div className="relative z-10 border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-3.5 sm:p-4 border">
                <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight leading-snug">
                  From Design To Live Product
                </h3>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mt-2 sm:mt-3">
                  Explore the original design file and the final developed
                  frontend experience.
                </p>

                <div className="flex gap-2.5 sm:gap-3 mt-4 sm:mt-5 flex-wrap">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.figma.com/design/4RJXqMbDXP8MuLAeBXF0Ih/Dashboard-UI?node-id=0-1&t=jJTB5a9L2tY9fhRu-1"
                    className="w-fit flex gap-1.5 sm:gap-2 items-center bg-white text-black px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-sm text-xs font-medium tracking-wide cursor-pointer"
                  >
                    Figma File
                    <MdOutlineArrowOutward />
                  </a>

                  <a
                    href="https://dashboard-ui-five-umber.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex gap-1.5 sm:gap-2 items-center bg-black text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-sm text-xs font-medium tracking-wide cursor-pointer border border-white/10"
                  >
                    View Live
                    <MdOutlineArrowOutward />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Concept Redesign */}
          <div className="h-full grid gap-2 md:col-span-2 lg:col-span-1">
            <motion.div
              variants={fadeUp}
              whileHover={smoothHover}
              className="bg-surface-card rounded-xl p-5 sm:p-6 border border-border-default flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-wider uppercase text-primary font-semibold">
                      Concept Redesign
                    </p>

                    <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mt-4 tracking-tight leading-snug">
                      Modernizing Existing Products
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-text-body leading-relaxed mt-4">
                  I reimagine legacy websites with clearer navigation, sharper
                  typography, and mobile-first layouts.
                </p>
              </div>

              <motion.div
                variants={stagger}
                className="space-y-3 mt-8"
              >
                <motion.div
                  variants={fadeUp}
                  className="border border-border-default bg-surface-subtle rounded-xl p-4 flex items-center justify-between gap-2"
                >
                  <div>
                    <h4 className="text-base font-semibold leading-snug text-text-primary">
                      Existing Website
                    </h4>

                    <p className="text-xs text-text-muted mt-1">
                      Old interface with outdated experience.
                    </p>
                  </div>

                  <a
                    href="https://www.kannuruniversity.ac.in/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex gap-2 items-center bg-black text-white px-4 py-2 rounded-sm text-xs tracking-wide cursor-pointer"
                  >
                    Visit
                    <MdOutlineArrowOutward />
                  </a>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="border border-border-default rounded-xl overflow-hidden"
                >
                  <Image
                    src="/images/home/kannur.webp"
                    alt="Kannur university redesign preview"
                    width={600}
                    height={330}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="border border-primary-border bg-primary-subtle rounded-xl p-4 flex items-center justify-between gap-2"
                >
                  <div>
                    <h4 className="text-base font-semibold leading-snug text-text-primary">
                      Concept Redesign
                    </h4>

                    <p className="text-xs text-text-muted mt-1">
                      Self-initiated UX &amp; UI modernization concept.
                    </p>
                  </div>

                  <a
                    href="https://kannur-university-website.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex gap-2 items-center bg-black text-white px-4 py-2 rounded-sm text-xs tracking-wide cursor-pointer"
                  >
                    Preview
                    <MdOutlineArrowOutward />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
