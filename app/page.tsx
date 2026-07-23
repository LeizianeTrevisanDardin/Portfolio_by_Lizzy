import Ticker from "@/components/Ticker";
import ProjectCard from "@/components/ProjectCard";
import { Building2, PartyPopper } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    symbol: "$PLANR",
    name: "Day Trading Planner",
    useCandleIcon: true,
    status: "LIVE" as const,
    description:
      "A professional trading planning and coaching platform for MES, ES, MNQ, and NQ, featuring risk calculation, automated guardrails, trade journaling, and AI-assisted analysis.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    href:"https://trading-coaching-app-gg2u.vercel.app/"
  },
  {
    symbol: "$COWORK",
    name: "Coworking Space App",
    icon: Building2,
    status: "LIVE" as const,
    description:
      "A full-stack coworking management platform with owner and coworker dashboards, property management, workspace booking, authentication, and role-based access control.",
    stack: ["Next.js", "TypeScript", "Supabase"],
     href:"https://co-working-next-js.vercel.app/"
  },
  {
    symbol: "$JULINA",
    name: "Festa Julina Invitation",
    icon: PartyPopper,
    status: "SHIPPED" as const,
    description:
      "An interactive event website featuring a countdown, RSVP, shared food lists, photo gallery, anonymous authentication, and secure row-level security policies.",
    stack: ["Next.js", "Supabase", "RLS"],
   
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-mono text-sm text-lavender">LZ//DEV</span>

        <nav className="flex gap-6 font-mono text-xs text-muted">
          <a href="#projects" className="hover:text-paper">
            projects
          </a>

          <a href="#contact" className="hover:text-paper">
            contact
          </a>
        </nav>
      </header>

      {/* Ticker */}
      <Ticker />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20">
        <div className="mb-6 flex items-center gap-2 font-mono text-xs text-lime">
          <span className="h-2 w-2 animate-blink rounded-full bg-lime" />
          STATUS: BUILDING
        </div>

        <div className="relative h-56 w-56 overflow-hidden rounded-3xl border border-lime/40">
         <Image
          src="/images/leizi-profissional.png"
          alt="Leiziane, Full-Stack Developer"
          fill
          className="object-cover"
          priority
          />
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] text-paper sm:text-7xl">
          Leiziane
          <br />
          <span className="text-lavender">builds products,</span>
          <br />
          not just code.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          Full-stack developer focused on Next.js, TypeScript, and Supabase.
          From idea to deployment and building dashboards, authentication,
          access-control systems, and real-world products. I love exploring new challenges, please contact me if you have one.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-lime px-5 py-2.5 font-mono text-xs font-medium text-ink transition-transform hover:scale-105"
          >
            VIEW PROJECTS
          </a>

          <a
            href="#contact"
            className="rounded-full border border-panel2 px-5 py-2.5 font-mono text-xs text-paper transition-colors hover:border-lavender"
          >
            CONTACT ME
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-medium text-paper">
            Featured projects
          </h2>

          <span className="font-mono text-xs text-muted">
            {PROJECTS.length} projects
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.symbol} {...project} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="border-t border-panel2 bg-panel px-6 py-16"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-medium text-paper">
            Let&apos;s work together.
          </h2>

          <p className="mt-3 max-w-md text-sm text-muted">
            Open to projects, collaborations, and software development
            opportunities.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs">
            <a
              href="mailto:your-email@example.com"
              className="rounded-full border border-panel2 px-4 py-2 text-paper hover:border-lime hover:text-lime"
            >
              EMAIL
            </a>

            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-panel2 px-4 py-2 text-paper hover:border-lime hover:text-lime"
            >
              GITHUB
            </a>

            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-panel2 px-4 py-2 text-paper hover:border-lime hover:text-lime"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}