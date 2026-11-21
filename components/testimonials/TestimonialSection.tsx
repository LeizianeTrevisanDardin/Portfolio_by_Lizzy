
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultiple = testimonials.length > 1;

  const previous = () => {
    setActiveIndex((current) =>
      (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      (current + 1) % testimonials.length
    );
  };

  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden px-6 py-12 sm:px-10 sm:py-16"
    >
      <div className="mx-auto max-w-[940px]">

        {/* SECTION TITLE */}
        <h2
          id="testimonials-title"
          className="mb-10 font-display text-3xl font-medium text-paper sm:mb-12 sm:text-4xl"
        >
          What people say
        </h2>

        {/* CAROUSEL */}
        <div className="relative mx-auto flex w-full max-w-[940px] items-center justify-center">

          {/* PREVIOUS BUTTON */}
          <button
            type="button"
            onClick={previous}
            disabled={!hasMultiple}
            aria-label="Previous testimonial"
            className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-lavender/60 text-lavender transition-colors hover:bg-lavender/10 disabled:cursor-default disabled:opacity-70 sm:left-0"
          >
            <ChevronLeft size={18} />
          </button>

          {/* TESTIMONIAL CARD */}
          <div className="mx-10 w-full max-w-[624px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard
                  testimonial={testimonials[activeIndex]}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NEXT BUTTON */}
          <button
            type="button"
            onClick={next}
            disabled={!hasMultiple}
            aria-label="Next testimonial"
            className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-lavender/60 text-lavender transition-colors hover:bg-lavender/10 disabled:cursor-default disabled:opacity-70 sm:right-0"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}
