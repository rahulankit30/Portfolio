"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Layout, Server, Database, Brain,
  Cloud, Zap, Activity, Wrench,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  "code-2": Code2,
  layout: Layout,
  server: Server,
  database: Database,
  brain: Brain,
  cloud: Cloud,
  zap: Zap,
  activity: Activity,
  wrench: Wrench,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#0a0a14]">
      {/* bg accent */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 50%, #6366f108 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Technical Skills"
          title="The Tools I Build With"
          description="A comprehensive view of my technical toolkit, organized by domain."
        />

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/40"
                : "bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-200 hover:border-zinc-600"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/40"
                    : "bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-200 hover:border-zinc-600"
                }`}
              >
                <Icon size={13} />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skill cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {filtered.map((category, catIdx) => {
              const Icon = iconMap[category.icon] ?? Code2;
              return (
                <motion.div
                  key={category.id}
                  className="card-glass rounded-2xl p-6 hover:border-indigo-500/20 transition-colors duration-300"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: catIdx * 0.06 }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/15">
                      <Icon size={16} className="text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-200">
                        {category.label}
                      </h3>
                      <p className="text-xs text-zinc-600">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <SkillBadge
                        key={skill.name}
                        skill={skill}
                        index={skillIdx}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {[
            { label: "Expert", color: "border-indigo-500/40 text-indigo-300" },
            { label: "Advanced", color: "border-purple-500/30 text-purple-300" },
            { label: "Intermediate", color: "border-zinc-600/40 text-zinc-400" },
          ].map(({ label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded border ${color}`} />
              <span className="text-xs text-zinc-500">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
