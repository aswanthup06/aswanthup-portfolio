"use client";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  FaDownload,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import { FEATURED, LIVE_SITES } from "../../data/projects";
import { fadeUp, stagger } from "../../lib/animations";

export default function AboutSection() {
  const shippedCount = FEATURED.length + LIVE_SITES.length;

  return (
    <section
      id="about"
      aria-label="About Aswanth UP"
      className="w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:flex items-end justify-between w-full"
        >
        <div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            About Me
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-text-primary font-semibold tracking-tight leading-tight mt-2">
            Design Systems,{" "}
            <span className="text-text-muted font-medium">
              Built for Real Users
            </span>
          </h2>
        </div>

        <Link
          href="/about"
          aria-label="More About Me - Aswanth UP"
          className="
            md:mt-0 mt-3
            btn-primary
            rounded-md
            px-6 py-2.5
            text-sm font-medium
            inline-flex items-center gap-2
            transition-all duration-300
            cursor-pointer
          "
        >
          <span>More About Me</span>
          <MdOutlineArrowOutward aria-hidden="true" className="text-base" />
        </Link>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[1fr_auto_1fr] gap-5 w-full mt-10 md:mt-12"
      >
        {/* Box 1 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25 }}
          className="bg-surface-card md:col-span-1 lg:row-span-3 border border-border-default rounded-xl p-5 sm:p-6 hover:shadow-xl flex flex-col justify-between duration-500"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Profile
            </p>

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

            <h3 className="text-text-primary font-semibold text-lg sm:text-xl tracking-tight leading-snug mb-1">
              Aswanth UP
            </h3>

            <p className="text-primary text-sm font-medium mb-4">
              UI Developer • Design to Code
            </p>

            <p className="text-text-body text-sm leading-relaxed">
              UI Developer with 3+ years of experience shipping production web
              apps, dashboards, and component libraries with JavaScript (ES6+),
              TypeScript, React, Next.js, Tailwind CSS, and Figma Dev Mode.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Figma"].map((item) => (
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
              Open to Remote &amp; On-site Roles
            </p>
          </div>
        </motion.article>

        {/* Box 2 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-surface-card rounded-xl p-5 sm:p-6 border border-border-default hover:shadow-xl flex flex-col justify-between md:col-span-1 lg:row-span-2 h-full"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Shipped Work
            </p>

            <span className="block text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary tracking-tighter mt-2">
              {shippedCount}
            </span>

            <h3 className="text-text-primary font-semibold text-lg sm:text-xl tracking-tight leading-snug mt-2">
              Apps &amp; Live Websites
            </h3>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-primary-subtle text-primary text-xs font-medium">
                {FEATURED.length} Case Studies
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-muted text-text-body text-xs font-medium">
                {LIVE_SITES.length} Live Client Sites
              </span>
            </div>

            <p className="text-text-body text-sm leading-relaxed">
              Built multi-module ERP dashboards, SaaS platforms, healthcare
              portals, and responsive component systems for desktop and mobile.
            </p>
          </div>
        </motion.article>

        {/* Box 3 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-surface-card border rounded-xl border-border-default hover:shadow-xl p-5 sm:p-6 flex items-center gap-4 h-fit md:col-span-1"
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
            className="w-10 h-10 shrink-0 rounded-xl bg-primary-subtle text-primary flex items-center justify-center font-bold text-sm"
          >
            ⚡
          </motion.div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Workflow
            </p>

            <h3 className="text-text-primary font-semibold text-lg sm:text-xl tracking-tight leading-snug mt-0.5">
              Fast Delivery
            </h3>

            <p className="text-text-body text-sm leading-relaxed mt-0.5">
              Direct Figma-to-code workflow
            </p>
          </div>
        </motion.article>

        {/* Box 4 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -4 }}
          className="bg-surface-card rounded-xl p-5 sm:p-6 border border-border-default hover:shadow-lg h-full flex flex-col justify-between md:col-span-1"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Component Architecture
            </p>

            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-text-primary leading-snug mt-2">
              Design Systems First
            </h3>

            <p className="mt-3 text-sm text-text-body leading-relaxed">
              Building modular, atomic component libraries with standardized
              spacing tokens, color variables, and accessible states that stay
              consistent across multi-module dashboards and web apps.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {["Design Tokens", "Reusable Components", "Tailwind CSS"].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-primary-subtle text-primary text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        {/* Box 5 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-surface-card rounded-xl p-5 sm:p-6 border border-border-default hover:shadow-xl flex flex-wrap items-center justify-between gap-4 md:col-span-2 lg:col-span-2"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Connect
            </p>

            <h3 className="text-text-primary font-medium text-lg sm:text-xl leading-tight mt-0.5">
              Code &amp; Connect
            </h3>

            <p className="text-text-body text-sm mt-0.5">
              Explore my GitHub, resume, or reach out directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Aswanth_UP_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Aswanth_UP_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-default bg-surface-subtle px-3 py-1.5 text-xs font-semibold text-text-primary hover:border-primary hover:text-primary transition-colors"
            >
              <FaDownload size={11} aria-hidden="true" />
              Resume
            </a>

            <SocialLink
              href="https://github.com/aswanthup06"
              label="GitHub Profile"
            >
              <FaGithub size={14} />
            </SocialLink>

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
        bg-surface-muted
        flex
        items-center
        justify-center
        text-text-body
        hover:bg-primary
        hover:text-white
        transition
      "
    >
      {children}
    </motion.a>
  );
}
