
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import { achievements } from "@/data/achievements";
import AchievementCard from "./AchievementCard";

export default function AchievementsSection() {
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

  // Listen to scrolling and resizing
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
  }, [updateScrollButtons]);

  // Navigate achievements
  const scrollAchievements = (direction: "next" | "prev") => {
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

  if (achievements.length === 0) return null;

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="relative overflow-hidden px-6 py-16 sm:px-10"
    >
      <div className="mx-auto max-w-[940px]">

        
      {/* SECTION HEADER */}
      <div className="mb-8 flex w-full min-w-0 items-center justify-between gap-2">

        <h2
          id="achievements-title"
          className="min-w-0 font-display text-2xl font-medium text-paper sm:text-3xl lg:text-4xl"
        >
          Achievements
        </h2>

          {/* COUNT + NAVIGATION */}
          <div className="flex shrink-0 items-center gap-1">

            <span className="whitespace-nowrap font-mono text-[9px] text-muted sm:text-[11px]">
              {achievements.length}{" "}
              {achievements.length === 1
                ? "Achievement"
                : "Achievements"}
            </span>

            {achievements.length > 1 && (
              <div className="flex shrink-0 items-center gap-0.5">

                {/* PREVIOUS */}
                <button
                  type="button"
                  onClick={() => scrollAchievements("prev")}
                  disabled={!canScrollPrev}
                  aria-label="Previous achievements"
                  className="flex h-7 w-6 items-center justify-center rounded-full text-paper transition-colors hover:text-lime disabled:opacity-30"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* NEXT */}
                <button
                  type="button"
                  onClick={() => scrollAchievements("next")}
                  disabled={!canScrollNext}
                  aria-label="Next achievements"
                  className="flex h-7 w-6 items-center justify-center rounded-full text-paper transition-colors hover:text-lime disabled:opacity-30"
                >
                  <ChevronRight size={18} />
                </button>

              </div>
            )}
          </div>
        </div>

        {/* ACHIEVEMENTS CAROUSEL */}
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

          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="
                w-[84vw] shrink-0 snap-center
                sm:w-[calc((100%-1rem)/2)]
                sm:snap-start
                lg:w-[calc((100%-2rem)/3)]
              "
            >
              <AchievementCard achievement={achievement} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
