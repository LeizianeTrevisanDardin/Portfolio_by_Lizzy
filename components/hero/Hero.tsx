
import { ArrowUpRight, Download } from "lucide-react";

import HeroPhoto from "./HeroPhoto";
import HeroSocials from "./HeroSocials";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-6 py-10 sm:px-10 lg:py-12"
    >
      <div className="mx-auto grid max-w-[940px] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          {/* STATUS */}
          <div className="mb-7 flex items-center gap-2">
            <span className="h-2 w-2 animate-blink rounded-full bg-lime" />

            <span className="font-mono text-[10px] uppercase tracking-wider text-lime">
              Full-stack developer
            </span>
          </div>

          {/* TITLE */}
          <h1
            id="hero-title"
            className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-[50px]"
          >
            I turn ideas into
            <span className="block text-lavender">
              real products.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-[360px] text-xs leading-[1.7] text-paper/75">
            I'm Leiziane, a software developer focused on
            building full-stack web and mobile products that
            solve real problems and make workflows easier.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-7 flex flex-wrap items-center gap-4">

            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="
                inline-flex items-center gap-2
                rounded-md bg-lime
                px-5 py-2.5
                font-mono text-[10px] font-medium
                uppercase tracking-wide text-ink
                transition-transform hover:-translate-y-0.5
              "
            >
              View my work
              <ArrowUpRight size={13} />
            </a>

            {/* DOWNLOAD RESUME */}
            <a
              href="/resume/Leiziane-Trevisan-Dardin.pdf"
              download="Leiziane-Trevisan-Dardin.pdf"
              className="
                inline-flex items-center gap-2
                rounded-md border border-panel2
                px-3 py-2
                font-mono text-[9px] uppercase tracking-wide
                text-paper transition-colors
                hover:border-lime/50 hover:text-lime
              "
            >
              <Download size={13} />
              Download my resume
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-8">
            <HeroSocials />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center lg:justify-end">
          <HeroPhoto
            src="/images/hero/leiziane.png"
            alt="Leiziane, full-stack developer"
          />
        </div>

      </div>
    </section>
  );
}
