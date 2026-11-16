"use client";

import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Check } from "lucide-react";
import { useContactModal } from "../../context/ContactModalContext";
import { fadeUp } from "../../lib/animations";

const EMAIL = "aswanthup06@gmail.com";

export default function ContactSection() {
  const { openModal } = useContactModal();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="contact"
        aria-labelledby="home-contact-heading"
        className="w-full"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-border-default bg-brand-banner p-6 sm:p-10 md:p-12"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
                  Open to UI Developer Roles
                </p>

                <h2
                  id="home-contact-heading"
                  className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-text-primary"
                >
                  Let&apos;s build clean,{" "}
                  <span className="text-text-muted font-medium">
                    production-ready interfaces.
                  </span>
                </h2>

                <p className="mt-3 text-sm md:text-base leading-relaxed text-text-body">
                  Available for full-time UI Developer roles (remote or on-site
                  across India) with product teams looking for someone who owns
                  both Figma and React.
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={openModal}
                    className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer"
                  >
                    Get in Touch
                    <MdOutlineArrowOutward aria-hidden="true" className="text-base" />
                  </button>

                  <a
                    href="/Aswanth_UP_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Aswanth_UP_Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-md border border-border-default bg-surface-card px-5 py-3 text-sm font-medium text-text-primary hover:bg-surface-muted transition-colors"
                  >
                    <FaDownload aria-hidden="true" className="text-xs text-text-muted" />
                    Resume
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-text-muted">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="text-primary text-xs" size={13} />
                        <span className="text-primary font-semibold">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaEnvelope aria-hidden="true" />
                        <span>{EMAIL}</span>
                      </>
                    )}
                  </button>
                  <span aria-hidden="true" className="text-border-strong">·</span>
                  <a
                    href="https://github.com/aswanthup06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                  <span aria-hidden="true" className="text-border-strong">·</span>
                  <a
                    href="https://www.linkedin.com/in/aswanthup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <FaLinkedinIn aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
