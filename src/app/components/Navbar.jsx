"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useContactModal } from "../context/ContactModalContext";
import { BsGlobe } from "react-icons/bs";
import { TbMenu3, TbX } from "react-icons/tb";

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useContactModal();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (path) =>
    `font-medium text-[14px] transition-colors duration-200 ${
      pathname === path
        ? "text-blue-500 font-semibold"
        : "text-gray-500 hover:text-gray-900"
    }`;

  return (
    <div className="fixed top-0 left-0 w-full z-30 px-4 md:px-6 flex justify-center ">
      <nav className="relative border shadow-2xl bg-white border-gray-200 rounded-lg h-14 flex items-center justify-between px-2 w-full md:w-fit mt-4 md:gap-24">
        
        {/* Logo */}
        <Link
          href="/"
          className="
            h-10 w-10 rounded
            bg-linear-to-b
            from-blue-400 to-blue-600
            text-white
            flex items-center justify-center
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
            hover:from-blue-500 hover:to-blue-700
            transition-all duration-200
          "
        >
          <BsGlobe className="text-md" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4">
          <li>
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
          </li>

          <li>
            <Link href="/projects" className={navLinkClass("/projects")}>
              Projects
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          
          {/* Desktop Button */}
          <button
            onClick={openModal}
            className="
              hidden md:flex
              bg-linear-to-b
              from-blue-400 to-blue-600
              rounded-md
              text-white
              h-10 w-36
              font-medium text-[14px]
              items-center gap-2 justify-center
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
              hover:from-blue-500 hover:to-blue-700
              transition-all duration-200
              cursor-pointer
            "
          >
            Get in Touch <MdOutlineArrowOutward />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              bg-linear-to-b
              from-blue-400 to-blue-600
              rounded-md
              text-white
              h-10 w-10
              flex items-center justify-center
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
              hover:from-blue-500 hover:to-blue-700
              transition-all duration-200
              cursor-pointer
            "
          >
            {menuOpen ? (
              <TbX className="text-xl" />
            ) : (
              <TbMenu3 className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            absolute top-16 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-xl p-4
            flex flex-col gap-4
            transition-all duration-300 md:hidden
            ${
              menuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }
          `}
        >
          <Link
            href="/"
            className={navLinkClass("/")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={navLinkClass("/about")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/projects"
            className={navLinkClass("/projects")}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>

          <button
            onClick={() => {
              openModal();
              setMenuOpen(false);
            }}
            className="
              bg-linear-to-b
              from-blue-400 to-blue-600
              rounded-md
              text-white
              h-10
              font-medium text-[14px]
              flex items-center gap-2 justify-center
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
              hover:from-blue-500 hover:to-blue-700
              transition-all duration-200
              cursor-pointer
            "
          >
            Get in Touch <MdOutlineArrowOutward />
          </button>
        </div>
      </nav>
    </div>
  );
}