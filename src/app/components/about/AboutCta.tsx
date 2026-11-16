"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Check } from "lucide-react";
import { useContactModal } from "../../context/ContactModalContext";
import { useClipboard } from "../../hooks/useClipboard";
import { PREMIUM_EASE } from "../../lib/animations";
import { SITE_CONFIG } from "../../data/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: PREMIUM_EASE },
  },
};

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
} as const;

export default function AboutCta() {
  const { openModal } = useContactModal();
  const { copied, copy } = useClipboard();

  const contacts = [
    {
      type: "copy-email" as const,
      label: "Email",
      handle: SITE_CONFIG.email,
      Icon: FaEnvelope,
    },
    {
      type: "link" as const,
      href: SITE_CONFIG.socials.github,
      label: "GitHub",
      handle: "github.com/aswanthup06",
      Icon: FaGithub,
    },
    {
      type: "link" as const,
      href: SITE_CONFIG.socials.linkedin,
      label: "LinkedIn",
      handle: "linkedin.com/in/aswanthup",
      Icon: FaLinkedinIn,
    },
    {
      type: "link" as const,
      href: SITE_CONFIG.socials.whatsapp,
      label: "WhatsApp",
      handle: "Message me directly",
      Icon: IoLogoWhatsapp,
    },
  ];

  return (
    <motion.section
      variants={item}
      {...inView}
      aria-labelledby="cta-heading"
      className="relative mt-16 md:mt-20 overflow-hidden rounded-3xl border border-border-default bg-brand-banner p-6 sm:p-8 md:p-14"
    >
      {/* soft decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-brand-glow) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 70% 80% at 85% 10%, black 10%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 80% at 85% 10%, black 10%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute -left-12 -top-12 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--color-blob-1)" }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 right-1/3 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--color-blob-2)" }}
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* Copy */}
        <div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            Let’s work together
          </p>

          <h2
            id="cta-heading"
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] text-text-primary"
          >
            Let’s build something{" "}
            <span className="text-brand-gradient">
              people enjoy using.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-body md:text-base">
            Open to UI Developer roles, remote or on-site across India. If you
            have a product that deserves careful interfaces, I’d like to hear
            about it.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              onClick={openModal}
              className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300"
            >
              Get in Touch
              <MdOutlineArrowOutward className="text-base" />
            </button>

            <a
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Aswanth_UP_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-md border border-border-default bg-surface-card px-5 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:border-border-strong hover:bg-surface-muted"
            >
              <FaDownload className="text-xs text-text-muted transition-transform group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Contact list */}
        <motion.ul
          variants={container}
          {...inView}
          className="border-t border-border-default"
        >
          {contacts.map((contact) => (
            <motion.li key={contact.label} variants={item}>
              {contact.type === "copy-email" ? (
                <button
                  type="button"
                  onClick={() => copy(contact.handle)}
                  className="group flex w-full text-left items-center gap-4 border-b border-border-default py-4 transition-colors duration-500 cursor-pointer"
                  aria-label="Copy email address to clipboard"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-text-body duration-300 transition-colors group-hover:text-primary">
                    {copied ? (
                      <Check size={18} className="text-primary" />
                    ) : (
                      <contact.Icon aria-hidden="true" />
                    )}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-text-primary transition-colors duration-300 group-hover:text-primary">
                      {contact.label}
                    </span>
                    <span className="block truncate text-xs text-text-muted transition-colors duration-300 group-hover:text-primary">
                      {copied ? (
                        <span className="text-primary font-semibold">
                          Email copied to clipboard!
                        </span>
                      ) : (
                        contact.handle
                      )}
                    </span>
                  </span>

                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-surface-muted text-text-muted group-hover:text-primary transition-colors">
                    {copied ? "Copied!" : "Copy"}
                  </span>
                </button>
              ) : (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-b border-border-default py-4 transition-colors duration-500"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-text-body duration-300 transition-colors group-hover:text-primary">
                    <contact.Icon aria-hidden="true" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-text-primary transition-colors duration-300 group-hover:text-primary">
                      {contact.label}
                    </span>
                    <span className="block truncate text-xs text-text-muted transition-colors duration-300 group-hover:text-primary">
                      {contact.handle}
                    </span>
                  </span>

                  <MdOutlineArrowOutward
                    aria-hidden="true"
                    className="shrink-0 text-lg text-text-muted transition-colors group-hover:text-primary"
                  />
                </a>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
