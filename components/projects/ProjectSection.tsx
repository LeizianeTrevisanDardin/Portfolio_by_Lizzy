
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "@/data/project";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Check scroll position
  const updateScrollButtons = useCallback(() => {
    const container = scrollRef.current;

    if (!container) return;

    setCanScrollPrev(container.scrollLeft > 4);

    setCanScrollNext(
      container.scrollLeft + container.clientWidth <
        container.scrollWidth - 4
    );
  }, []);

  // Update buttons when scrolling or resizing
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    updateScrollButtons();

    container.addEventListener("scroll", updateScrollButtons, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons, projects.length]);

  // Navigate projects
  const scrollProjects = (direction: "next" | "prev") => {
    const container = scrollRef.current;

    if (!container) return;

    const card = container.querySelector<HTMLElement>("article");

    if (!card) return;

    const gap = 16;

    container.scrollBy({
      left:
        direction === "next"
          ? card.offsetWidth + gap
          : -(card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  const showNavigation = projects.length > 1;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden px-6 py-16 sm:px-10"
    >
      <div className="mx-auto max-w-[940px]">

        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between gap-4">

          <h2
            id="projects-title"
            className="font-display text-3xl font-medium text-paper sm:text-4xl"
          >
            More projects
          </h2>

          {/* PROJECT COUNT + NAVIGATION */}
          <div className="flex shrink-0 items-center gap-2">

            <span className="font-mono text-[11px] text-muted">
              {projects.length}{" "}
              {projects.length === 1 ? "Project" : "Projects"}
            </span>

            {showNavigation && (
              <div className="flex items-center gap-1">

                {/* PREVIOUS */}
                <button
                  type="button"
                  onClick={() => scrollProjects("prev")}
                  disabled={!canScrollPrev}
                  aria-label="Previous projects"
                  className="
                    flex h-8 w-7 items-center justify-center
                    rounded-full text-paper
                    transition-all duration-200
                    hover:bg-panel2 hover:text-lime
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                  "
                >
                  <ChevronLeft size={19} />
                </button>

                {/* NEXT */}
                <button
                  type="button"
                  onClick={() => scrollProjects("next")}
                  disabled={!canScrollNext}
                  aria-label="Next projects"
                  className={`
                    flex h-8 w-7 items-center justify-center
                    rounded-full text-paper
                    transition-all duration-200
                    hover:bg-panel2 hover:text-lime
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                    ${projects.length <= 3 ? "lg:hidden" : ""}
                  `}
                >
                  <ChevronRight size={19} />
                </button>

              </div>
            )}

          </div>
        </div>

        {/* PROJECT CAROUSEL */}
        <div
          ref={scrollRef}
          className="
            -mx-6 flex gap-4
            overflow-x-auto
            px-[8vw] pb-4
            snap-x snap-mandatory
            scroll-smooth
            [&::-webkit-scrollbar]:hidden
            [scrollbar-width:none]

            sm:mx-0 sm:px-0
          "
        >

          {projects.map((project) => (
            <div
              key={project.id}
              className="
                w-[84vw] shrink-0 snap-center

                sm:w-[calc((100%-1rem)/2)]
                sm:snap-start

                lg:w-[calc((100%-2rem)/3)]
              "
            >
              <ProjectCard project={project} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
