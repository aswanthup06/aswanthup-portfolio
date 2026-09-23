"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useContactModal } from "../context/ContactModalContext";
import { BsGlobe } from "react-icons/bs";
import { TbMenu3, TbX } from "react-icons/tb";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

const navContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -25,
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

const navItemsVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const mobileItemsVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useContactModal();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinkClass = (path: string): string =>
    `font-medium text-[14px] transition-colors duration-200 ${
      pathname === path
        ? "text-blue-500 font-semibold"
        : "text-gray-500 hover:text-gray-900"
    }`;

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const handleContact = (): void => {
    openModal();
    closeMenu();
  };

  return (
    <motion.div
      variants={navContainerVariants}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 w-full z-30 px-4 md:px-6 flex justify-center"
    >
      <motion.nav
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="relative border shadow-2xl bg-white border-gray-200 rounded-lg h-14 flex items-center justify-between px-2 w-full md:w-fit mt-4 md:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.2,
            type: "spring",
            stiffness: 250,
          }}
        >
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
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <BsGlobe className="text-md" />
            </motion.div>
          </Link>
        </motion.div>

        <motion.ul
          variants={navItemsVariants}
          initial="hidden"
          animate="show"
          className="hidden md:flex gap-4"
        >
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              variants={navItemVariants}
            >
              <Link
                href={item.href}
                className={navLinkClass(item.href)}
              >
                <motion.span
                  whileHover={{ y: -1 }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {item.label}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex items-center gap-2">
          <motion.button
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.03,
              y: -1,
            }}
            whileTap={{
              scale: 0.97,
            }}
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
            Get in Touch

            <motion.span
              whileHover={{
                x: 3,
                y: -3,
              }}
            >
              <MdOutlineArrowOutward />
            </motion.span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.35,
              delay: 0.3,
              type: "spring",
              stiffness: 250,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
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
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <TbX className="text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <TbMenu3 className="text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="
                absolute top-16 left-0 w-full
                bg-white border border-gray-200
                rounded-lg shadow-xl p-4
                flex flex-col gap-4
                md:hidden
              "
            >
              <motion.div
                variants={mobileItemsVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-4"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={navItemVariants}
                  >
                    <Link
                      href={item.href}
                      className={navLinkClass(item.href)}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.button
                  variants={navItemVariants}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={handleContact}
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
                  Get in Touch

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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
}
