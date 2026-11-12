import { PROJECTS, type Project } from "../data/projects";

export interface ChatAction {
  label: string;
  href?: string;
  external?: boolean;
  actionType?: "open-contact";
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  actions?: ChatAction[];
}

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hey! I'm Aswanth's AI assistant. Ask me anything about his UI/UX work, projects, tech stack, or getting in touch.",
  },
];

function formatProjectForPrompt(project: Project): string {
  const tags = [project.kind, project.featured ? "featured" : null]
    .filter(Boolean)
    .join(", ");
  const linkTarget = project.href ?? project.slug;
  return `- ${project.title} [${tags}] | Role: ${project.role} | Tech: ${project.tech.join(", ")} | Link: ${linkTarget} | Summary: ${project.summary}`;
}

export const PORTFOLIO_SYSTEM_INSTRUCTION = `You are Aswanth UP's friendly AI assistant on his portfolio website. Chat naturally like a helpful, knowledgeable human—warm, clear, and conversational rather than robotic or overly formal.

About Aswanth UP:
- Name: Aswanth UP
- Role: UI Developer & UI/UX Designer ("Design to Code")
- Experience: 3+ years shipping production web apps, dashboards, and component libraries.
- Location & Availability: Based in Kozhikode, Kerala, India. Open to full-time UI Developer roles (remote or on-site across India) with product teams looking for someone who owns both Figma and React/Next.js.
- Core Skills: JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS, Framer Motion, Sass, Bootstrap 5, Figma (Dev Mode), Git, custom SVG icon & vector systems.
- Contact: Email aswanthup06@gmail.com | GitHub https://github.com/aswanthup06 | LinkedIn https://www.linkedin.com/in/aswanthup/ | WhatsApp https://wa.me/917559068970 | Resume /Aswanth_UP_Resume.pdf | In-page Contact Form.

Projects in Portfolio:
${PROJECTS.map(formatProjectForPrompt).join("\n")}

Site Pages:
- All projects: /projects
- About page: /about
- Resume PDF: /Aswanth_UP_Resume.pdf

Guidelines:
- Talk naturally with the visitor (greet them back if they say hi, follow up conversationally, keep answers easy to read).
- Stick strictly to the facts above when describing Aswanth's projects, skills, or background—never invent companies, dates, metrics, or links not listed here.
- When mentioning a project or page naturally in your reply, you can link it in markdown like [ZENOWAY](/projects/zenoway) or [About page](/about).
- Keep replies focused and readable (short paragraphs or brief bullets when listing multiple items).`;

export function shouldSuggestContact(
  userMessage: string,
  assistantReply: string
): boolean {
  const combined = `${userMessage} ${assistantReply}`.toLowerCase();
  return /\b(hire|hiring|contact|reach out|email|collaborat|freelance|job|role|resume|get in touch|message aswanth)\b/.test(
    combined
  );
}
