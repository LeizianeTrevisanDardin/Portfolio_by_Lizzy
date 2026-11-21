
import ProjectPreview from "./ProjectPreview";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="relative overflow-hidden border-y border-panel2 px-6 py-16 sm:px-10"
    >
      <div className="mx-auto grid max-w-[940px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

        {/* LEFT: Project information */}
        <div className="flex flex-col items-start">

          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-lavender">
            Featured Project
          </p>

          <h2 className="font-display text-4xl font-medium text-paper sm:text-5xl">
            CareerFlow
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            A full-stack management platform designed to help
            job seekers organize, track, and improve their job search.
          </p>

          {/* Technology stack */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["Next.js", "Supabase", "TypeScript"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-panel2 bg-panel px-3 py-1 font-mono text-xs text-lavender"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Main features */}
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Job Tracking",
              "AI Resume Analysis",
              "Cover Letter Generator",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 font-mono text-[11px] text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Project Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href="https://career-flow-bay.vercel.app/"
              variant="primary"
              target="_blank"
            >
              View Project
              <ArrowUpRight size={14} />
            </Button>

            <Button
              href="https://github.com/LeizianeTrevisanDardin/CareerFlow"
              variant="secondary"
              target="_blank"
            >
              GitHub Repo
              <GithubIcon size={14} />
            </Button>
          </div>

        </div>

        {/* RIGHT: Project visual */}
        <div className="relative min-w-0">
          <ProjectPreview />
        </div>

      </div>
    </section>
  );
}
