
"use client";

import { motion } from "motion/react";
import type { Achievement } from "@/types/achievement";

type AchievementCardProps = {
  achievement: Achievement;
};

export default function AchievementCard({
  achievement,
}: AchievementCardProps) {
  const buttonClasses = `
    inline-flex items-center justify-center
    min-w-[120px]
    rounded-md
    bg-lime
    px-4 py-1.5
    font-mono text-[9px]
    font-medium uppercase tracking-wide
    text-ink
    transition-all duration-300
    hover:-translate-y-0.5
    hover:shadow-[0_0_14px_rgba(198,255,61,0.25)]
    focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-2 focus-visible:outline-lime
  `;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        group flex h-full min-h-[215px]
        flex-col
        rounded-2xl
        border border-[#42472D]
        bg-transparent
        p-4
        transition-colors duration-300
        hover:border-lime/50
      "
    >
      {/* TITLE */}
      <h3 className="
        font-mono
        text-sm
        font-medium
        leading-snug
        tracking-wide
        text-lime
      ">
        {achievement.name}
      </h3>

      {/* DESCRIPTION */}
      <p className="
        mt-4
        text-[11px]
        leading-[1.45]
        text-paper/85
      ">
        {achievement.description}
      </p>

      {/* ACTION */}
      <div className="mt-auto flex justify-center pt-5">
        {achievement.href ? (
          <a
            href={achievement.href}
            target={
              achievement.href.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              achievement.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className={buttonClasses}
          >
            {achievement.actionLabel}
          </a>
        ) : (
          <span className={`${buttonClasses} opacity-80`}>
            {achievement.actionLabel}
          </span>
        )}
      </div>
    </motion.article>
  );
}
