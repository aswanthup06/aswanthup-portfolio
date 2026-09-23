
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

export default function HeroSection() {
  const { openModal } = useContactModal();

  return (
    <div className="pt-20 flex items-center flex-col">

      {/* Small Label */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center text-blue-500 font-semibold text-sm md:text-md lg:text-lg"
      >
        Personal Portfolio
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-semibold text-gray-700">
          Building <span className="text-blue-500">User-Centric</span>
        </h1>

        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-semibold mb-4 text-gray-700">
          Web Experiences
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center"
      >
        <p className="text-md text-center text-gray-500 md:w-7/12 text-sm md:text-lg">
          Bridging UI/UX excellence with clean, performant code. I specialize
          in transforming complex workflows into intuitive, user-centric web
          applications
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="flex items-center justify-center mt-6"
      >
        <motion.button
          onClick={openModal}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="
            bg-gradient-to-b
            from-blue-400
            to-blue-600
            rounded-md
            text-white
            h-10 w-36
            font-medium text-[14px]
            flex items-center gap-2 justify-center
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
            hover:from-blue-500 hover:to-blue-700
            transition-all duration-200
            cursor-pointer
          "
        >
          Get in Touch
          <MdOutlineArrowOutward />
        </motion.button>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center mt-12"
      >
        <div className="flex flex-wrap justify-center gap-6">

          <TechItem
            icon={<IoLogoReact className="text-blue-500 text-lg" />}
            name="ReactJS"
          />

          <TechItem
            icon={<SiNextdotjs className="text-black text-lg" />}
            name="Next.js"
          />

          <TechItem
            icon={<SiFigma className="text-red-500 text-lg" />}
            name="Figma"
          />

          <TechItem
            icon={<IoLogoHtml5 className="text-orange-500 text-lg" />}
            name="HTML"
          />

          <TechItem
            icon={<IoLogoCss3 className="text-blue-600 text-lg" />}
            name="CSS"
          />

          <TechItem
            icon={<IoLogoJavascript className="text-yellow-400 text-lg" />}
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
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-default"
    >
      {icon}
      {name}
    </motion.div>
  );
}

