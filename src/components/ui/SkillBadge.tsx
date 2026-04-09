"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

const levelColors = {
  expert: "border-indigo-500/40 text-indigo-300 bg-indigo-500/8",
  advanced: "border-purple-500/30 text-purple-300 bg-purple-500/8",
  intermediate: "border-zinc-600/40 text-zinc-400 bg-zinc-800/50",
};

interface SkillBadgeProps {
  skill: Skill;
  index?: number;
}

export function SkillBadge({ skill, index = 0 }: SkillBadgeProps) {
  const level = skill.level ?? "intermediate";
  return (
    <motion.div
      className={cn(
        "skill-chip px-3 py-1.5 rounded-lg border text-sm font-medium cursor-default",
        levelColors[level]
      )}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {skill.name}
    </motion.div>
  );
}
