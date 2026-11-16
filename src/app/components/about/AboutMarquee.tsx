"use client";

import React from "react";
import { motion } from "framer-motion";
import { TOOLS } from "../../data/about";

export default function AboutMarquee() {
  const row = [...TOOLS, ...TOOLS];
  const fade =
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

  return (
    <div
      className="mt-14 md:mt-20 overflow-hidden"
      style={{ maskImage: fade, WebkitMaskImage: fade }}
      aria-label="Tools I work with"
    >
      <motion.ul
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {row.map(({ name, Icon }, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= TOOLS.length}
            className="flex items-center gap-2.5 pr-12 text-sm font-medium text-text-muted"
          >
            <Icon className="text-xl" />
            {name}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
