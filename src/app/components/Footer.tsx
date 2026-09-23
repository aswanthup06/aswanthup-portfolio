"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { motion, type Variants } from "framer-motion";
import { useContactModal } from "../context/ContactModalContext";

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
  const { openModal } = useContactModal();

  return (
    <footer className="w-full pt-24 pb-6">
      <div className="px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-6xl mx-auto relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_10px_60px_rgba(0,0,0,0.06)]"
        >
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
                    <h4 className="text-lg font-semibold text-gray-900">
                      Aswanth UP
                    </h4>

                    <p className="text-sm text-gray-500">
                      UI Developer & Designer
                    </p>
                  </div>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="text-sm leading-relaxed text-gray-500 mt-6"
                >
                  Passionate about crafting clean digital experiences through
                  frontend development, modern UI systems, responsive
                  interfaces, and scalable design thinking.
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={openModal}
                  className="
                    mt-7
                    w-fit
                    flex
                    items-center
                    gap-2
                    bg-black
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    text-sm
                    hover:bg-blue-600
                    duration-300
                  "
                >
                  Let’s Work Together
                  <motion.span
                    whileHover={{
                      x: 3,
                      y: -3,
                    }}
                  >
                    <MdOutlineArrowOutward />
                  </motion.span>
                </motion.button>
              </motion.div>

              <motion.div
                variants={contentVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                <motion.div variants={itemVariants}>
                  <h1 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Navigation
                  </h1>

                  <ul className="space-y-4 mt-5 text-sm">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-blue-500 transition"
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/about"
                        className="text-gray-500 hover:text-blue-500 transition"
                      >
                        About
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/projects"
                        className="text-gray-500 hover:text-blue-500 transition"
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h1 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Services
                  </h1>

                  <ul className="space-y-4 mt-5 text-sm text-gray-500">
                    <li>UI Development</li>
                    <li>Frontend Engineering</li>
                    <li>Responsive Web Design</li>
                    <li>Figma To Code</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h1 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Connect
                  </h1>

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
                        bg-gray-100
                        flex
                        items-center
                        justify-center
                        text-gray-600
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
                      <FaBehance size={14} />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <p className="text-sm text-gray-500 text-center sm:text-left">
                © {new Date().getFullYear()} Aswanth UP. All rights reserved.
              </p>

              <div className="flex items-center gap-5 text-sm text-gray-500">
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue-500 transition"
                >
                  Privacy Policy
                </Link>

                <Link href="/terms" className="hover:text-blue-500 transition">
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
