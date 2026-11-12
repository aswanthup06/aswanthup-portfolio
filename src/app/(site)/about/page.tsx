"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  MotionConfig,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  IoLogoReact,
  IoLogoJavascript,
} from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiFramer,
  SiOpenai,
  SiClaude,
  SiGooglegemini,
  SiSass,
} from "react-icons/si";
import { Sparkles } from "lucide-react";
import {
  FaLocationDot,
  FaBriefcase,

  FaGithub,
  FaLinkedinIn,
  FaRulerCombined,
  FaPuzzlePiece,
  FaScrewdriverWrench,
  FaPencil,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import { useContactModal } from "../../context/ContactModalContext";
import { DESIGN_WORK, FEATURED, LIVE_SITES } from "../../data/projects";
import { PREMIUM_EASE } from "../../lib/animations";

const EMAIL = "aswanthup06@gmail.com";
const RESUME = "/resume.pdf";

const LINKS = {
  github: "https://github.com/aswanthup06",
  linkedin: "https://www.linkedin.com/in/aswanthup/",
  whatsapp: "https://wa.me/917559068970",
};

/* -------------------------------------------------------------------------- */
/*  Motion (same easing/timing as the rest of the site)                       */
/* -------------------------------------------------------------------------- */

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

const hover = { y: -4, transition: { duration: 0.25 } };

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
} as const;

const card =
  "bg-surface-card border border-border-default rounded-xl transition-shadow duration-300 hover:shadow-xl";

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex flex-col items-center overflow-x-clip pb-8 md:pb-12 pt-28 md:pt-36 w-full">
        <div
        className="grid-bg absolute inset-x-0 top-0 h-[650px] -z-10 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 95% 80% at 50% 25%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 80% at 50% 25%, black 40%, transparent 95%)",
        }}
      />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Marquee />
          <Stats />
          <Story />
          <Principles />
          <Workbench />
          <BeyondCode />
          <Cta />
        </div>
      </div>
    </MotionConfig>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared heading                                                            */
/* -------------------------------------------------------------------------- */

function Heading({
  kicker,
  title,
  sub,
  center = false,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      variants={item}
      {...inView}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p className="text-sm font-bold text-primary">{kicker}</p>
      <h2 className="mt-2 text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-3 text-sm leading-relaxed text-text-body md:text-base">
          {sub}
        </p>
      )}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  1. Hero                                                                   */
/* -------------------------------------------------------------------------- */

function Hero() {
  const { openModal } = useContactModal();

  return (
    <section
      aria-label="Introduction"
      className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center lg:items-start lg:text-left"
      >
        <motion.div
          variants={item}
          className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-text-body md:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Open to work · Remote or on-site across India
        </motion.div>

        {/* h1 stays static so it never delays LCP */}
        <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-4xl lg:text-5xl xl:text-[56px]">
          Design thinking,
          <span className="mt-1.5 block text-brand-gradient">
            built for production.
          </span>
        </h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-lg text-sm leading-relaxed text-text-body sm:text-base"
        >
          I’m Aswanth, a UI Developer and Designer from Kozhikode, Kerala,
          with a BSc in Computer Science. I turn Figma design systems into
          fast, accessible React and Next.js applications—sweating spacing,
          states, and visual consistency.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          <button
            onClick={openModal}
            className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-all duration-300"
          >
            Get in Touch
            <MdOutlineArrowOutward className="text-base" />
          </button>

          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            download="Aswanth_UP_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-md border border-border-default bg-surface-card px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-300 hover:border-border-strong hover:bg-surface-muted"
          >
            <FaDownload className="text-xs text-text-muted transition-transform group-hover:-translate-y-0.5" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-muted lg:justify-start"
        >
          <li className="flex items-center gap-2">
            <FaLocationDot aria-hidden="true" className="text-primary" />
            Kozhikode, Kerala
          </li>
          <li className="flex items-center gap-2">
            <FaBriefcase aria-hidden="true" className="text-primary" />
            3+ years in UI
          </li>
        </motion.ul>
      </motion.div>

      <Portrait />
    </section>
  );
}

function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: PREMIUM_EASE }}
      className="relative mx-auto w-[260px] md:w-[320px]"
    >
      {/* offset outline */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-3xl border-2 border-primary/30"
      />

      {/* arch photo */}
      <div className="relative aspect-[4/5] rounded-t-[999px] rounded-b-3xl bg-brand-gradient p-[3px] shadow-xl">
        <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[22px] bg-surface-card">
          <Image
            src="/images/about/me.webp"
            alt="Aswanth UP"
            fill
            priority
            sizes="(min-width: 768px) 320px, 260px"
            className="object-cover"
          />
        </div>
      </div>

      {/* slow spinning dashed ring */}
      <motion.div
        aria-hidden="true"
        className="absolute -right-10 -top-8 h-28 w-28 rounded-full border-2 border-dashed border-primary/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <Sticker
        className="-left-6 top-16 md:-left-14"
        float={[0, -9, 0]}
        duration={5}
        delay={0.9}
      >
        <FaRulerCombined className="text-primary" /> UI Engineering
      </Sticker>

      <Sticker
        className="-right-4 top-[48%] md:-right-12"
        float={[0, 9, 0]}
        duration={6}
        delay={1.1}
      >
        <IoLogoReact className="text-sky-500" /> React · Next.js
      </Sticker>

      <Sticker
        className="-left-2 bottom-8 md:-left-10"
        float={[0, -7, 0]}
        duration={5.5}
        delay={1.3}
      >
        <SiFigma className="text-red-500" /> Figma
      </Sticker>
    </motion.div>
  );
}

function Sticker({
  children,
  className,
  float,
  duration,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  float: number[];
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: PREMIUM_EASE }}
    >
      <motion.div
        animate={{ y: float }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border-default bg-surface-card px-3 py-1.5 text-[11px] font-semibold text-text-primary shadow-lg shadow-black/5 md:text-xs"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function CursorIcon({ className = "text-xl" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      fillRule="evenodd"
      className={className}
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <title>Cursor</title>
      <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. Tools marquee                                                          */
/* -------------------------------------------------------------------------- */

const TOOLS = [
  { name: "JavaScript", Icon: IoLogoJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: IoLogoReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Sass / SCSS", Icon: SiSass },
  { name: "Figma", Icon: SiFigma },
  { name: "Cursor", Icon: CursorIcon },
  { name: "Claude", Icon: SiClaude },
  { name: "Antigravity", Icon: SiGooglegemini },
  { name: "ChatGPT", Icon: SiOpenai },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "Git", Icon: SiGit },
];

function Marquee() {
  const row = [...TOOLS, ...TOOLS];
  const fade =
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

  return (
    <div
      className="mt-24 overflow-hidden"
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

/* -------------------------------------------------------------------------- */
/*  3. Stats                                                                  */
/* -------------------------------------------------------------------------- */

const STATS = [
  { to: 3, suffix: "+", label: "Years building UI" },
  { to: FEATURED.length, suffix: "", label: "Product case studies" },
  { to: LIVE_SITES.length, suffix: "", label: "Live client websites" },
  { to: DESIGN_WORK.length, suffix: "", label: "Visual & icon systems" },
];

function Stats() {
  return (
    <motion.dl
      variants={container}
      {...inView}
      className="mt-16 grid grid-cols-2 gap-y-8 border-y border-border-default py-8 lg:grid-cols-4 lg:divide-x lg:divide-border-default"
    >
      {STATS.map((s) => (
        <motion.div
          key={s.label}
          variants={item}
          className="px-4 text-center lg:px-8 lg:text-left lg:first:pl-0"
        >
          <dt className="text-4xl font-black tracking-tight tabular-nums text-text-primary md:text-5xl">
            {s.to}
            {s.suffix}
          </dt>
          <dd className="mt-1 text-sm font-medium text-text-muted">
            {s.label}
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}

/* -------------------------------------------------------------------------- */
/*  4. Story / timeline (sticky heading, scroll-filled line)                  */
/* -------------------------------------------------------------------------- */

type Kind = "study" | "work";

type Chapter = {
  period: string;
  kind: Kind;
  title: string;
  org: string;
  place?: string;
  text: string;
  points?: string[];
  tags?: string[];
  links?: { label: string; href: string }[];
  now?: boolean;
  sub?: { period: string; title: string; place: string; text: string };
};

const KIND: Record<Kind, { label: string; chip: string; dot: string }> = {
  study: {
    label: "Study",
    chip: "bg-violet-50 text-violet-700",
    dot: "bg-violet-500",
  },
  work: { label: "Work", chip: "bg-primary-subtle text-primary", dot: "bg-primary" },
};

const CHAPTERS: Chapter[] = [
  {
    period: "2016 – 2019",
    kind: "study",
    title: "BSc Computer Science",
    org: "Hi-Tech Arts and Science College",
    place: "Kallachi, Kerala",
    text: "Completed my BSc in Computer Science, building academic projects that put practical skills next to the theory.",
  },
  {
    period: "Nov 2022 – Mar 2023",
    kind: "work",
    title: "UI/UX Design Intern",
    org: "Futura Labs",
    place: "Kozhikode, Kerala",
    text: "Started in UI/UX design and frontend fundamentals, including HTML5, CSS3 / SCSS basics, JavaScript, and Figma.",
    tags: ["HTML5", "CSS3 / SCSS", "JavaScript", "Figma"],
  },
  {
    period: "Jun 2023 – Jul 2026",
    kind: "work",
    title: "UI Developer",
    org: "Chaavie Solutions",
    place: "Kozhikode, Kerala",
    text: "Worked across UI/UX design, UI development, and design systems.",
    points: [
      "Built responsive UI and admin dashboards for healthcare and enterprise products",
      "Mentored junior developers",
      "Built dashboards, SaaS platforms and reusable component systems for web and mobile",
    ],
    tags: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind", "Figma"],
    links: [
      { label: "Happy ERP", href: "/projects/happy-erp" },
      { label: "Doctor One", href: "/projects/doctor-one" },
    ],
    sub: {
      period: "Jan – Aug 2025",
      title: "UI Developer (Contract via Chaavie Solutions) · 6solve IT Services",
      place: "Tirunelveli, Tamil Nadu",
      text: "Collaborated on Next.js projects, improving performance and scalability while strengthening modern UI architecture and component systems.",
    },
  },
];

function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      aria-labelledby="story-heading"
      className="mt-28 grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <motion.div variants={item} {...inView}>
          <p className="text-sm font-bold text-primary">My Journey</p>
          <h2
            id="story-heading"
            className="mt-2 text-3xl font-semibold leading-tight text-text-primary md:text-4xl"
          >
            From fundamentals{" "}
            <span className="font-medium text-text-muted">to production UI</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-body">
            BSc Computer Science graduate building component systems, responsive
            web apps, and Figma-to-code interfaces.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {(Object.keys(KIND) as Kind[]).map((k) => (
              <li
                key={k}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${KIND[k].chip}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${KIND[k].dot}`} />
                {KIND[k].label}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div ref={ref} className="relative pl-10">
        {/* track + scroll-filled line */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-3 top-2 w-0.5 bg-border-default"
        >
          <motion.div
            style={{ scaleY }}
            className="h-full w-full origin-top bg-gradient-to-b from-primary to-primary-secondary"
          />
        </div>

        <ol className="space-y-12">
          {CHAPTERS.map((c) => (
            <motion.li
              key={c.title}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative"
            >
              {/* dot */}
              <span
                aria-hidden="true"
                className="absolute -left-9 top-1 flex h-4 w-4 items-center justify-center"
              >
                {c.now && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
                )}
                <span
                  className={`relative h-4 w-4 rounded-full border-4 border-surface-card shadow-sm ring-2 ring-primary/20 ${KIND[c.kind].dot}`}
                />
              </span>

              <article>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-medium text-text-muted">
                    {c.period}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${KIND[c.kind].chip}`}
                  >
                    {KIND[c.kind].label}
                  </span>
                  {c.now && (
                    <span className="rounded-full bg-green-50 px-2 py-0.5 text-[11px] font-medium text-green-600">
                      Now
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-xl font-bold text-text-primary">
                  {c.title}
                </h3>
                <p className="text-sm font-medium text-text-muted">
                  {c.org}
                  {c.place ? ` · ${c.place}` : ""}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-text-body">
                  {c.text}
                </p>

                {c.points && (
                  <ul className="mt-3 space-y-1.5">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2 text-sm leading-relaxed text-text-body"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                {c.sub && (
                  <div className="mt-4 rounded-lg border border-dashed border-border-default bg-surface-muted/60 p-4">
                    <p className="text-xs font-semibold text-primary">
                      {c.sub.period} · {c.sub.place}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-text-primary">
                      {c.sub.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-body">
                      {c.sub.text}
                    </p>
                  </div>
                )}

                {(c.tags || c.links) && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {c.tags?.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-body"
                      >
                        {t}
                      </span>
                    ))}
                    {c.links?.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="inline-flex items-center gap-1 rounded-md border border-border-default px-2.5 py-1 text-xs font-semibold text-primary transition-colors hover:bg-surface-muted"
                      >
                        {l.label}
                        <MdOutlineArrowOutward />
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  5. Principles (how UI engineering decisions are made)                     */
/* -------------------------------------------------------------------------- */

const PRINCIPLES = [
  {
    Icon: FaRulerCombined,
    tag: "Architecture",
    title: "Plan before pixels",
    text: "Layout, spacing and tokens get settled in Figma with Auto Layout, so the build is one clean pass instead of rework.",
  },
  {
    Icon: FaPuzzlePiece,
    tag: "Polish & A11y",
    title: "Details that hold it together",
    text: "Responsive behavior, states and accessibility are invisible when they work, and that’s exactly the point.",
  },
  {
    Icon: FaScrewdriverWrench,
    tag: "Fundamentals",
    title: "Depth over buzzwords",
    text: "JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS, and Figma Dev Mode, used daily and understood well enough to bend when needed.",
  },
];

function Principles() {
  return (
    <section aria-labelledby="principles-heading" className="mt-28">
      <Heading
        kicker="How I work"
        center
        title={
          <span id="principles-heading">
            Engineering principles,{" "}
            <span className="font-medium text-text-muted">applied to UI</span>
          </span>
        }
      />

      <motion.div
        variants={container}
        {...inView}
        className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8"
      >
        {PRINCIPLES.map(({ Icon, tag, title, text }, i) => (
          <motion.article
            key={title}
            variants={item}
            className="group border-t-2 border-border-default pt-6 transition-colors duration-300 hover:border-primary"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-primary">
                0{i + 1}
              </span>
              <Icon
                aria-hidden="true"
                className="text-xl text-text-muted transition-colors group-hover:text-primary"
              />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
              {tag}
            </p>
            <h3 className="mt-1 text-lg font-bold text-text-primary">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-body">
              {text}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  6. Tech Stack & AI Workflow                                               */
/* -------------------------------------------------------------------------- */

interface ToolkitItem {
  name: string;
  role: string;
  Icon: React.ComponentType<{ className?: string }>;
  pill?: string;
  textColor?: string;
}

interface ToolkitGroup {
  kicker: string;
  title: string;
  desc: string;
  highlight?: boolean;
  items: ToolkitItem[];
}

const TOOLKIT_GROUPS: ToolkitGroup[] = [
  {
    kicker: "Core Stack",
    title: "UI Development",
    desc: "Production-tested technologies for clean component architecture, responsive layouts, and interactive UI systems.",
    items: [
      { name: "JavaScript (ES6+)", role: "Modern DOM, Async & Web APIs", Icon: IoLogoJavascript },
      { name: "TypeScript", role: "Type Safety & Reliability", Icon: SiTypescript },
      { name: "React", role: "Component Architecture", Icon: IoLogoReact },
      { name: "Next.js", role: "SSR & App Architecture", Icon: SiNextdotjs },
      { name: "Tailwind CSS", role: "Design Tokens & Utility UI", Icon: SiTailwindcss },
      { name: "SCSS / CSS3", role: "Modular styling (Working knowledge)", Icon: SiSass },
      { name: "Framer Motion", role: "Micro-interactions & Physics", Icon: SiFramer },
      { name: "Git", role: "Version Control & Branching", Icon: SiGit },
    ],
  },
  {
    kicker: "Visual & Systems",
    title: "Design & Systems",
    desc: "Translating concepts into design tokens, accessible components, and polished prototypes.",
    items: [
      { name: "Figma", role: "Dev Mode & Auto Layout", Icon: SiFigma },
      { name: "Design Tokens", role: "Spacing, Color & Typography", Icon: FaRulerCombined },
      { name: "Adobe Illustrator", role: "Vector Assets & Icons", Icon: FaPencil },
      { name: "Component Systems", role: "Scalable atomic patterns", Icon: FaPuzzlePiece },
    ],
  },
  {
    kicker: "Velocity & Multipliers",
    title: "AI-Augmented Engineering",
    desc: "Modern AI tooling integrated into daily development for faster prototyping, component refactoring, and edge-case checks.",
    highlight: true,
    items: [
      {
        name: "Cursor",
        role: "AI-native code editor & completions",
        Icon: CursorIcon,
        pill: "AI Code Editor",
        textColor: "text-blue-600",
      },
      {
        name: "Claude",
        role: "Complex logic & architectural reasoning",
        Icon: SiClaude,
        pill: "Architecture",
        textColor: "text-amber-600",
      },
      {
        name: "Antigravity",
        role: "Agentic coding & multi-file refactoring",
        Icon: SiGooglegemini,
        pill: "Agentic Assistant",
        textColor: "text-violet-600",
      },
      {
        name: "ChatGPT",
        role: "Ideation & rapid documentation",
        Icon: SiOpenai,
        pill: "Ideation",
        textColor: "text-emerald-600",
      },
    ],
  },
];

function Workbench() {
  return (
    <section aria-labelledby="workbench-heading" className="mt-28">
      <Heading
        kicker="Tech Stack"
        center
        title={
          <span id="workbench-heading">
            Tools &amp; modern{" "}
            <span className="font-medium text-text-muted">AI workflow</span>
          </span>
        }
        sub="Production-tested frontend technologies and modern AI tooling used daily to ship clean, maintainable interfaces."
      />

      <motion.div
        variants={container}
        {...inView}
        className="mt-12 grid gap-6 lg:grid-cols-3"
      >
        {TOOLKIT_GROUPS.map((group) => (
          <motion.div
            key={group.title}
            variants={item}
            whileHover={hover}
            className={`${card} relative flex flex-col justify-between p-6 ${group.highlight ? "!border-2 !border-primary shadow-sm" : ""
              }`}
          >
            {group.highlight && (
              <div className="absolute -top-3 right-6 font-light inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1 text-[11px] text-white shadow-sm">
                <Sparkles className="h-3 w-3 text-white font-light" />
                Productivity Multiplier
              </div>
            )}

            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {group.kicker}
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-text-primary">
                {group.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-body">
                {group.desc}
              </p>

              <ul className="mt-6 divide-y divide-border-subtle/70">
                {group.items.map(({ name, role, Icon, pill, textColor }) => (
                  <li
                    key={name}
                    className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center text-text-secondary">
                        <Icon className="text-base" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-text-primary">
                          {name}
                        </p>
                        <p className="truncate text-[11px] text-text-muted">
                          {role}
                        </p>
                      </div>
                    </div>

                    {pill && (
                      <span className={`shrink-0 text-[11px] font-semibold ${textColor || "text-text-muted"}`}>
                        {pill}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {group.highlight && (
              <p className="mt-6 border-t border-border-subtle pt-4 text-[11px] italic leading-relaxed text-text-muted">
                “I treat AI as a high-precision power tool: it doesn’t replace foundational knowledge, but it multiplies speed and shortens the loop from idea to production.”
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  7. Beyond Code (brief early visual roots, 2013–2016)                      */
/* -------------------------------------------------------------------------- */

const EARLY_AWARDS = [
  {
    title: "5× State-level A Grade",
    detail: "Wood Carving · Kerala State School Sasthrolsavam",
  },
  {
    title: "5 District Prizes",
    detail: "4× First Prize · 1× Second Prize",
  },
  {
    title: "Sub-district Winner",
    detail: "Pencil Drawing & Painting",
  },
];

function BeyondCode() {
  return (
    <motion.section
      variants={item}
      {...inView}
      aria-labelledby="beyond-code-heading"
      className="mt-20"
    >
      <div className="rounded-2xl border border-border-default bg-surface-subtle p-6 sm:p-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <span>Beyond Code</span>
            <span aria-hidden="true" className="text-border-strong">·</span>
            <span className="text-text-muted font-medium">2013 – 2016</span>
          </div>

          <h2
            id="beyond-code-heading"
            className="mt-2 text-lg sm:text-xl font-bold text-text-primary"
          >
            Early visual &amp; drawing background
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-text-body">
            Before moving into software, I spent my school years competing in
            fine arts and wood carving—building the eye for proportion and
            detail I bring to UI design today.
          </p>
        </div>

        <div className="mt-5 pt-5 border-t border-border-default grid gap-3 sm:grid-cols-3">
          {EARLY_AWARDS.map((award) => (
            <div
              key={award.title}
              className="rounded-xl border border-border-default bg-surface-card p-4"
            >
              <p className="text-sm font-bold text-text-primary">
                {award.title}
              </p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                {award.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*  8. Closing CTA (light)                                                    */
/* -------------------------------------------------------------------------- */

const CONTACTS = [
  {
    href: `mailto:${EMAIL}`,
    label: "Email",
    handle: EMAIL,
    Icon: FaEnvelope,
    external: false,
  },
  {
    href: LINKS.github,
    label: "GitHub",
    handle: "github.com/aswanthup06",
    Icon: FaGithub,
    external: true,
  },
  {
    href: LINKS.linkedin,
    label: "LinkedIn",
    handle: "linkedin.com/in/aswanthup",
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    href: LINKS.whatsapp,
    label: "WhatsApp",
    handle: "Message me directly",
    Icon: IoLogoWhatsapp,
    external: true,
  },
];

function Cta() {
  const { openModal } = useContactModal();

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
          <p className="text-sm font-bold text-primary">
            Let’s work together
          </p>

          <h2
            id="cta-heading"
            className="mt-2 text-3xl font-bold leading-tight text-text-primary md:text-5xl"
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
              className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-all duration-300"
            >
              Get in Touch
              <MdOutlineArrowOutward className="text-base" />
            </button>

            <a
              href={RESUME}
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
        <motion.ul variants={container} {...inView} className="border-t border-border-default">
          {CONTACTS.map(({ href, label, handle, Icon, external }) => (
            <motion.li key={label} variants={item}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 border-b border-border-default py-4 transition-colors duration-500"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-text-body duration-300 transition-colors group-hover:text-primary">
                  <Icon aria-hidden="true" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-text-primary transition-colors duration-300 group-hover:text-primary">
                    {label}
                  </span>
                  <span className="block truncate text-xs text-text-muted transition-colors duration-300 group-hover:text-primary">
                    {handle}
                  </span>
                </span>

                <MdOutlineArrowOutward
                  aria-hidden="true"
                  className="shrink-0 text-lg text-text-muted transition-colors group-hover:text-primary"
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}