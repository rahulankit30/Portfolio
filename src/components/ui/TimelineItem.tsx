"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-6 md:gap-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" as const }}
    >
      {/* Timeline line + dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full border-2 border-indigo-500 bg-[#08080f] z-10 mt-1 flex-shrink-0"
          style={{
            boxShadow: "0 0 12px #6366f180, 0 0 24px #6366f140",
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        />
        {!isLast && (
          <div
            className="timeline-connector flex-1 w-px mt-2"
            style={{ minHeight: "100%" }}
          />
        )}
      </div>

      {/* Content card */}
      <div className="pb-12 flex-1">
        <div className="card-glass rounded-2xl p-6 md:p-7 hover:border-indigo-500/20 transition-colors duration-300">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-zinc-100 leading-snug">
                {experience.title}
              </h3>
              <p className="text-indigo-400 font-medium text-sm mt-0.5">
                {experience.company}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
              <span className="text-xs font-mono text-zinc-500 bg-zinc-800/60 border border-zinc-700/50 px-2.5 py-1 rounded-full whitespace-nowrap">
                {experience.period}
              </span>
              {experience.current && (
                <span className="text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
                  Current
                </span>
              )}
            </div>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-5">
            {experience.highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-zinc-300">
                <span className="text-indigo-500 mt-0.5 flex-shrink-0">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
