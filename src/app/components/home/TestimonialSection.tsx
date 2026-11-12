"use client";

import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import { useContactModal } from "../../context/ContactModalContext";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { fadeUp, stagger } from "../../lib/animations";

interface Testimonial {
  avatar: string;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    avatar: "/images/testimonials/gokul.webp",
    quote:
      "As a co-founder, I’ve had the opportunity to work closely with Aswanth on multiple projects, and his contribution has always been exceptional. He has a strong eye for UI/UX, excellent frontend development skills, and a deep understanding of creating modern, user-friendly digital experiences. What impressed me most was his dedication, creativity, and ability to turn ideas into polished products with precision. He consistently brings professionalism, clear communication, and a problem-solving mindset to every project. Any team would benefit from having someone as talented and committed as Aswanth.",
    name: "Gokul Hari",
    role: "Co-Founder of Chaavie Solutions",
  },
  {
    avatar: "/images/testimonials/musthafa.webp",
    quote:
      "Working with Aswanth has been a great experience. His UI/UX skills, creative thinking, and development knowledge help transform ideas into practical and user-friendly digital products. He has a professional approach and consistently delivers quality results.",
    name: "Mohamad Musthafa",
    role: "Managing Director at G tec Kunnumpuram",
  },
  {
    avatar: "/images/testimonials/bav.webp",
    quote:
      "An exceptional UI developer who consistently delivered clean, modern, and user-friendly designs. His attention to detail, creativity, and understanding of user experience greatly improved the quality of projects. As a full-stack developer, working with him made development smoother and the final product much more polished and professional.",
    name: "Bhavana Raj",
    role: "MERN Stack Developer at Chaavie Solutions",
  },
];

export default function TestimonialSection() {
  const { openModal } = useContactModal();

  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mb-12"
        >
        <h2 className="font-bold text-sm md:text-base text-primary">
          Testimonials
        </h2>

        <p className="text-3xl md:text-4xl text-text-primary font-semibold leading-tight mt-2">
          Real Feedback{" "}
          <span className="text-text-muted font-medium">
            From Teams I Shipped With
          </span>
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="
          w-full
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
          className="
            lg:row-span-2
            flex
            flex-col
            justify-between
            rounded-xl
            border
            border-white/10
            bg-gradient-to-br
            from-slate-900
            to-slate-950
            p-6
            md:p-8
            text-white
          "
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex
                items-center
                gap-3
                mb-6
                flex-wrap
              "
            >
              <div className="flex -space-x-2">
                {[
                  ["/images/testimonials/gokul.webp", "Gokul Hari"],
                  ["/images/testimonials/musthafa.webp", "Mohamad Musthafa"],
                  ["/images/testimonials/bav.webp", "Bhavana Raj"],
                ].map(([src, alt], index) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 overflow-hidden">
                      <Image
                        src={src}
                        alt={alt}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover scale-110"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <span className="text-xs text-gray-300">
                Colleague &amp; client feedback
              </span>
            </motion.div>

            <h3 className="text-2xl font-semibold leading-snug tracking-tight lg:w-[88%]">
              Trusted by teams I&apos;ve built with
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mt-4 max-w-sm">
              Trusted by founders, directors, and full-stack engineers across
              healthcare, logistics, and SaaS builds.
            </p>
          </div>

          <div className="pt-8">
            <div className="mb-6 border-t border-white/10 pt-5">
              <p className="text-base font-semibold text-white">
                {testimonials.length} recommendations
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Verified project &amp; LinkedIn recommendations
              </p>
            </div>

            <motion.button
              onClick={openModal}
              aria-label="Let's Work Together"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                btn-primary
                w-full
                text-sm
                font-medium
                px-6
                py-3.5
                rounded-md
              "
            >
              Let’s Work Together
            </motion.button>

            <a
              href="https://www.linkedin.com/in/aswanthup/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
            >
              View work history on LinkedIn
              <MdOutlineArrowOutward aria-hidden="true" />
            </a>
          </div>
        </motion.article>

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25 }}
          className="lg:col-span-2"
        >
          <TestimonialCard testimonial={testimonials[0]} />
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25 }}
          className="h-full"
        >
          <TestimonialCard testimonial={testimonials[1]} />
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25 }}
          className="h-full"
        >
          <TestimonialCard testimonial={testimonials[2]} />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
