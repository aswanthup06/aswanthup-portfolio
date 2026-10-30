"use client";

import { LuCircleArrowRight } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, cardHover } from "../../lib/animations";

const strengths: string[] = [
  "Pixel-Perfect UI Development",
  "99% Figma to Code Accuracy",
  "Clean & Scalable Code",
  "Detail-Oriented Execution",
];

export default function WhyAswanthSection() {
  return (
    <section className="w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          <h2 className="font-bold text-sm md:text-base text-primary">
            Why Aswanth?
          </h2>

          <p className="text-3xl md:text-4xl text-text-primary font-semibold leading-tight mt-2">
            Blending UI Design{" "}
            <span className="text-text-muted font-medium">
              Into Seamless Products
            </span>
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-gray-600/10 w-full mt-10 p-2 grid md:grid-cols-2 lg:grid-cols-3 gap-2 rounded-xl"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="bg-surface-card rounded-xl overflow-hidden relative h-200 sm:min-h-170 lg:h-full group"
          >
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between bg-gradient-to-b from-black/20 via-black/10 to-black/60 text-white transition-all duration-500 group-hover:backdrop-blur-sm">
              <div>
                <div className="w-fit px-3 py-1 rounded-sm bg-white/10 border border-white/10 backdrop-blur-md text-[11px] tracking-[0.2em] uppercase text-white/90">
                  Work Approach
                </div>

                <div className="max-w-sm">
                  <h3 className="text-3xl font-bold leading-tight mt-6">
                    Designing Interfaces
                    <br />
                    That Feel Natural
                  </h3>

                  <p className="text-sm leading-relaxed text-white/75 mt-2">
                    I bridge the gap between UI design and frontend
                    development by crafting modern digital products that
                    are responsive across all devices.
                  </p>
                </div>
              </div>

              <div>
                <motion.div
                  variants={stagger}
                  className="flex flex-col gap-3"
                >
                  {strengths.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-400/10 border border-blue-300/20 flex items-center justify-center">
                        <LuCircleArrowRight className="text-blue-200 text-sm" />
                      </div>

                      <p className="text-sm text-white/90 font-medium">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <h4 className="text-lg font-semibold">
                      UI Developer & Designer
                    </h4>

                    <p className="text-xs text-white/60 mt-1">
                      Focused on scalable frontend experiences.
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/about"
                      aria-label="Learn more about Aswanth UP on the About page"
                      className="w-11 h-11 rounded-md bg-white text-black flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow"
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
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <div className="sm:min-h-170 h-190 lg:h-full grid grid-rows-[190px_1fr] gap-2">
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="p-5 bg-surface-card rounded-xl border border-border-default flex flex-col justify-between overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs tracking-widest uppercase text-primary font-semibold">
                    Figma To Code
                  </p>

                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="text-5xl font-black text-text-primary mt-3"
                  >
                    99%
                  </motion.p>
                </div>

                <div className="px-3 py-1 rounded-md bg-green-50 text-green-600 text-xs font-semibold">
                  Verified
                </div>
              </div>

              <p className="text-sm text-text-body leading-relaxed mt-4">
                Pixel-perfect frontend implementation using Figma Dev Mode,
                Auto Layout, reusable components, and responsive UI systems.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="rounded-xl overflow-hidden relative h-full border border-border-default"
            >
              <div className="absolute inset-0 p-5 h-full flex flex-col justify-between w-full hover:backdrop-blur-xs duration-500 z-10">
                <div className="w-fit px-3 py-1 rounded-sm bg-white/10 backdrop-blur-md text-white text-xs tracking-widest uppercase">
                  Design To Development
                </div>

                <div>
                  <motion.img
                    src="/images/home/Home.webp"
                    alt="Design to live product dashboard showcase"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                    }}
                    className="rounded-xl"
                  />
                </div>

                <div className="border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-4 border">
                  <h3 className="text-white text-xl font-semibold leading-tight">
                    From Design To Live Product
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mt-3">
                    Explore the original design file and the final developed
                    frontend experience.
                  </p>

                  <div className="flex gap-3 mt-5 flex-wrap">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.figma.com/design/4RJXqMbDXP8MuLAeBXF0Ih/Dashboard-UI?node-id=0-1&t=jJTB5a9L2tY9fhRu-1"
                      className="w-fit flex gap-2 items-center bg-white text-black px-4 py-2 rounded-sm text-xs tracking-wide cursor-pointer"
                    >
                      Figma File
                      <MdOutlineArrowOutward />
                    </a>

                    <a
                      href="https://dashboard-ui-five-umber.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit flex gap-2 items-center bg-black text-white px-4 py-2 rounded-sm text-xs tracking-wide cursor-pointer border border-white/10"
                    >
                      View Live
                      <MdOutlineArrowOutward />
                    </a>
                  </div>
                </div>
              </div>

              <motion.img
                src="/images/home/Dashboard.webp"
                alt="Figma to Frontend Development"
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                }}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="h-full grid gap-2">
            <motion.div
              variants={fadeUp}
              whileHover={cardHover}
              className="bg-surface-card rounded-xl p-5 border border-border-default flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-primary font-semibold">
                      Redesign Skill
                    </p>

                    <h3 className="text-2xl font-bold text-text-primary mt-4 leading-tight">
                      Modernizing Existing Products
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-text-body leading-relaxed mt-4">
                  I redesign outdated products with cleaner layouts, better UX
                  flow, modern UI patterns, and improved responsiveness.
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
                    <h4 className="text-lg font-bold text-text-primary">
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
                  className="border border-blue-100 bg-primary-subtle rounded-xl p-4 flex items-center justify-between gap-2"
                >
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">
                      Redesigned UI
                    </h4>

                    <p className="text-xs text-text-muted mt-1">
                      Modern visuals with improved usability.
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
