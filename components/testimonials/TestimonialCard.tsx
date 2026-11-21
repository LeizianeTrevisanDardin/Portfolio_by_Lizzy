
"use client";

import { Quote, UserRound, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import type { Testimonial } from "@/types/testimonial";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-[190px] w-full rounded-md border border-panel2 bg-transparent px-6 py-6 sm:px-8"
    >
      {/* QUOTE ICON */}
      <Quote
        size={34}
        className="mb-5 fill-lavender text-lavender"
        aria-hidden="true"
      />

      {/* MESSAGE */}
      <blockquote className="mx-auto max-w-[620px] text-center font-mono text-[11px] leading-[1.55] text-muted sm:text-xs">
        "{testimonial.message}"
      </blockquote>

      {/* AUTHOR INFORMATION */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-end">

        {/* Avatar */}
        {/* Company Initials */}
        <div className="
          flex h-9 w-9 shrink-0
          items-center justify-center
          rounded-full
          bg-lavender/20
          font-display text-sm font-semibold
          text-lavender
        ">
          {testimonial.avatarInitials}
        </div>

        {/* Name + Company */}
        <div className="min-w-0">
          <p className="font-display text-[11px] font-semibold text-paper">
            {testimonial.name}
          </p>

          <p className="mt-1 font-mono text-[9px] text-muted">
            {testimonial.company}
          </p>
        </div>

        {/* Received indicator */}
        {testimonial.href && (
          <a
            href={testimonial.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View original testimonial"
            className="ml-2 flex items-center gap-1 rounded-md border border-lime/60 px-3 py-1 font-mono text-[9px] text-lime transition-all hover:bg-lime hover:text-ink"
          >
            Received
            <ChevronRight size={12} />
          </a>
        )}

      </div>
    </motion.article>
  );
}
