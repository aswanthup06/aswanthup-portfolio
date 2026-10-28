"use client";

import { useEffect, useState } from "react";
import { useContactModal } from "../context/ContactModalContext";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { LuMailCheck } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";

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

  const contactData = {
    title: "Get in Touch Now!",
    description:
      "I'm open to new projects and freelance opportunities! Whether you need a UI designer or UI developer, let's collaborate and bring your ideas to life.",
    contactItems: [
      {
        type: "phone",
        label: "Phone Number",
        value: "+917559068970",
        buttonText: "Call Now",
      },
      {
        type: "email",
        label: "Email Address",
        value: "aswanthup06@gmail.com",
        buttonText: "Copy Email",
      },
      {
        type: "whatsapp",
        label: "WhatsApp",
        value: "917559068970",
        buttonText: "Chat Now",
      },
    ],
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
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

  const handleContactAction = (type: string, value: string) => {
    switch (type) {
      case "phone":
        window.location.assign(`tel:${value}`);
        break;

      case "email":
        copyToClipboard(value);
        break;

      case "whatsapp":
        window.open(`https://wa.me/${value}`, "_blank");
        break;
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "phone":
        return <MdOutlinePhone className="w-4 h-4" />;

      case "email":
        return <LuMailCheck className="w-4 h-4" />;

      case "whatsapp":
        return <BsWhatsapp className="w-4 h-4" />;

      default:
        return null;
    }
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
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 z-40"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            data-lenis-prevent
            className="fixed top-0 right-0 h-dvh w-full md:w-1/3 p-4 z-50"
          >
            <div
              data-lenis-prevent
              className="h-full bg-white rounded-2xl shadow-xl p-6 overflow-y-auto overscroll-contain"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.15,
                }}
                onClick={handleClose}
                className="
                  mb-6
                  bg-linear-to-b
                  from-blue-400
                  to-blue-600
                  h-10
                  w-10
                  rounded-full
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
                  hover:from-blue-500
                  hover:to-blue-700
                  transition
                  cursor-pointer
                "
              >
                <IoMdClose />
              </motion.button>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-semibold mb-2"
                >
                  {contactData.title}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-sm text-gray-500 mb-8"
                >
                  {contactData.description}
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  className="space-y-6 mb-10"
                >
                  {contactData.contactItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex gap-4 items-center justify-between"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          className="h-12 w-12 shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-sm"
                        >
                          {getIcon(item.type)}
                        </motion.div>

                        <div className="min-w-0">
                          <p className="text-xs text-gray-500">
                            {item.label}
                          </p>

                          <p className="text-sm font-medium truncate">
                            {item.value}
                          </p>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() =>
                          handleContactAction(item.type, item.value)
                        }
                        className={`
                          shrink-0
                          bg-linear-to-b
                          from-blue-400
                          to-blue-600
                          w-22
                          h-8
                          text-xs
                          rounded-md
                          text-white
                          flex
                          items-center
                          justify-center
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
                          hover:from-blue-500
                          hover:to-blue-700
                          transition
                          cursor-pointer
                          ${
                            copiedEmail && item.type === "email"
                              ? "bg-green-100 text-green-700"
                              : ""
                          }
                        `}
                      >
                        {copiedEmail && item.type === "email"
                          ? "Copied!"
                          : item.buttonText}
                      </motion.button>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="h-px w-full bg-gray-200 mb-8"
                />

                <motion.form
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4 pb-6"
                >
                  <motion.h3
                    variants={itemVariants}
                    className="text-lg font-semibold mb-2"
                  >
                    Send a Message
                  </motion.h3>

                  <motion.div variants={itemVariants}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      onBlur={() => handleBlur("name")}
                      aria-invalid={Boolean(errors.name && touched.name)}
                      className={`w-full h-12 text-sm px-4 rounded-md transition focus:outline-none focus:ring-2 ${
                        errors.name && touched.name
                          ? "bg-red-50/60 border border-red-300 focus:ring-red-400/30 text-gray-900"
                          : "bg-gray-100 border border-transparent focus:ring-blue-400/30"
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
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onBlur={() => handleBlur("email")}
                      aria-invalid={Boolean(errors.email && touched.email)}
                      className={`w-full h-12 text-sm px-4 rounded-md transition focus:outline-none focus:ring-2 ${
                        errors.email && touched.email
                          ? "bg-red-50/60 border border-red-300 focus:ring-red-400/30 text-gray-900"
                          : "bg-gray-100 border border-transparent focus:ring-blue-400/30"
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
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <textarea
                      placeholder="Your Message (at least 10 characters)"
                      rows={4}
                      value={message}
                      onChange={(e) => handleMessageChange(e.target.value)}
                      onBlur={() => handleBlur("message")}
                      aria-invalid={Boolean(errors.message && touched.message)}
                      className={`w-full px-4 text-sm py-3 rounded-md resize-none transition focus:outline-none focus:ring-2 ${
                        errors.message && touched.message
                          ? "bg-red-50/60 border border-red-300 focus:ring-red-400/30 text-gray-900"
                          : "bg-gray-100 border border-transparent focus:ring-blue-400/30"
                      }`}
                    />
                    <div className="flex justify-between items-center mt-1 px-1">
                      <AnimatePresence>
                        {errors.message && touched.message ? (
                          <motion.p
                            initial={{ opacity: 0, height: 0, y: -4 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -4 }}
                            className="text-xs text-red-500"
                          >
                            {errors.message}
                          </motion.p>
                        ) : (
                          <span />
                        )}
                      </AnimatePresence>
                      <span className="text-[11px] text-gray-400 ml-auto">
                        {message.length}/1000
                      </span>
                    </div>
                  </motion.div>

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
                          h-12
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
                          <IoCheckmarkCircle className="text-2xl" />
                        ) : (
                          <IoMdClose className="text-2xl" />
                        )}

                        <p className="text-sm font-medium">
                          {statusMessage}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="submit"
                    disabled={loading}
                    className="
                      h-12
                      w-full
                      text-sm
                      text-white
                      rounded-md
                      bg-linear-to-b
                      from-blue-400
                      to-blue-600
                      flex
                      items-center
                      justify-center
                      gap-2
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
                      hover:from-blue-500
                      hover:to-blue-700
                      transition
                      cursor-pointer
                      disabled:opacity-70
                    "
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </motion.button>
                </motion.form>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
