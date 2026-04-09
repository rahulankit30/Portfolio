"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
    >
      {eyebrow && (
        <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 font-mono">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-px w-24 bg-gradient-to-r from-indigo-500 to-purple-500",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </motion.div>
  );
}
