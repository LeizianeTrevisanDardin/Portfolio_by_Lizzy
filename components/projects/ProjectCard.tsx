
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-xl border border-panel2 bg-panel"
    >
     
      {/* IMAGE AREA */}
      <a
        href={project.href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name}`}
        className="relative block aspect-[2.05/1] overflow-hidden"
        style={{
          background: project.imageBackground || "#241C4F",
        }}
      >
        {project.secondaryImage ? (
          <>
            {/* Secondary phone - left */}
            <div className="absolute inset-y-2 left-[5%] w-[40%]">
              <Image
                src={project.secondaryImage}
                alt={`${project.name} preview`}
                fill
                sizes="220px"
                className="object-contain object-center scale-[1.80]  drop-shadow-[0_12px_10px_rgba(0,0,0,0.55)]"
                
              />
            </div>

            {/* Image hand + phone - right */}
            <div className="absolute inset-y-0 -right-[5%] w-[70%]">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="250px"
                className="object-contain object-right scale-[0.999] origin-right"
              />
            </div>
          </>
        ) : (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 768px) 90vw, 350px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </a>



      {/* CARD CONTENT */}
      <div className="flex flex-col p-4">

        {/* Project name + external link */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="font-display text-sm font-medium text-paper">
            {project.name}
          </h3>

           {/* rendering condition */}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
              className="text-paper transition-colors hover:text-lime"
            >
              <ArrowUpRight size={21} />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-lavender/30 px-2.5 py-1 font-mono text-[10px] text-lavender"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.article>
  );
}
