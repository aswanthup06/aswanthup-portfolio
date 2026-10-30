"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  MotionConfig,
  animate,
  useInView,
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
} from "react-icons/si";
import { Sparkles } from "lucide-react";
import {
  FaHammer,
  FaLocationDot,
  FaBriefcase,

  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaRulerCombined,
  FaPuzzlePiece,
  FaScrewdriverWrench,
  FaQuoteLeft,
  FaPencil,
  FaEnvelope,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import { useContactModal } from "../../context/ContactModalContext";
import { PREMIUM_EASE } from "../../lib/animations";

/* -------------------------------------------------------------------------- */
/*  ⚠ CONFIRM BEFORE DEPLOYING                                                */
/*  Placeholders / assumptions in this file:                                  */
/*   - RESUME path (add the file to /public or change the path)               */
/*   - EMAIL (public on your site, make sure you want that)                   */
/*   - Role titles on the timeline (Futura Labs, Chaavie, 6solve)             */
/*   - Which projects link from the Chaavie entry                             */
/*   - Principles copy (written to fit your craft story)                      */
/* -------------------------------------------------------------------------- */

const EMAIL = "aswanthup06@gmail.com";
// const RESUME = "/resume.pdf";

const LINKS = {
  github: "https://github.com/aswanthup06",
  linkedin: "https://www.linkedin.com/in/aswanthup/",
  behance: "https://www.behance.net/ASWANTHUP",
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
      <div className="relative flex flex-col items-center overflow-x-clip pb-8 md:pb-12 pt-32 md:pt-36 w-full">
        <div className="grid-bg absolute inset-0 -z-10" />

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Marquee />
          <Stats />
          <Story />
          <Principles />
          <Workbench />
          <Craft />
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
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Open to work · Remote or relocating in India
        </motion.div>

        {/* h1 stays static so it never delays LCP */}
        <h1 className="text-4xl font-bold leading-[1.1] text-text-primary md:text-5xl lg:text-6xl">
          From chisels
          <span className="block bg-gradient-to-r from-blue-600 via-primary to-cyan-500 bg-clip-text text-transparent">
            to components.
          </span>
        </h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-sm leading-relaxed text-text-body md:text-lg"
        >
          I’m Aswanth, a UI Developer and Designer from Kozhikode, Kerala. I
          spent years shaping wood by hand before I started shaping
          interfaces, and I still build the same way: measure first, join
          cleanly, and finish the details nobody asks about.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          <button
            onClick={openModal}
            className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium shadow-md shadow-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Get in Touch
            <MdOutlineArrowOutward className="text-base" />
          </button>

          {/* <a
            href={RESUME}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border-default bg-white px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted"
          >
            <FaDownload className="text-xs" />
            Résumé
          </a> */}
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
      <div className="relative aspect-[4/5] rounded-t-[999px] rounded-b-3xl bg-gradient-to-br from-primary to-cyan-400 p-[3px] shadow-xl">
        <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[22px] bg-white">
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
        <FaHammer className="text-amber-500" /> Ex-carpenter
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
        className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border-default bg-white px-3 py-1.5 text-[11px] font-semibold text-text-primary shadow-lg shadow-black/5 md:text-xs"
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
  { name: "React", Icon: IoLogoReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Cursor", Icon: CursorIcon },
  { name: "Claude", Icon: SiClaude },
  { name: "Figma", Icon: SiFigma },
  { name: "Antigravity", Icon: SiGooglegemini },
  { name: "ChatGPT", Icon: SiOpenai },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "Git", Icon: SiGit },
  { name: "JavaScript", Icon: IoLogoJavascript },
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

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, margin: "-40px" });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!seen) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: PREMIUM_EASE,
      onUpdate: (x) => setV(Math.round(x)),
    });
    return () => controls.stop();
  }, [seen, to]);

  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

const STATS = [
  { to: 3, suffix: "+", label: "Years building UI" },
  { to: 600, suffix: "+", label: "Screens developed" },
  { to: 4, suffix: "", label: "Case studies" },
  { to: 5, suffix: "×", label: "State-level A grade" },
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
          <dt className="text-4xl font-black tracking-tight text-text-primary md:text-5xl">
            <CountUp to={s.to} suffix={s.suffix} />
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

type Kind = "craft" | "study" | "work";

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
  craft: {
    label: "Craft",
    chip: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
  },
  study: {
    label: "Study",
    chip: "bg-violet-50 text-violet-700",
    dot: "bg-violet-500",
  },
  work: { label: "Work", chip: "bg-blue-50 text-blue-700", dot: "bg-primary" },
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
    period: "2019 – 2022",
    kind: "craft",
    title: "Carpenter",
    org: "Joinery & furniture",
    text: "Hands-on experience in joinery, furniture making, and precision woodworking. I carried the workshop discipline into how I think about digital products.",
    tags: ["Joinery", "Furniture", "Restoration"],
  },
  {
    period: "Nov 2022 – Mar 2023",
    kind: "work",
    title: "UI/UX Design Intern",
    org: "Futura Labs",
    place: "Kozhikode, Kerala",
    text: "Where the switch started: UI/UX design and frontend basics, including HTML, CSS, and Figma.",
    tags: ["HTML", "CSS", "Figma"],
  },
  {
    period: "Jun 2023 – Present",
    kind: "work",
    title: "UI Developer & Designer",
    org: "Chaavie Solutions",
    place: "Kozhikode, Kerala",
    now: true,
    text: "Working across UI/UX design, frontend development, and branding.",
    points: [
      "Led UI development for healthcare platforms",
      "Mentored junior developers",
      "Built dashboards, SaaS platforms and reusable component systems for web and mobile",
    ],
    tags: ["React", "Next.js", "Tailwind", "Figma"],
    links: [{ label: "Doctor One", href: "/projects/doctor-one" }],
    sub: {
      period: "Jan – Aug 2025",
      title: "Contract at 6solve IT Services",
      place: "Tirunelveli, Tamil Nadu",
      text: "Collaborated on Next.js projects, improving performance and scalability while strengthening modern frontend architecture skills.",
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
            A career built{" "}
            <span className="font-medium text-text-muted">by hand</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-body">
            From school-level wood carving to production React, with a few
            years at the workbench in between.
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
            className="h-full w-full origin-top bg-gradient-to-b from-primary to-cyan-400"
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
                  className={`relative h-4 w-4 rounded-full border-4 border-white shadow-sm ring-2 ring-blue-100 ${KIND[c.kind].dot}`}
                />
              </span>

              <article>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${KIND[c.kind].chip}`}
                  >
                    {c.period}
                  </span>
                  {c.now && (
                    <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-600">
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
/*  5. Principles (workshop rule -> how it shows up in code)                  */
/* -------------------------------------------------------------------------- */

const PRINCIPLES = [
  {
    Icon: FaRulerCombined,
    rule: "Measure twice, cut once.",
    title: "Plan before pixels",
    text: "Layout, spacing and tokens get settled in Figma with Auto Layout, so the build is one clean pass instead of rework.",
  },
  {
    Icon: FaPuzzlePiece,
    rule: "A good joint disappears.",
    title: "Details that hold it together",
    text: "Responsive behavior, states and accessibility are invisible when they work, and that’s exactly the point.",
  },
  {
    Icon: FaScrewdriverWrench,
    rule: "Know your tools by hand.",
    title: "Depth over buzzwords",
    text: "React, Next.js, TypeScript, Tailwind and Figma Dev Mode, used daily and understood well enough to bend when needed.",
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
            Workshop rules,{" "}
            <span className="font-medium text-text-muted">applied to code</span>
          </span>
        }
      />

      <motion.div
        variants={container}
        {...inView}
        className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8"
      >
        {PRINCIPLES.map(({ Icon, rule, title, text }, i) => (
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

            <p className="mt-5 text-sm font-medium italic text-amber-600">
              “{rule}”
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
/*  6. The Workbench (Tools & AI Workflow)                                    */
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
    title: "Frontend Engineering",
    desc: "Production-tested technologies for robust, scalable, and responsive web applications.",
    items: [
      { name: "Next.js", role: "SSR & App Architecture", Icon: SiNextdotjs },
      { name: "React", role: "Component Architecture", Icon: IoLogoReact },
      { name: "TypeScript", role: "Type Safety & Reliability", Icon: SiTypescript },
      { name: "Tailwind CSS", role: "Design Tokens & Utility UI", Icon: SiTailwindcss },
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
    desc: "Modern AI tooling integrated into daily development for 3× faster delivery, rapid prototyping, and clean refactoring.",
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
        kicker="The Workbench"
        center
        title={
          <span id="workbench-heading">
            Tools & modern{" "}
            <span className="font-medium text-text-muted">AI workflow</span>
          </span>
        }
        sub="Just like in woodworking, great tools don't replace craftsmanship—they amplify precision and delivery speed."
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
              <div className="absolute -top-3 right-6 font-light inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-0.5 text-[11px] text-white shadow-sm shadow-blue-500/25">
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
/*  6. Craft bento                                                            */
/* -------------------------------------------------------------------------- */

function Photo({
  src,
  alt,
  caption,
  badge,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  badge?: string;
  className: string;
}) {
  return (
    <motion.figure
      variants={item}
      whileHover={hover}
      className={`group relative overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
      {badge && (
        <span className="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-text-primary shadow-sm backdrop-blur-sm">
          {badge}
        </span>
      )}
      <figcaption className="absolute bottom-4 left-4 text-sm font-medium text-white drop-shadow">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

function StatTile({
  big,
  title,
  text,
  className = "",
}: {
  big: string;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={item}
      whileHover={hover}
      className={`${card} flex flex-col justify-between p-5 ${className}`}
    >
      <p className="text-4xl font-black tracking-tight text-text-primary">
        {big}
      </p>
      <div>
        <p className="text-sm font-bold text-text-primary">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-text-muted">{text}</p>
      </div>
    </motion.div>
  );
}

function Craft() {
  return (
    <section aria-labelledby="craft-heading" className="mt-28">
      <Heading
        kicker="From workshop to pixels"
        title={
          <span id="craft-heading">
            Made by hand<span className="text-amber-500">_</span>
          </span>
        }
        sub="Wood grain, pencil strokes, and chisel marks: the foundation of my design philosophy."
      />

      <motion.div
        variants={container}
        {...inView}
        className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-4 lg:auto-rows-[180px] lg:grid-cols-4"
      >
        <Photo
          src="/images/about/wood.webp"
          alt="Wood carving detail"
          caption="Wood carving"
          badge="✦ Primary craft"
          className="col-span-2 row-span-2"
        />

        <StatTile
          big="5×"
          title="State-level A grade"
          text="Wood Carving, Kerala State School Sasthrolsavam"
        />

        <Photo
          src="/images/about/wood1.webp"
          alt="Carpentry workbench with tools"
          caption="The workbench, 2019–2022"
          className="row-span-2"
        />

        <StatTile
          big="4+1"
          title="District prizes"
          text="4× first prize · 1× second prize"
        />

        <motion.div
          variants={item}
          whileHover={hover}
          className={`${card} col-span-2 flex items-center gap-4 p-5`}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
            <FaPencil aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold text-text-primary">
              Pencil drawing & painting
            </p>
            <p className="text-xs font-medium text-amber-600">
              Sub-district level winner
            </p>
            <p className="mt-1 text-xs leading-relaxed text-text-muted">
              Realistic sketches and watercolor: visual storytelling before
              digital tools.
            </p>
          </div>
        </motion.div>

        <Photo
          src="/images/about/wood3.webp"
          alt="Carpenter at work"
          caption="Carpentry works"
          className="col-span-2"
        />
      </motion.div>

      <motion.figure
        variants={item}
        {...inView}
        className="mx-auto mt-12 max-w-2xl text-center"
      >
        <FaQuoteLeft
          aria-hidden="true"
          className="mx-auto mb-3 text-2xl text-amber-400/70"
        />
        <blockquote className="text-lg font-medium italic leading-relaxed text-text-primary md:text-xl">
          Every UI component is like a well-cut joint: invisible when perfect,
          but essential for structure.
        </blockquote>
        <figcaption className="mt-3 text-xs tracking-wide text-text-muted">
          from carpenter to designer
        </figcaption>
      </motion.figure>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  7. Closing CTA (light)                                                    */
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
    href: LINKS.behance,
    label: "Behance",
    handle: "behance.net/ASWANTHUP",
    Icon: FaBehance,
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
      className="relative mt-16 md:mt-20 overflow-hidden rounded-3xl border border-border-default bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 sm:p-8 md:p-14"
    >
      {/* soft decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(59,130,246,0.18) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 70% 80% at 85% 10%, black 10%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 80% at 85% 10%, black 10%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 right-1/3 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl"
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
            <span className="bg-gradient-to-r from-blue-600 via-primary to-cyan-500 bg-clip-text text-transparent">
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
              className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium shadow-md shadow-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Get in Touch
              <MdOutlineArrowOutward className="text-base" />
            </button>

            {/* <a
              href={RESUME}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border-default bg-white px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted"
            >
              <FaDownload className="text-xs" />
              Résumé
            </a> */}
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