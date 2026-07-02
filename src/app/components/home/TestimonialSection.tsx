'use client';
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import { useContactModal } from "../../context/ContactModalContext";

interface Testimonial {
  avatar: string;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    avatar: "/gokul.png",
    quote:
      "As a co-founder, I’ve had the opportunity to work closely with Aswanth on multiple projects, and his contribution has always been exceptional. He has a strong eye for UI/UX, excellent frontend development skills, and a deep understanding of creating modern, user-friendly digital experiences. What impressed me most was his dedication, creativity, and ability to turn ideas into polished products with precision. He consistently brings professionalism, clear communication, and a problem-solving mindset to every project. Any team would benefit from having someone as talented and committed as Aswanth.",
    name: "Gokul Hari",
    role: "Co-Founder of Chaavie Solutions",
  },

  {
    avatar: "/musthafa.png",
    quote:
      "Working with Aswanth has been a great experience. His UI/UX skills, creative thinking, and development knowledge help transform ideas into practical and user-friendly digital products. He has a professional approach and consistently delivers quality results.",
    name: "Mohamad Musthafa",
    role: "Managing Director at G tec Kunnumpuram",
  },

  {
    avatar: "/bav.png",
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
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
  <h2 className="font-bold text-sm md:text-base text-gray-900">
    Testimonials
  </h2>

  <p className="text-2xl md:text-3xl text-slate-500/60 leading-snug">
    Real feedback from people who experienced my work firsthand.
  </p>
</div>

      {/* Grid */}
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {/* Left */}
        <article
          className="
            lg:row-span-2
            flex
            flex-col
            justify-between
            rounded-xl
            bg-gradient-to-br
            from-gray-900
            to-black
            p-6
            md:p-8
            text-white
          "
        >
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                mb-6
                flex-wrap
              "
            >
              <div className="flex -space-x-2">
                <Image
                  src="/gokul.png"
                  alt="Gokul Hari"
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-full border-2 border-black object-cover"
                />

                <Image
                  src="/musthafa.png"
                  alt="Muhammad Musthafa"
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-full border-2 border-black object-cover"
                />

                <Image
                  src="/bav.png"
                  alt="Bhavana Raj"
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-full border-2 border-black object-cover"
                />
              </div>

              <span className="text-xs text-gray-300">
                Trusted by founders & developers
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight lg:w-[80%]">
              Real feedback from people I worked with
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mt-6 max-w-sm">
              UI Developer focused on building scalable, modern, and
              pixel-perfect frontend experiences with React, Tailwind, and
              Figma workflows.
            </p>
          </div>

          <div className="pt-8">
            <div className="flex items-center gap-3 mb-6">
              <div>
                <p className="text-3xl font-bold">4.9/5</p>

                <p className="text-sm text-gray-400">
                  Based on professional collaborations
                </p>
              </div>
            </div>

            <button
              onClick={openModal}
              aria-label="Let's Work Together"
              className="
                w-full
                bg-white
                text-black
                text-sm
                font-semibold
                px-6
                py-4
                rounded-2xl
                hover:bg-gray-200
                transition-colors
                duration-200
              "
            >
              Let’s Work Together
            </button>
          </div>
        </article>

        {/* Cards */}
        <div className="lg:col-span-2">
          <TestimonialCard testimonial={testimonials[0]} />
        </div>

        <div className="h-full">
          <TestimonialCard testimonial={testimonials[1]} />
        </div>

        <div className="h-full">
          <TestimonialCard testimonial={testimonials[2]} />
        </div>
      </div>
    </section>
  );
}