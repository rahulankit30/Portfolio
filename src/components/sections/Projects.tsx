"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

const categories = ["All", "AI/ML", "Backend", "Frontend", "Cloud"];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category?.includes(activeFilter));

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* bg */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #6366f130, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="What I've Built"
          description="From AI-powered recommendation engines to high-scale notification platforms — real work, real impact."
        />

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/40"
                  : "bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* Hint */}
        <motion.p
          className="text-center text-xs text-zinc-600 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Click any card to see full details
        </motion.p>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
