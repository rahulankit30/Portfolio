"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card card-glass rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" as const }}
      onClick={onClick}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.isOSS && (
            <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
              Open Source
            </span>
          )}
          {project.featured && (
            <span className="text-xs font-semibold text-indigo-400 bg-indigo-400/10 border border-indigo-400/20 px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
          {project.company && !project.isOSS && (
            <span className="text-xs font-medium text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 px-2 py-0.5 rounded-full">
              {project.company}
            </span>
          )}
        </div>
        <ArrowUpRight
          size={18}
          className="text-zinc-600 group-hover:text-indigo-400 transition-colors flex-shrink-0 mt-0.5"
        />
      </div>

      {/* Title & description */}
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-indigo-300 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Key highlight */}
      {project.highlights[0] && (
        <div className="text-xs text-zinc-500 bg-zinc-800/40 rounded-lg px-3 py-2 border border-zinc-700/30 line-clamp-2">
          <span className="text-indigo-500 mr-1">▸</span>
          {project.highlights[0]}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span className="text-xs px-2 py-0.5 rounded-md text-zinc-600">
            +{project.tags.length - 5}
          </span>
        )}
      </div>

      {/* Links row */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        )}
        <span className="text-xs text-zinc-600 ml-auto">
          {project.period}
        </span>
      </div>
    </motion.div>
  );
}
