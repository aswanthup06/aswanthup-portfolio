"use client";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaBehance, FaLinkedinIn, FaPlus } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Aswanth UP"
      className="w-full flex flex-col items-center"
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="md:flex items-end justify-between w-full max-w-6xl"
      >
        <div>
          <h2 className="font-bold text-sm md:text-base text-gray-900">
            About Me
          </h2>

          <p className="text-3xl text-slate-500/60">
            Designing Seamless User Experiences
          </p>
        </div>

        <Link
          href="/about"
          className="
            md:mt-0 mt-3
            bg-gradient-to-b
            from-blue-400
            to-blue-600
            rounded-md
            text-white
            h-10
            w-36
            font-medium
            text-[14px]
            flex
            items-center
            gap-2
            justify-center
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
            hover:from-blue-500
            hover:to-blue-700
            active:translate-y-px
            transition-all
            duration-200
          "
        >
          Learn More
          <MdOutlineArrowOutward />
        </Link>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[1fr_auto_1fr] gap-5 w-full max-w-6xl mt-12"
      >
        {/* Box 1 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25 }}
          className="bg-white lg:row-span-3 border border-gray-200 rounded-xl p-6 hover:shadow-xl flex flex-col justify-between duration-500"
        >
          <div>
            <div className="w-20 h-20 border border-gray-200 rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <Image
                src="/me2.png"
                alt="Aswanth UP UI Developer"
                width={100}
                height={100}
                className="w-full h-full object-cover scale-110"
                priority
              />
            </div>

            <h3 className="text-gray-900 font-bold text-xl leading-tight mb-2">
              Aswanth UP
            </h3>

            <p className="text-blue-600 text-sm font-medium mb-4">
              UI Developer • React Frontend
            </p>

            <p className="text-gray-500 text-sm leading-relaxed">
              UI Developer with 3+ years of experience building scalable,
              responsive, and pixel-perfect interfaces using React, Next.js,
              Tailwind CSS, and Figma Dev Mode.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind", "Figma"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-sm bg-gray-100 text-xs text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-6">
            <p className="text-sm text-gray-400">Based in Kerala, India</p>

            <p className="text-sm text-gray-900 font-medium mt-1">
              Open to Remote Opportunities
            </p>
          </div>
        </motion.article>

        {/* Box 2 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl flex flex-col justify-between lg:row-span-2 h-full"
        >
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-8xl font-black text-gray-900 tracking-tighter">
                600
              </h3>

              <h3 className="text-5xl font-black text-gray-900 tracking-tighter h-fit">
                <FaPlus />
              </h3>
            </div>

            <p className="text-gray-900 font-bold text-xl mt-2">
              Screens Developed
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">
                Responsive UI Systems
              </span>

              <span className="text-gray-900 font-semibold">100%</span>
            </div>

            <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: "easeOut",
                }}
                className="h-full bg-black rounded-full"
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Built scalable dashboards, SaaS platforms, healthcare interfaces,
              and reusable component systems across web and mobile applications.
            </p>
          </div>
        </motion.article>

        {/* Box 3 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-white border rounded-xl border-gray-200 hover:shadow-xl p-6 flex items-center gap-3 h-fit"
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
            <p className="text-gray-900 font-bold text-lg">Fast Delivery</p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Rapid Figma-to-code workflow
            </p>
          </div>
        </motion.article>

        {/* Box 4 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl h-full"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-900 font-bold text-lg">Figma to Code</p>

              <p className="text-gray-400 text-sm">Design Accuracy</p>
            </div>

            <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
              Verified
            </div>
          </div>

          <div className="mt-6">
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="text-6xl font-black text-gray-900 tracking-tight"
            >
              99%
            </motion.h3>

            <p className="text-gray-400 text-sm mt-2">
              Pixel-perfect implementation using Figma Dev Mode, Auto Layout,
              and scalable component systems.
            </p>
          </div>
        </motion.article>

        {/* Box 5 */}
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl px-6 py-5 border border-gray-200 hover:shadow-xl flex items-center justify-between lg:col-span-2"
        >
          <div>
            <p className="text-gray-900 font-bold text-lg">Follow Me</p>

            <p className="text-gray-400 text-sm mt-1">
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
