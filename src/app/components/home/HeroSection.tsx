"use client";

import { MdOutlineArrowOutward } from "react-icons/md";
import { useContactModal } from "../../context/ContactModalContext";

import {
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io5";

import { SiNextdotjs, SiFigma } from "react-icons/si";
import { motion } from "framer-motion";

import {
  PREMIUM_EASE,
  SPRING_SMOOTH,
  SPRING_BOUNCY,
} from "../../lib/animations";
import { Button } from "../ui";

export default function HeroSection() {
  const { openModal } = useContactModal();

  return (
    <div className="pt-20 flex items-center flex-col">
      {/* Small Label */}
      <motion.div
        initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: PREMIUM_EASE }}
        className="flex items-center justify-center text-primary font-semibold text-sm md:text-md lg:text-lg mb-3 tracking-wide"
      >
        UI Developer & Designer Portfolio
      </motion.div>

      {/* Heading - LCP Element */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: PREMIUM_EASE,
        }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-semibold mb-4 text-text-secondary leading-tight">
          Building <span className="text-primary">User-Centric</span>
          <span className="block mt-1">Web Experiences</span>
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.65,
          delay: 0.25,
          ease: PREMIUM_EASE,
        }}
        className="flex justify-center"
      >
        <p className="text-md text-center text-text-muted md:w-7/12 text-sm md:text-lg leading-relaxed">
          Bridging UI/UX excellence with clean, performant code. I specialize
          in transforming complex workflows into intuitive, user-centric web
          applications
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.55,
          delay: 0.4,
          ease: PREMIUM_EASE,
        }}
        className="flex items-center justify-center mt-6"
      >
        <Button
          onClick={openModal}
          size="md"
          icon={<MdOutlineArrowOutward className="text-base" />}
          className="shadow-md shadow-blue-500/20 px-6"
        >
          Get in Touch
        </Button>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.6,
        }}
        className="flex justify-center mt-12"
      >
        <div className="flex flex-wrap justify-center gap-6">
          <TechItem
            icon={
              <IoLogoReact
                aria-hidden="true"
                className="text-blue-500 text-lg"
              />
            }
            name="ReactJS"
          />

          <TechItem
            icon={
              <SiNextdotjs
                aria-hidden="true"
                className="text-black text-lg"
              />
            }
            name="Next.js"
          />

          <TechItem
            icon={
              <SiFigma
                aria-hidden="true"
                className="text-red-500 text-lg"
              />
            }
            name="Figma"
          />

          <TechItem
            icon={
              <IoLogoHtml5
                aria-hidden="true"
                className="text-orange-500 text-lg"
              />
            }
            name="HTML"
          />

          <TechItem
            icon={
              <IoLogoCss3
                aria-hidden="true"
                className="text-blue-600 text-lg"
              />
            }
            name="CSS"
          />

          <TechItem
            icon={
              <IoLogoJavascript
                aria-hidden="true"
                className="text-yellow-400 text-lg"
              />
            }
            name="JavaScript"
          />
        </div>
      </motion.div>
    </div>
  );
}

/* Technology Item */

function TechItem({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{
        duration: 0.3,
      }}
      className="flex items-center gap-2 text-sm font-medium text-text-body hover:text-text-primary transition-colors cursor-default"
    >
      {icon}
      <span>{name}</span>
    </motion.div>
  );
}
