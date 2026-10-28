"use client";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaBehance, FaLinkedinIn, FaPlus } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Aswanth UP"
      className="w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:flex items-end justify-between w-full"
        >
        <div>
          <h2 className="font-bold text-sm md:text-base text-primary">
            About Me
          </h2>

          <p className="text-3xl md:text-4xl text-text-primary font-semibold leading-tight mt-2">
            Designing Seamless{" "}
            <span className="text-text-muted font-medium">
              User Experiences
            </span>
          </p>
        </div>

        <Link
          href="/about"
          className="
            md:mt-0 mt-3
            btn-primary
            rounded-md
            px-6 py-2.5
            text-sm font-medium
            inline-flex items-center gap-2
            hover:shadow-md hover:shadow-blue-500/20
            transition-all duration-300
            cursor-pointer
          "
        >
          <span>Learn More</span>
          <MdOutlineArrowOutward className="text-base" />
        </Link>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[1fr_auto_1fr] gap-5 w-full mt-12"
      >
        {/* Box 1 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25 }}
          className="bg-surface-card lg:row-span-3 border border-border-default rounded-xl p-6 hover:shadow-xl flex flex-col justify-between duration-500"
        >
          <div>
            <div className="w-20 h-20 border border-border-default rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <Image
                src="/images/about/me.webp"
                alt="Aswanth UP UI Developer"
                width={100}
                height={100}
                className="w-full h-full object-cover scale-110"
                priority
              />
            </div>

            <h3 className="text-text-primary font-bold text-xl leading-tight mb-2">
              Aswanth UP
            </h3>

            <p className="text-primary text-sm font-medium mb-4">
              UI Developer • React Frontend
            </p>

            <p className="text-text-body text-sm leading-relaxed">
              UI Developer with 3+ years of experience building scalable,
              responsive, and pixel-perfect interfaces using React, Next.js,
              Tailwind CSS, and Figma Dev Mode.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind", "Figma"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-sm bg-surface-muted text-xs text-text-body font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border-subtle mt-6">
            <p className="text-sm text-text-muted">Based in Kerala, India</p>

            <p className="text-sm text-text-primary font-medium mt-1">
              Open to Remote Opportunities
            </p>
          </div>
        </motion.article>

        {/* Box 2 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-surface-card rounded-xl p-6 border border-border-default hover:shadow-xl flex flex-col justify-between lg:row-span-2 h-full"
        >
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-8xl font-black text-text-primary tracking-tighter">
                600
              </h3>

              <h3 className="text-5xl font-black text-text-primary tracking-tighter h-fit">
                <FaPlus />
              </h3>
            </div>

            <p className="text-text-primary font-bold text-xl mt-2">
              Screens Developed
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-text-muted text-sm font-medium">
                Responsive UI Systems
              </span>

              <span className="text-text-primary font-semibold">100%</span>
            </div>

            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: "easeOut",
                }}
                className="h-full bg-primary rounded-full"
              />
            </div>

            <p className="text-text-body text-sm leading-relaxed">
              Built scalable dashboards, SaaS platforms, healthcare interfaces,
              and reusable component systems across web and mobile applications.
            </p>
          </div>
        </motion.article>

        {/* Box 3 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-surface-card border rounded-xl border-border-default hover:shadow-xl p-6 flex items-center gap-3 h-fit"
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="min-w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs"
          >
            ⚡
          </motion.div>

          <div>
            <p className="text-text-primary font-bold text-lg">Fast Delivery</p>

            <p className="text-text-body text-sm leading-relaxed">
              Rapid Figma-to-code workflow
            </p>
          </div>
        </motion.article>

        {/* Box 4 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -4 }}
          className="bg-surface-card rounded-xl p-6 border border-border-default hover:shadow-lg h-full"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-text-muted text-sm font-medium">
              Featured Project
            </p>


          </div>

          <div className="mt-7">
            <h3 className="text-2xl font-bold tracking-tight text-text-primary">
              Built with purpose.
            </h3>

            <p className="mt-3 text-sm text-text-body leading-relaxed">
              Zenoway — a career platform built with Next.js, connecting job
              discovery, detailed listings, and application experiences.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-border-default">
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#EDF7F1] text-[#087F50] text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        {/* Box 5 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-surface-card rounded-xl px-6 py-5 border border-border-default hover:shadow-xl flex items-center justify-between lg:col-span-2"
        >
          <div>
            <p className="text-text-primary font-bold text-lg">Follow Me</p>

            <p className="text-text-body text-sm mt-1">
              Let’s connect and build something amazing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SocialLink
              href="https://www.linkedin.com/in/aswanthup/"
              label="LinkedIn Profile"
            >
              <FaLinkedinIn size={14} />
            </SocialLink>

            <SocialLink
              href="https://wa.me/917559068970"
              label="WhatsApp Contact"
            >
              <IoLogoWhatsapp size={14} />
            </SocialLink>

            <SocialLink
              href="https://www.behance.net/ASWANTHUP"
              label="Behance Portfolio"
            >
              <FaBehance size={14} />
            </SocialLink>
          </div>
        </motion.article>
      </motion.div>
      </div>
    </section>
  );
}

/* Social Link */

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{
        scale: 1.12,
        y: -2,
      }}
      whileTap={{
        scale: 0.92,
      }}
      className="
        h-8
        w-8
        rounded-full
        bg-gray-100
        flex
        items-center
        justify-center
        text-gray-600
        hover:bg-blue-500
        hover:text-white
        transition
      "
    >
      {children}
    </motion.a>
  );
}
