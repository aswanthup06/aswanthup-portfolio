import React from "react";
import {
  Mail,
  MousePointerClick,
  LayoutDashboard,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Send,
  ArrowDown,
    PenTool,
  Code2,
  Radio,

} from "lucide-react";



function MailHeader({ to, subject }: { to: string; subject: string }) {
  return (
    <div className="border border-[#d8dbd3] bg-white rounded-lg overflow-hidden mb-7">
      <div className="flex gap-1.5 px-3.5 py-2.5 border-b border-[#d8dbd3] bg-[#f8f8f6]">
        <span className="w-2 h-2 rounded-full bg-[#8a9096]" />
        <span className="w-2 h-2 rounded-full bg-[#8a9096]" />
        <span className="w-2 h-2 rounded-full bg-[#8a9096]" />
      </div>
      <div className="px-4 py-3 font-['Space_Mono'] text-[12.5px] text-[#565f66] flex flex-col gap-1">
        <span>
          <em className="not-italic text-[#8a9096] inline-block w-[62px]">To</em>
          {to}
        </span>
        <span>
          <em className="not-italic text-[#8a9096] inline-block w-[62px]">Subject</em>
          {subject}
        </span>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white px-[18px] py-[22px] text-center">
      <div className="font-['Space_Mono'] text-[22px] text-[#d8842c] mb-1">{value}</div>
      <div className="text-[12.5px] text-[#565f66]">{label}</div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white border border-[#d8dbd3] rounded-[10px] p-5">
      <div className="w-[34px] h-[34px] rounded-lg bg-[#f4e3ca] text-[#d8842c] flex items-center justify-center mb-3.5">
        {icon}
      </div>
      <h3 className="text-[15.5px] mb-1.5">{title}</h3>
      <p className="text-[13.5px] text-[#565f66] m-0">{body}</p>
    </div>
  );
}

function Shot({ src, title, caption }: { src: string; title: string; caption: string }) {
  return (
    <figure>
      <div className="border border-[#d8dbd3] rounded-[10px] overflow-hidden bg-white">
        <img className="block w-full h-[180px] object-cover" src={src} alt={title} loading="lazy" />
      </div>
      <figcaption className="mt-2.5 flex flex-col">
        <strong className="text-sm">{title}</strong>
        <span className="text-[12.5px] text-[#8a9096]">{caption}</span>
      </figcaption>
    </figure>
  );
}

function FlowNode({
  title,
  subtitle,
  tone = "neutral",
}: {
  title: string;
  subtitle?: string;
  tone?: "neutral" | "amber" | "green" | "dark";
}) {
  const toneClasses = {
    neutral: "bg-white border-[#d8dbd3] text-[#171b1f]",
    amber: "bg-[#f4e3ca] border-[#e3cbb5] text-[#171b1f]",
    green: "bg-[#dfe9e2] border-[#c3d8cb] text-[#171b1f]",
    dark: "bg-[#171b1f] border-[#171b1f] text-[#f2f3ef]",
  }[tone];
  return (
    <div className={`border rounded-lg px-4 py-3 text-center ${toneClasses}`}>
      <div className="font-['Space_Mono'] text-[13px]">{title}</div>
      {subtitle && <div className="text-[11.5px] text-[#565f66] mt-1">{subtitle}</div>}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center py-1">
      <ArrowDown size={16} className="text-[#8a9096]" />
    </div>
  );
}

function BriefPanel() {
  const rows: { icon: React.ReactNode; label: string; value: string }[] = [
    { icon: <PenTool size={13} />, label: "Role", value: "UI/UX Design & Frontend Dev" },
    { icon: <Code2 size={13} />, label: "Type", value: "Personal Project" },
  ];
  return (
    <div className="border border-[#d8dbd3] rounded-xl overflow-hidden bg-white flex flex-col h-full">
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#d8dbd3] bg-[#f8f8f6]">
        <div className="flex gap-1.5">
          <span className="w-[9px] h-[9px] rounded-full bg-[#d8dbd3]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#d8dbd3]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#d8dbd3]" />
        </div>
        <span className="font-['Space_Mono'] text-[10px] text-[#8a9096] tracking-wide">brief.eml</span>
      </div>
 
      <div className="px-4 pt-4 pb-3 border-b border-dashed border-[#d8dbd3]">
        <div className="font-['Space_Mono'] text-[10px] uppercase tracking-wide text-[#8a9096] mb-1.5">
          Subject
        </div>
        <div className="text-[13.5px] leading-snug text-[#171b1f]">
          A career portal with no login &mdash; browse, then email.
        </div>
      </div>
 
      <div className="flex flex-col flex-1">
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={`flex items-center gap-2.5 px-4 py-3 ${
              i !== rows.length - 1 ? "border-b border-[#f0f1ed]" : ""
            }`}
          >
            <span className="text-[#8a9096]">{r.icon}</span>
            <span className="font-['Space_Mono'] text-[10px] uppercase tracking-wide text-[#8a9096] w-11 shrink-0">
              {r.label}
            </span>
            <span className="text-[13px] text-[#171b1f]">{r.value}</span>
          </div>
        ))}
      </div>
 
      <div className="flex items-center gap-2 px-4 py-3 bg-[#f5f9f6] border-t border-[#c3d8cb]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e6b52] opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2e6b52]" />
        </span>
        <span className="font-['Space_Mono'] text-[11.5px] text-[#2e6b52]">First phase live</span>
        <Radio size={12} className="text-[#2e6b52] ml-auto" />
      </div>
    </div>
  );
}

function FlowBranch({
  nodes,
}: {
  nodes: { title: string; subtitle?: string; tone?: "neutral" | "amber" | "green" | "dark" }[];
}) {
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${nodes.length}, minmax(0,1fr))` }}>
      {nodes.map((n, i) => (
        <FlowNode key={i} {...n} />
      ))}
    </div>
  );
}

function FlowDiagram({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#d8dbd3] rounded-[10px] p-6">
      <div className="font-['Space_Mono'] text-[11.5px] uppercase tracking-wide text-[#8a9096] mb-4">{label}</div>
      <div className="max-w-[420px] mx-auto flex flex-col">{children}</div>
    </div>
  );
}

export default function ZenowayCaseStudy() {
  return (
  <div className="font-['IBM_Plex_Sans'] bg-gradient-to-b from-[#f2f3ef] via-[#f2f3ef] to-white text-[#171b1f] leading-relaxed">
      {/* Google fonts for this component */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* ---------------- HERO ---------------- */}
      <section className="pt-[120px] pb-12">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 font-['Space_Mono'] text-xs tracking-wide text-[#565f66] px-2.5 py-1.5 border border-[#d8dbd3] rounded-full bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2e6b52]" />
            Case Study &middot; Personal Project &middot; 2025
          </div>
          <h1 className="font-['Space_Mono'] text-[32px] md:text-[54px] leading-[1.08] tracking-[-0.01em] mb-5 max-w-[780px]">
            A career portal that skips <span className="text-[#d8842c]">everything</span> except the job and the email.
          </h1>
          <p className="text-lg text-[#565f66] max-w-[560px] mb-8">
            Zenoway is a lightweight hiring platform built around one idea: someone who
            finds a job they like shouldn&rsquo;t need an account, a password, or a ten-step
            form to say so. They should be able to email the person hiring, directly.
          </p>
          <div className="flex gap-3 flex-wrap mb-10">
            <a
              className="font-['Space_Mono'] text-[13px] inline-flex items-center gap-2 px-[18px] py-3 rounded-md no-underline border border-[#171b1f] bg-[#171b1f] text-[#f2f3ef] transition-transform hover:-translate-y-0.5"
              href="https://www.zenoway.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Zenoway <ExternalLink size={14} />
            </a>
            <a
              className="font-['Space_Mono'] text-[13px] inline-flex items-center gap-2 px-[18px] py-3 rounded-md no-underline border border-[#171b1f] bg-transparent text-[#171b1f] transition-transform hover:-translate-y-0.5"
              href="#problem"
            >
              Read the case study <ArrowDown size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-[1fr_260px] gap-5">
            <div className="border border-[#d8dbd3] rounded-xl overflow-hidden bg-white">
              <div className="flex gap-1.5 px-3.5 py-2.5 border-b border-[#d8dbd3]">
                <span className="w-[9px] h-[9px] rounded-full bg-[#d8dbd3]" />
                <span className="w-[9px] h-[9px] rounded-full bg-[#d8dbd3]" />
                <span className="w-[9px] h-[9px] rounded-full bg-[#d8dbd3]" />
              </div>
              <video
                className="block w-full h-[340px] object-cover"
                src="/assets/zenoway/hiring.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Zenoway platform preview"
              />
            </div>

             <BriefPanel />



       
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <div className="max-w-[880px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#d8dbd3] border border-[#d8dbd3] rounded-[10px] overflow-hidden my-12">
          <StatCard value="0" label="Login steps required" />
          <StatCard value="1-click" label="From job post to application" />
          <StatCard value="100%" label="Applications routed straight to HR" />
          <StatCard value="Modern" label="Fully responsive interface" />
        </div>
      </div>

      {/* ---------------- PROBLEM ---------------- */}
      <section id="problem" className="py-14 border-t border-[#d8dbd3]">
        <div className="max-w-[880px] mx-auto px-6">
          <MailHeader to="job seekers, everywhere" subject="Why most career portals lose people before the apply button" />
          <h2 className="font-['Space_Mono'] text-[22px] md:text-[30px] mb-4">The problem</h2>
          <p className="text-[16.5px] text-[#565f66] max-w-[640px] mb-2">
            Most career platforms treat applying for a job as a project of its own &mdash;
            an account to create, a profile to build, a resume to reformat, and a form to
            fill in before a recruiter ever sees a name.
          </p>
          <div className="grid md:grid-cols-2 gap-7 mt-7">
            <div className="bg-white border border-[#e3cbb5] rounded-[10px] p-6">
              <h4 className="font-['Space_Mono'] text-[13px] text-[#b25f1e] uppercase tracking-wide mb-3.5">
                What that costs the applicant
              </h4>
              <ul className="list-disc pl-[18px] text-[#565f66] text-[15px] m-0">
                <li className="mb-2">An account and password to remember for a platform they may never return to</li>
                <li className="mb-2">Profile fields that repeat what&rsquo;s already on the resume</li>
                <li className="mb-2">No clear line to an actual person once the form is submitted</li>
                <li className="mb-2">Friction that&rsquo;s highest exactly when motivation is highest &mdash; right after finding a role they want</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e3cbb5] rounded-[10px] p-6">
              <h4 className="font-['Space_Mono'] text-[13px] text-[#b25f1e] uppercase tracking-wide mb-3.5">
                What that costs the platform
              </h4>
              <ul className="list-disc pl-[18px] text-[#565f66] text-[15px] m-0">
                <li className="mb-2">Drop-off between &ldquo;found the job&rdquo; and &ldquo;finished applying&rdquo;</li>
                <li className="mb-2">Engineering overhead spent on auth, profiles, and applicant storage</li>
                <li className="mb-2">A slower, heavier product for what is, at its core, a browse-and-contact flow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SOLUTION / APPROACH ---------------- */}
      <section className="py-14 border-t border-[#d8dbd3]">
        <div className="max-w-[880px] mx-auto px-6">
          <MailHeader to="hiring teams &amp; recruiters" subject="The approach &mdash; cut every step that isn&#39;t browsing or contacting" />
          <h2 className="font-['Space_Mono'] text-[22px] md:text-[30px] mb-4">The approach</h2>
          <p className="text-[16.5px] text-[#565f66] max-w-[640px] mb-2">
            The design rule for Zenoway was simple: if a screen doesn&rsquo;t help someone
            see a job or send an application, it doesn&rsquo;t belong in the flow. That ruled
            out accounts, profiles, and multi-page forms in favor of one action &mdash; a direct
            email to HR.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-start mt-8">
            <div className="flex flex-col gap-2.5">
              <div className="font-['Space_Mono'] text-[12.5px] tracking-wide text-[#8a9096] uppercase mb-1">
                Typical career portal
              </div>
              <div className="opacity-85 bg-white border border-[#d8dbd3] rounded-lg px-3.5 py-3 text-sm text-[#565f66] flex items-center gap-2.5">
                <span className="font-['Space_Mono'] text-[#8a9096] text-xs">01</span> Create an account
              </div>
              <div className="opacity-85 bg-white border border-[#d8dbd3] rounded-lg px-3.5 py-3 text-sm text-[#565f66] flex items-center gap-2.5">
                <span className="font-['Space_Mono'] text-[#8a9096] text-xs">02</span> Verify email
              </div>
              <div className="opacity-85 bg-white border border-[#d8dbd3] rounded-lg px-3.5 py-3 text-sm text-[#565f66] flex items-center gap-2.5">
                <span className="font-['Space_Mono'] text-[#8a9096] text-xs">03</span> Build a profile
              </div>
              <div className="opacity-85 bg-white border border-[#d8dbd3] rounded-lg px-3.5 py-3 text-sm text-[#565f66] flex items-center gap-2.5">
                <span className="font-['Space_Mono'] text-[#8a9096] text-xs">04</span> Upload &amp; reformat resume
              </div>
              <div className="opacity-85 bg-white border border-[#d8dbd3] rounded-lg px-3.5 py-3 text-sm text-[#565f66] flex items-center gap-2.5">
                <span className="font-['Space_Mono'] text-[#8a9096] text-xs">05</span> Fill a multi-step application
              </div>
              <div className="opacity-85 bg-white border border-[#d8dbd3] rounded-lg px-3.5 py-3 text-sm text-[#565f66] flex items-center gap-2.5">
                <span className="font-['Space_Mono'] text-[#8a9096] text-xs">06</span> Wait, with no direct contact
              </div>
            </div>
            <div className="self-center font-['Space_Mono'] text-[#8a9096] text-xs text-center md:[writing-mode:vertical-lr]">
              VS
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="font-['Space_Mono'] text-[12.5px] tracking-wide text-[#8a9096] uppercase mb-1">
                Zenoway
              </div>
              <div className="bg-[#dfe9e2] border border-[#c3d8cb] rounded-lg px-3.5 py-3 text-sm text-[#171b1f] flex items-center gap-2.5">
                <span className="font-['Space_Mono'] text-[#8a9096] text-xs">01</span> Browse open roles
              </div>
              <div className="bg-[#dfe9e2] border border-[#c3d8cb] rounded-lg px-3.5 py-3 text-sm text-[#171b1f] flex items-center gap-2.5">
                <span className="font-['Space_Mono'] text-[#8a9096] text-xs">02</span> Read the one that fits
              </div>
              <div className="bg-[#dfe9e2] border border-[#c3d8cb] rounded-lg px-3.5 py-3 text-sm text-[#171b1f] flex items-center gap-2.5">
                <span className="font-['Space_Mono'] text-[#8a9096] text-xs">03</span> Send an email straight to HR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PRINCIPLES / FEATURES ---------------- */}
      <section className="py-14 border-t border-[#d8dbd3]">
        <div className="max-w-[880px] mx-auto px-6">
          <MailHeader to="design system" subject="Four principles the interface is built around" />
          <h2 className="font-['Space_Mono'] text-[22px] md:text-[30px] mb-4">Designed for simplicity</h2>
          <p className="text-[16.5px] text-[#565f66] max-w-[640px] mb-2">Every screen answers to one of these before it ships.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7">
            <FeatureCard
              icon={<Mail size={18} />}
              title="Direct HR contact"
              body="Applications go out as email, no login required on either side."
            />
            <FeatureCard
              icon={<MousePointerClick size={18} />}
              title="Easy applications"
              body="A quick job discovery and apply flow, with nothing extra in the way."
            />
            <FeatureCard
              icon={<Sparkles size={18} />}
              title="Modern interface"
              body="A clean, responsive design system across every screen size."
            />
            <FeatureCard
              icon={<LayoutDashboard size={18} />}
              title="User first"
              body="A minimal onboarding process &mdash; the product gets out of the way."
            />
          </div>
        </div>
      </section>

      {/* ---------------- JOB SEEKER UI ---------------- */}
      <section className="py-14 border-t border-[#d8dbd3]">
        <div className="max-w-[880px] mx-auto px-6">
          <MailHeader to="job seekers" subject="Platform interface showcase" />
          <h2 className="font-['Space_Mono'] text-[22px] md:text-[30px] mb-4">The job seeker experience</h2>
          <p className="text-[16.5px] text-[#565f66] max-w-[640px] mb-2">
            Clean layouts, restrained typography, and navigation that doesn&rsquo;t need
            explaining &mdash; browsing roles should feel closer to reading a well-organized
            list than operating software.
          </p>
          <div className="grid md:grid-cols-3 gap-[18px] mt-7">
            <Shot
              src="https://aswanthup.online/assets/zenoway/zenoway1.webp"
              title="Job discovery"
              caption="Browse opportunities"
            />
            <Shot
              src="https://aswanthup.online/assets/zenoway/zenoway3.webp"
              title="Application flow"
              caption="Direct HR contact"
            />
            <Shot
              src="https://aswanthup.online/assets/zenoway/zenoway2.webp"
              title="Career portal"
              caption="Simple navigation"
            />
          </div>
        </div>
      </section>

      {/* ---------------- ADMIN UI ---------------- */}
      <section className="py-14 border-t border-[#d8dbd3]">
        <div className="max-w-[880px] mx-auto px-6">
          <MailHeader to="hiring teams" subject="Admin dashboard &mdash; simple management system" />
          <h2 className="font-['Space_Mono'] text-[22px] md:text-[30px] mb-4">The admin side</h2>
          <p className="text-[16.5px] text-[#565f66] max-w-[640px] mb-2">
            The flip side of a frictionless applicant experience is a dashboard that
            stays out of the recruiter&rsquo;s way too &mdash; post a role, track activity,
            update a listing, and nothing more than that.
          </p>
          <div className="grid md:grid-cols-3 gap-[18px] mt-7">
            <Shot src="https://aswanthup.online/zenad1.png" title="Dashboard analytics" caption="Track platform activity" />
            <Shot src="https://aswanthup.online/zenad2.png" title="Content management" caption="Update job listings" />
            <Shot src="https://aswanthup.online/zenad3.png" title="Update & add" caption="Add or edit job posts" />
          </div>
        </div>
      </section>

      {/* ---------------- USER FLOWS ---------------- */}
      <section className="py-14 border-t border-[#d8dbd3]">
        <div className="max-w-[880px] mx-auto px-6">
          <MailHeader to="everyone on the platform" subject="How each role moves through Zenoway" />
          <h2 className="font-['Space_Mono'] text-[22px] md:text-[30px] mb-4">User flows</h2>
          <p className="text-[16.5px] text-[#565f66] max-w-[640px] mb-2">
            Three roles share the platform &mdash; the job seeker applying, the HR contact
            receiving applications, and the main admin who approves HR accounts and keeps
            the job board itself in order.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <FlowDiagram label="Job seeker &mdash; core path">
              <FlowNode title="Home" subtitle="Browse the landing page" />
              <FlowArrow />
              <FlowNode title="Search jobs" subtitle="Filter by role or location" />
              <FlowArrow />
              <FlowNode title="Job details" subtitle="Read the full listing" />
              <FlowArrow />
              <FlowBranch
                nodes={[
                  { title: "Copy HR email", subtitle: "Apply directly", tone: "amber" },
                  { title: "Career page", subtitle: "Company's own site", tone: "amber" },
                ]}
              />
            </FlowDiagram>

            <FlowDiagram label="Job details &mdash; also available">
              <FlowNode title="Job details page" />
              <FlowArrow />
              <FlowBranch
                nodes={[
                  { title: "View company", subtitle: "See company profile" },
                  { title: "WhatsApp group", subtitle: "Join for job updates" },
                  { title: "How to mail", subtitle: "Tips for emailing HR" },
                ]}
              />
            </FlowDiagram>

            <FlowDiagram label="HR &mdash; day to day">
              <FlowNode title="HR login" subtitle="Access the dashboard" tone="green" />
              <FlowArrow />
              <FlowNode title="Dashboard" subtitle="Track platform activity" tone="green" />
              <FlowArrow />
              <FlowNode title="Manage listings" subtitle="Create, update, or remove" tone="green" />
              <FlowArrow />
              <FlowNode title="Application received" subtitle="Candidate emails arrive directly" tone="green" />
              <FlowArrow />
              <FlowNode title="Respond to candidate" subtitle="Reply straight from inbox" tone="green" />
            </FlowDiagram>

            <FlowDiagram label="Main admin &mdash; HR lifecycle">
              <FlowNode title="HR signup" subtitle="Request to join" />
              <FlowArrow />
              <FlowNode title="Pending approval" subtitle="Waiting for admin review" />
              <FlowArrow />
              <FlowNode title="Admin approves" subtitle="Verified by main admin" tone="dark" />
              <FlowArrow />
              <FlowNode title="Active HR account" subtitle="Can post and manage jobs" tone="green" />
              <FlowArrow />
              <FlowBranch
                nodes={[
                  { title: "Track jobs", subtitle: "View their job posts" },
                  { title: "Block account", subtitle: "Restrict access" },
                  { title: "Assist account", subtitle: "Reset name or password" },
                ]}
              />
            </FlowDiagram>
          </div>

          <div className="mt-6">
            <FlowDiagram label="Main admin &mdash; job management">
              <FlowNode title="Job management" tone="dark" />
              <FlowArrow />
              <FlowBranch
                nodes={[
                  { title: "Add job" },
                  { title: "Update job" },
                  { title: "Delete job" },
                  { title: "Approve jobs" },
                ]}
              />
            </FlowDiagram>
          </div>
        </div>
      </section>

      {/* ---------------- REFLECTION / STATUS ---------------- */}
      <section className="py-14 border-t border-[#d8dbd3]">
        <div className="max-w-[880px] mx-auto px-6">
          <MailHeader to="future me" subject="Where this stands, and what I&#39;d push on next" />
          <h2 className="font-['Space_Mono'] text-[22px] md:text-[30px] mb-4">Where it stands</h2>
          <div className="inline-flex items-center gap-2 font-['Space_Mono'] text-[12.5px] bg-[#dfe9e2] text-[#2e6b52] px-3 py-1.5 rounded-full mb-4.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2e6b52]" /> First phase live
          </div>
          <p className="text-[16.5px] text-[#565f66] max-w-[640px] mb-2">
            Zenoway&rsquo;s first phase &mdash; browsing, the direct-email apply flow, and a
            minimal admin panel &mdash; is live at zenoway.com.
          </p>
          <div className="grid md:grid-cols-2 gap-[22px] mt-7">
            <div className="py-5">
              <h4 className="font-['Space_Mono'] text-[13.5px] mb-2">What the constraint bought</h4>
              <p className="text-[14.5px] text-[#565f66] m-0">
                Removing accounts and applicant storage cut both the build time and the
                surface area someone has to trust before applying &mdash; there&rsquo;s no
                data to hand over, just an email to send.
              </p>
            </div>
            <div className="py-5">
              <h4 className="font-['Space_Mono'] text-[13.5px] mb-2">What I&rsquo;d watch for next</h4>
              <p className="text-[14.5px] text-[#565f66] m-0">
                Direct email doesn&rsquo;t give either side a paper trail once a message is
                sent. As Zenoway grows, lightweight status visibility &mdash; without
                reintroducing the friction this was built to avoid &mdash; is the open question.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER / CONTACT ---------------- */}
      <footer className="py-14">
        <div className="max-w-[880px] mx-auto px-6">
          <div className="bg-[#171b1f] text-[#f2f3ef] rounded-[14px] p-10 flex justify-between items-end flex-wrap gap-6">
            <div>
              <h2 className="font-['Space_Mono'] text-[22px] md:text-[30px] mb-4 text-[#f2f3ef]">Let&rsquo;s work together</h2>
              <p className="text-[#b7bcb2] max-w-[420px] m-0 text-[14.5px]">
                Open to UI/UX design and frontend development projects &mdash; let&rsquo;s build something this direct.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                className="font-['Space_Mono'] text-[12.5px] text-[#f2f3ef] border border-[#3b423f] px-3.5 py-2.5 rounded-md no-underline inline-flex items-center gap-1.5"
                href="mailto:aswanthup06@gmail.com"
              >
                <Send size={13} /> aswanthup06@gmail.com
              </a>
              <a
                className="font-['Space_Mono'] text-[12.5px] text-[#f2f3ef] border border-[#3b423f] px-3.5 py-2.5 rounded-md no-underline inline-flex items-center gap-1.5"
                href="https://wa.me/917559068970"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="font-['Space_Mono'] text-[12.5px] text-[#f2f3ef] border border-[#3b423f] px-3.5 py-2.5 rounded-md no-underline inline-flex items-center gap-1.5"
                href="https://www.zenoway.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Zenoway <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}