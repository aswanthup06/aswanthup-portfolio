"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const contentVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative w-full pt-8 md:pt-12 pb-8">
      {/* Seamless squares texture behind footer */}
      <div className="grid-bg absolute inset-0 -z-10 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl border border-border-default bg-surface-card shadow-[0_10px_60px_rgba(0,0,0,0.06)]"
        >
          {/* Squares texture inside footer card */}
          <div className="grid-bg absolute inset-0 pointer-events-none opacity-80" />
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"
          />

          <motion.div
            variants={contentVariants}
            className="relative z-10 px-6 md:px-10 py-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
              <motion.div variants={itemVariants} className="max-w-md">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="
                      h-12 w-12 rounded-xl
                      bg-gradient-to-b
                      from-blue-400 to-blue-600
                      text-white
                      flex items-center justify-center
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
                    "
                  >
                    <BsGlobe className="text-md" />
                  </motion.div>

                  <div>
                    <h4 className="text-lg font-semibold text-text-primary">
                      Aswanth UP
                    </h4>

                    <p className="text-sm text-text-muted">
                      UI Developer & Designer
                    </p>
                  </div>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="text-sm leading-relaxed text-text-body mt-6"
                >
                  Passionate about crafting clean digital experiences through
                  frontend development, modern UI systems, responsive
                  interfaces, and scalable design thinking.
                </motion.p>
              </motion.div>
              <motion.div
                variants={contentVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                <motion.div variants={itemVariants}>
                  <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                    Navigation
                  </h3>
                  <ul className="space-y-4 mt-5 text-sm">
                    <li>
                      <Link
                        href="/"
                        className="text-text-muted hover:text-primary transition"
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/about"
                        className="text-text-muted hover:text-primary transition"
                      >
                        About
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/projects"
                        className="text-text-muted hover:text-primary transition"
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                    Services
                  </h3>

                  <ul className="space-y-4 mt-5 text-sm text-text-muted">
                    <li>UI Development</li>
                    <li>Frontend Engineering</li>
                    <li>Responsive Web Design</li>
                    <li>Figma To Code</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                    Connect
                  </h3>

                  <div className="flex items-center gap-3 mt-5">
                    <motion.a
                      whileHover={{
                        scale: 1.15,
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      href="https://www.linkedin.com/in/aswanthup/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
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
                      <FaLinkedinIn size={14} />
                    </motion.a>

                    <motion.a
                      whileHover={{
                        scale: 1.15,
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      href="https://wa.me/917559068970"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp Contact"
                      className="
                        h-8
                        w-8
                        rounded-full
                        bg-surface-muted
                        flex
                        items-center
                        justify-center
                        text-text-body
                        hover:bg-green-500
                        hover:text-white
                        transition
                      "
                    >
                      <IoLogoWhatsapp size={14} />
                    </motion.a>

                    <motion.a
                      whileHover={{
                        scale: 1.15,
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      href="https://www.behance.net/ASWANTHUP"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Behance Portfolio"
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
                      <FaBehance size={14} />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <p className="text-sm text-text-muted text-center sm:text-left">
                © {new Date().getFullYear()} Aswanth UP. All rights reserved.
              </p>

              <div className="flex items-center gap-5 text-sm text-text-muted">
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition"
                >
                  Privacy Policy
                </Link>

                <Link href="/terms" className="hover:text-primary transition">
                  Terms
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
