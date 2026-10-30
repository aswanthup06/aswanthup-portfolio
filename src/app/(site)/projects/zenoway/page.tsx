import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Search,
  FileText,
  Send,
  Smartphone,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Compass,
} from "lucide-react";
import SmoothScroll from "./SmoothScroll";

export const metadata: Metadata = {
  title: "Zenoway — Career Platform Product Overview",
  description:
    "Find your next opportunity without the extra steps. A product case study on Zenoway's minimal, direct career platform.",
};

export default function ZenowayCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-[#17251F] selection:bg-[#EDF7F1] selection:text-[#164E3B]">
      <SmoothScroll />

      {/* ---------------- SECTION A: SPLIT HERO WITH SOFT MINT SURFACE & LIVE PREVIEW ---------------- */}
      <section className="pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-[#EDF7F1] via-[#F3F8F5] to-white border-b border-[#E2EBE5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 md:mb-12">
            <ol className="flex items-center gap-2 text-xs md:text-sm text-[#52605B]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#087F50] transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#C4D5CC]">
                /
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#087F50] transition-colors font-medium"
                >
                  Projects
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#C4D5CC]">
                /
              </li>
              <li className="font-semibold text-[#17251F] truncate">
                Zenoway
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#087F50]">
                <span className="w-2 h-2 rounded-full bg-[#0FA968] animate-pulse" />
                <span>CAREER PLATFORM · PRODUCT OVERVIEW</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-semibold tracking-tight text-[#17251F] leading-[1.12]">
                Find your next opportunity.{" "}
                <span className="text-[#087F50]">Without the extra steps.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#52605B] leading-relaxed max-w-xl">
                Zenoway makes discovering jobs straightforward. Explore opportunities,
                understand the role, and connect with employers through a simple, direct
                application experience.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="https://www.zenoway.online/jobs"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#087F50] hover:bg-[#0FA968] transition-colors rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#087F50]/40"
                >
                  Explore jobs
                  <ArrowRight size={16} />
                </a>

                <a
                  href="https://www.zenoway.online/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#17251F] hover:text-[#087F50] bg-white border border-[#D5E2DA] hover:border-[#087F50]/50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087F50]/20 shadow-2xs"
                >
                  Visit Zenoway
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Project Metadata Strip */}
              <div className="pt-6 border-t border-[#D5E2DA] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-[#8A9590] uppercase tracking-wider block mb-1">
                    Role
                  </span>
                  <span className="font-medium text-[#17251F]">
                    Product &amp; UI Design
                  </span>
                </div>
                <div>
                  <span className="text-[#8A9590] uppercase tracking-wider block mb-1">
                    Platform
                  </span>
                  <span className="font-medium text-[#17251F]">
                    Web Application
                  </span>
                </div>
                <div>
                  <span className="text-[#8A9590] uppercase tracking-wider block mb-1">
                    Access
                  </span>
                  <span className="font-medium text-[#087F50]">
                    Free to Use
                  </span>
                </div>
                <div>
                  <span className="text-[#8A9590] uppercase tracking-wider block mb-1">
                    Status
                  </span>
                  <span className="font-medium text-[#17251F]">
                    Live in Production
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Device-Grade Video Showcase */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Subtle emerald ambient glow */}
                <div className="absolute -inset-3 bg-[#0FA968]/15 rounded-2xl blur-xl -z-10 pointer-events-none" />

                <div className="rounded-2xl border border-[#D5E2DA] bg-white shadow-[0_20px_50px_rgba(22,78,59,0.08)] overflow-hidden">
                  {/* Clean browser preview header */}
                  <div className="px-4 py-3 border-b border-[#E5EBE7] bg-[#F7FAF8] flex items-center justify-between text-xs text-[#52605B]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0FA968]" />
                      <span className="font-medium text-[#17251F]">zenoway.online</span>
                    </div>

                  </div>

                  {/* 100% full opacity, vibrant video */}
                  <div className="relative aspect-[16/10] w-full bg-[#17251F]/5 overflow-hidden">
                    <video
                      className="w-full h-full object-cover block motion-reduce:hidden"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-label="Zenoway live platform preview demonstrating direct job discovery"
                    >
                      <source src="/images/projects/zenoway/hiring.mp4" type="video/mp4" />
                      <source src="/images/projects/zenoway/zenoway.mp4" type="video/mp4" />
                    </video>

                    {/* Static fallback for users with reduced motion */}
                    <div className="hidden motion-reduce:block relative w-full h-full">
                      <Image
                        src="/images/projects/zenoway/zenoway1.webp"
                        alt="Zenoway platform job discovery interface"
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 px-1 flex items-center justify-between text-xs text-[#6B7973]">
                  <span>Direct job discovery &amp; apply flow</span>
                  <span className="text-[#087F50] font-medium">Verified UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION C: THE PROBLEM ---------------- */}
      <section className="py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#087F50] mb-3">
              THE CHALLENGE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#17251F] mb-4">
              Job hunting should feel simpler.
            </h2>
            <p className="text-base md:text-lg text-[#52605B] leading-relaxed">
              Applying for a job is often weighed down by unnecessary platform mechanics
              that add friction before candidates can even communicate their interest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-[#E5E7EB]">
            {/* Problem 01 */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-medium text-[#087F50]">
                01
              </div>
              <h3 className="text-lg font-semibold text-[#17251F]">
                Too many steps
              </h3>
              <p className="text-sm md:text-base text-[#52605B] leading-relaxed">
                Unnecessary registration, mandatory profile creation, and repetitive forms
                can slow down job seekers when their momentum and motivation are highest.
              </p>
            </div>

            {/* Problem 02 */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-medium text-[#087F50]">
                02
              </div>
              <h3 className="text-lg font-semibold text-[#17251F]">
                Unclear next steps
              </h3>
              <p className="text-sm md:text-base text-[#52605B] leading-relaxed">
                Candidates should clearly understand how to apply and what information is
                required before they commit their time to reviewing an opportunity.
              </p>
            </div>

            {/* Problem 03 */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-medium text-[#087F50]">
                03
              </div>
              <h3 className="text-lg font-semibold text-[#17251F]">
                Disconnected communication
              </h3>
              <p className="text-sm md:text-base text-[#52605B] leading-relaxed">
                Candidates benefit from a clear path to the employer or verified application
                destination rather than sending resumes into opaque platform silos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION D: THE ZENOWAY APPROACH ---------------- */}
      <section className="py-16 md:py-24 bg-[#FAFCFA] border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#087F50] mb-3">
              THE APPROACH
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#17251F] mb-4">
              Less friction. More clarity.
            </h2>
            <p className="text-base md:text-lg text-[#52605B] leading-relaxed">
              Zenoway focuses on the essentials: finding relevant opportunities,
              understanding each role, and knowing exactly how to apply.
            </p>
          </div>

          {/* Clean 3-step horizontal flow on desktop, stacked on mobile */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 01 */}
            <div className="relative bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#EDF7F1] text-[#164E3B] border border-[#0FA968]/20">
                  Step 01
                </span>
                <Compass size={18} className="text-[#087F50]" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-[#17251F] mb-2">
                Discover
              </h3>
              <p className="text-sm md:text-base text-[#52605B] leading-relaxed">
                Explore job opportunities by role, category, and location without
                requiring an account or login.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#EDF7F1] text-[#164E3B] border border-[#0FA968]/20">
                  Step 02
                </span>
                <FileText size={18} className="text-[#087F50]" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-[#17251F] mb-2">
                Understand
              </h3>
              <p className="text-sm md:text-base text-[#52605B] leading-relaxed">
                Review the responsibilities, requirements, company details, and location
                in a clean, readable layout.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#EDF7F1] text-[#164E3B] border border-[#0FA968]/20">
                  Step 03
                </span>
                <Send size={18} className="text-[#087F50]" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-[#17251F] mb-2">
                Apply
              </h3>
              <p className="text-sm md:text-base text-[#52605B] leading-relaxed">
                Follow the available application instructions, whether through direct email
                or an external application link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION E: CORE PRINCIPLES ---------------- */}
      <section className="py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#087F50] mb-3">
              FOUNDATIONAL DESIGN
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#17251F] mb-4">
              Designed around the job seeker.
            </h2>
            <p className="text-base md:text-lg text-[#52605B] leading-relaxed">
              Every interaction is considered to keep the platform fast, open, and
              respectful of the candidate&rsquo;s time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Principle 01 */}
            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-white space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#EDF7F1] text-[#087F50] flex items-center justify-center">
                <Search size={18} strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-[#17251F]">
                Simple discovery
              </h3>
              <p className="text-sm text-[#52605B] leading-relaxed">
                Find opportunities without unnecessary complexity or mandatory login barriers.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-white space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#EDF7F1] text-[#087F50] flex items-center justify-center">
                <FileText size={18} strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-[#17251F]">
                Clear information
              </h3>
              <p className="text-sm text-[#52605B] leading-relaxed">
                Understand the role, requirements, location, and application method upfront.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-white space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#EDF7F1] text-[#087F50] flex items-center justify-center">
                <Send size={18} strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-[#17251F]">
                Direct application paths
              </h3>
              <p className="text-sm text-[#52605B] leading-relaxed">
                Reach the employer through the application method provided directly in the job listing.
              </p>
            </div>

            {/* Principle 04 */}
            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-white space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#EDF7F1] text-[#087F50] flex items-center justify-center">
                <Smartphone size={18} strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-[#17251F]">
                Thoughtful design
              </h3>
              <p className="text-sm text-[#52605B] leading-relaxed">
                A responsive, accessible interface that remains fast and legible across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION F: THE PRODUCT EXPERIENCE ---------------- */}
      <section className="py-16 md:py-24 bg-[#FAFCFA] border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#087F50] mb-3">
              WALKTHROUGH
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#17251F] mb-4">
              A closer look at Zenoway.
            </h2>
            <p className="text-base md:text-lg text-[#52605B] leading-relaxed">
              Explore the real candidate interface through each stage of discovering,
              evaluating, and applying for open positions.
            </p>
          </div>

          <div className="space-y-16">
            {/* Item 1: Job Discovery */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#087F50] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0FA968]" />
                  Experience 01
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#17251F]">
                  Job discovery &mdash; browsing and exploring open positions
                </h3>
                <p className="text-sm md:text-base text-[#52605B] leading-relaxed">
                  A focused directory displaying active opportunities with quick role categorization.
                  Job seekers can instantly scan requirements, locations, and company names without
                  facing forced registration prompts.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-[#52605B]">
                  <CheckCircle2 size={15} className="text-[#087F50]" />
                  <span>Instant role discovery with zero login friction</span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <figure className="rounded-xl border border-[#E5E7EB] bg-white overflow-hidden shadow-xs">
                  <div className="relative aspect-[16/10] w-full bg-[#EDF7F1]/20">
                    <Image
                      src="/images/projects/zenoway/zenoway1.webp"
                      alt="Zenoway job discovery interface displaying open positions and filtering options"
                      fill
                      sizes="(max-width: 1024px) 100vw, 680px"
                      className="object-cover"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                  <figcaption className="px-4 py-3 border-t border-[#E5E7EB] bg-[#F7FAF8] text-xs text-[#52605B] flex justify-between items-center">
                    <span>Job discovery feed</span>
                    <span className="text-[#8A9590]">zenoway.online/jobs</span>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Item 2: Job Details */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <figure className="rounded-xl border border-[#E5E7EB] bg-white overflow-hidden shadow-xs">
                  <div className="relative aspect-[16/10] w-full bg-[#EDF7F1]/20">
                    <Image
                      src="/images/projects/zenoway/zenoway2.webp"
                      alt="Zenoway job details view showing comprehensive role breakdown and requirements"
                      fill
                      sizes="(max-width: 1024px) 100vw, 680px"
                      className="object-cover"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                  <figcaption className="px-4 py-3 border-t border-[#E5E7EB] bg-[#F7FAF8] text-xs text-[#52605B] flex justify-between items-center">
                    <span>Job detail overview</span>
                    <span className="text-[#8A9590]">Role context &amp; details</span>
                  </figcaption>
                </figure>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#087F50] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0FA968]" />
                  Experience 02
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#17251F]">
                  Job details &mdash; understanding the opportunity and its requirements
                </h3>
                <p className="text-sm md:text-base text-[#52605B] leading-relaxed">
                  A dedicated role breakdown presenting responsibilities, expected qualifications,
                  and company background in clean, editorial typography so candidates can assess fit quickly.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-[#52605B]">
                  <CheckCircle2 size={15} className="text-[#087F50]" />
                  <span>Structured role specs with explicit qualification outlines</span>
                </div>
              </div>
            </div>

            {/* Item 3: Application Experience */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#087F50] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0FA968]" />
                  Experience 03
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#17251F]">
                  Application experience &mdash; finding the correct way to apply
                </h3>
                <p className="text-sm md:text-base text-[#52605B] leading-relaxed">
                  Clear, verified application guidance. Whether sending an email directly
                  to the hiring team or proceeding to an official application link, candidates
                  always know the exact destination.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-[#52605B]">
                  <CheckCircle2 size={15} className="text-[#087F50]" />
                  <span>Direct employer outreach with zero intermediary delays</span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <figure className="rounded-xl border border-[#E5E7EB] bg-white overflow-hidden shadow-xs">
                  <div className="relative aspect-[16/10] w-full bg-[#EDF7F1]/20">
                    <Image
                      src="/images/projects/zenoway/zenoway3.webp"
                      alt="Zenoway application experience highlighting direct contact with hiring teams"
                      fill
                      sizes="(max-width: 1024px) 100vw, 680px"
                      className="object-cover"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                  <figcaption className="px-4 py-3 border-t border-[#E5E7EB] bg-[#F7FAF8] text-xs text-[#52605B] flex justify-between items-center">
                    <span>Direct application action</span>
                    <span className="text-[#8A9590]">Direct HR contact &amp; link</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION G: ADMIN PORTAL ---------------- */}
      <section className="py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#087F50] mb-3">
              ADMIN PORTAL
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#17251F] mb-4">
              Streamlined platform management &amp; control.
            </h2>
            <p className="text-base md:text-lg text-[#52605B] leading-relaxed">
              A comprehensive administrative suite empowering administrators to monitor platform activity, manage all job listings, and publish new openings efficiently.
            </p>
          </div>

          {/* Real admin portal screenshots */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Screen 1: zenad1.webp (1. Overview) */}
            <figure className="rounded-xl border border-[#E5E7EB] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] w-full bg-[#EDF7F1]/20">
                <Image
                  src="/images/projects/zenoway/zenad1.webp"
                  alt="Zenoway Admin Portal Dashboard Overview"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4 bg-white border-t border-[#E5E7EB]">
                <h4 className="text-sm font-semibold text-[#17251F] mb-1">
                  1. Overview
                </h4>
                <p className="text-xs text-[#52605B] leading-relaxed">
                  A high-level dashboard displaying total active jobs, recent postings, and quick action shortcuts.
                </p>
              </figcaption>
            </figure>

            {/* Screen 2: zenad2.webp (2. All Jobs and Management) */}
            <figure className="rounded-xl border border-[#E5E7EB] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] w-full bg-[#EDF7F1]/20">
                <Image
                  src="/images/projects/zenoway/zenad2.webp"
                  alt="Zenoway Admin Portal All Job and Management Listings"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4 bg-white border-t border-[#E5E7EB]">
                <h4 className="text-sm font-semibold text-[#17251F] mb-1">
                  2. All Jobs &amp; Management
                </h4>
                <p className="text-xs text-[#52605B] leading-relaxed">
                  Centralized table to oversee all active postings, inspect view counts, and perform instant edit or delete operations.
                </p>
              </figcaption>
            </figure>

            {/* Screen 3: zenad3.webp (3. Add Job) */}
            <figure className="rounded-xl border border-[#E5E7EB] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] w-full bg-[#EDF7F1]/20">
                <Image
                  src="/images/projects/zenoway/zenad3.webp"
                  alt="Zenoway Admin Portal Add New Job Form"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4 bg-white border-t border-[#E5E7EB]">
                <h4 className="text-sm font-semibold text-[#17251F] mb-1">
                  3. Add Job
                </h4>
                <p className="text-xs text-[#52605B] leading-relaxed">
                  Structured publishing form to input role titles, company details, salary ranges, experience, and custom application links.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION H: BEHIND THE PLATFORM ---------------- */}
      <section className="py-16 md:py-24 bg-[#FAFCFA] border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#087F50] mb-3">
              ENGINEERING &amp; DESIGN
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#17251F] mb-4">
              Built with purpose.
            </h2>
            <p className="text-base md:text-lg text-[#52605B] leading-relaxed">
              Zenoway was architected from the ground up to prioritize clarity,
              accessibility, and reliable job discovery across all modern browsers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-white">
              <div className="flex items-center gap-2.5 mb-3 text-[#17251F] font-semibold text-base">
                <Layers size={18} className="text-[#087F50]" />
                <span>Clear information architecture</span>
              </div>
              <p className="text-sm text-[#52605B] leading-relaxed">
                Structured content hierarchies that emphasize immediate job scanning,
                clear location tags, and transparent application steps.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-white">
              <div className="flex items-center gap-2.5 mb-3 text-[#17251F] font-semibold text-base">
                <Smartphone size={18} className="text-[#087F50]" />
                <span>Responsive layouts</span>
              </div>
              <p className="text-sm text-[#52605B] leading-relaxed">
                Tailored layout grids designed for comfortable scanning on mobile
                screens, tablets, and wide desktop displays.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-white">
              <div className="flex items-center gap-2.5 mb-3 text-[#17251F] font-semibold text-base">
                <ShieldCheck size={18} className="text-[#087F50]" />
                <span>Accessible interactions</span>
              </div>
              <p className="text-sm text-[#52605B] leading-relaxed">
                Semantic HTML landmarks, strong contrast ratios, visible keyboard focus
                indicators, and reduced-motion support.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-white">
              <div className="flex items-center gap-2.5 mb-3 text-[#17251F] font-semibold text-base">
                <span className="w-4 h-4 rounded-full bg-[#087F50] inline-block" />
                <span>Consistent visual language</span>
              </div>
              <p className="text-sm text-[#52605B] leading-relaxed">
                A restrained emerald palette paired with crisp white surfaces and
                subtle borders, avoiding visual distraction.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E5E7EB] bg-white sm:col-span-2">
              <div className="flex items-center gap-2.5 mb-3 text-[#17251F] font-semibold text-base">
                <CheckCircle2 size={18} className="text-[#087F50]" />
                <span>Reliable job discovery &amp; detail pages</span>
              </div>
              <p className="text-sm text-[#52605B] leading-relaxed">
                Built with modern Next.js App Router, TypeScript, and Tailwind CSS.
                Every job post provides candidates with an exact application route, connecting
                them directly to hiring personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION I: CLOSING CTA ---------------- */}
      <section className="pt-14 pb-8 md:pt-18 md:pb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-2xl border border-[#0FA968]/20 bg-[#EDF7F1]/40 p-8 sm:p-12 md:p-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#087F50] uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0FA968]" />
              GET STARTED
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#17251F] mb-4">
              Your next opportunity starts with a search.
            </h2>

            <p className="text-base md:text-lg text-[#52605B] max-w-xl mx-auto mb-8 leading-relaxed">
              Explore opportunities on Zenoway and take the next step in your career.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.zenoway.online/jobs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#087F50] hover:bg-[#0FA968] transition-colors rounded-lg shadow-xs focus:outline-none focus:ring-2 focus:ring-[#087F50]/40"
              >
                Explore jobs
                <ArrowRight size={16} />
              </a>

              <a
                href="https://www.zenoway.online/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#17251F] hover:text-[#087F50] bg-white border border-[#E5E7EB] hover:border-[#087F50]/40 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087F50]/20"
              >
                Visit Zenoway
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
