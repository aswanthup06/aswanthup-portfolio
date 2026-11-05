"use client";

import { useEffect, useState } from "react";
import { useContactModal } from "../context/ContactModalContext";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlinePhone, MdOutlineArrowOutward } from "react-icons/md";
import { LuMailCheck } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!isOpen) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
    }
    document.documentElement.classList.add("modal-open");

    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    lenis?.stop();

    return () => {
      document.documentElement.classList.remove("modal-open");
      document.documentElement.style.removeProperty("--scrollbar-width");
      lenis?.start();
    };
  }, [isOpen]);

  const handleClose = () => {
    setErrors({});
    setTouched({});
    setStatus(null);
    setStatusMessage("");
    closeModal();
  };

  const validateField = (field: "name" | "email" | "message", val: string): string | undefined => {
    const trimmed = val.trim();
    switch (field) {
      case "name":
        if (!trimmed) return "Name is required";
        if (trimmed.length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!trimmed) return "Email is required";
        if (!EMAIL_REGEX.test(trimmed)) return "Please enter a valid email address";
        return undefined;
      case "message":
        if (!trimmed) return "Message is required";
        if (trimmed.length < 10) return "Message must be at least 10 characters";
        return undefined;
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    const nameErr = validateField("name", name);
    const emailErr = validateField("email", email);
    const messageErr = validateField("message", message);

    if (nameErr) newErrors.name = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (messageErr) newErrors.message = messageErr;

    return newErrors;
  };

  const handleBlur = (field: "name" | "email" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const val = field === "name" ? name : field === "email" ? email : message;
    const error = validateField(field, val);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleNameChange = (val: string) => {
    setName(val);
    if (touched.name) {
      const error = validateField("name", val);
      setErrors((prev) => ({ ...prev, name: error }));
    }
  };

  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (touched.email) {
      const error = validateField("email", val);
      setErrors((prev) => ({ ...prev, email: error }));
    }
  };

  const handleMessageChange = (val: string) => {
    setMessage(val);
    if (touched.message) {
      const error = validateField("message", val);
      setErrors((prev) => ({ ...prev, message: error }));
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");

      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopiedEmail(true);

    setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage("Message sent successfully!");

        setName("");
        setEmail("");
        setMessage("");
        setTouched({});
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Failed to send message");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }

    setLoading(false);

    setTimeout(() => {
      setStatus(null);
      setStatusMessage("");
    }, 4000);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/45 backdrop-blur-xs z-60 touch-none"
          />

          <motion.div
            initial={{ x: "100%", opacity: 0.95 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.85,
            }}
            data-lenis-prevent
            className="fixed top-0 right-0 h-dvh w-full sm:w-[440px] md:w-[460px] p-3 sm:p-4 z-70"
          >
            <div
              data-lenis-prevent
              className="relative h-full bg-white rounded-2xl border border-border-default shadow-2xl p-6 overflow-y-auto overscroll-contain no-scrollbar flex flex-col justify-between"
            >
              {/* Absolute Close Button: exactly 24px (top-6 right-6) matching card p-6 */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleClose}
                aria-label="Close modal"
                className="absolute top-6 right-6 z-20 h-8 w-8 rounded-full border border-border-default/70 flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors cursor-pointer"
              >
                <IoMdClose className="text-base" />
              </motion.button>

              <div>
                {/* Title: aligns cleanly with the top-6 right-6 close button */}
                <div className="pr-10">
                  <h2 className="text-2xl font-bold tracking-tight text-text-primary leading-8">
                    Let’s connect
                  </h2>
                </div>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-text-muted">
                  Have an open UI role, an enterprise project, or want to discuss design-to-code architecture? Drop a note below, or email directly at{" "}
                  <button
                    type="button"
                    onClick={() => copyToClipboard("aswanthup06@gmail.com")}
                    className="font-semibold text-primary hover:text-primary-hover hover:underline transition-colors cursor-pointer inline-flex items-center gap-1"
                  >
                    aswanthup06@gmail.com
                    {copiedEmail ? (
                      <span className="text-xs text-green-600 font-bold">(copied!)</span>
                    ) : null}
                  </button>
                  .
                </p>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-3.5"
                >
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      onBlur={() => handleBlur("name")}
                      aria-invalid={Boolean(errors.name && touched.name)}
                      className={`w-full h-11 text-sm px-3.5 rounded-md border transition-all focus:outline-none focus:ring-2 ${
                        errors.name && touched.name
                          ? "bg-red-50/60 border-red-300 focus:ring-red-400/30 text-gray-900"
                          : "bg-surface-subtle border-border-default text-text-primary placeholder:text-text-muted/60 focus:bg-white focus:border-primary focus:ring-primary/20"
                      }`}
                    />
                    <AnimatePresence>
                      {errors.name && touched.name && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, y: -4 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -4 }}
                          className="text-xs text-red-500 mt-1 pl-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onBlur={() => handleBlur("email")}
                      aria-invalid={Boolean(errors.email && touched.email)}
                      className={`w-full h-11 text-sm px-3.5 rounded-md border transition-all focus:outline-none focus:ring-2 ${
                        errors.email && touched.email
                          ? "bg-red-50/60 border-red-300 focus:ring-red-400/30 text-gray-900"
                          : "bg-surface-subtle border-border-default text-text-primary placeholder:text-text-muted/60 focus:bg-white focus:border-primary focus:ring-primary/20"
                      }`}
                    />
                    <AnimatePresence>
                      {errors.email && touched.email && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, y: -4 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -4 }}
                          className="text-xs text-red-500 mt-1 pl-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-semibold text-text-secondary">
                        Message
                      </label>
                      <span className="text-[11px] text-text-muted">
                        {message.length}/1000
                      </span>
                    </div>
                    <textarea
                      placeholder="Tell me about your team, product, or role..."
                      rows={3}
                      value={message}
                      onChange={(e) => handleMessageChange(e.target.value)}
                      onBlur={() => handleBlur("message")}
                      aria-invalid={Boolean(errors.message && touched.message)}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border resize-none transition-all focus:outline-none focus:ring-2 ${
                        errors.message && touched.message
                          ? "bg-red-50/60 border-red-300 focus:ring-red-400/30 text-gray-900"
                          : "bg-surface-subtle border-border-default text-text-primary placeholder:text-text-muted/60 focus:bg-white focus:border-primary focus:ring-primary/20"
                      }`}
                    />
                    <AnimatePresence>
                      {errors.message && touched.message && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, y: -4 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -4 }}
                          className="text-xs text-red-500 mt-1 pl-1"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <AnimatePresence mode="wait">
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`
                          px-4
                          rounded-md
                          h-11
                          flex
                          items-center
                          gap-3
                          border
                          ${
                            status === "success"
                              ? "bg-green-50 border-green-200 text-green-700"
                              : "bg-red-50 border-red-200 text-red-700"
                          }
                        `}
                      >
                        {status === "success" ? (
                          <IoCheckmarkCircle className="text-xl" />
                        ) : (
                          <IoMdClose className="text-xl" />
                        )}

                        <p className="text-xs font-medium">
                          {statusMessage}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="
                      btn-primary
                      h-11
                      w-full
                      rounded-md
                      text-sm
                      font-medium
                      text-white
                      flex
                      items-center
                      justify-center
                      gap-2
                      shadow-md
                      shadow-blue-500/20
                      hover:shadow-lg
                      hover:shadow-blue-500/30
                      transition-all
                      duration-300
                      cursor-pointer
                      disabled:opacity-70
                    "
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <MdOutlineArrowOutward className="text-base" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Quiet Direct Channels Footer */}
              <div className="pt-4 mt-6 border-t border-border-default/70">
                <p className="text-[11px] font-medium uppercase tracking-wider text-text-muted mb-2">
                  Or connect directly
                </p>
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <a
                    href="https://wa.me/917559068970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-secondary hover:text-green-600 transition-colors font-medium"
                  >
                    <BsWhatsapp className="text-sm text-green-600" />
                    <span>+91 7559068970</span>
                  </a>
                  <span className="text-border-default">·</span>
                  <a
                    href="tel:+917559068970"
                    className="inline-flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors font-medium"
                  >
                    <MdOutlinePhone className="text-sm text-primary" />
                    <span>Call</span>
                  </a>
                  <span className="text-border-default">·</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("aswanthup06@gmail.com")}
                    className="inline-flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors font-medium cursor-pointer"
                  >
                    <LuMailCheck className="text-sm text-primary" />
                    <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
