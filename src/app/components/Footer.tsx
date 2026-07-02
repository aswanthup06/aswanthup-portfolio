'use client';
import React from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaWebflow } from "react-icons/fa6";
import { useContactModal } from "../context/ContactModalContext";
import { BsGlobe } from "react-icons/bs";

export default function Footer() {
    const { openModal } = useContactModal();
  return (
    <footer className="w-full pt-24 pb-6">

      <div className="px-6">

        {/* Main Container */}

        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_10px_60px_rgba(0,0,0,0.06)]">

          {/* Background Blur */}

          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />

          {/* Content */}

          <div className="relative z-10 px-6 md:px-10 py-10">

            {/* ====================================== */}
            {/* Top Section */}
            {/* ====================================== */}

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">

              {/* Left */}

              <div className="max-w-md">

                {/* Brand */}

                <div className="flex items-center gap-4">

                  <div
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
                  </div>

                  <div>

                    <h4 className="text-lg font-semibold text-gray-900">
                      Aswanth UP
                    </h4>

                    <p className="text-sm text-gray-500">
                      UI Developer & Designer
                    </p>

                  </div>
                </div>

                {/* Description */}

                <p className="text-sm leading-relaxed text-gray-500 mt-6">
                  Passionate about crafting clean digital experiences
                  through frontend development, modern UI systems,
                  responsive interfaces, and scalable design thinking.
                </p>

                {/* CTA */}

                <button
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

                  <MdOutlineArrowOutward />
                </button>

              </div>

              {/* Right */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">

                {/* Navigation */}

                <div>

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

                    {/* <li>
                      <Link
                        href="/blogs"
                        className="text-gray-500 hover:text-blue-500 transition"
                      >
                        Blogs
                      </Link>
                    </li> */}

                  </ul>
                </div>

                {/* Services */}

                <div>

                  <h1 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Services
                  </h1>

                  <ul className="space-y-4 mt-5 text-sm text-gray-500">

                    <li>UI Development</li>

                    <li>Frontend Engineering</li>

                    <li>Responsive Web Design</li>

                    <li>Figma To Code</li>

                  </ul>
                </div>

                {/* Social */}

                <div>

                  <h1 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Connect
                  </h1>

                     <div className="flex items-center gap-3 mt-5">
                             <a
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
                             </a>
                 
                             <a
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
                             </a>
                 
                             <a
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
                             </a>
                           </div>

            

                </div>

              </div>

            </div>


            <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">

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

                <Link
                  href="/terms"
                  className="hover:text-blue-500 transition"
                >
                  Terms
                </Link>

              </div>

            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}