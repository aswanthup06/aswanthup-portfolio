"use client";

import { useEffect, useState } from "react";
import { useContactModal } from "../context/ContactModalContext";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { LuMailCheck } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

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

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
        window.location.href = `tel:${value}`;
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

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage("Message sent successfully!");

        setName("");
        setEmail("");
        setMessage("");
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
            onClick={closeModal}
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
            className="fixed top-0 right-0 h-dvh w-full md:w-1/3 p-4 z-50"
          >
            <div className="h-full bg-white rounded-2xl shadow-xl p-6 overflow-y-auto">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.15,
                }}
                onClick={closeModal}
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
                  className="space-y-4 pb-6"
                >
                  <motion.h3
                    variants={itemVariants}
                    className="text-lg font-semibold mb-2"
                  >
                    Send a Message
                  </motion.h3>

                  <motion.input
                    variants={itemVariants}
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 text-sm px-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition"
                  />

                  <motion.input
                    variants={itemVariants}
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 text-sm px-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition"
                  />

                  <motion.textarea
                    variants={itemVariants}
                    placeholder="Your Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 text-sm py-3 bg-gray-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition"
                  />

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
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
                      hover:from-blue-500
                      hover:to-blue-700
                      transition
                      cursor-pointer
                      disabled:opacity-70
                    "
                  >
                    {loading ? "Sending..." : "Submit"}
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

