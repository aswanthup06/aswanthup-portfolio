"use client";

import React, { useRef, useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaArrowLeft,
  FaCheckCircle,
  FaUserMd,
  FaHospital,
  FaPills,
  FaFlask,
  FaExpand,
} from "react-icons/fa";
import { FaReact, FaFigma, FaCss3Alt, FaMobile } from "react-icons/fa";
import { SiTailwindcss, SiAdobeaftereffects, SiFlutter } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IconType } from "react-icons";
import { useContactModal } from "../../../context/ContactModalContext";
import {
  PREMIUM_EASE,
  SPRING_SMOOTH,
  SPRING_BOUNCY,
  blurFadeUp,
  fadeUp,
  staggerContainer,
  staggerFast,
} from "../../../lib/animations";

interface TechItem {
  icon: IconType;
  name: string;
  category: string;
}

interface FeatureItem {
  icon: IconType;
  title: string;
  tag: string;
  desc: string;
}

export default function DoctorOnePage() {
  const { openModal } = useContactModal();

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  const techStack: TechItem[] = [
    { icon: FaReact, name: "React", category: "Frontend" },
    { icon: TbBrandNextjs, name: "Next.js", category: "Framework" },
    { icon: SiTailwindcss, name: "Tailwind CSS", category: "Styling" },
    { icon: FaFigma, name: "Figma", category: "UI/UX Design" },
    { icon: SiFlutter, name: "Flutter", category: "Mobile App" },
    { icon: FaCss3Alt, name: "CSS3", category: "Custom UI" },
    { icon: SiAdobeaftereffects, name: "After Effects", category: "Motion" },
    { icon: FaMobile, name: "Responsive UI", category: "Cross-device" },
  ];

  const features: FeatureItem[] = [
    {
      icon: FaUserMd,
      title: "Doctor Consultations",
      tag: "Telehealth",
      desc: "Instant search and booking with licensed doctors across multiple specialties with video appointment support.",
    },
    {
      icon: FaFlask,
      title: "Diagnostic Labs",
      tag: "Testing & Diagnostics",
      desc: "Directory of certified diagnostic centers with home sample collection and encrypted digital report delivery.",
    },
    {
      icon: FaHospital,
      title: "Hospital Directory",
      tag: "Emergency & Care",
      desc: "Location-aware discovery of nearby multispeciality hospitals, emergency units, and care facilities.",
    },
    {
      icon: FaPills,
      title: "Digital Pharmacy",
      tag: "E-Commerce",
      desc: "Seamless prescription uploads, medicine searches, automatic refills, and doorstep delivery tracking.",
    },
  ];

  const deliverables: string[] = [
    "Clinical Dashboard UI/UX Architecture",
    "Responsive Patient Web Platform",
    "Flutter Mobile Application UI",
    "Pharmacy & E-Commerce Flow",
    "Laboratory & Diagnostics Booking",
    "Motion Graphics & Video Showcase",
    "Comprehensive Design System",
    "Cross-Functional Team Coordination",
  ];

  const stats = [
    { value: "500+", label: "Verified Doctors", sub: "across 25+ specializations" },
    { value: "50k+", label: "Patient Reach", sub: "active monthly consultations" },
    { value: "24/7", label: "Care Access", sub: "round-the-clock telehealth" },
    { value: "4-in-1", label: "Unified Ecosystem", sub: "clinic, lab, pharmacy & app" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setVideoLoaded(true);
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || duration === 0) return;

    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(video.currentTime);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [duration]);

  const togglePlay = (): void => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (): void => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (!progressRef.current || !videoRef.current || duration === 0) return;
    const progressBar = progressRef.current;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const progressBarWidth = rect.width;
    const seekPercentage = Math.min(
      Math.max((clickPosition / progressBarWidth) * 100, 0),
      100
    );
    const seekTime = (duration * seekPercentage) / 100;
    videoRef.current.currentTime = seekTime;
    setProgress(seekPercentage);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    if (isNaN(timeInSeconds) || !isFinite(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const scrollToVideo = () => {
    const el = document.getElementById("video-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 pt-28 pb-20 overflow-x-hidden">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 grid-bg -z-10 pointer-events-none" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[650px] h-[340px] bg-blue-400/10 blur-[110px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-[800px] right-10 w-[400px] h-[300px] bg-indigo-300/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: PREMIUM_EASE }}
          className="flex items-center justify-between mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-gray-600 hover:text-blue-600 px-3.5 py-1.5 rounded-full bg-white/80 border border-gray-200/80 backdrop-blur-sm shadow-xs hover:border-blue-300 transition-all cursor-pointer"
          >
            <FaArrowLeft className="text-xs" />
            Back to Projects
          </Link>

          <span className="text-xs font-mono text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full">
            Healthcare · Case Study
          </span>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl mx-auto pt-4"
        >
          {/* Status Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/80 backdrop-blur-md shadow-xs text-xs font-medium text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Comprehensive Wellness Platform
            </span>
          </motion.div>

          {/* Main Title (Single H1 for Route SEO) */}
          <motion.h1
            variants={blurFadeUp}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]"
          >
            Doctor ONE
            <span className="text-blue-500">.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-gray-500 mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            An end-to-end digital health ecosystem engineered to unify patient
            consultations, specialized physician networks, accredited diagnostic labs,
            and doorstep pharmaceutical delivery.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <motion.button
              type="button"
              onClick={scrollToVideo}
              whileHover={{ y: -2, scale: 1.03, transition: SPRING_SMOOTH }}
              whileTap={{ scale: 0.96, transition: SPRING_BOUNCY }}
              className="
                bg-linear-to-b from-blue-500 to-blue-600
                hover:from-blue-600 hover:to-blue-700
                text-white text-sm font-medium
                px-6 py-3 rounded-full
                flex items-center gap-2.5
                shadow-md shadow-blue-500/20
                transition-colors cursor-pointer
              "
            >
              <FaPlay className="text-xs" />
              Watch Video Demo
            </motion.button>

            <motion.button
              type="button"
              onClick={openModal}
              whileHover={{ y: -2, scale: 1.03, transition: SPRING_SMOOTH }}
              whileTap={{ scale: 0.96, transition: SPRING_BOUNCY }}
              className="
                bg-white/80 hover:bg-white
                text-gray-700 hover:text-blue-600
                border border-gray-200/80 hover:border-blue-300
                text-sm font-medium
                px-6 py-3 rounded-full
                flex items-center gap-2
                backdrop-blur-sm shadow-xs
                transition-all cursor-pointer
              "
            >
              Discuss Similar Project
              <MdOutlineArrowOutward className="text-base" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Banner Mockup Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: PREMIUM_EASE }}
          className="mt-14 relative"
        >
          <div className="rounded-3xl border border-gray-200/90 bg-white/90 p-3 shadow-2xl backdrop-blur-xl group overflow-hidden">
            {/* Window Top Bar Mockup */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
              </div>
              <span className="text-[11px] font-mono text-gray-400 bg-gray-50 px-3 py-0.5 rounded-full border border-gray-200/60">
                doctor-one.health · Clinical Suite
              </span>
              <div className="w-12" />
            </div>

            {/* Banner Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100">
              <motion.img
                src="/images/projects/doctor-one/dr1banner.webp"
                alt="Doctor ONE Clinical Platform Showcase"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.65, ease: PREMIUM_EASE }}
                className="w-full h-auto object-cover max-h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -4, transition: SPRING_SMOOTH }}
              className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all text-center"
            >
              <p className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="font-semibold text-gray-800 text-sm mt-1">{stat.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Pillars / Problem Solved */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: PREMIUM_EASE }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Platform Architecture
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-3">
              One Unified Healthcare Hub
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-3 leading-relaxed">
              Eliminating fragmented patient journeys by integrating every medical
              touchpoint into an intuitive, high-performance interface.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6, transition: SPRING_SMOOTH }}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-blue-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-4 border border-blue-100 shadow-xs">
                    <feature.icon />
                  </div>
                  <span className="text-[11px] font-medium text-blue-600 uppercase tracking-wider">
                    {feature.tag}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* My Role & Deliverables Section */}
        <div className="mt-28 bg-linear-to-b from-gray-50/80 to-white rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-xs">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: PREMIUM_EASE }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white p-2">
                <img
                  className="w-full h-auto rounded-xl object-cover"
                  src="/images/projects/doctor-one/dr1.webp"
                  alt="Doctor One Dashboard Interface"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-4 hidden sm:flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-xs font-semibold text-gray-800">
                  Full-Cycle UI Engineering & Design
                </p>
              </div>
            </motion.div>

            {/* Text & Deliverables List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                My Contributions
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
                What I Delivered
              </h2>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                As the Lead UI Developer & Designer, I directed the user experience
                from conceptual Figma wireframes through to production-ready frontend
                components and responsive dashboards.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {deliverables.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2, transition: SPRING_SMOOTH }}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-2xs hover:border-blue-200 transition-colors"
                  >
                    <FaCheckCircle className="text-blue-500 shrink-0 text-sm" />
                    <span className="text-gray-700 text-xs font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: PREMIUM_EASE }}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Tools & Stack
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              Technologies & Methodologies
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Modern frontend technologies and prototyping tools powering Doctor ONE.
            </p>
          </motion.div>

          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
          >
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.04, transition: SPRING_SMOOTH }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/80 shadow-2xs hover:shadow-md hover:border-blue-400/40 transition-all text-center group cursor-pointer"
              >
                <tech.icon className="text-3xl text-gray-500 group-hover:text-blue-600 transition-colors mx-auto mb-2.5" />
                <p className="text-xs font-semibold text-gray-800">{tech.name}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{tech.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Video Showcase Section */}
        <div id="video-showcase" className="mt-28 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: PREMIUM_EASE }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Live Walkthrough
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-3">
              Video Presentation
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-2">
              Phase 1 interactive demonstration showcasing patient workflows and
              dashboard interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="max-w-4xl mx-auto"
          >
            {/* Player Container */}
            <div className="bg-gray-950 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 relative group">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900/90 border-b border-gray-800 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-gray-400">
                  Doctor_ONE_Walkthrough_Phase1.mp4
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Video Element & Big Play Overlay */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={togglePlay}
                  poster="/images/projects/doctor-one/dr1banner.webp"
                  preload="metadata"
                >
                  <source src="/videos/doctor-one/dr1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Big Center Play Icon (When Paused) */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.button
                      type="button"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={SPRING_BOUNCY}
                      onClick={togglePlay}
                      aria-label="Play Video"
                      className="
                        absolute w-18 h-18 rounded-full
                        bg-blue-600/90 hover:bg-blue-500
                        text-white flex items-center justify-center
                        shadow-2xl shadow-blue-500/50 backdrop-blur-sm
                        transition-transform hover:scale-110 cursor-pointer
                      "
                    >
                      <FaPlay className="text-xl ml-1" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Modern Glass Bottom Control Bar */}
              {videoLoaded && duration > 0 ? (
                <div className="p-4 bg-gray-900/95 border-t border-gray-800">
                  {/* Progress Timeline */}
                  <div
                    ref={progressRef}
                    className="relative w-full h-2 bg-gray-700/80 hover:h-3 rounded-full cursor-pointer transition-all mb-3 group/bar"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="absolute h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md opacity-0 group-hover/bar:opacity-100 transition-opacity"
                      style={{ left: `calc(${progress}% - 7px)` }}
                    />
                  </div>

                  {/* Playback Controls Bar */}
                  <div className="flex justify-between items-center text-white">
                    <div className="flex items-center gap-3">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={togglePlay}
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} className="ml-0.5" />}
                      </motion.button>

                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={toggleMute}
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
                      </motion.button>

                      <span className="text-xs text-gray-300 font-mono ml-2">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={toggleFullscreen}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
                      aria-label="Toggle Fullscreen"
                    >
                      <FaExpand size={12} />
                    </motion.button>
                  </div>
                </div>
              ) : (
                <div className="py-4 text-center text-xs text-gray-400 bg-gray-900 flex items-center justify-center gap-2">
                  <div className="w-3.5 h-3.5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  <span>Buffering video presentation...</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Callout / Navigation Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          className="mt-28 bg-linear-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 md:p-14 text-white text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none" />

          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Interested in building something similar?
          </h2>
          <p className="text-blue-100 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Let's collaborate on your next healthcare platform, web application, or design system.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.button
              type="button"
              onClick={openModal}
              whileHover={{ scale: 1.04, y: -2, transition: SPRING_SMOOTH }}
              whileTap={{ scale: 0.96, transition: SPRING_BOUNCY }}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-7 py-3.5 rounded-full text-sm shadow-md transition-colors cursor-pointer"
            >
              Get in Touch
            </motion.button>

            <Link
              href="/projects"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-6 py-3.5 rounded-full text-sm backdrop-blur-sm transition-all cursor-pointer inline-flex items-center gap-2"
            >
              Explore Other Projects
              <MdOutlineArrowOutward className="text-base" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}