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

export default function HeroSection() {
  const { openModal } = useContactModal();

  return (
    <>
      <div className="pt-20 flex items-center flex-col">
        <div className="flex items-center justify-center text-blue-500 font-semibold text-sm md:text-md lg:text-lg">
          Personal Portfolio
        </div>

        <div className="">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-semibold text-gray-700">
            Building <span className="text-blue-500">User-Centric</span>
          </h1>

          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-semibold  mb-4 text-gray-700">
            Web Experiences
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="text-md text-center text-gray-500  md:w-7/12 text-sm md:text-lg">
            Bridging UI/UX excellence with clean, performant code. I specialize
            in transforming complex workflows into intuitive, user-centric web
            applications
          </p>
        </div>

        <div className="flex items-center justify-center mt-6 ">
          <button
            onClick={openModal}
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
    active:translate-y-[1px]
    transition-all duration-200
    cursor-pointer
  "
          >
            Get in Touch <MdOutlineArrowOutward />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <IoLogoReact className="text-blue-500 text-lg" />
              ReactJS
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <SiNextdotjs className="text-black text-lg" />
              Next.js
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <SiFigma className="text-red-500 text-lg" />
              Figma
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <IoLogoHtml5 className="text-orange-500 text-lg" />
              HTML
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <IoLogoCss3 className="text-blue-600 text-lg" />
              CSS
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <IoLogoJavascript className="text-yellow-400 text-lg" />
              JavaScript
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
