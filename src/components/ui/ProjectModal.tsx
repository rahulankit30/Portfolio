"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 command-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto card-glass rounded-2xl shadow-2xl pointer-events-auto"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" as const }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-[#141422]/95 backdrop-blur-sm border-b border-white/5 px-6 py-5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
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
                    {project.period && (
                      <span className="text-xs font-mono text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 px-2 py-0.5 rounded-full">
                        {project.period}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-zinc-100">{project.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <p className="text-zinc-300 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Highlights */}
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-3">
                    Key Contributions & Impact
                  </h3>
                  <ul className="space-y-2.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-zinc-300">
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-sm text-zinc-300 hover:text-white hover:border-indigo-500/40 transition-all"
                      >
                        <GithubIcon size={15} />
                        View on GitHub
                        <ArrowUpRight size={13} className="text-zinc-500" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-sm text-indigo-300 hover:bg-indigo-600/30 transition-all"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
